import express from 'express';
import Skill from '../models/Skill.js';

const router = express.Router();

// GET all skills
router.get('/', async (req, res) => {
  try {
    const skills = await Skill.find({});
    res.json(skills);
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error: error.message });
  }
});

// POST a new skill
router.post('/', async (req, res) => {
  try {
    const { name, category, level, desc, iconKey } = req.body;
    
    const newSkill = new Skill({
      name,
      category,
      level,
      desc,
      iconKey
    });

    const savedSkill = await newSkill.save();
    res.status(201).json(savedSkill);
  } catch (error) {
    res.status(400).json({ message: 'Invalid data', error: error.message });
  }
});

export default router;
