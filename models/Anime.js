import mongoose from "mongoose";

const animeSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  studio: String,
  originalLanguage: { type: String, default: "Japanese" },
  releaseDate: Date,
  posterUrl: String,
  genres: [{ type: String }], // ex: ["shonen", "isekai", "fantasy"]
  categories: [{ type: mongoose.Schema.Types.ObjectId, ref: "Category" }],
  rating: {
    malScore: { type: Number }, // MyAnimeList style score
    userRating: { type: Number, default: 0 }
  },
  moods: [{ type: String }],
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.models.Anime || mongoose.model("Anime", animeSchema);
