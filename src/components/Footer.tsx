
import { Facebook, Twitter, Linkedin, Instagram, Youtube, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Footer = () => {
  return (
    <footer className="bg-machinery-primary text-white">
      <div className="mx-auto px-4 sm:px-6 lg:px-12 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center mb-6">
              <img src="public/assets/logofooter.png" className="h-14"></img>
              <span className="ml-2 text-3xl font-display font-bold">
                Ecostel
              </span>
            </div>
            <p className="mb-6 opacity-80">
            Reshaping the Future of sustainable Manufacturing
            </p>
            <div className="flex space-x-4">
              {/* <a href="#" className="text-white hover:text-machinery-light transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-white hover:text-machinery-light transition-colors">
                <Twitter size={20} />
              </a> */}
              {/* <a href="#" className="text-white hover:text-machinery-light transition-colors">
                <Linkedin size={20} />
              </a> */}
              {/* <a href="#" className="text-white hover:text-machinery-light transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-white hover:text-machinery-light transition-colors">
                <Youtube size={20} />
              </a> */}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">Services</h4>
            <ul className="space-y-3">
              <li><a href="#" className="opacity-80 hover:opacity-100 transition-opacity">CNC Machining</a></li>
              <li><a href="#" className="opacity-80 hover:opacity-100 transition-opacity">Sheet Metal and Tube Fabrication</a></li>
              <li><a href="#" className="opacity-80 hover:opacity-100 transition-opacity">Value Added Solutions</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">Company</h4>
            <ul className="space-y-3">
              <li><a href="#about" className="opacity-80 hover:opacity-100 transition-opacity">About Us</a></li>
              <li><a href="#" className="opacity-80 hover:opacity-100 transition-opacity">Our Customers</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact</h4>
            <ul className="space-y-3">
              <li>Location: Anna Nagar West, Chennai - 40</li>
              <li>Phone: +91-9345802241</li>
              <li>Email: Info@ecostel.co</li>
              <li>
              <a href="https://www.linkedin.com/company/ecostel-engineering/">
              <svg className="h-8 w-8 pt-1 rounded-md text-white" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M44.45 0H3.55A3.5 3.5 0 0 0 0 3.46v41.07A3.5 3.5 0 0 0 3.54 48h40.9A3.51 3.51 0 0 0 48 44.54V3.46A3.5 3.5 0 0 0 44.45 0Zm-30.2 40.9H7.11V18h7.12v22.9Zm-3.57-26.03a4.13 4.13 0 1 1-.02-8.26 4.13 4.13 0 0 1 .02 8.26ZM40.9 40.9H33.8V29.77c0-2.66-.05-6.08-3.7-6.08-3.7 0-4.27 2.9-4.27 5.89V40.9h-7.1V18h6.82v3.12h.1c.94-1.8 3.26-3.7 6.72-3.7 7.21 0 8.54 4.74 8.54 10.91V40.9Z"
                    fill="currentColor"></path>
            </svg>
            </a>
            </li>
              
            </ul>
          </div>

          {/* <div>
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
          </div> */}
        </div>

        <div className="border-t border-white/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="opacity-70 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Ecostel. All rights reserved.
          </p>
          {/* <div className="flex space-x-6 text-sm opacity-70">
            <a href="#" className="hover:opacity-100 transition-opacity">Privacy Policy</a>
            <a href="#" className="hover:opacity-100 transition-opacity">Terms of Service</a>
            <a href="#" className="hover:opacity-100 transition-opacity">Sitemap</a>
          </div> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
