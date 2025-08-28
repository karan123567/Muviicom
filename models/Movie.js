import mongoose from "mongoose";

const movieSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  releaseDate: { type: Date },
  duration: { type: Number }, // in minutes
  posterUrl: { type: String },
  trailerUrl: { type: String },
  genres: [{ type: String }], // ex: ["action", "funny", "horror"]
  categories: [{ type: mongoose.Schema.Types.ObjectId, ref: "Category" }], 
  universe: { type: String }, // ex: "Marvel", "DC", "John Wick"
  rating: {
    imdb: { type: Number },
    rottenTomatoes: { type: Number },
    userRating: { type: Number, default: 0 }
  },
  moods: [{ type: String }], // ex: ["chill", "thrilling", "emotional"]
  isUnderrated: { type: Boolean, default: false }, 
  cast: [
    {
      name: { type: String }, // Actor Name
      role: { type: String },                 // Character Played
    }
  ],
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.models.Movie || mongoose.model("Movie", movieSchema);
