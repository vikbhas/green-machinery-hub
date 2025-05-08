
import { Button } from "@/components/ui/button";
import { ChevronRight, Star, Award, Leaf } from "lucide-react";

const products = [
  {
    id: 1,
    name: "Fuel Polishing Systems",
    description: "Advanced filtration technology that removes water, particulates, and microbial contamination from stored fuel.",
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=800&q=80",
    features: ["Microbial removal", "Water separation", "Contaminant filtration"],
    eco: "Extends fuel life by up to 5 years"
  },
  {
    id: 2,
    name: "Water Treatment Solutions",
    description: "Customized water treatment systems for commercial and industrial applications.",
    image: "https://images.unsplash.com/photo-1611273138304-dce21dcc525d?auto=format&fit=crop&w=800&q=80",
    features: ["Chemical-free options", "Modular design", "Energy efficient"],
    eco: "Reduces water waste by up to 40%"
  },
  {
    id: 3,
    name: "Fuel Tank Cleaning",
    description: "Professional tank cleaning services that remove sludge, water, and contaminants without tank entry.",
    image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=800&q=80",
    features: ["No tank entry required", "Minimal downtime", "Complete documentation"],
    eco: "Prevents fuel-related equipment failures"
  }
];

const ProductShowcase = () => {
  return (
    <section id="products" className="bg-machinery-light py-16 md:py-24">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="section-title">Our Solutions</h2>
          <p className="text-lg text-machinery-dark/80 max-w-3xl mx-auto">
            Discover our range of innovative fuel and water treatment solutions designed to protect your assets while minimizing environmental impact.
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
            View All Solutions <ChevronRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
