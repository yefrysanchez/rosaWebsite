import TestimonialCard from "./TestimonialCard";
import testimonials from "../data/testimonials";

const TestimonialSection = () => {
  return (
    <div className="max-w-5xl mx-auto lg:mt-12 relative overflow-hidden">
      <h3></h3>
      <div className="absolute top-0 left-0 h-full w-20 bg-linear-to-r from-gray-50 to-transparent"></div>
      <div className="absolute top-0 right-0 h-full w-20 bg-linear-to-r from-transparent to-gray-50"></div>
      <div className="flex gap-2 mx-auto mt-12">
        {testimonials.map((t, i) => (
          <TestimonialCard key={i} testimonial={t.review} name={t.name} />
        ))}
      </div>
    </div>
  );
};

export default TestimonialSection;
