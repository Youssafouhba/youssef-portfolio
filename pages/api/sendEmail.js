import sgMail from '@sendgrid/mail';

// Configurez votre clé d'API SendGrid
sgMail.setApiKey('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');

const sendEmail = async (name, email, message) => {
  const msg = {
    to: 'yousefouhba@gmail.com', // Remplacez par votre adresse email de réception
    from: 'sender@example.com', // Remplacez par votre adresse email d'envoi
    subject: 'New Message from Contact Form',
    text: `Name: ${name}\nEmail: ${email}\n\nMessage: ${message}`,
  };

  try {
    await sgMail.send(msg);
    console.log('Email sent successfully');
  } catch (error) {
    console.error('Error sending email', error);
    throw new Error('Error sending email');
  }
};

export default sendEmail;