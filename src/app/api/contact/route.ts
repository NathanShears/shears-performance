import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {
  try {
    const { name, email, interest, message } = await req.json();

    if (!email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields.' },
        { status: 400 }
      );
    }

    console.log(process.env.EMAIL_APP_PASSWORD);

    const transporter = nodemailer.createTransport({
      host: 'smtp.zoho.eu', // use smtp.zoho.eu if your account is on the EU data centre
      port: 465,
      secure: true, // true for port 465, false for port 587
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_APP_PASSWORD, // the Zoho app-specific password
      },
    });

    await transporter.sendMail({
      from: `"Shears Performance Website" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER, // sends to yourself
      replyTo: email, // so you can hit "reply" and it goes to the enquirer
      subject: `New contact form message from ${name || 'Website visitor'}`,
      text: `
        Name: ${name || '—'}

        Email: ${email}
        
        Interested in: ${interest || '—'}

        Message:
        ${message}
      `,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('Contact form error:', err);
    return NextResponse.json(
      { error: 'Something went wrong sending your message.' },
      { status: 500 }
    );
  }
}
