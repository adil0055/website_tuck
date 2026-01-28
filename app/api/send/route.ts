import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
    try {
        const { name, email, phone, company, country, message } = await request.json();

        const data = await resend.emails.send({
            from: 'Tuck Contact Form <onboarding@resend.dev>',
            to: 'fashiontech2x24@gmail.com',
            subject: `New Contact Request: ${name}`,
            replyTo: email,
            html: `
        <h2>New Contact Request</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Company:</strong> ${company}</p>
        <p><strong>Country:</strong> ${country}</p>
        <br/>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `
        });

        return NextResponse.json(data);
    } catch (error) {
        return NextResponse.json({ error }, { status: 500 });
    }
}
