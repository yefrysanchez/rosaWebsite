import { IconType } from "react-icons";

type ContactCardProps = {
  bg: string;
  title: string;
  info: string;
  icon?: IconType;
};

const ContactCard = ({ bg, title, info, icon: Icon }: ContactCardProps) => {
  return (
    <div className={`p-2 max-w-48 ${bg} text-black rounded-xl p-4 flex flex-col items-center gap-1 text-center`}>
      {Icon && <Icon className="text-4xl" />} 
      <h3 className="text-lg font-bold">{title}</h3>
      <p>{info}</p>
    </div>
  );
};

export default ContactCard;
