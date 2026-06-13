import express from 'express';
import Project from '../models/Project.js';

const router = express.Router();

// GET all projects
router.get('/', async (req, res) => {
  try {
    const projects = await Project.find({});
    res.json(projects);
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error: error.message });
  }
});

// POST a new project (for you to add projects easily)
router.post('/', async (req, res) => {
  try {
    const { title, subtitle, year, image, live, github } = req.body;
    
    const project = new Project({
      title,
      subtitle,
      year,
      image,
      live,
      github
    });

    const createdProject = await project.save();
    res.status(201).json(createdProject);
  } catch (error) {
    res.status(400).json({ message: 'Invalid data', error: error.message });
  }
});

export default router;
