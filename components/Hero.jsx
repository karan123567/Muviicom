"use client";
import { Spotlight } from "./ui/Spotlight";
import { cn } from "@/lib/utils";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import MagicButton from "./ui/MagicButton";
import { ThreeDMarquee } from "./ui/ThreeDMarquee";
import { ThreeDMarqueeDemo } from "./ThreeDMarqueeDemo";
import { Vortex } from "./ui/Vortex";

const Hero = () => {
  return (
    <div className="pb-20 pt-36">
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="top-10 left-full h-[80vh] w-[50vw]"
          fill="purple"
        />
        <Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" fill="blue" />
      </div>
      <Vortex />

      {/* <div className="flex h-screen w-full items-center justify-center bg-white dark:bg-[#000319] absolute top-0 left-0">
      <div
      className={cn(
        "absolute inset-0",
        "[background-size:40px_40px]",
        "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
        "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]"
        )}
        />
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-[#000319]" />
      </div> */}
      <div className="flex justify-center relative z-10 px-4 sm:px-8">
        <div className="max-w-[89vw] md:max-w-5xl lg:max-w-[60vw] flex flex-col items-center justify-center text-white">
          <h2 className="uppercase tracking-widest text-sm sm:text-base md:text-lg text-center text-blue-100 mb-4">
            Find the Right Movie — by Mood, Ratings, or Our Picks
          </h2>

          <div className="w-full max-w-4xl mx-auto">
            <TextGenerateEffect
              className="text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight"
              words="Not sure what to watch? Let your mood, reviews, or our curation do the picking."
            />
          </div>

          <a href="#movies" className="mt-6">
            <MagicButton title="Explore" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
