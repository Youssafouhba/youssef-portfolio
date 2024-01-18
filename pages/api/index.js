import {sendEmail} from '../email';

export default function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, message } = req.body;

    // Verify if all the required data is present
    if (!name || !email || !message) {
      return res.status(400).json({ message: 'Missing required fields' });
    }

    try {
      // Call a utility function to send the email (e.g., using SendGrid)
      sendEmail(name, email, message);

      // Respond with a 200 status and a success message
      return res.status(200).json({ message: 'Message sent successfully' });
    } catch (error) {
      console.error('Error sending email', error);
      return res.status(500).json({ message: 'Error sending email' });
    }
  } else {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }
}
