const nodemailer = require('nodemailer');
const twilio = require('twilio');

// Email configuration
const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    secure: false,
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS
    }
});

// Twilio configuration
const twilioClient = twilio(
    process.env.TWILIO_ACCOUNT_SID,
    process.env.TWILIO_AUTH_TOKEN
);

exports.sendEmail = async (to, subject, text) => {
    try {
        await transporter.sendMail({
            from: process.env.SMTP_USER,
            to,
            subject,
            text
        });
        return true;
    } catch (error) {
        console.error('Email sending error:', error);
        return false;
    }
};

exports.sendSMS = async (to, message) => {
    try {
        await twilioClient.messages.create({
            body: message,
            from: process.env.TWILIO_PHONE_NUMBER,
            to
        });
        return true;
    } catch (error) {
        console.error('SMS sending error:', error);
        return false;
    }
};
