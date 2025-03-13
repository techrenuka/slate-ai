import { NextResponse } from 'next/server';
import { google } from 'googleapis';
import { sendEmail } from '../app/api/submit/route';

type SheetForm = {
    firstName: string
    lastName: string
    companyName: string
    email: string
    message: string
}

// Configure Google Sheets
const auth = new google.auth.GoogleAuth({
    credentials: {
        client_email: process.env.GOOGLE_CLIENT_EMAIL,
        private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
    },
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
});

const sheets = google.sheets({ version: 'v4', auth });
const SPREADSHEET_ID = process.env.GOOGLE_SHEET_ID;

// Rate limiting configuration
const RATE_LIMIT_WINDOW = 60 * 1000; // 1 minute
const MAX_REQUESTS = 5; // Maximum requests per window
const requestLog = new Map<string, number[]>();

// Rate limiting function
function isRateLimited(ip: string): boolean {
    const now = Date.now();
    const requests = requestLog.get(ip) || [];
    
    // Remove requests outside the current window
    const recentRequests = requests.filter(time => time > now - RATE_LIMIT_WINDOW);
    
    if (recentRequests.length >= MAX_REQUESTS) {
        return true;
    }
    
    recentRequests.push(now);
    requestLog.set(ip, recentRequests);
    return false;
}

export async function POST(request: Request) {
    try {
        // Get client IP for rate limiting
        const ip = request.headers.get('x-forwarded-for') || 'unknown';
        
        // Check rate limit
        if (isRateLimited(ip)) {
            return NextResponse.json(
                { error: 'Too many requests. Please try again later.' },
                { status: 429 }
            );
        }

        // Parse and validate request body
        const body: SheetForm = await request.json();
        const { firstName, lastName, companyName, email, message } = body;

        // Validate required fields
        if (!firstName || !lastName || !email || !message) {
            return NextResponse.json(
                { error: 'Missing required fields' },
                { status: 400 }
            );
        }

        // Validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return NextResponse.json(
                { error: 'Invalid email format' },
                { status: 400 }
            );
        }

        // Send email notification
        const emailResult = await sendEmail({
            firstName,
            lastName,
            companyName,
            email,
            message
        });

        if (!emailResult.success) {
            console.error('Failed to send email:', emailResult.error);
        }

        // Prepare row data with timestamp
        const row = [
            new Date().toISOString(),
            firstName,
            lastName,
            companyName || 'N/A',
            email,
            message
        ];

        // Append to Google Sheet
        const response = await sheets.spreadsheets.values.append({
            spreadsheetId: SPREADSHEET_ID,
            range: 'Sheet1!A:F',
            valueInputOption: 'USER_ENTERED',
            requestBody: {
                values: [row]
            }
        });

        return NextResponse.json({
            data: 'Form submitted successfully'
        }, { status: 201 });
        
    } catch (error) {
        console.error('Form submission error:', error);
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        );
    }
}