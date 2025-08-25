import mongoose from "mongoose";

const episodeSchema = new mongoose.Schema({
  title: String,
  episodeNumber: Number,
  duration: Number, // minutes
  videoUrl: String
});

const seasonSchema = new mongoose.Schema({
  seasonNumber: Number,
  episodes: [episodeSchema]
});

const seriesSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  releaseDate: { type: Date },
  posterUrl: { type: String },
  genres: [{ type: String }], // ex: ["drama", "scifi", "thriller"]
  categories: [{ type: mongoose.Schema.Types.ObjectId, ref: "Category" }],
  seasons: [seasonSchema],
  rating: {
    muvii: { type: Number },
    userRating: { type: Number, default: 0 }
  },
  moods: [{ type: String }],
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.models.Series || mongoose.model("Series", seriesSchema);
