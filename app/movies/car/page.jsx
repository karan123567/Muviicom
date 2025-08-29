"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";
import Tilt from "react-parallax-tilt";

export default function CarMovies() {
  const [movies, setMovies] = useState([]);
  const [visibleCount, setVisibleCount] = useState(10); // "See More"
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [filter, setFilter] = useState("all");

  // Filters (same button style as Horror page, but green theme)

  // ---- Fetchers ----

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
    let filtered = movies.filter((m) => m.genres.includes("Cars")); // 👈 only Action movies

    switch (filter) {
      case "hollywood":
        return filtered.filter(
          (m) =>
            m.universe === "Hollywood" ||
            m.universe === "DC" ||
            m.universe === "Marvel"
        );
      case "bollywood":
        return filtered.filter((m) => m.universe === "Bollywood");
      case "korean":
        return filtered.filter((m) => m.universe === "Korean Cinema");
      case "all":
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
    <div className="bg-black min-h-screen text-white relative overflow-hidden">
      {/* Hero */}
      <div className="relative w-full h-[68vh] md:h-[72vh] overflow-hidden">
        <video
          className="absolute inset-0 w-full h-full object-cover object-center opacity-40"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/videos/car2.mp4" type="video/mp4" />
        </video>

        {/* Soft vignette */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(0,0,0,0) 30%, rgba(0,0,0,0.6) 60%, rgba(0,0,0,0.95) 100%)",
          }}
        />

        {/* Title */}
        <div className="absolute inset-0 flex items-center justify-center text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="max-w-3xl"
          >
            <h1 className="text-5xl md:text-7xl font-extrabold text-green-400 drop-shadow-[0_0_18px_#39FF14]">
              Pedal to the Metal
            </h1>
          </motion.div>
        </div>
      </div>

      {/* Filters (horror-style buttons, green theme) */}
      <div className="flex justify-center flex-wrap gap-3 py-6 relative z-10">
        {["all", "hollywood", "bollywood", "korean"].map((cat) => (
          <button
            key={cat}
            onClick={() => {
              setFilter(cat);
              setVisibleCount(8);
            }}
            className={`px-4 py-2 rounded-lg border border-green-700 transition-all duration-300 ${
              filter === cat
                ? "bg-green-600 text-white shadow-lg shadow-green-500/50"
                : "hover:bg-green-500/20"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid (horror-style cards, but NEON GREEN hover glow) */}
      {/* {loading ? (
        <p className="text-center text-gray-300 text-lg mt-8">
          Loading rides...
        </p>
      ) : ( */}
      <div className="px-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-6 pb-12">
        {displayedMovies.map((movie) => (
          <Tilt key={movie.id} tiltMaxAngleX={10} tiltMaxAngleY={10}>
            <motion.div
              whileHover={{
                scale: 1.05,
                rotateY: 5,
                boxShadow:
                  "0 0 16px #39FF14, 0 0 28px #00FF00, 0 0 44px #32CD32",
              }}
              transition={{ type: "spring", stiffness: 280, damping: 20 }}
              className="rounded-xl overflow-hidden cursor-pointer bg-[#0b0b0b] border border-green-900/40 relative group"
              onClick={() => setSelectedMovie(movie)}
            >
              <img
                src={movie.posterUrl}
                alt={movie.title}
                className="rounded-xl object-cover transition duration-500 group-hover:shadow-[0_0_25px_#39FF14]"
              />
              {/* bottom fade/title like horror page */}
              <div className="absolute bottom-0 w-full bg-black/70 text-center py-2 opacity-0 group-hover:opacity-100 transition">
                {movie.title}
              </div>
            </motion.div>
          </Tilt>
        ))}
      </div>

      {/* See More (green theme) */}
      {visibleCount < filterMovies(movies).length && (
        <div className="flex justify-center pb-12">
          <motion.button
            whileHover={{ scale: 1.1, boxShadow: "0px 0px 25px #39FF14" }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setVisibleCount((prev) => prev + 10)}
            className="px-6 py-3 bg-gradient-to-r from-green-600 to-emerald-600 rounded-xl font-semibold text-white shadow-lg"
          >
            See More
          </motion.button>
        </div>
      )}

      {/* Modal (same responsive layout as horror page, green accents) */}
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
                className="mb-4 px-4 py-2 bg-green-500 text-black rounded"
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
              <h2 className="text-3xl font-bold text-green-400 mb-2">
                {selectedMovie.title}
              </h2>
              <p className="mb-2">{selectedMovie.description}</p>
              <p className="text-sm text-gray-400">
                ⭐ {selectedMovie.rating.imdb}/10 MUVII | 📅{" "}
                {new Date(selectedMovie.releaseDate).getFullYear()} | 🎬{" "}
                {formatDuration(selectedMovie.duration)}
              </p>

              {/* Carousel */}
              <h3 className="mt-6 mb-3 text-2xl font-semibold text-green-500">
                More Action Movies
              </h3>
              <div className="flex overflow-x-scroll gap-4 pb-4">
                {movies.filter((m) => m.genres.includes("Cars")).map((m) => (
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
