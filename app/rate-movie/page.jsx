
// 'use client';

// import { motion } from 'framer-motion';
// import Image from 'next/image';
// import { useState, useMemo } from 'react';

// export default function RateMoviePage() {
//   const [search, setSearch] = useState('');

//   // Generate movie data once per render session (avoids hydration mismatch)
//   const movies = useMemo(() => {
//     return Array.from({ length: 16 }, (_, i) => ({
//       id: i,
//       title: `Movie ${i + 1}`,
//       poster: `https://placehold.co/300x450.png?text=Movie+${i + 1}`
// ,
//       rating: Math.floor(Math.random() * 5) + 1,
//     }));
//   }, []);

//   return (
//     <div className="bg-black text-white">
//       {/* Hero Section */}
//       <section className="relative h-[60vh] w-full">
//         <Image
//           src="/ratePhoto.webp"
//           alt="Movies Background"
//           fill
//           className="object-cover"
//           priority
//         />
//         <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black flex flex-col items-center justify-center text-center px-4">
//           <motion.h1
//             initial={{ opacity: 0, y: -20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             className="text-4xl md:text-6xl font-bold mb-4"
//           >
//             Rate Your Favorite Movies
//           </motion.h1>
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.3, duration: 0.8 }}
//             className="w-full max-w-xl flex"
//           >
//             <input
//               type="text"
//               value={search}
//               onChange={(e) => setSearch(e.target.value)}
//               placeholder="Search for a movie..."
//               className="flex-1 px-4 py-2 rounded-l-lg bg-black/70 border border-cyan-400 text-white focus:outline-none"
//             />
//             <button className="px-4 py-2 bg-cyan-500 text-black font-bold rounded-r-lg hover:bg-cyan-400">
//               Search
//             </button>
//           </motion.div>
//         </div>
//       </section>

//       {/* Movie Grid */}
//       <section className="max-w-7xl mx-auto px-4 py-12">
//         <motion.div
//           className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6"
//           initial="hidden"
//           animate="show"
//           variants={{
//             hidden: {},
//             show: { transition: { staggerChildren: 0.1 } },
//           }}
//         >
//           {movies.map((movie) => (
//             <motion.div
//               key={movie.id}
//               variants={{
//                 hidden: { opacity: 0, y: 20 },
//                 show: { opacity: 1, y: 0 },
//               }}
//               className="bg-black/50 p-2 rounded-lg shadow-lg hover:shadow-[0_0_15px_rgba(0,255,255,0.8)] transition-all"
//             >
//               <Image
//                 src={movie.poster}
//                 alt={movie.title}
//                 width={300}
//                 height={450}
//                 className="rounded-lg object-cover"
//               />
//               <h2 className="mt-2 text-lg font-semibold">{movie.title}</h2>
//               <div className="flex gap-1 mt-1">
//                 {Array.from({ length: 5 }).map((_, index) => (
//                   <span
//                     key={index}
//                     className={
//                       index < movie.rating ? 'text-yellow-400' : 'text-gray-500'
//                     }
//                   >
//                     ★
//                   </span>
//                 ))}
//               </div>
//             </motion.div>
//           ))}
//         </motion.div>
//       </section>
//     </div>
//   );
// }


// 'use client';

// import { motion } from 'framer-motion';
// import Image from 'next/image';
// import { useState, useMemo } from 'react';

// // Use Unsplash source URLs
// const UNSPLASH_QUERIES = [
//   'movie poster',
//   'cinema',
//   'film still',
//   'superhero movie',
//   'animated movie',
//   'sports movie',
//   'action movie',
//   'science fiction movie',
//   'fantasy movie',
//   'drama movie',
// ];

// export default function RateMoviePage() {
//   const [search, setSearch] = useState('');

//   const movies = useMemo(() => {
//     return Array.from({ length: 16 }, (_, i) => {
//       const randomQuery =
//         UNSPLASH_QUERIES[Math.floor(Math.random() * UNSPLASH_QUERIES.length)];
//       return {
//         id: i,
//         title: `Movie ${i + 1}`,
//         // Unsplash random image with topic query
//         poster: `https://source.unsplash.com/300x450/?${encodeURIComponent(
//           randomQuery
//         )}`,
//         rating: Math.floor(Math.random() * 5) + 1,
//       };
//     });
//   }, []);

