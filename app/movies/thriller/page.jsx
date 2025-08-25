"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import Tilt from "react-parallax-tilt";

export default function ThrillerMoviesPage() {
  const [movies, setMovies] = useState([]);
  const [visibleCount, setVisibleCount] = useState(10);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [trailerKey, setTrailerKey] = useState(null);
  const [filter, setFilter] = useState("all");

  // Init Particles
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  // Fetch thriller movies only
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const res = await axios.get(
          `https://api.themoviedb.org/3/discover/movie`,
          {
            params: {
              api_key: process.env.NEXT_PUBLIC_TMDB_API_KEY,
              with_genres: "53", // thriller genre
              page: 1,
            },
          }
        );
        setMovies(res.data.results);
      } catch (err) {
        console.error(err);
      }
    };
    fetchMovies();
  }, []);

  // Fetch trailer when movie is selected
  useEffect(() => {
    if (!selectedMovie) return;

    const fetchTrailer = async () => {
      try {
        const res = await axios.get(
          `https://api.themoviedb.org/3/movie/${selectedMovie.id}/videos`,
          {
            params: { api_key: process.env.NEXT_PUBLIC_TMDB_API_KEY },
          }
        );
        const trailer = res.data.results.find((vid) => vid.type === "Trailer");
        setTrailerKey(trailer ? trailer.key : null);
      } catch (err) {
        console.error(err);
      }
    };

    fetchTrailer();
  }, [selectedMovie]);

  // Filters by language (country proxy)
  const filterMovies = (movies) => {
    switch (filter) {
      case "hollywood":
        return movies.filter((m) => m.original_language === "en");
      case "bollywood":
        return movies.filter((m) => m.original_language === "hi");
      case "korean":
        return movies.filter((m) => m.original_language === "ko");
      case "spanish":
        return movies.filter((m) => m.original_language === "es");
      case "uk":
        return movies.filter((m) => m.original_language === "en");
      case "japanese":
        return movies.filter((m) => m.original_language === "ja");
      default:
        return movies;
    }
  };

  const displayedMovies = filterMovies(movies).slice(0, visibleCount);

  return (
    <div className="relative bg-black text-white min-h-screen overflow-x-hidden">
      {/* Particle background */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          background: { color: "transparent" },
          fpsLimit: 60,
          particles: {
            color: { value: "#ff0000" },
            links: { enable: true, color: "#00ffff" },
            move: { enable: true, speed: 1 },
          },
        }}
        className="absolute inset-0 -z-10"
      />

      {/* Hero Section */}
      <section className="relative h-[60vh] w-full overflow-hidden flex items-center justify-center">
        <video
          autoPlay
          loop
          muted
          className="absolute w-full h-full object-cover"
          src="/videos/thriller.webm"
        />
        <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
          <h1 className="text-4xl md:text-6xl font-bold text-red-500 drop-shadow-[0_0_25px_#00ffff]">
            Thriller Movies
          </h1>
        </div>
      </section>

      {/* Filters */}
      <div className="flex justify-center flex-wrap z-10 relative py-6 gap-2">
        {["all", "hollywood", "bollywood", "korean", "spanish", "uk", "japanese"].map(
          (cat) => (
            <button
              key={cat}
              onClick={() => {
                setFilter(cat);
                setVisibleCount(10);
              }}
              className={`capitalize px-4 py-2 rounded-lg border border-red-600 transition-all duration-300 ${
                filter === cat
                  ? "bg-red-700 text-white shadow-[0_0_15px_#00ffff]"
                  : "hover:bg-red-600/30"
              }`}
            >
              {cat}
            </button>
          )
        )}
      </div>

      {/* Movies Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 px-6 pb-20 gap-6 relative z-10">
        {displayedMovies.map((movie) => (
          <Tilt key={movie.id} tiltMaxAngleX={10} tiltMaxAngleY={10}>
            <motion.div
              whileHover={{
                scale: 1.05,
                rotateY: 5,
                boxShadow: "0 0 16px #FF0000, 0 0 32px #00FFFF, 0 0 48px #8B0000",
              }}
              transition={{ type: "spring", stiffness: 280, damping: 20 }}
              className="rounded-xl overflow-hidden cursor-pointer bg-[#0b0b0b] border border-red-900/40 shadow-[0_0_10px_rgba(255,0,0,0.4)] group relative"
              onClick={() => setSelectedMovie(movie)}
            >
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                className="rounded-xl shadow-lg group-hover:shadow-[0_0_32px_#00ffff] transition duration-500"
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
        <div className="flex justify-start px-6 pb-12">
          <motion.button
            whileHover={{
              scale: 1.1,
              boxShadow: "0px 0px 25px #FF0000, 0px 0px 35px #00FFFF",
            }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setVisibleCount((prev) => prev + 10)}
            className="px-6 py-3 bg-gradient-to-r from-red-600 to-cyan-600 rounded-xl font-semibold text-white shadow-lg shadow-red-500/50"
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
                className="mb-4 px-4 py-2 bg-red-600 text-white rounded hover:bg-cyan-500 transition"
              >
                Close
              </button>

              {/* Trailer */}
              {trailerKey ? (
                <iframe
                  src={`https://www.youtube.com/embed/${trailerKey}`}
                  className="w-full aspect-video rounded-xl mb-4"
                  allowFullScreen
                />
              ) : (
                <img
                  src={`https://image.tmdb.org/t/p/w500${selectedMovie.poster_path}`}
                  alt={selectedMovie.title}
                  className="w-full rounded-xl mb-4"
                />
              )}

              {/* Details */}
              <h2 className="text-3xl font-bold text-red-500 drop-shadow-[0_0_15px_#00ffff] mb-2">
                {selectedMovie.title}
              </h2>
              <p className="mb-2">{selectedMovie.overview}</p>
              <p className="text-sm text-gray-400">
                ⭐ {selectedMovie.vote_average} | 📅 {selectedMovie.release_date}
              </p>

              {/* More thriller carousel */}
              <h3 className="mt-6 mb-3 text-2xl font-semibold text-cyan-400">
                More Thriller Movies
              </h3>
              <div className="flex overflow-x-scroll gap-4 pb-4">
                {movies.map((m) => (
                  <div key={m.id} className="min-w-[150px]">
                    <img
                      src={`https://image.tmdb.org/t/p/w300${m.poster_path}`}
                      alt={m.title}
                      className="rounded-xl hover:shadow-[0_0_30px_#ff0000,0_0_45px_#00ffff] transition cursor-pointer"
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
