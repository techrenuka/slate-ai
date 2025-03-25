'use server'
import nodemailer from 'nodemailer';

export async function getTransporter() {
    return nodemailer.createTransport({
        host: process.env.PROFESSIONAL_MAIL_HOST,
        port: Number(process.env.PROFESSIONAL_MAIL_PORT),
        secure: process.env.PROFESSIONAL_MAIL_PORT === '465', // use SSL
        auth: {
            user: process.env.PROFESSIONAL_MAIL_USER,
            pass: process.env.PROFESSIONAL_MAIL_PASSWORD
        }
      });
}
 