//   return (
//     <div className="bg-black text-white">
//       {/* Hero Section */}
//       <section className="relative h-[60vh] w-full">
//         <Image
//           src="/ratePhoto.webp" // Your big collage or hero background
//           alt="Movies Background"
//           fill
//           className="object-cover"
//           priority
//         />
//         <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black flex flex-col items-center justify-center text-center px-4">
//           <motion.h1
//             initial={{ opacity: 0, y: -20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             className="text-4xl md:text-6xl font-bold mb-4"
//           >
//             Rate Your Favorite Movies
//           </motion.h1>
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.3, duration: 0.8 }}
//             className="w-full max-w-xl flex"
//           >
//             <input
//               type="text"
//               value={search}
//               onChange={(e) => setSearch(e.target.value)}
//               placeholder="Search for a movie..."
//               className="flex-1 px-4 py-2 rounded-l-lg bg-black/70 border border-cyan-400 text-white focus:outline-none"
//             />
//             <button className="px-4 py-2 bg-cyan-500 text-black font-bold rounded-r-lg hover:bg-cyan-400">
//               Search
//             </button>
//           </motion.div>
//         </div>
//       </section>

//       {/* Movie Grid */}
//       <section className="max-w-7xl mx-auto px-4 py-12">
//         <motion.div
//           className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6"
//           initial="hidden"
//           animate="show"
//           variants={{
//             hidden: {},
//             show: { transition: { staggerChildren: 0.1 } },
//           }}
//         >
//           {movies.map((movie) => (
//             <motion.div
//               key={movie.id}
//               variants={{
//                 hidden: { opacity: 0, y: 20 },
//                 show: { opacity: 1, y: 0 },
//               }}
//               className="bg-black/50 p-2 rounded-lg shadow-lg hover:shadow-[0_0_15px_rgba(0,255,255,0.8)] transition-all"
//             >
//               <Image
//                 src={movie.poster}
//                 alt={movie.title}
//                 width={300}
//                 height={450}
//                 className="rounded-lg object-cover"
//               />
//               <h2 className="mt-2 text-lg font-semibold">{movie.title}</h2>
//               <div className="flex gap-1 mt-1">
//                 {Array.from({ length: 5 }).map((_, index) => (
//                   <span
//                     key={index}
//                     className={
//                       index < movie.rating ? 'text-yellow-400' : 'text-gray-500'
//                     }
//                   >
//                     ★
//                   </span>
//                 ))}
//               </div>
//             </motion.div>
//           ))}
//         </motion.div>
//       </section>
//     </div>
//   );
// }



// 'use client';

// import { motion } from 'framer-motion';
// import Image from 'next/image';
// import { useState, useEffect } from 'react';
// import axios from 'axios';

// export default function RateMoviePage() {
//   const [search, setSearch] = useState('');
//   const [movies, setMovies] = useState([]);

//   // Fetch real movies from TMDb
//   useEffect(() => {
//     const fetchMovies = async () => {
//       try {
//         const res = await axios.get(
//           `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}&language=en-US&page=1`
//         );
//         const data = res.data.results.slice(0, 16).map((movie, i) => ({
//           id: movie.id,
//           title: movie.title,
//           poster: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
//           rating: Math.floor(Math.random() * 5) + 1, // keep your random rating
//         }));
//         setMovies(data);
//       } catch (error) {
//         console.error('Error fetching movies:', error);
//       }
//     };

//     fetchMovies();
//   }, []);

//   return (
//     <div className="bg-black text-white">
//       {/* Hero Section */}
//       <section className="relative h-[60vh] w-full">
//         <Image
//           src="/ratePhoto.webp" // Your big collage or hero background
//           alt="Movies Background"
//           fill
//           className="object-cover"
//           priority
//         />
//         <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black flex flex-col items-center justify-center text-center px-4">
//           <motion.h1
//             initial={{ opacity: 0, y: -20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             className="text-4xl md:text-6xl font-bold mb-4"
//           >
//             Rate Your Favorite Movies
//           </motion.h1>
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.3, duration: 0.8 }}
//             className="w-full max-w-xl flex"
//           >
//             <input
//               type="text"
//               value={search}
//               onChange={(e) => setSearch(e.target.value)}
//               placeholder="Search for a movie..."
//               className="flex-1 px-4 py-2 rounded-l-lg bg-black/70 border border-cyan-400 text-white focus:outline-none"
//             />
//             <button className="px-4 py-2 bg-cyan-500 text-black font-bold rounded-r-lg hover:bg-cyan-400">
//               Search
//             </button>
//           </motion.div>
//         </div>
//       </section>

