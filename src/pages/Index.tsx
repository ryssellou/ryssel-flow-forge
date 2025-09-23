import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Tools from "@/components/Tools";
import About from "@/components/About";
import Services from "@/components/Services";
import Experience from "@/components/Experience";
import Portfolio from "@/components/Portfolio";
import Education from "@/components/Education";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Tools />
      <About />
      <Services />
      <Experience />
      <Portfolio />
      <Education />
      <Contact />
    </div>
  );
};

export default Index;
