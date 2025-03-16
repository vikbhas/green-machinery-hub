
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProductShowcase from "@/components/ProductShowcase";
import Services from "@/components/Services";
import About from "@/components/About";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-machinery-light">
      <Navbar />
      <Hero />
      <ProductShowcase />
      <Services />
      <About />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Index;
