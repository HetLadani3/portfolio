import mongoose from 'mongoose';

const projectSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  subtitle: {
    type: String,
    required: true,
  },
  year: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  live: {
    type: String,
  },
  github: {
    type: String,
  }
}, { timestamps: true });

const Project = mongoose.model('Project', projectSchema);

export default Project;
