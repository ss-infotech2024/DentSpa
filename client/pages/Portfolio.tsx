import Footer from "@/components/Footer";
import { PlaceholderPage } from "../components/PlaceholderPage";
import FeaturedLogos from "../components/FeaturedLogos";
import PortfolioGrid from "../components/PortfolioGrid";

export default function Portfolio() {
  return (
    <div className="flex flex-col min-h-screen bg-black">
      {/* Page header / title */}
      <PlaceholderPage
        title="Portfolio"
        description="View our gallery of dental work and patient transformations."
      />

      {/* New portfolio grid */}
      <PortfolioGrid />

      {/* Featured logos slider */}
      <FeaturedLogos />

      {/* Footer */}
      <Footer />
    </div>
  );
}
