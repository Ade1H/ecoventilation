const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
const path = require('path'); // NYTT: för att servera frontend

const app = express();
app.use(cors());
app.use(express.json());

// VIKTIGT: Servera static filer från frontend i production
if (process.env.NODE_ENV === 'production') {
  // 1. Servera React-appen
  app.use(express.static(path.join(__dirname, '../frontend/dist')));
  
  // 2. Alla GET requests skickar till React
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/dist/index.html'));
  });
}

// Port för Render (använder miljövariabel eller 5000 lokalt)
const PORT = process.env.PORT || 5000;

// Loopia SMTP-inställningar (använd miljövariabler på Render)
const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST || "mailcluster.loopia.se",
  port: process.env.EMAIL_PORT || 587,
  secure: process.env.EMAIL_SECURE === 'true' || false,
  auth: {
    user: process.env.EMAIL_USER || "josef@ecoventilation.se",
    pass: process.env.EMAIL_PASSWORD || "Josef2267!"
  }
});

app.post('/api/contact', (req, res) => {
  const { name, email, phone, service, message } = req.body;

  // Mail till dig själv
  const mailOptions = {
    from: `"${name}" <${email}>`,
    to: process.env.EMAIL_TO || "josef@ecoventilation.se",
    subject: `Ny kontaktförfrågan: ${service}`,
    text: `Namn: ${name}\nE-post: ${email}\nTelefon: ${phone}\nTjänst: ${service}\nMeddelande: ${message}`
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      return res.status(500).json({ success: false, message: "Något gick fel vid sändning av mail." });
    } else {
      console.log("Mail skickat: " + info.response);
      return res.json({ success: true, message: "Meddelandet skickades!" });
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Environment: ${process.env.NODE_ENV || 'development'}`);
});