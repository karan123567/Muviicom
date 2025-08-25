
// import NavbarMenu from "@/components/NavbarMenu";
import Hero from "@/components/Hero";
import Toprated from "@/components/cards/Toprated";
import Underrated from "@/components/cards/Underrated";
import Action from "@/components/cards/Action"; // ✅ Use the wrapper
import GlobeDemo from "@/components/GlobeDemo";
import TopratedSeries from "@/components/cards/TopratedSeries";
// import Footer from "@/components/Footer";
import FaqSection from "@/components/FaqSection";
import AnimatedTooltipPreview from "@/components/AnimatedTooltipPreview";
// import NavbarMenu from "@/components/NavbarMenu";
import { AnimatedTestimonialsDemo } from "@/components/AnimatedTestimonialsDemo";
import CommunitySection from "@/components/CommunitySection";


export default function Home() {
  return (
    <main className="relative bg-[#000000] flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        {/* <NavbarMenu /> */}
        <Hero />
        <Toprated />
        <TopratedSeries />
        
        <Underrated />
        <Action /> 
        <AnimatedTooltipPreview />
        <AnimatedTestimonialsDemo />
        <GlobeDemo />
        <CommunitySection />
        <FaqSection />

        {/* <Footer />✅ Safe to use now */}
      </div>
    </main>
  );
}


