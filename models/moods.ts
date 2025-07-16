import mongoose from "mongoose";

const MoodSchema = new mongoose.Schema({
  name: { type: String, required: true },
  emoji: { type: String, required: true },
  color: { type: String, required: true },
});

export default mongoose.models.Mood || mongoose.model("Mood", MoodSchema);
