import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import KeyStrength from "@/components/KeyStrength";
import Vision from "@/components/Vision";
import Services from "@/components/Services";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <KeyStrength />
      <Vision />
      <Services />
      <Footer />
    </div>
  );
};

export default Index;
