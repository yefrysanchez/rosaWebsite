import { contactData } from "../data/contactData";
import ContactCard from "./ContactCard";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaPhoneSquare } from "react-icons/fa";

const icons = [
  { icon: FaLocationDot },
  { icon: MdEmail },
  { icon: FaPhoneSquare },
];

const ContactCardSection = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 mx-auto max-w-2xl">
      {contactData.map((c, i) => (
        <ContactCard
          key={i}
          color={c.color}
          title={c.title}
          info={c.info}
          icon={icons[i].icon} 
        />
      ))}
    </div>
  );
};

export default ContactCardSection;
