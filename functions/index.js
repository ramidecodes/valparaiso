'use strict';
const functions = require('firebase-functions');
// const nodemailer = require('nodemailer');
// // Configure the email transport using the default SMTP transport and a GMail account.
// // For Gmail, enable these:
// // 1. https://www.google.com/settings/security/lesssecureapps
// // 2. https://accounts.google.com/DisplayUnlockCaptcha
// // For other types of transports such as Sendgrid see https://nodemailer.com/transports/
// // TODO: Configure the `gmail.email` and `gmail.password` Google Cloud environment variables.
// const gmailEmail = functions.config().gmail.email;
// const gmailPassword = functions.config().gmail.password;
// const mailTransport = nodemailer.createTransport({
//   service: 'gmail',
//   auth: {
//     user: gmailEmail,
//     pass: gmailPassword,
//   },
// });
//
// function sendEmail(emailData) {
//         // Compose email
//         const mailOptions = {
//                 from: '"Adventures of the Valparaiso" <info@adventuresofthevalparaiso.com>',
//                 to: emailData.destination,
//                 subject: 'Contact from Valparaiso website',
//                 html: `<p><b>Name: </b>${emailData.name}</p>
//                       <p><b>Email: </b>${emailData.email}</p>
//                       <p><b>Subject: </b>${emailData.subject}</p>
//                       <p><b>Message: </b>${emailData.message}</p>`
//         }
//         // Process the sending of this email via nodemailer
//         return mailTransport.sendMail(mailOptions)
//                 // TODO: Update UI when message sent
//                 .then(() => console.log('Message sent!'))
//                 .catch((error) => console.error('There was an error while sending the message:', error))
// }
//
// exports.sendMessage = functions.https.onCall((data, context) => {
//   // ...
//   return sendEmail(data)
// });
