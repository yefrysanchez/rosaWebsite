import { motion } from "motion/react";
import { BiSolidQuoteAltLeft, BiSolidQuoteAltRight } from "react-icons/bi";
import { childVariants } from "../animations/animantions";

type TestimonialCardProps = {
  testimonial: string;
  name: string;
  img: string;
};

const TestimonialCard = ({ testimonial, name, img }: TestimonialCardProps) => {
  return (
    <motion.div variants={childVariants} className="flex flex-col items-center justify-between rounded-xl bg-white p-6 max-w-xs mx-auto shrink-0">
      <div className="h-20 w-20 rounded-full mb-4">
        <img src={img} alt="" />
      </div>
      <h3 className="text-lg font-semibold mb-2">{name}</h3>
      <BiSolidQuoteAltLeft />
      <p className="text-gray-700 font-light leading-5">{testimonial}</p>
      <BiSolidQuoteAltRight />
    </motion.div>
  );
};

export default TestimonialCard;
