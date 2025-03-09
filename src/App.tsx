import "./App.css";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import WhyUsSection from "./components/WhyUsSection";

function App() {
  return (
    <div className="bg-gray-50 min-h-screen px-4">
      <Navbar />
      <HeroSection />
      <WhyUsSection />
    </div>
  );
}

export default App;
