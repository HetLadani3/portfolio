import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import projectRoutes from './routes/projectRoutes.js';
import contactRoutes from './routes/contactRoutes.js';
import skillRoutes from './routes/skillRoutes.js';
import leetcodeRoutes from './routes/leetcodeRoutes.js';

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/projects', projectRoutes);
app.use('/api/contact', contactRoutes);
app.use('/api/skills', skillRoutes);
app.use('/api/leetcode', leetcodeRoutes);

// Database Connection
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/portfolio';

mongoose.connect(MONGO_URI)
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.warn('MongoDB connection failed. Please add MONGO_URI to .env later.');
    console.error('Error connecting to MongoDB:', error.message);
  });

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
