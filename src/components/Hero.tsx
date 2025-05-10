
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative h-screen bg-gradient-to-br from-machinery-primary to-machinery-secondary overflow-hidden">
      <div
  className="absolute inset-0 bg-cover bg-center opacity-15 mix-blend-overlay"
  style={{ backgroundImage: `url('public/assets/simon-kadula-8gr6bObQLOI-unsplash.jpg')` }}
></div>
      
      <div className="px-12 sm:px-6 lg:px-12 relative z-10 h-full items-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 pt-16">
          <div className="text-white animate-fade-in pt-40">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Reshaping the Future of <br />
              <span className="text-machinery-light">Sustainable Manufacturing</span>
            </h1>
            <p className="text-lg md:text-xl mb-8 opacity-90 max-w-lg">
            Ecostel transforms manufacturing with sustainable solutions that enhance efficiency and minimize environmental impact.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button className="bg-white text-machinery-primary hover:bg-machinery-light text-lg px-8 py-6">
                Explore Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              {/* <Button variant="outline" className="border-white text-white hover:bg-white/10 text-lg px-8 py-6">
                Our Services
              </Button> */}
            </div>
          </div>

          <div className="hidden md:flex justify-center relative animate-fade-in mt-[5rem]">
            <div className="relative rounded-lg overflow-hidden shadow-2xl">
              {/* <img 
                src="public/assets/minku-kang-aCniNTiIFd8-unsplash.jpg" 
                alt="Fuel filtration equipment" 
                className="rounded-lg object-cover opacity-90"
              /> */}
              <video 
                  src="public/assets/19791092-uhd_3840_2160_60fps.mp4" 
                  className="rounded-lg object-cover opacity-80" 
                  autoPlay 
                  loop 
                  muted 
                  playsInline 
                />
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-machinery-light to-transparent"></div>
    </section>
  );
};

export default Hero;
