"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";
import Tilt from "react-parallax-tilt";

export default function BiopicMoviesPage() {
  const [movies, setMovies] = useState([]);
  const [visibleCount, setVisibleCount] = useState(10); // "See More"
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [filter, setFilter] = useState("all");

  // ✅ Fetch movies from your API
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const res = await axios.get("/api/movies");
        setMovies(res.data.data); // 👈 pick your "data"
      } catch (err) {
        console.error("Error fetching movies:", err.message);
      }
    };
    fetchMovies();
  }, []);

  // ✅ Filters (you can improve later by adding language field in DB)
  const filterMovies = (movies) => {
  let filtered = movies.filter((m) => m.genres.includes("Biography"));

  switch (filter) {
    case "Hollywood":
      return filtered.filter(
        (m) =>
          m.universe === "Hollywood" ||
          m.universe === "DC" ||
          m.universe === "Marvel"
      );
    case "Bollywood":
      return filtered.filter((m) => m.universe === "Bollywood");
    case "Tollywood":
      return filtered.filter((m) => m.universe === "Tollywood");  
    case "Korean":
      return filtered.filter((m) => m.universe === "Korean Cinema");
      case "All":
    default:
      return filtered;
  }
};

  function formatDuration(minutes) {
    if (!minutes) return "N/A";
    const h = Math.floor(minutes / 60);
    const m = minutes % 60;
    return `${h}h ${m}m`;
  }

  const displayedMovies = filterMovies(movies).slice(0, visibleCount);

  return (
    <div className="relative bg-black text-white min-h-screen overflow-x-hidden">
      {/* Hero */}
      <section className="relative h-[60vh] w-full flex items-center justify-center">
        <video
          autoPlay
          loop
          muted
          className="absolute w-full h-full object-cover"
          src="/videos/"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <h1 className="text-4xl md:text-6xl font-bold text-[#fede23] drop-shadow-lg">
            Biopic Movies
          </h1>
        </div>
      </section>

      {/* Filters */}
      <div className="flex justify-center flex-wrap gap-2 py-6">
        {["All", "Hollywood", "Bollywood", "Korean", "Tollywood"].map((cat) => (
          <button
            key={cat}
            onClick={() => {
              setFilter(cat);
              setVisibleCount(12);
            }}
            className={`capitalize px-4 py-2 rounded-lg border border-[#fede23] transition-all ${
              filter === cat
                ? "bg-[#fdbd01] text-black shadow-lg shadow-[#fede23]"
                : "hover:bg-[#fede23]"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Movie Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 px-6 pb-12 gap-6">
        {displayedMovies.map((movie) => (
          <Tilt key={movie._id} tiltMaxAngleX={10} tiltMaxAngleY={10}>
            <motion.div
              whileHover={{
                scale: 1.05,
                rotateY: 5,
                boxShadow: "0 0 12px #FFD700, 0 0 24px #FFA500, 0 0 36px #FFD700, 0 0 48px #FFC107"
,
              }}
              transition={{ type: "spring", stiffness: 280, damping: 20 }}
              className="rounded-xl overflow-hidden cursor-pointer border border-[#fede23] shadow-[0_0_8px_rgba(255,0,0,0.25)] group relative movie-container"
              onClick={() => setSelectedMovie(movie)}
            >
              <img
                src={movie.posterUrl}
                alt={movie.title}
                className="rounded-xl object-cover transition duration-500 movie-poster"
              />
            
              <div className="absolute bottom-0 w-full bg-black/70 text-center py-2 opacity-0 group-hover:opacity-100 transition">
                {movie.title}
              </div>
            </motion.div>
          </Tilt>
        ))}
      </div>

      {/* See More */}
      {visibleCount < filterMovies(movies).length && (
        <div className="flex justify-center px-6 pb-12">
          <motion.button
            whileHover={{ scale: 1.1, boxShadow: "0 0 12px #FFD700, 0 0 24px #FFA500, 0 0 36px #FFD700, 0 0 48px #FFC107"
 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setVisibleCount(filterMovies(movies).length)}
            className="px-6 py-3 bg-gradient-to-r from-[#fede23] to-[#fdbd23] rounded-xl font-semibold"
          >
            See More
          </motion.button>
        </div>
      )}

      {/* Expanded Movie */}
      <AnimatePresence>
        {selectedMovie && (
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100 }}
            className="fixed inset-0 bg-black/95 z-50 overflow-y-auto"
          >
            <div className="max-w-5xl mx-auto p-6">
              <button
                onClick={() => setSelectedMovie(null)}
                className="mb-4 px-4 py-2 bg-[#fede23] text-black rounded"
              >
                Close
              </button>

              {/* Trailer or Poster */}
              {selectedMovie.trailerUrl ? (
                <iframe
                  src={selectedMovie.trailerUrl.replace("watch?v=", "embed/")}
                  className="w-full aspect-video rounded-xl mb-4"
                  allowFullScreen
                />
              ) : (
                <img
                  src={selectedMovie.posterUrl}
                  alt={selectedMovie.title}
                  className="w-full rounded-xl mb-4"
                />
              )}

              {/* Details */}
              <h2 className="text-3xl font-bold text-[#fede23] mb-2">
                {selectedMovie.title}
              </h2>
              <p className="mb-2">{selectedMovie.description}</p>
              <p className="text-sm text-gray-400">
                ⭐ {selectedMovie.rating.imdb}/10 MUVII | 📅{" "}
                {new Date(selectedMovie.releaseDate).getFullYear()} | 🎬{" "}
                {formatDuration(selectedMovie.duration)}
              </p>

              {/* Carousel */}
              <h3 className="mt-6 mb-3 text-2xl font-semibold text-[#fede23]">
                More Action Movies
              </h3>
              <div className="flex overflow-x-scroll gap-4 pb-4">
                {movies.filter((m) => m.genres.includes("Biography")).map((m) => (
                  <div key={m._id} className="min-w-[150px]">
                    <img
                      src={m.posterUrl}
                      alt={m.title}
                      className="rounded-xl cursor-pointer"
                      onClick={() => setSelectedMovie(m)}
                    />
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}