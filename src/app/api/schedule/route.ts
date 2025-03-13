import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export type ScheduleData = {
    name: string;
    email: string;
    date: string;
    time: string;
    timezone: string;
    message: string;
};

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
        const body: ScheduleData = await request.json();
        const { name, email, date, time, timezone, message } = body;

        // Validate required fields
        if (!name || !email || !date || !time) {
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

        // Send email
        const emailResult = await sendEmail({
            name,
            email,
            date,
            time,
            timezone,
            message: message || ''
        });

        if (!emailResult.success) {
            return NextResponse.json(
                { error: 'Failed to send email' },
                { status: 500 }
            );
        }

        return NextResponse.json({
            success: true,
            message: 'Schedule request sent successfully'
        });
        
    } catch (error) {
        console.error('Schedule submission error:', error);
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        );
    }
}

async function sendEmail(data: ScheduleData) {
    const { name, email, date, time, timezone, message } = data;

    try {
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.GMAIL_USER,
                pass: process.env.GMAIL_APP_PASSWORD
            }
        });

        // Format date and time for display
        const formattedDate = new Date(date).toLocaleDateString('en-US', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });

        // Admin notification email
        const adminMailOptions = {
            from: process.env.GOOGLE_EMAIL,
            to: process.env.NOTIFY_EMAIL,
            subject: `New Call Schedule Request from ${name}`,
            html: `
                <h2>New Call Schedule Request</h2>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Requested Date:</strong> ${formattedDate}</p>
                <p><strong>Requested Time:</strong> ${time}</p>
                <p><strong>Timezone:</strong> ${timezone}</p>
                ${message ? `<p><strong>Additional Notes:</strong></p><p>${message}</p>` : ''}
            `
        };

        // Thank you email to user
        const userMailOptions = {
            from: process.env.GOOGLE_EMAIL,
            to: email,
            subject: `Your Call with Slate AI Solutions is Scheduled`,
            html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                    <h2 style="color: #2563eb;">Your Call is Scheduled!</h2>
                    <p>Dear ${name},</p>
                    <p>Thank you for scheduling a call with Slate AI Solutions. We're looking forward to speaking with you!</p>
                    <p>Here are your call details:</p>
                    <ul>
                        <li><strong>Date:</strong> ${formattedDate}</li>
                        <li><strong>Time:</strong> ${time}</li>
                        <li><strong>Timezone:</strong> ${timezone}</li>
                    </ul>
                    <p>Our team will send you a calendar invitation with the conference details shortly.</p>
                    <p>If you need to reschedule or have any questions before the call, please don't hesitate to reply to this email.</p>
                    <p>Best regards,<br>The Slate AI Solutions Team</p>
                </div>
            `
        };

        // Send both emails
        await transporter.sendMail(adminMailOptions);
        const userResponse = await transporter.sendMail(userMailOptions);
        
        return { success: true, data: userResponse };
    } catch (error) {
        console.error('Email sending error:', error);
        return { success: false, error: 'Failed to send email' };
    }
}