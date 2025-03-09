import { benefits } from "../data/benefits"
import BenefitsCard from "./BenefitsCard"

const WhyUsSection = () => {
  return (
    <section className="mt-12 mx-auto max-w-7xl">
      <h2 className="text-center font-bold text-2xl lg:text-4xl tracking-tighter text-gray-700">Why Choose Us</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-8">
        {
          benefits.map((b, i) => (
            <BenefitsCard key={i} title={b.title} desc={b.description} index={i} img={b.image}/>
          ))
        }
      </div>
    </section>
  )
}

export default WhyUsSection
