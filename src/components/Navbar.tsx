
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/" className="flex items-center">
              <img
                width="200"
                height="200"
                src="assets/Logo.jpg"
                className="text-machinery-primary"
              >
              </img>
            </a>
          

          {/* Desktop navigation */}
          <div className="ml-5 font-roboto text-lg">
          <nav className="hidden md:flex space-x-9">
            <a
              href="#"
              className="hover:text-machinery-dark text-machinery-primary font-medium transition-colors"
            >
              Home
            </a>
            <a
              href="#about"
              className="hover:text-machinery-dark text-machinery-primary font-medium transition-colors"
            >
              About Us
            </a>
            <a
              href="#services"
              className="hover:text-machinery-dark text-machinery-primary font-medium transition-colors"
            >
              Services
            </a>
            <a
              href="#contact"
              className="hover:text-machinery-dark text-machinery-primary font-medium transition-colors"
            >
              Contact
            </a>
          </nav>
          </div>
          </div>
          {/* Phone and contact button */}
          <div className="hidden md:flex items-center space-x-4">
          <a
              href="#become-supplier"
              className="text-machinery-primary font-medium text-3xl transition-colors"
            >
              <Button> Become a Supplier</Button>
            </a>
            <div className="flex items-center text-machinery-primary">
              <Phone size={18} />
              <span className="ml-2 font-medium">+91-9345802241</span>
            </div>
            {/* <Button className="bg-machinery-primary hover:bg-machinery-highlight text-white">
              Get a Quote
            </Button> */}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-machinery-dark hover:text-machinery-primary focus:outline-none"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t font-roboto border-gray-200 animate-fade-in">
            <div className="space-y-4 py-2">
              <a
                href="#home"
                className="block  hover:text-machinery-darktext-machinery-primary font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </a>
              <a
                href="#about"
                className="block  hover:text-machinery-dark text-machinery-primary font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                About Us
              </a>
              <a
                href="#services"
                className="block  hover:text-machinery-dark text-machinery-primary font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </a>
              <a
                href="#contact"
                className="block  hover:text-machinery-dark text-machinery-primary font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </a>
              <div className="pt-2 border-t border-gray-200">
                <div className="flex items-center text-machinery-primary mb-4">
                  <Phone size={18} />
                  <span className="ml-2 font-medium">+91-9345802241</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
