import { getTransporter } from '@/lib/server-utils';
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

type EmailData = {
    firstName: string;
    lastName: string;
    companyName: string;
    email: string;
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
        const body: EmailData = await request.json();
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

        // Send email
        const emailResult = await sendEmail({
            firstName,
            lastName,
            companyName,
            email,
            message
        });

        if (!emailResult.success) {
            return NextResponse.json(
                { error: 'Failed to send email' },
                { status: 500 }
            );
        }

        return NextResponse.json({
            success: true,
            message: 'Email sent successfully'
        });
        
    } catch (error) {
        console.error('Form submission error:', error);
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        );
    }
}

async function sendEmail(data: EmailData) {
    const { firstName, lastName, companyName, email, message } = data;

    try {
        
        // Verify SMTP connection before sending
        const transporter = await getTransporter();
        await transporter.verify();
        console.log('✅ SMTP server is ready to send emails');
        
        // Admin notification email
        const adminMailOptions = {
            from: process.env.PROFESSIONAL_MAIL_FROM,
            to: process.env.NOTIFY_EMAIL,
            subject: `New Contact Form Submission from ${firstName} ${lastName}`,
            html: `
                <h2>New Contact Form Submission</h2>
                <p><strong>Name:</strong> ${firstName} ${lastName}</p>
                <p><strong>Company:</strong> ${companyName || 'N/A'}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Message:</strong></p>
                <p>${message}</p>
            `
        };

        // Thank you email to user
        const userMailOptions = {
            from: process.env.PROFESSIONAL_MAIL_FROM,
            to: email,
            subject: `Thank You for Contacting Slate AI Solutions`,
            html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                    <h2 style="color: #2563eb;">Thank You for Reaching Out!</h2>
                    <p>Dear ${firstName},</p>
                    <p>Thank you for contacting Slate AI Solutions. We have received your message and appreciate your interest in our services.</p>
                    <p>Our team will carefully review your inquiry and get back to you within 1-2 business days.</p>
                    <p>Here's a summary of what you shared with us:</p>
                    <ul>
                        <li><strong>Name:</strong> ${firstName} ${lastName}</li>
                        ${companyName ? `<li><strong>Company:</strong> ${companyName}</li>` : ''}
                    </ul>
                    <p>If you have any immediate questions or need to provide additional information, please don't hesitate to reply to this email.</p>
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