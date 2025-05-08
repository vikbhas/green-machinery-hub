
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/" className="flex items-center">
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-machinery-primary"
              >
                <rect width="40" height="40" rx="8" fill="currentColor" />
                <path
                  d="M10 20H30M20 10V30"
                  stroke="white"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
              </svg>
              <span className="ml-2 text-xl font-display font-bold text-machinery-primary">
                Ecostel
              </span>
            </a>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex space-x-8">
            <a
              href="#products"
              className="text-machinery-dark hover:text-machinery-primary font-medium transition-colors"
            >
              Products
            </a>
            <a
              href="#services"
              className="text-machinery-dark hover:text-machinery-primary font-medium transition-colors"
            >
              Services
            </a>
            <a
              href="#about"
              className="text-machinery-dark hover:text-machinery-primary font-medium transition-colors"
            >
              About Us
            </a>
            <a
              href="#contact"
              className="text-machinery-dark hover:text-machinery-primary font-medium transition-colors"
            >
              Contact
            </a>
          </nav>

          {/* Phone and contact button */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-center text-machinery-primary">
              <Phone size={18} />
              <span className="ml-2 font-medium">+1 (800) 967-8357</span>
            </div>
            <Button className="bg-machinery-primary hover:bg-machinery-highlight text-white">
              Get a Quote
            </Button>
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
          <div className="md:hidden py-4 border-t border-gray-200 animate-fade-in">
            <div className="space-y-4 py-2">
              <a
                href="#products"
                className="block text-machinery-dark hover:text-machinery-primary font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Products
              </a>
              <a
                href="#services"
                className="block text-machinery-dark hover:text-machinery-primary font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </a>
              <a
                href="#about"
                className="block text-machinery-dark hover:text-machinery-primary font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                About Us
              </a>
              <a
                href="#contact"
                className="block text-machinery-dark hover:text-machinery-primary font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </a>
              <div className="pt-2 border-t border-gray-200">
                <div className="flex items-center text-machinery-primary mb-4">
                  <Phone size={18} />
                  <span className="ml-2 font-medium">+1 (800) 967-8357</span>
                </div>
                <Button className="w-full bg-machinery-primary hover:bg-machinery-highlight text-white">
                  Get a Quote
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
