import { IconType } from "react-icons";

type ContactCardProps = {
  color: string;
  title: string;
  info: string;
  icon?: IconType;
};

const ContactCard = ({ color, title, info, icon: Icon }: ContactCardProps) => {
  return (
    <div className={`lg:max-w-48 border border-gray-200 text-black rounded-xl p-4 flex flex-col items-center gap-1 text-center`}>
      {Icon && <Icon className={`text-4xl text-[${color}]`} />} 
      <h3 className="text-lg font-bold">{title}</h3>
      <p className="text-gray-800">{info}</p>
    </div>
  );
};

export default ContactCard;
