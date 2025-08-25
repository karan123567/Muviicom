"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";
import Tilt from "react-parallax-tilt";

const API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY;
const IMAGE_BASE = "https://image.tmdb.org/t/p/w500";

export default function FounderFilms() {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [cast, setCast] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [loading, setLoading] = useState(true);

  const categories = ["All", "Hollywood", "Bollywood", "Korean"];

  // Fetch movies dynamically based on category
  const fetchMovies = async (category) => {
    setLoading(true);
    try {
      let language = "";
      if (category === "Hollywood") language = "en";
      if (category === "Bollywood") language = "hi";
      if (category === "Korean") language = "ko";

      // Using keyword or genre for "Founder/Entrepreneur" theme
      const url = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_keywords=210024&language=en-US&page=1${
        language ? `&with_original_language=${language}` : ""
      }`;

      const res = await axios.get(url);
      setMovies(res.data.results);
    } catch (error) {
      console.error(`Error fetching ${category} movies:`, error);
    } finally {
      setLoading(false);
    }
  };

  // Initial fetch - All movies
  useEffect(() => {
    fetchMovies("All");
  }, []);

  // Fetch cast
  const fetchCast = async (movieId) => {
    try {
      const res = await axios.get(
        `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${API_KEY}`
      );
      setCast(res.data.cast.slice(0, 5));
    } catch (error) {
      console.error("Error fetching cast:", error);
    }
  };

  const openModal = (movie) => {
    setSelectedMovie(movie);
    fetchCast(movie.id);
  };

  const closeModal = () => {
    setSelectedMovie(null);
    setCast([]);
  };

  // Handle category change
  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    fetchMovies(category);
  };

  return (
    <div className="bg-black min-h-screen text-white">
      {/* Hero Section */}
      <div className="relative w-full h-[70vh] overflow-hidden">
        <video
          className="absolute inset-0 w-full h-full object-cover object-center"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/videos/founder.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Filter Bar */}
      <div className="flex gap-4 px-8 py-4 flex-wrap">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => handleCategoryChange(cat)}
            className={`px-4 py-2 rounded-full font-semibold transition ${
              selectedCategory === cat
                ? "bg-yellow-400 text-black"
                : "bg-gray-800 text-white hover:bg-yellow-500"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Movie Grid */}
      {loading ? (
        <p className="text-center text-gray-300 text-lg mt-8">Loading movies...</p>
      ) : (
        <div className="p-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {movies.map((movie) => (
            <Tilt key={movie.id} tiltMaxAngleX={10} tiltMaxAngleY={10}>
              <motion.div
                onClick={() => openModal(movie)}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 15px #FFD700, 0 0 30px #FFC700, 0 0 45px #FFEA00",
                }}
                transition={{ type: "spring", stiffness: 300 }}
                className="rounded-xl overflow-hidden cursor-pointer bg-black text-white"
              >
                <img
                  src={`${IMAGE_BASE}${movie.poster_path}`}
                  alt={movie.title}
                  className="w-full h-80 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-bold">{movie.title}</h3>
                </div>
              </motion.div>
            </Tilt>
          ))}
        </div>
      )}

      {/* Modal Popup */}
      <AnimatePresence>
        {selectedMovie && (
          <motion.div
            className="fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center z-50 p-4 overflow-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            <motion.div
              className="bg-gray-900 rounded-2xl p-6 w-full max-w-sm sm:max-w-md md:max-w-3xl border-2 border-yellow-400 shadow-[0_0_20px_#FFD700]"
              initial={{ scale: 0.7 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.7 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 z-50 text-yellow-400 hover:text-yellow-600 text-2xl pointer-events-auto"
              >
                ✖
              </button>

              <div className="flex flex-col md:flex-row gap-6">
                <img
                  src={`${IMAGE_BASE}${selectedMovie.poster_path}`}
                  alt={selectedMovie.title}
                  className="w-full md:w-60 rounded-xl shadow-lg border border-yellow-400 object-cover"
                />
                <div className="flex-1">
                  <h2 className="text-2xl md:text-3xl font-bold text-yellow-400 drop-shadow-[0_0_10px_#FFD700]">
                    {selectedMovie.title}
                  </h2>
                  <p className="text-gray-400 mt-2 text-sm md:text-base">
                    ⭐ {selectedMovie.vote_average.toFixed(1)} | 📅 {selectedMovie.release_date}
                  </p>
                  <p className="mt-4 text-gray-300 text-sm md:text-base">{selectedMovie.overview}</p>

                  <div className="mt-4">
                    <h3 className="font-semibold text-lg text-yellow-400 drop-shadow-[0_0_10px_#FFD700]">
                      Top Cast:
                    </h3>
                    <ul className="flex flex-wrap gap-3 text-gray-300 mt-2 text-xs sm:text-sm">
                      {cast.length > 0 ? (
                        cast.map((actor) => <li key={actor.id}>🎭 {actor.name}</li>)
                      ) : (
                        <p className="text-sm">Loading...</p>
                      )}
                    </ul>
                  </div>

                  <div className="mt-4">
                    <h3 className="font-semibold text-lg text-yellow-400 drop-shadow-[0_0_10px_#FFD700]">
                      Our Opinion:
                    </h3>
                    <p className="text-gray-300 text-sm md:text-base">
                      Inspiring movies for founders & entrepreneurs! Stories of ambition, risk, and success.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
