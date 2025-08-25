import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true }, // ex: "Toon-Verse"
  type: { type: String, enum: ["genre", "universe", "mood", "custom"], default: "custom" },
  description: String,
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.models.Category || mongoose.model("Category", categorySchema);
