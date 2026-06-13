import mongoose from 'mongoose';

const skillSchema = new mongoose.Schema({
  name: { type: String, required: true },
  category: { type: String, required: true },
  level: { type: String, required: true },
  desc: { type: String, required: true },
  iconKey: { type: String, required: true }
}, { timestamps: true });

const Skill = mongoose.model('Skill', skillSchema);
export default Skill;
