
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

const ContactForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log("Form submitted:", formData);
    
    // Show success message
    toast({
      title: "Message Sent",
      description: "We'll get back to you as soon as possible.",
      duration: 5000,
    });
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      message: "",
    });
  };

  return (
    <section id="contact" className="bg-machinery-light py-16 md:py-24">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="section-title">Contact Us</h2>
          <p className="text-lg text-machinery-dark/80 max-w-3xl mx-auto">
            Have questions about our solutions? Need a site assessment? Our team is ready to help you solve your fuel and water challenges.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-bold text-machinery-primary mb-6">Get in Touch</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-machinery-dark">
                    Your Name *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="border-machinery-secondary/30 focus:border-machinery-primary"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-machinery-dark">
                    Email Address *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="border-machinery-secondary/30 focus:border-machinery-primary"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium text-machinery-dark">
                    Phone Number
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="border-machinery-secondary/30 focus:border-machinery-primary"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="company" className="text-sm font-medium text-machinery-dark">
                    Company Name
                  </label>
                  <Input
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="border-machinery-secondary/30 focus:border-machinery-primary"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-machinery-dark">
                  Your Message *
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="border-machinery-secondary/30 focus:border-machinery-primary resize-none"
                />
              </div>

              <Button type="submit" className="w-full bg-machinery-primary hover:bg-machinery-highlight text-white py-6">
                Send Message
              </Button>
            </form>
          </div>

          <div>
            <div className="bg-gradient-to-br from-machinery-primary to-machinery-secondary rounded-lg shadow-lg p-8 text-white mb-8">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <Mail className="h-6 w-6 mr-4 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Email Us</h4>
                    <p>info@ecostel.co</p>
                    <p>support@ecostel.co</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone className="h-6 w-6 mr-4 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Call Us</h4>
                    <p>Main: +1 (800) 967-8357</p>
                    <p>Support: +1 (813) 555-1234</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <MapPin className="h-6 w-6 mr-4 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Visit Us</h4>
                    <p>4908 Tampa West Blvd</p>
                    <p>Tampa, FL 33634</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Clock className="h-6 w-6 mr-4 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Business Hours</h4>
                    <p>Monday-Friday: 8am - 5pm</p>
                    <p>24/7 Emergency Service Available</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="rounded-lg overflow-hidden shadow-lg h-64 sm:h-80">
              {/* This would be a Google Map in a real implementation */}
              <div className="w-full h-full bg-machinery-secondary/30 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="h-10 w-10 text-machinery-primary mx-auto mb-2" />
                  <p className="text-machinery-primary font-medium">Map placeholder - Would be a real map in production</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
