import "./App.css";
import Contact from "./components/Contact";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import WhyUsSection from "./components/WhyUsSection";

function App() {
  return (
    <div className="bg-gray-50 min-h-screen px-4 scroll-smooth pb-12">
      <Navbar />
      <HeroSection />
      <WhyUsSection />
      <Contact />
    </div>
  );
}

export default App;
