const functions = require("firebase-functions");
const express = require("express");
const app = express();
const env = require("dotenv");
const nodemailer = require("nodemailer");
const cors = require("cors")({origin: true});

env.config();

app.use(cors);

const contactEmail = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.SEND_EMAIL,
    pass: process.env.EMAIL_PASSWORD,
  },
});


app.post("/send", (req, res) => {
  const {name, email, message} = req.body;

  const mail = {
    from: email,
    to: process.env.RECIEVE_EMAIL,
    subject: `Message from: ${name} `,
    html: `<p>name: ${name}</p><p>email: ${email}</p><p>note: ${message}</p>`,
  };

  contactEmail.sendMail(mail, (error) => {
    if (error) {
      res.status(500).send(error);
    } else {
      res.status(200).send();
    }
  });
});

exports.app = functions.https.onRequest(app);
