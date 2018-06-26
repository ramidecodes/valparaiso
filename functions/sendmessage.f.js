// 1. Deploys as dbUsersOnUpdate
const functions = require('firebase-functions')
const nodemailer = require('nodemailer')
const postmarkTransport = require('nodemailer-postmark-transport')
const admin = require('firebase-admin')

// 2. Admin SDK can only be initialized once
try {admin.initializeApp(functions.config().firebase)} catch(e) {
        console.log('InitializeApp failure')
}

// TODO: Update with captcha instead of auth
// 3. Google Cloud environment variable used:
// firebase functions:conpfig:set postmark.key="API-KEY-HERE"
const postmarkKey = functions.config().postmark.key
const mailTransport = nodemailer.createTransport(postmarkTransport({
        auth: {
                apiKey: postmarkKey
        }
}))

//TODO Udpate trigger to be used from contact-form submit event
// 4. Watch for new users
exports = module.exports = functions.database.ref('/users/{uid}').onCreate((event) => {
        const snapshot = event.data
        const user = snapshot.val()
        // Use nodemailer to send email
        return sendEmail(user);
})

function sendEmail(user) {
        // TODO: Update mailOptions
        // 5. Send email to...
        const mailOptions = {
                from: '"Dave" <dave@example.net>',
                to: '${user.email}',
                subject: 'Welcome!',
                html: `<YOUR-WELCOME-MESSAGE-HERE>`
        }
        // 6. Process the sending of this email via nodemailer
        return mailTransport.sendMail(mailOptions)
                .then(() => console.log('Message sent!'))
                .catch((error) => console.error('There was an error while sending the message:', error))
}
