import express from 'express';
import Message from '../models/Message.js';

const router = express.Router();

// POST a new message
router.post('/', async (req, res) => {
  try {
    const { name, email, organization, message } = req.body;

    // Save to MongoDB
    const newMessage = new Message({ name, email, organization, message });
    const savedMessage = await newMessage.save();

    res.status(201).json({ success: true, message: 'Message saved successfully!', data: savedMessage });
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
