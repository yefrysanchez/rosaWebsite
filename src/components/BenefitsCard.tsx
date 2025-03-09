
type BenefitsCardProps = {
    title: string
    desc: string
    index: number
    img: string
}

const BenefitsCard = ({title, desc, index, img}: BenefitsCardProps) => {
  
 
    const colors = [ // Different colors for each card title 
        "text-blue-600",
        "text-green-600",
        "text-fuchsia-600",
        "text-red-600",]
 
    return (
    <div className="bg-white p-4 lg:p-8  rounded-lg">
      <div className="max-w-lg mb-2">
        <h4 className={`font-bold text-2xl ${colors[index]} tracking-tighter`}>{title}</h4>
        <p className="text-gray-800 py-2">{desc}</p>
      </div>
      <div className="w-full h-80 rounded-lg overflow-hidden">
        <img className="h-full w-full object-cover" src={img} alt="Benefit image" />
      </div>
    </div>
  )
}

export default BenefitsCard
