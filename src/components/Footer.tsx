
import { Facebook, Twitter, Linkedin, Instagram, Youtube, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Footer = () => {
  return (
    <footer className="bg-machinery-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center mb-6">
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-white"
              >
                <rect width="40" height="40" rx="8" fill="currentColor" />
                <path
                  d="M10 20H30M20 10V30"
                  stroke="#2F4F4F"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
              </svg>
              <span className="ml-2 text-xl font-display font-bold">
                GreenMach
              </span>
            </div>
            <p className="mb-6 opacity-80">
              Advanced machinery solutions with a commitment to environmental sustainability.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-machinery-light transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-white hover:text-machinery-light transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-white hover:text-machinery-light transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-white hover:text-machinery-light transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-white hover:text-machinery-light transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">Products</h4>
            <ul className="space-y-3">
              <li><a href="#" className="opacity-80 hover:opacity-100 transition-opacity">CNC Machines</a></li>
              <li><a href="#" className="opacity-80 hover:opacity-100 transition-opacity">Robotic Systems</a></li>
              <li><a href="#" className="opacity-80 hover:opacity-100 transition-opacity">Laser Cutters</a></li>
              <li><a href="#" className="opacity-80 hover:opacity-100 transition-opacity">3D Printers</a></li>
              <li><a href="#" className="opacity-80 hover:opacity-100 transition-opacity">Assembly Equipment</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">Company</h4>
            <ul className="space-y-3">
              <li><a href="#about" className="opacity-80 hover:opacity-100 transition-opacity">About Us</a></li>
              <li><a href="#" className="opacity-80 hover:opacity-100 transition-opacity">Sustainability</a></li>
              <li><a href="#" className="opacity-80 hover:opacity-100 transition-opacity">Careers</a></li>
              <li><a href="#" className="opacity-80 hover:opacity-100 transition-opacity">News & Events</a></li>
              <li><a href="#contact" className="opacity-80 hover:opacity-100 transition-opacity">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">Newsletter</h4>
            <p className="opacity-80 mb-4">
              Subscribe to our newsletter for the latest product updates and industry news.
            </p>
            <div className="flex gap-2">
              <Input 
                type="email" 
                placeholder="Your email" 
                className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
              />
              <Button className="bg-machinery-light text-machinery-primary hover:bg-white">
                <Mail className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="opacity-70 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} GreenMach. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm opacity-70">
            <a href="#" className="hover:opacity-100 transition-opacity">Privacy Policy</a>
            <a href="#" className="hover:opacity-100 transition-opacity">Terms of Service</a>
            <a href="#" className="hover:opacity-100 transition-opacity">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
