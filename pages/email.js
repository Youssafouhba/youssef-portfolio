import nodemailer from 'nodemailer';


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
export async function sendEmail(name, email, message) {
  const mailOptions = {
    from: 'youssafouhba@gmail.com',
    to: 'youssefouhba@gmail.com',
    subject: 'New Message from Contact Form',
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
  };

  // Send the email using the transporter
  await transporter.sendMail(mailOptions);
}