//       {/* Movie Grid */}
//       <section className="max-w-7xl mx-auto px-4 py-12">
//         <motion.div
//           className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6"
//           initial="hidden"
//           animate="show"
//           variants={{
//             hidden: {},
//             show: { transition: { staggerChildren: 0.1 } },
//           }}
//         >
//           {movies.map((movie) => (
//             <motion.div
//               key={movie.id}
//               variants={{
//                 hidden: { opacity: 0, y: 20 },
//                 show: { opacity: 1, y: 0 },
//               }}
//               className="bg-black/50 p-2 rounded-lg shadow-lg hover:shadow-[0_0_15px_rgba(0,255,255,0.8)] transition-all"
//             >
//               <Image
//                 src={movie.poster}
//                 alt={movie.title}
//                 width={300}
//                 height={450}
//                 className="rounded-lg object-cover"
//               />
//               <h2 className="mt-2 text-lg font-semibold">{movie.title}</h2>
//               <div className="flex gap-1 mt-1">
//                 {Array.from({ length: 5 }).map((_, index) => (
//                   <span
//                     key={index}
//                     className={
//                       index < movie.rating ? 'text-yellow-400' : 'text-gray-500'
//                     }
//                   >
//                     ★
//                   </span>
//                 ))}
//               </div>
//             </motion.div>
//           ))}
//         </motion.div>
//       </section>
//     </div>
//   );
// }


'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function RateMoviePage() {
  const [search, setSearch] = useState('');
  const [movies, setMovies] = useState([]);

  const API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY;

  // Fetch popular movies initially
  useEffect(() => {
    fetchMovies();
  }, []);

  // Fetch movies: either popular or search results
  async function fetchMovies(query) {
    try {
      let url;
      if (query && query.trim() !== '') {
        url = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${encodeURIComponent(
          query
        )}&page=1&include_adult=false`;
      } else {
        url = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`;
      }

      const res = await fetch(url);
      const data = await res.json();

      const results = (data.results || []).slice(0, 16).map((movie) => ({
        id: movie.id,
        title: movie.title,
        poster: movie.poster_path
          ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
          : '/no-image.jpg', // fallback if no poster
        rating: Math.floor(Math.random() * 5) + 1, // keep random rating
      }));

      setMovies(results);
    } catch (error) {
      console.error('Error fetching movies:', error);
    }
  }

  // Handle search submit
  const handleSearch = (e) => {
    e.preventDefault();
    fetchMovies(search);
  };

  return (
    <div className="bg-black text-white">
      {/* Hero Section */}
      <section className="relative h-[60vh] w-full">
        <Image
          src="/ratePhoto.webp"
          alt="Movies Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black flex flex-col items-center justify-center text-center px-4">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold mb-10"
          >
            Rate Your Favorite Movies
          </motion.h1>
          <motion.form
            onSubmit={handleSearch}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="w-full max-w-xl flex"
          >
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search for a movie..."
              className="flex-1 px-4 py-2 rounded-l-lg bg-black/70 border border-cyan-400 text-white focus:outline-none"
            />
            <button
              type="submit"
              className="px-4 py-2 bg-cyan-500 text-black font-bold rounded-r-lg hover:bg-cyan-400"
            >
              Search
            </button>
          </motion.form>
        </div>
      </section>

      {/* Movie Grid */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6"
          initial="hidden"
          animate="show"
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.1 } },
          }}
        >
          {movies.map((movie) => (
            <motion.div
              key={movie.id}
              variants={{
                hidden: { opacity: 0, y: 20 },
                show: { opacity: 1, y: 0 },
              }}
              className="bg-black/50 p-2 rounded-lg shadow-lg hover:shadow-[0_0_15px_rgba(0,255,255,0.8)] transition-all"
            >
              <Image
                src={movie.poster}
                alt={movie.title}
                width={300}
                height={450}
                className="rounded-lg object-cover"
              />
              <h2 className="mt-2 text-lg font-semibold">{movie.title}</h2>
              <div className="flex gap-1 mt-1">
                {Array.from({ length: 5 }).map((_, index) => (
                  <span
                    key={index}
                    className={
                      index < movie.rating
                        ? 'text-yellow-400'
                        : 'text-gray-500'
                    }
                  >
                    ★
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </div>
  );
}
