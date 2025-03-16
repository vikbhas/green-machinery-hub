
import { Button } from "@/components/ui/button";
import { ChevronRight, Star, Award, Leaf } from "lucide-react";

const products = [
  {
    id: 1,
    name: "CNC Precision Mill XG-5000",
    description: "Advanced 5-axis milling machine with energy-efficient motors and precision controls.",
    image: "https://images.unsplash.com/photo-1591696205602-2f950c417cb9?auto=format&fit=crop&w=800&q=80",
    features: ["Energy-efficient", "Precision controls", "Low maintenance"],
    eco: "40% less power consumption"
  },
  {
    id: 2,
    name: "Industrial Robotic Arm TR-7",
    description: "Versatile robotic system for assembly and manufacturing with smart power management.",
    image: "https://images.unsplash.com/photo-1563203369-26f2e4a5ccb7?auto=format&fit=crop&w=800&q=80",
    features: ["Smart power management", "Versatile applications", "Intuitive controls"],
    eco: "Reduced material waste by 30%"
  },
  {
    id: 3,
    name: "Eco-Laser Cutter EL-2200",
    description: "High-precision laser cutting system with minimal energy loss and maximal material efficiency.",
    image: "https://images.unsplash.com/photo-1565515912863-4a8a28904c70?auto=format&fit=crop&w=800&q=80",
    features: ["High-precision", "Material efficiency", "Clean operation"],
    eco: "95% material utilization rate"
  }
];

const ProductShowcase = () => {
  return (
    <section id="products" className="bg-machinery-light py-16 md:py-24">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="section-title">Our Premium Machinery</h2>
          <p className="text-lg text-machinery-dark/80 max-w-3xl mx-auto">
            Discover our range of advanced, energy-efficient machinery designed to deliver exceptional performance while minimizing environmental impact.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.id} className="card-machinery group">
              <div className="relative overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-4 right-4 bg-machinery-highlight text-white px-3 py-1 rounded-full text-sm font-medium flex items-center">
                  <Leaf className="mr-1 h-4 w-4" /> Eco-Friendly
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-machinery-primary mb-2">{product.name}</h3>
                <p className="text-machinery-dark/80 mb-4">{product.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {product.features.map((feature, index) => (
                    <span key={index} className="bg-machinery-secondary/20 text-machinery-primary px-3 py-1 rounded-full text-sm">
                      {feature}
                    </span>
                  ))}
                </div>
                <div className="flex items-center text-machinery-highlight mb-4">
                  <Leaf className="h-5 w-5 mr-2" />
                  <span className="font-medium">{product.eco}</span>
                </div>
                <Button variant="outline" className="w-full mt-2 border-machinery-primary text-machinery-primary hover:bg-machinery-primary hover:text-white">
                  View Details <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Button className="bg-machinery-primary hover:bg-machinery-highlight text-white text-lg px-8 py-6">
            View All Products <ChevronRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
