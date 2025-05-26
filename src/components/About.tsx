
import { Award, Users, TrendingUp, DollarSign } from "lucide-react";
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
    title: "Simplicity",
    description: "Striving to simplify the manufacturing process, making it more accessible and efficient for product companies.",
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
    title: "Cost-Effectiveness",
    description: "Committed to to drive down costs and reducing lead times for businesses, empowering them to stay competitive.",
    icon: <DollarSign className="h-8 w-8" />,
  },
];

const About = () => {
  return (
    <section id="about" className="bg-machinery-primary text-white py-12 md:py-24 h-screen">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">About Ecostel</h2>
            <p className="text-lg mb-6 opacity-90">
            Ecostel was born out of a challenge—and a vision. In 2022, during the height of the COVID-19 pandemic, our founder, Soman, was leading Manufacturing & Partnerships at Modulus Housing. Tasked with developing a cloud-based manufacturing system, he experienced firsthand the struggles product companies faced—navigating unreliable suppliers, maintaining quality, and ensuring efficiency. </p>
            <p className="text-lg mb-8 opacity-90">
            But for Soman, it was about more than just building systems. It was about understanding the urgent need for simplicity, dependability, and innovation in manufacturing.</p>
            <p className="text-lg mb-8 opacity-90">
            By 2024, driven by this experience and a passion for transforming the industry, Soman joined forces with Sai and Avinash to launch Ecostel—a company dedicated to making manufacturing seamless, efficient, and accessible for all.</p>
            
            {/* <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-8">
              {stats.map((stat) => (
                <div key={stat.id} className="text-center bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                  <div className="text-2xl sm:text-3xl font-bold text-machinery-light">{stat.value}</div>
                  <div className="text-sm sm:text-base opacity-80">{stat.label}</div>
                </div>
              ))}
            </div> */}
            
            {/* <Button className="bg-white text-machinery-primary hover:bg-machinery-light">
              Learn More About Us
            </Button> */}
          </div>
          <div className="items-end pl-[10rem] w-[500rem]">
            <img
                src="assets/teampic.png"
                className="rounded-lg object-cover opacity-90 w-[30rem]"></img>
          </div>

        </div>
        
        <div className="mt-22">
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
