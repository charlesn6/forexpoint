// Section Imports
import FeaturesSection from "../sections/FeaturesSection";
import HeroSection from "../sections/HeroSection";
import LogoCarousel from "../sections/LogoCarousel";


const HomePage = () => {
  return (
    <div className="bg-black mx-auto">
    {/* Hero Section */}
      <HeroSection />

    {/* Logo Carousel Section */}  
    <LogoCarousel />

    {/* Features Section */}
    <FeaturesSection />

    </div>
  );
};

export default HomePage;