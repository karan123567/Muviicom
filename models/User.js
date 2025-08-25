import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  favorites: {
    movies: [{ type: mongoose.Schema.Types.ObjectId, ref: "Movie" }],
    series: [{ type: mongoose.Schema.Types.ObjectId, ref: "Series" }],
    anime: [{ type: mongoose.Schema.Types.ObjectId, ref: "Anime" }],
    manga: [{ type: mongoose.Schema.Types.ObjectId, ref: "Manga" }]
  },
  watchlist: [{ type: mongoose.Schema.Types.ObjectId, refPath: "watchlistType" }],
  watchlistType: { type: String, enum: ["Movie", "Series", "Anime", "Manga"] },
  moodsPreference: [{ type: String }], // user’s mood choices for recommendations
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.models.User || mongoose.model("User", userSchema);
