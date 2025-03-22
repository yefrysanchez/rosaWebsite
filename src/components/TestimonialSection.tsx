import TestimonialCard from "./TestimonialCard";
import testimonials from "../data/testimonials";
import useMeasure from "react-use-measure";
import { motion, useMotionValue } from "motion/react";
import { useEffect,  } from "react";
import { animate } from "motion";

const TestimonialSection = () => {
  const [ref, { width }] = useMeasure();
  const xTranslation = useMotionValue(0);

  const finalPosition = -(width + (24 * 10.8)); // Adjust for the total length of all cards and gap


  useEffect(() => {
    const controls = animate(xTranslation, [0, finalPosition], {
      ease: "linear",
      duration:  25,
      repeat: Infinity,
      repeatType: "loop",
      repeatDelay: 0,
      onUpdate: (latest) => {
        if (Number(latest) === finalPosition) {
          xTranslation.set(0); // Smoothly reset to 0 for infinite scroll
        }
      },
    });
  
    return controls.stop;
  }, [xTranslation, finalPosition]);

  return (
    <div 
      className="max-w-5xl mx-auto lg:mt-12 relative overflow-hidden"
    
    >
      {/* Left Gradient Overlay */}
      <div className="absolute z-10 top-0 left-0 h-full w-20 bg-gradient-to-r from-gray-50 to-transparent"></div>

      {/* Right Gradient Overlay */}
      <div className="absolute z-10 top-0 right-0 h-full w-20 bg-gradient-to-r from-transparent to-gray-50"></div>

      <motion.div ref={ref} style={{ x: xTranslation }} className="flex w-fit gap-6 mt-12">
        {/* Testimonials with a sufficient number of duplicates for smooth scrolling */}
        {[...testimonials, ...testimonials].map((t, i) => (
          <TestimonialCard key={i} testimonial={t.review} name={t.name} />
        ))}
      </motion.div>
    </div>
  );
};

export default TestimonialSection;
