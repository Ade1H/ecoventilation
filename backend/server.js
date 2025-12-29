const express = require('express');
const cors = require('cors');
const path = require('path');
const sgMail = require('@sendgrid/mail');

const app = express();
app.use(cors());
app.use(express.json());

// Konfigurera SendGrid
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

// Servera frontend i production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../frontend/dist')));
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/dist/index.html'));
  });
}

const PORT = process.env.PORT || 5000;

app.post('/api/contact', async (req, res) => {
  const { name, email, phone, service, message } = req.body;

  const msg = {
    to: process.env.EMAIL_TO || 'josef@ecoventilation.se',
    from: 'josef@ecoventilation.se',
    replyTo: email,
    subject: `Ny kontaktförfrågan: ${service}`,
    text: `Namn: ${name}\nE-post: ${email}\nTelefon: ${phone}\nTjänst: ${service}\nMeddelande: ${message}`,
  };

  try {
    await sgMail.send(msg);
    console.log('Email sent via SendGrid');
    res.json({ success: true, message: 'Meddelandet skickades!' });
  } catch (error) {
    console.error('SendGrid Error:', error);
    res.status(500).json({ 
      success: false, 
      message: "Något gick fel vid sändning av mail." 
    });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Environment: ${process.env.NODE_ENV || 'development'}`);
});