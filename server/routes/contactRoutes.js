import express from 'express';
import nodemailer from 'nodemailer';
import Message from '../models/Message.js';

const router = express.Router();

// POST a new message
router.post('/', async (req, res) => {
  try {
    const { name, email, organization, message } = req.body;

    // 1. Save to MongoDB
    let savedMessage = null;
    try {
      const newMessage = new Message({ name, email, organization, message });
      savedMessage = await newMessage.save();
    } catch (dbError) {
      console.error("Failed to save to DB (Continuing to send email):", dbError.message);
    }

    // 2. Send Email using Nodemailer
    const transporter = nodemailer.createTransport({
      service: 'gmail', // You can change this to your email provider
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER, // Send it to yourself
      subject: `New Portfolio Contact from ${name}`,
      text: `You received a new message from your portfolio contact form.\n\nName: ${name}\nEmail: ${email}\nOrganization: ${organization || 'N/A'}\nMessage: ${message}`,
      replyTo: email
    };

    // Only try sending if credentials are provided
    if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
      await transporter.sendMail(mailOptions);
    } else {
      console.warn("Email not sent: EMAIL_USER and EMAIL_PASS not configured in .env");
    }

    res.status(201).json({ success: true, message: 'Message sent successfully!', data: savedMessage });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Failed to process message', error: error.message });
  }
});

// GET all messages (for admin purposes)
router.get('/', async (req, res) => {
  try {
    const messages = await Message.find({}).sort({ createdAt: -1 });
    res.json(messages);
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error: error.message });
  }
});

export default router;
