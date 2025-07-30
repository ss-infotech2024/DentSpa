import { Navigation } from "@/components/Navigation";
import LogosDisplay from "../components/LogosDisplay";
import SmileTransformations from "../components/SmileTransformations";
import Footer from "../components/Footer";
import bgImage from "../assets/image.png";
import HeroSection from "../components/HeroSection";
import InstituteSection from "../components/InstituteSection";
import FeaturedLogos from "../components/FeaturedLogos";

export default function Index() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      <HeroSection/>
      <LogosDisplay />
      <SmileTransformations />
      <InstituteSection/>
      <FeaturedLogos/>
      <Footer />
     
    </div>
  );
}
