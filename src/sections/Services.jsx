import ServiceCard from "../components/ServiceCard"
import { services } from "../constants"

const Services = () => {
  return (
    <section className="flex flex-wrap gap-10 justify-center">
      {services.map((ser) => (
        <ServiceCard 
          key={ser.label}
          imgURL={ser.imgURL}
          label={ser.label}
          subText={ser.subtext}
        />
      ))}
    </section>
  )
}

export default Services