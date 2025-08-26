// "use client";

// import { useState, useEffect } from "react";
// import axios from "axios";
// import { motion, AnimatePresence } from "framer-motion";
// import Tilt from "react-parallax-tilt";

// export default function ActionMoviesPage() {
//   const [movies, setMovies] = useState([]);
//   const [visibleCount, setVisibleCount] = useState(10); // for "See More"
//   const [selectedMovie, setSelectedMovie] = useState(null);
//   const [trailerKey, setTrailerKey] = useState(null);
//   const [filter, setFilter] = useState("all");

//   // Fetch comedy movies
//   useEffect(() => {
//     const fetchMovies = async () => {
//       try {
//         const res = await axios.get(
//           `/api/movies`,
//           {
//             params: {
//               // api_key: process.env.NEXT_PUBLIC_TMDB_API_KEY,
//               with_genres: "35", // comedy genre
//               page: 1,
//             },
//           }
//         );
//         setMovies(res.data.data);
//       } catch (err) {
//         console.error(err);
//       }
//     };
//     fetchMovies();
//   }, []);

//   // Fetch trailer when movie is selected
//   useEffect(() => {
//     if (!selectedMovie) return;

//     const fetchTrailer = async () => {
//       try {
//         const res = await axios.get(
//           `https://api.themoviedb.org/3/movie/${selectedMovie.id}/videos`,
//           {
//             params: { api_key: process.env.NEXT_PUBLIC_TMDB_API_KEY },
//           }
//         );
//         const trailer = res.data.results.find((vid) => vid.type === "Trailer");
//         setTrailerKey(trailer ? trailer.key : null);
//       } catch (err) {
//         console.error(err);
//       }
//     };

//     fetchTrailer();
//   }, [selectedMovie]);

//   // Filters (fixed + added more)
//   const filterMovies = (movies) => {
//     switch (filter) {
//       case "hollywood":
//         return movies.filter((m) => m.original_language === "en");
//       case "bollywood":
//         return movies.filter((m) => m.original_language === "hi");
//       case "korean":
//         return movies.filter((m) => m.original_language === "ko");
//       case "spanish":
//         return movies.filter((m) => m.original_language === "es");
//       case "uk":
//         return movies.filter((m) => m.original_language === "en"); // English same
//       case "japanese":
//         return movies.filter((m) => m.original_language === "ja");
//       default:
//         return movies;
//     }
//   };

//   // Final filtered + visible movies
//   const displayedMovies = filterMovies(movies).slice(0, visibleCount);

//   return (
//     <div className="relative bg-black text-white min-h-screen overflow-x-hidden">

//       {/* Hero Section (no gap below) */}
//       <section className="relative h-[60vh] w-full overflow-hidden flex items-center justify-center m-0 p-0">
//         <video
//           autoPlay
//           loop
//           muted
//           className="absolute w-full h-full object-cover"
//           src="/videos/thriller.webm" // <-- Put comedy hero video here
//         />
//         <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
//           <h1 className="text-4xl md:text-6xl font-bold text-red-500 drop-shadow-lg">
//             Action Movies
//           </h1>
//         </div>
//       </section>

//       {/* Filters (fixed lowercase) */}
//       <div className="flex justify-center flex-wrap filter-buttons z-10 relative py-6 gap-2">
//         {[
//           "all",
//           "hollywood",
//           "bollywood",
//           "korean",
//           "spanish",
//           "uk",
//           "japanese",
//         ].map((cat) => (
//           <button
//             key={cat}
//             onClick={() => {
//               setFilter(cat);
//               setVisibleCount(10); // reset when switching filter
//             }}
//             className={`capitalize px-4 py-2 rounded-lg border border-red-500 transition-all duration-300 ${
//               filter === cat
//                 ? "bg-red-600 text-white shadow-lg shadow-red-500/50"
//                 : "hover:bg-red-500/30"
//             }`}
//           >
//             {cat}
//           </button>
//         ))}
//       </div>

//       {/* Grid Section */}
//       <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 movies-grid px-6 pb-20 z-10 relative gap-6">
//         {displayedMovies.map((movie) => (
//           <Tilt
//             key={movie.id}
//             tiltMaxAngleX={10}
//             tiltMaxAngleY={10}
//             glareEnable={false}
//           >
//             <motion.div
//               whileHover={{
//                 scale: 1.05,
//                 rotateY: 5,
//                 boxShadow:
//                   "0 0 16px #FF0000, 0 0 28px #8B0000, 0 0 44px #B22222",
//               }}
//               transition={{ type: "spring", stiffness: 280, damping: 20 }}
//               className="rounded-xl overflow-hidden cursor-pointer bg-[#0b0b0b] border border-red-900/40 shadow-[0_0_8px_rgba(255,0,0,0.25)] group relative"
//               onClick={() => setSelectedMovie(movie)}
//             >
//               <img
//                 src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
//                 alt={movie.title}
//                 className="rounded-xl shadow-lg group-hover:shadow-[0_0_25px_#1f238c] transition duration-500"
//               />
//               <div className="absolute bottom-0 w-full bg-black/70 text-center py-2 opacity-0 group-hover:opacity-100 transition">
//                 {movie.title}
//               </div>
//             </motion.div>
//           </Tilt>
//         ))}
//       </div>

