import { useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Tools from "@/components/Tools";
import About from "@/components/About";
import Services from "@/components/Services";
import Experience from "@/components/Experience";
import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import LoadingScreen from "@/components/LoadingScreen";

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  if (isLoading) {
    return <LoadingScreen onLoadingComplete={() => setIsLoading(false)} />;
  }

  return (
    <div className="min-h-screen bg-background pt-16 animate-fade-in">
      <Header />
      <Hero />
      <Tools />
      <About />
      <Services />
      <Experience />
      <Portfolio />
      <Testimonials />
      <Education />
      <Contact />
    </div>
  );
};

export default Index;
