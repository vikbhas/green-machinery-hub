
import { Award, Users, TrendingUp, Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";

const stats = [
  { id: 1, value: "20+", label: "Years Experience" },
  { id: 2, value: "100+", label: "Team Members" },
  { id: 3, value: "5000+", label: "Projects Completed" },
  { id: 4, value: "30+", label: "States Served" },
];

const values = [
  {
    id: 1,
    title: "Quality Excellence",
    description: "Delivering superior solutions using the best materials and technology available.",
    icon: <Award className="h-8 w-8" />,
  },
  {
    id: 2,
    title: "Client Partnership",
    description: "Building lasting relationships through transparency, reliability, and exceptional service.",
    icon: <Users className="h-8 w-8" />,
  },
  {
    id: 3,
    title: "Continuous Innovation",
    description: "Constantly improving our solutions with the latest technological advancements.",
    icon: <TrendingUp className="h-8 w-8" />,
  },
  {
    id: 4,
    title: "Environmental Responsibility",
    description: "Committed to sustainable practices that protect resources and reduce environmental impact.",
    icon: <Leaf className="h-8 w-8" />,
  },
];

const About = () => {
  return (
    <section id="about" className="bg-machinery-primary text-white py-16 md:py-24">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">About Ecostel</h2>
            <p className="text-lg mb-6 opacity-90">
              Founded in 2004, Ecostel has been at the forefront of developing innovative fuel polishing and water treatment solutions. Our mission is to protect critical equipment, extend fuel life, and reduce environmental impact through cutting-edge technology and exceptional service.
            </p>
            <p className="text-lg mb-8 opacity-90">
              What sets us apart is our commitment to custom solutions tailored to each client's specific needs. Whether you manage a hospital's emergency generators, a data center's backup power systems, or a fleet of marine vessels, our team has the expertise to deliver results that exceed expectations.
            </p>
            
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-8">
              {stats.map((stat) => (
                <div key={stat.id} className="text-center bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                  <div className="text-2xl sm:text-3xl font-bold text-machinery-light">{stat.value}</div>
                  <div className="text-sm sm:text-base opacity-80">{stat.label}</div>
                </div>
              ))}
            </div>
            
            <Button className="bg-white text-machinery-primary hover:bg-machinery-light">
              Learn More About Us
            </Button>
          </div>
          
          <div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1581094795830-a9373d2c7d1f?auto=format&fit=crop&w=1200&q=80" 
                alt="Ecostel technician working on fuel system" 
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-machinery-light text-machinery-primary p-4 rounded-lg shadow-lg max-w-xs">
                <p className="font-bold">Our state-of-the-art testing facility in Tampa, FL</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-24">
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-12">Our Core Values</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => (
              <div key={value.id} className="bg-white/5 p-6 rounded-lg backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-colors">
                <div className="text-machinery-light mb-4">{value.icon}</div>
                <h4 className="text-xl font-bold mb-2">{value.title}</h4>
                <p className="opacity-80">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