//       {/* See More Button */}
//       {visibleCount < filterMovies(movies).length && (
//         <div className="flex justify-start px-6 pb-12">
//           <motion.button
//             whileHover={{ scale: 1.1, boxShadow: "0px 0px 25px #00ffea" }}
//             whileTap={{ scale: 0.95 }}
//             onClick={() => setVisibleCount((prev) => prev + 10)}
//             className="px-6 py-3 bg-gradient-to-r from-red-600 to-red-600 rounded-xl font-semibold text-white shadow-lg shadow-blue-500/50"
//           >
//             See More
//           </motion.button>
//         </div>
//       )}

//       {/* Expanded Movie Section */}
//       <AnimatePresence>
//         {selectedMovie && (
//           <motion.div
//             initial={{ opacity: 0, y: 100 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: 100 }}
//             className="fixed inset-0 bg-black/95 z-50 overflow-y-auto"
//           >
//             <div className="max-w-5xl mx-auto p-6">
//               <button
//                 onClick={() => setSelectedMovie(null)}
//                 className="mb-4 px-4 py-2 bg-red-500 text-black rounded hover:bg-red-400"
//               >
//                 Close
//               </button>

//               {/* Trailer */}
//               {trailerKey ? (
//                 <iframe
//                   src={`https://www.youtube.com/embed/${trailerKey}`}
//                   className="w-full aspect-video rounded-xl mb-4"
//                   allowFullScreen
//                 />
//               ) : (
//                 <img
//                   src={`https://image.tmdb.org/t/p/w500${selectedMovie.poster_path}`}
//                   alt={selectedMovie.title}
//                   className="w-full rounded-xl mb-4"
//                 />
//               )}

//               {/* Details */}
//               <h2 className="text-3xl font-bold text-red-400 mb-2">
//                 {selectedMovie.title}
//               </h2>
//               <p className="mb-2">{selectedMovie.overview}</p>
//               <p className="text-sm text-gray-400">
//                 ⭐ {selectedMovie.vote_average} | 📅 {selectedMovie.release_date}
//               </p>

//               {/* Netflix-style carousel */}
//               <h3 className="mt-6 mb-3 text-2xl font-semibold text-red-500">
//                 More Action Movies
//               </h3>
//               <div className="flex overflow-x-scroll gap-4 pb-4">
//                 {movies.map((m) => (
//                   <div key={m.id} className="min-w-[150px]">
//                     <img
//                       src={`https://image.tmdb.org/t/p/w300${m.poster_path}`}
//                       alt={m.title}
//                       className="rounded-xl hover:shadow-[20px_20px_0px_#e8273e] transition cursor-pointer"
//                       onClick={() => setSelectedMovie(m)}
//                     />
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// }

"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";
import Tilt from "react-parallax-tilt";

export default function ActionMoviesPage() {
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
  let filtered = movies.filter((m) => m.genres.includes("Action")); // 👈 only Action movies

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
          <h1 className="text-4xl md:text-6xl font-bold text-red-500 drop-shadow-lg">
            Action Movies
          </h1>
        </div>
      </section>

      {/* Filters */}
      <div className="flex justify-center flex-wrap gap-2 py-6">
        {["all", "hollywood", "bollywood", "korean"].map((cat) => (
          <button
            key={cat}
            onClick={() => {
              setFilter(cat);
              setVisibleCount(10);
            }}
            className={`capitalize px-4 py-2 rounded-lg border border-red-500 transition-all ${
              filter === cat
                ? "bg-red-600 text-white shadow-lg shadow-red-500/50"
                : "hover:bg-red-500/30"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Movie Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 px-6 pb-20 gap-6">
        {displayedMovies.map((movie) => (
          <Tilt key={movie._id} tiltMaxAngleX={10} tiltMaxAngleY={10}>
            <motion.div
              whileHover={{
                scale: 1.05,
                rotateY: 5,
                boxShadow: "0 0 16px #FF0000, 0 0 28px #8B0000",
              }}
              transition={{ type: "spring", stiffness: 280, damping: 20 }}
              className="rounded-xl overflow-hidden cursor-pointer bg-[#0b0b0b] border border-red-900/40 shadow-[0_0_8px_rgba(255,0,0,0.25)] group relative"
              onClick={() => setSelectedMovie(movie)}
            >
              <img
                src={movie.posterUrl}
                alt={movie.title}
                className="rounded-xl w-full h-72 object-cover"
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
            whileHover={{ scale: 1.1, boxShadow: "0px 0px 25px #ff0000" }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setVisibleCount((prev) => prev + 10)}
            className="px-6 py-3 bg-gradient-to-r from-red-600 to-red-600 rounded-xl font-semibold"
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
                className="mb-4 px-4 py-2 bg-red-500 text-black rounded"
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
              <h2 className="text-3xl font-bold text-red-400 mb-2">
                {selectedMovie.title}
              </h2>
              <p className="mb-2">{selectedMovie.description}</p>
              <p className="text-sm text-gray-400">
                ⭐ {selectedMovie.rating.imdb}/10 MUVII | 📅{" "}
                {new Date(selectedMovie.releaseDate).getFullYear()} | 🎬{" "}
                {formatDuration(selectedMovie.duration)}
              </p>

              {/* Carousel */}
              <h3 className="mt-6 mb-3 text-2xl font-semibold text-red-500">
                More Action Movies
              </h3>
              <div className="flex overflow-x-scroll gap-4 pb-4">
                {movies.map((m) => (
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
