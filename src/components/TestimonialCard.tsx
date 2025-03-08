import { BiSolidQuoteAltLeft, BiSolidQuoteAltRight } from "react-icons/bi";

type TestimonialCardProps = {
  testimonial: string;
  name: string;
};

const TestimonialCard = ({ testimonial, name }: TestimonialCardProps) => {
  return (
    <div className="flex flex-col items-center justify-between bg-white rounded-lg p-6 max-w-xs mx-auto shrink-0">
      <div className="h-20 w-20 rounded-full bg-gray-300 mb-4"></div>
        <h3 className="text-lg font-semibold mb-2">{name}</h3>
      <BiSolidQuoteAltLeft />
      <p className="text-gray-700 font-light leading-5">{testimonial}</p>
      <BiSolidQuoteAltRight />
    </div>
  );
};

export default TestimonialCard;
