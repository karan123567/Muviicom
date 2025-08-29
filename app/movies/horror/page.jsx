"use client";
import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";
import Tilt from "react-parallax-tilt";

export default function HorrorMovies() {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [filter, setFilter] = useState("all");
  const [visibleCount, setVisibleCount] = useState(10);
  const [loading, setLoading] = useState(true);
  //   const [trailerKey, setTrailerKey] = useState(null);

  // Filters
  //   const filters = [
  //     { label: "All Horror", value: "all" },
  //     { label: "Hollywood", value: "hollywood" },
  //     { label: "Bollywood", value: "bollywood" },
  //     { label: "Korean", value: "korean" },
  //     { label: "Asian", value: "asian" },
  //     { label: "Classic (≤ 1980)", value: "classic" },
  //   ];
  //const [selectedFilter, setSelectedFilter] = useState("all");

  // Ambient SFX
  const [sfxEnabled, setSfxEnabled] = useState(true);
  const [autoplayBlocked, setAutoplayBlocked] = useState(false);
  const audioRef = useRef(null);

  // ---- Fetchers ----
  //   const discover = async (params = {}) => {
  //     const url = new URL("https://api.themoviedb.org/3/discover/movie");
  //     url.searchParams.set("api_key", API_KEY);
  //     url.searchParams.set("with_genres", "27");
  //     url.searchParams.set("page", params.page || "1");
  //     url.searchParams.set("language", "en-US");
  //     if (params.with_original_language) {
  //       url.searchParams.set("with_original_language", params.with_original_language);
  //     }
  //     if (params.primary_release_date_lte) {
  //       url.searchParams.set("primary_release_date.lte", params.primary_release_date_lte);
  //     }
  //     if (params.primary_release_date_gte) {
  //       url.searchParams.set("primary_release_date.gte", params.primary_release_date_gte);
  //     }
  //     const { data } = await axios.get(url.toString());
  //     return data?.results || [];
  //   };

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

  const filterMovies = (movies) => {
    //setLoading(true);
    let filtered = movies.filter((m) => m.genres.includes("Horror")); // 👈 only Action movies

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

  //   useEffect(() => {
  //     fetchMovies(selectedFilter);
  //   }, [selectedFilter]);

  // ---- Trailer ----
  //   useEffect(() => {
  //     if (!selectedMovie) return;
  //     const fetchTrailer = async () => {
  //       try {
  //         const { data } = await axios.get(
  //           `https://api.themoviedb.org/3/movie/${selectedMovie.id}/videos?api_key=${API_KEY}`
  //         );
  //         const trailer = data.results.find((vid) => vid.type === "Trailer");
  //         setTrailerKey(trailer ? trailer.key : null);
  //       } catch (err) {
  //         console.error("Error fetching trailer:", err);
  //       }
  //     };
  //     fetchTrailer();
  //   }, [selectedMovie]);

  // ---- Ambient SFX ----
  useEffect(() => {
    if (!audioRef.current) return;
    const audio = audioRef.current;
    audio.volume = 0.35;
    audio.loop = true;
    if (sfxEnabled) {
      audio.play().catch(() => setAutoplayBlocked(true));
    } else {
      audio.pause();
      audio.currentTime = 0;
      setAutoplayBlocked(false);
    }
  }, [sfxEnabled]);

  const tryEnableAudio = async () => {
    if (!audioRef.current) return;
    try {
      await audioRef.current.play();
      setAutoplayBlocked(false);
    } catch {
      setAutoplayBlocked(true);
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
          <source src="/videos/horror2.mp4" type="video/mp4" />
        </video>

        {/* Fog + Overlay */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(0,0,0,0) 30%, rgba(0,0,0,0.6) 60%, rgba(0,0,0,0.95) 100%)",
          }}
        />
        <div className="absolute inset-0 mix-blend-screen opacity-30">
          <div className="fog-layer fog-1" />
          <div className="fog-layer fog-2" />
          <div className="fog-layer fog-3" />
        </div>

        {/* Title */}
        <div className="absolute inset-0 flex items-center justify-center text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="max-w-3xl"
          >
            <h1 className="text-5xl md:text-7xl font-extrabold text-red-700 drop-shadow-[0_0_18px_#ff0000]">
              Enter the World of Fear
            </h1>
          </motion.div>
        </div>

        {/* SFX Button */}
        <div className="absolute top-4 right-4 z-20">
          <button
            onClick={() => setSfxEnabled(!sfxEnabled)}
            className="px-3 py-2 bg-red-600 hover:bg-red-500 rounded-lg text-sm font-semibold shadow-lg"
          >
            {sfxEnabled ? "Disable SFX" : "Enable SFX"}
          </button>
        </div>
      </div>
      {/* Filters */}
      <div className="flex justify-center flex-wrap gap-3 py-6 relative z-10">
        {["all", "hollywood", "bollywood", "korean"].map((cat) => (
          <button
            key={cat}
            onClick={() => {
              setFilter(cat);
              setVisibleCount(10);
            }}
            className={`px-4 py-2 rounded-lg border border-red-700 transition-all duration-300 ${
              filter === cat
                ? "bg-red-600 text-white shadow-lg shadow-red-500/50"
                : "hover:bg-red-500/30"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>
      {/* Grid */}
      {/* {loading ? (
        <p className="text-center text-gray-300 text-lg mt-8">
          Summoning horrors...
        </p>
      ) : ( */}
        <div className="px-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 pb-12">
          {displayedMovies.map((movie) => (
            <Tilt key={movie.id} tiltMaxAngleX={10} tiltMaxAngleY={10}>
              <motion.div
                whileHover={{
                  scale: 1.05,
                  rotateY: 5,
                  boxShadow: "0 0 20px #FF0000, 0 0 35px #8B0000",
                }}
                transition={{ type: "spring", stiffness: 280, damping: 20 }}
                className="rounded-xl overflow-hidden cursor-pointer bg-[#0b0b0b] border border-red-900/40 relative group"
                onClick={() => setSelectedMovie(movie)}
              >
                <img
                  src={movie.posterUrl}
                  alt={movie.title}
                  className="rounded-xl object-cover transition duration-500 group-hover:shadow-[0_0_25px_#ff0000]"
                />
                <div className="absolute bottom-0 w-full bg-black/70 text-center py-2 opacity-0 group-hover:opacity-100 transition">
                  {movie.title}
                </div>
              </motion.div>
            </Tilt>
          ))}
        </div>
      {/* )} */}
      {/* See More */}
      {visibleCount < filterMovies(movies).length && (
        <div className="flex justify-center pb-12">
          <motion.button
            whileHover={{ scale: 1.1, boxShadow: "0px 0px 25px #ff0000" }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setVisibleCount((prev) => prev + 10)}
            className="px-6 py-3 bg-gradient-to-r from-red-700 to-red-900 rounded-xl font-semibold text-white shadow-lg"
          >
            See More
          </motion.button>
        </div>
      )}
      {/* Modal */}
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
                className="mb-4 px-4 py-2 bg-red-700 text-black rounded"
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
              <h2 className="text-3xl font-bold text-red-700 mb-2">
                {selectedMovie.title}
              </h2>
              <p className="mb-2">{selectedMovie.description}</p>
              <p className="text-sm text-gray-400">
                ⭐ {selectedMovie.rating.imdb}/10 MUVII | 📅{" "}
                {new Date(selectedMovie.releaseDate).getFullYear()} | 🎬{" "}
                {formatDuration(selectedMovie.duration)}
              </p>

              {/* Carousel */}
              <h3 className="mt-6 mb-3 text-2xl font-semibold text-red-700">
                More Horror Movies
              </h3>
              <div className="flex overflow-x-scroll gap-4 pb-4">
                {movies
                  .filter((m) => m.genres.includes("Horror"))
                  .map((m) => (
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
      {/* Audio */}
      <audio ref={audioRef} src="/audio/sfx.mp3" preload="auto" />
      {/* Fog styling */}
      <style jsx>{`
        .fog-layer {
          position: absolute;
          inset: 0;
          background: url("/images/fog.png") repeat;
          background-size: 1200px 800px;
          animation: drift 70s linear infinite;
          opacity: 0.6;
          filter: blur(2px);
        }
        .fog-1 {
          animation-duration: 80s;
          opacity: 0.35;
        }
        .fog-2 {
          animation-duration: 100s;
          transform: scale(1.2);
          opacity: 0.28;
        }
        .fog-3 {
          animation-duration: 120s;
          transform: scale(1.4);
          opacity: 0.22;
        }
        @keyframes drift {
          0% {
            background-position: 0 0;
          }
          100% {
            background-position: 1200px 0;
          }
        }
      `}</style>
    </div>
  );
}
