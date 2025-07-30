import { Navigation } from "@/components/Navigation";
import LogosDisplay from "../components/LogosDisplay";
import SmileTransformations from "../components/SmileTransformations";
import Footer from "../components/Footer";
import bgImage from "../assets/image.png";
import HeroSection from "../components/HeroSection";

export default function Index() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      <HeroSection/>
      <LogosDisplay />
      <SmileTransformations />
      <Footer />
     
    </div>
  );
}
