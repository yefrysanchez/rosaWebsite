import TestimonialSection from "./TestimonialSection";

const HeroSection = () => {
  return (
    <section className="text-center mt-8 md:mt-28">
      <h3 className="text-sm">❤️ Trusted and Loved by New Yorkers. ❤️</h3>
      <h2 className="text-3xl md:text-6xl lg:text-7xl font-bold text-center text-gray-800 max-w-7xl mx-auto mb-4">
        <span className="text-[#60D0D1]">Discover</span>,{" "}
        <span className="text-yellow-400">Explore</span>, and{" "}
        <span className="text-[#F87F9E]">Play</span> – Creating Happy Memories and
        Lifelong Friendships!
      </h2>
      <h3 className="text-gray-500 mb-8">
        A Safe & Fun Learning Space for Your Child!
      </h3>
      <a
        href="#contact"
        className="inline-block text-white font-bold hover:bg-black px-8 py-3 rounded-full bg-[#F87F9E] transition-colors duration-300"
      >
        Enroll Now
      </a>
      <TestimonialSection />
    </section>
  );
};

export default HeroSection;
