import { Cog, Wrench, Truck, Cpu, ShieldCheck, HeartHandshake } from "lucide-react";

const services = [
  {
    id: 1,
    title: "Custom Manufacturing",
    description: "Tailored machinery solutions designed specifically for your unique production requirements.",
    icon: <Cog className="h-10 w-10" />,
  },
  {
    id: 2,
    title: "Maintenance & Repairs",
    description: "Comprehensive service packages ensuring your equipment operates at peak efficiency.",
    icon: <Wrench className="h-10 w-10" />,
  },
  {
    id: 3,
    title: "Logistics & Installation",
    description: "End-to-end handling of machinery transport, setup, and installation at your facility.",
    icon: <Truck className="h-10 w-10" />,
  },
  {
    id: 4,
    title: "Automation Solutions",
    description: "Smart factory technologies that streamline operations and increase productivity.",
    icon: <Cpu className="h-10 w-10" />,
  },
  {
    id: 5,
    title: "Quality Assurance",
    description: "Rigorous testing and certification to ensure all machinery meets the highest standards.",
    icon: <ShieldCheck className="h-10 w-10" />,
  },
  {
    id: 6,
    title: "Consultation Services",
    description: "Expert advice on machinery integration, workflow optimization, and sustainability practices.",
    icon: <HeartHandshake className="h-10 w-10" />,
  },
];

const Services = () => {
  return (
    <section id="services" className="bg-white py-16 md:py-24">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="section-title">Comprehensive Services</h2>
          <p className="text-lg text-machinery-dark/80 max-w-3xl mx-auto">
            Beyond manufacturing, we provide a complete suite of services to ensure your operations run smoothly and efficiently.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div 
              key={service.id} 
              className="p-8 border border-machinery-secondary/30 rounded-lg hover:shadow-lg transition-all duration-300 hover:border-machinery-primary group animate-slide-up"
            >
              <div className="text-machinery-secondary group-hover:text-machinery-primary transition-colors duration-300 mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-machinery-dark mb-3">{service.title}</h3>
              <p className="text-machinery-dark/70">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-machinery-light rounded-lg p-8 sm:p-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-machinery-primary mb-4">
                Need Custom Services?
              </h3>
              <p className="text-machinery-dark/80 mb-6">
                We understand that each manufacturing operation has unique needs. Contact our team to discuss tailored service packages that address your specific challenges.
              </p>
              <div className="inline-flex items-center text-machinery-primary hover:text-machinery-highlight cursor-pointer font-semibold">
                Contact our service team
                <svg className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="bg-machinery-primary/10 p-3 rounded-full">
                  <ShieldCheck className="h-6 w-6 text-machinery-primary" />
                </div>
                <h4 className="ml-4 text-lg font-semibold text-machinery-dark">Service Guarantee</h4>
              </div>
              <p className="text-machinery-dark/70 mb-4">All our services come with a satisfaction guarantee and ongoing support.</p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <svg className="h-5 w-5 text-machinery-highlight mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  24/7 Emergency Support
                </li>
                <li className="flex items-center">
                  <svg className="h-5 w-5 text-machinery-highlight mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Certified Technicians
                </li>
                <li className="flex items-center">
                  <svg className="h-5 w-5 text-machinery-highlight mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Extended Warranties
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
