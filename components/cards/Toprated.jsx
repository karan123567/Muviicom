"use client";

import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";

function AppleCardsCarouselDemo() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="w-full h-full py-20">
      <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
        Top-Rated Movies 2025
      </h2>
      <Carousel items={cards} />
    </div>
  );
}

const data = [
  {
    category: "Biopic",
    title: "Chhava",
    src: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcR0IfyAU2VKhi9idE-H29QfleuY1PmgTbmoKsk9ixU-GtYxSSLL8IUKA2wZ6x6ubTEwg7iQ",
    // content: <DummyContent />,
  },
  {
    category: "Action",
    title: "Ne Zha 2",
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4VCCc5Hqundw9HLtQKiITmSwSWi6jYxF8kC5JXD1WhQiala49xrtYhi17Qy8TfK2fYicamg",
    // content: <DummyContent />,
  },
  {
    category: "Product",
    title: "Launching the new Apple Vision Pro.",
    src: "https://images.unsplash.com/photo-1713869791518-a770879e60dc?q=80&w=2333&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    // content: <DummyContent />,
  },
 
  {
    category: "Product",
    title: "Maps for your iPhone 15 Pro Max.",
    src: "https://images.unsplash.com/photo-1599202860130-f600f4948364?q=80&w=2515&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    // content: <DummyContent />,
  },
  {
    category: "iOS",
    title: "Photography just got better.",
    src: "https://images.unsplash.com/photo-1602081957921-9137a5d6eaee?q=80&w=2793&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    // content: <DummyContent />,
  },
  {
    category: "Hiring",
    title: "Hiring for a Staff Software Engineer",
    src: "https://images.unsplash.com/photo-1511984804822-e16ba72f5848?q=80&w=2048&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    // content: <DummyContent />,
  },
];

export default AppleCardsCarouselDemo;



// "use client";

// import React, { useEffect, useState } from "react";
// import { Carousel, Card } from "@/components/ui/apple-cards-carousel";

// function AppleCardsCarouselDemo() {
//   const [movies, setMovies] = useState([]);

//   useEffect(() => {
//     const fetchMovies = async () => {
//       try {
//         const res = await fetch(
//           `https://api.themoviedb.org/3/movie/top_rated?api_key=YOUR_API_KEY&language=en-US&page=1`
//         );
//         const data = await res.json();
//         setMovies(data.results);
//       } catch (error) {
//         console.error("Error fetching top rated movies:", error);
//       }
//     };

//     fetchMovies();
//   }, []);

//   const cards = movies.map((movie, index) => (
//     <Card
//       key={movie.id}
//       card={{
//         category: movie.release_date?.split("-")[0] || "Movie",
//         title: movie.title,
//         src: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
//       }}
//       index={index}
//     />
//   ));

//   return (
//     <div className="w-full h-full py-20">
//       <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
//         Top-Rated Movies 2025
//       </h2>
//       <Carousel items={cards} />
//     </div>
//   );
// }

// export default AppleCardsCarouselDemo;
