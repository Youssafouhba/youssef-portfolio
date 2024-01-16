import {sendEmail} from './email';

export default function handler(req, res) {
  if (req.method !== 'POST') {
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
