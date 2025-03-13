type BenefitsCardProps = {
  title: string;
  desc: string;
  index: number;
  img: string;
};

const BenefitsCard = ({ title, desc, index, img }: BenefitsCardProps) => {
  const colors = [
    // Different colors for each card title
    "text-blue-500",
    "text-[#60D0D1]",
    "text-yellow-400",
    "text-[#F87F9E]",
  ];

  return (
    <div className="bg-white p-4 lg:p-8  rounded-xl">
      <div className="max-w-lg mb-2">
        <h4 className={`font-bold text-2xl ${colors[index]} tracking-tighter`}>
          {title}
        </h4>
        <p className="text-gray-800 py-2">{desc}</p>
      </div>
      <div className="w-full h-80 rounded-lg overflow-hidden">
        <img
          className="h-full w-full object-cover"
          src={img}
          alt="Benefit image"
        />
      </div>
    </div>
  );
};

export default BenefitsCard;
