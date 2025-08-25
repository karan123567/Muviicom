

"use client";
import Image from "next/image";

export default function AboutUs() {
  return (
    <div className="relative min-h-screen">
      {/* Background Image */}
      <div className="fixed inset-0 -z-10">
        <Image
          src="/asset/aboutus.png" // Replace with your actual image path
          alt="Background"
          fill
          style={{ objectFit: "cover" }}
          priority
        />
        <div className="absolute inset-0 bg-black/70" /> {/* Black overlay */}
      </div>

      {/* Main Content */}
      <div className="text-white py-16 px-4 md:px-12">
        <div className="max-w-5xl mx-auto space-y-10">
          <h1 className="text-4xl md:text-5xl font-bold text-center text-purple-500">
            About Us – Muvii
          </h1>

          {/* Who We Are */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-purple-400">Who We Are</h2>
            <p className="text-gray-300">
              Muvii is not just another movie platform — it’s a next-gen community-driven space where movie lovers can do more than just watch. We’re building a place where people can create, curate, and connect through films, shows, anime, and more.
            </p>
          </section>

          {/* Why We Started */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-purple-400">Why We Started</h2>
            <p className="text-gray-300 italic">
              “What if discovering movies felt more human, more emotional, and more social?”
            </p>
            <p className="text-gray-300">
              While platforms like IMDb offer ratings and facts, we found a gap — a lack of personal connection and curation. Movie discovery felt too mechanical. So we decided to change that.
            </p>
          </section>

          {/* Our Vision */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-purple-400">Our Vision</h2>
            <ul className="list-disc list-inside text-gray-300 space-y-1">
              <li>Make movie discovery feel personal again.</li>
              <li>Give power to the users to create and share playlists.</li>
              <li>Build a community where opinions matter — not just ratings.</li>
              <li>Offer a space where global and regional cinema co-exist.</li>
            </ul>
          </section>

          {/* How Muvii Works */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-purple-400">How Muvii Works</h2>
            <ul className="list-disc list-inside text-gray-300 space-y-1">
              <li>Create your own movie playlists — Based on mood, themes, or your own ideas.</li>
              <li>Explore user-generated collections — Discover gems from people who think like you.</li>
              <li>Smart Tags & Filters — Search movies by emotions, genres, regions, and more.</li>
              <li>Join the community — Share thoughts, build your tribe, and make movie-watching social.</li>
            </ul>
          </section>

          {/* What’s Next */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-purple-400">What’s Next?</h2>
            <p className="text-gray-300">
              We’re just getting started. Our MVP is almost ready. Once complete, you’ll be able to:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-1">
              <li>Create and showcase your playlists globally</li>
              <li>Join discussions, follow creators, and more</li>
              <li>Experience a hybrid of IMDb + Spotify — but for movies</li>
            </ul>
          </section>

          {/* Join Us */}
          <section className="space-y-4 text-center">
            <h2 className="text-2xl font-semibold text-purple-400">Join Us</h2>
            <p className="text-gray-300">
              If you're passionate about storytelling, cinema, or just want something better than the boring platforms out there,
              <br /> welcome to <span className="text-purple-500 font-semibold">Muvii</span>. Let’s build this space together.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
