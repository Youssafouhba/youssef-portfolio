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

export default function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, message } = req.body;

    // Vérifier si toutes les données requises sont présentes
    if (!name || !email || !message) {
      return res.status(400).json({ message: 'Missing required fields' });
    }

    try {
      // Appeler une fonction utilitaire pour envoyer l'email (par exemple, en utilisant SendGrid)
      sendEmail(name, email, message);

      // Répondre avec un statut 200 et un message de succès
      return res.status(200).json({ message: 'Message sent successfully' });
    } catch (error) {
      console.error('Error sending email', error);
      return res.status(500).json({ message: 'Error sending email' });
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
