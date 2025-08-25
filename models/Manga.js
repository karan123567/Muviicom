import mongoose from "mongoose";

const mangaSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  author: String,
  artist: String,
  publisher: String,
  releaseDate: Date,
  coverUrl: String,
  genres: [{ type: String }],
  categories: [{ type: mongoose.Schema.Types.ObjectId, ref: "Category" }],
  rating: {
    malScore: { type: Number },
    userRating: { type: Number, default: 0 }
  },
  moods: [{ type: String }],
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.models.Manga || mongoose.model("Manga", mangaSchema);
