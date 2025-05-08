
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-machinery-primary to-machinery-secondary py-20 overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1500&q=80')] bg-cover bg-center opacity-15 mix-blend-overlay"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="text-white animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Sustainable Fuel <br />
              <span className="text-machinery-light">& Water Solutions</span>
            </h1>
            <p className="text-lg md:text-xl mb-8 opacity-90 max-w-lg">
              Ecostel provides innovative fuel polishing and water treatment solutions 
              that extend equipment life, reduce maintenance costs, and minimize 
              environmental impact.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button className="bg-white text-machinery-primary hover:bg-machinery-light text-lg px-8 py-6">
                Explore Solutions
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white/10 text-lg px-8 py-6">
                Our Services
              </Button>
            </div>
          </div>

          <div className="hidden md:block relative animate-fade-in">
            <div className="relative rounded-lg overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1590559899731-a382839e5549?auto=format&fit=crop&w=1200&q=80" 
                alt="Fuel filtration equipment" 
                className="w-full h-auto rounded-lg object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-machinery-primary/80 to-transparent p-6">
                <div className="bg-white/95 rounded-lg p-4 max-w-xs backdrop-blur-sm">
                  <p className="text-machinery-primary font-semibold mb-1">Featured Solution</p>
                  <h3 className="text-machinery-dark text-xl font-bold">Fuel Polishing Systems</h3>
                  <p className="text-machinery-dark/70 text-sm mt-1">Eliminate microbial contamination & extend fuel life</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-machinery-light to-transparent"></div>
    </section>
  );
};

export default Hero;
