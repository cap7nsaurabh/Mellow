import mongoose from "mongoose";

const MusicSchema = new mongoose.Schema({
  title: { type: String, required: true },
  artist: { type: String, required: true },
  mood: { type: String, required: true }, // Or ObjectId if referencing Mood
  thumbnailUrl: { type: String, required: true },
  musicUrl: { type: String, required: true },
  date: { type: Date, default: Date.now }, // auto-set to upload date
  duration: { type: Number, required: true }, // store in seconds for consistency
});

export default mongoose.models.Music || mongoose.model("Music", MusicSchema);
