import nodemailer from 'nodemailer';

import { NextResponse } from 'next/server';



export async function POST(request) {
   try {
        const { subject, message } = await request.json();
       // Create a transporter for sending emails
        const transporter = nodemailer.createTransport({
          host: 'smtp.gmail.com', // Replace with your SMTP server host
          port: 587, // Replace with the SMTP server port
          secure: false, // Set to true if using a secure connection (e.g., SSL/TLS)
          auth: {
            user: 'youssefouhba@gmail.com', // Replace with your email address
            pass: 'wtje huhv azdm dsjo', // Replace with your email password or an app-specific password
          },
        });

        // Function for sending the email

        const mailOptions = {
            from: 'youssafouhba@gmail.com',
            to: 'youssefouhba@gmail.com',
            subject: 'New Message from Contact Form',
            text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
        };

        // Send the email using the transporter
        await transporter.sendMail(mailOptions);
        return NextResponse.json({ message: "Email Sent Successfully" }, { status: 200 })
      } catch (error) {
          return NextResponse.json({ message: "Failed to Send Email" }, { status: 500 })
      }
}
