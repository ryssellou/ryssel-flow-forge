import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import personalPicture from "@/assets/personal-picture.jpeg";

const Hero = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-primary relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-72 h-72 bg-white rounded-full -translate-x-36 -translate-y-36"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full translate-x-48 translate-y-48"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-white rounded-full -translate-x-32 -translate-y-32"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 text-white">
          {/* Personal Photo */}
          <div className="flex-shrink-0">
            <div className="w-64 h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-white/20 shadow-2xl">
              <img 
                src={personalPicture} 
                alt="Ry Calaor - AI Integration & Automation Specialist"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          {/* Hero Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 animate-fade-in">
              <span className="block">Ryssel Lou</span>
              <span className="block bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
                C. Calaor
              </span>
            </h1>
          
          <p className="text-xl sm:text-2xl lg:text-3xl mb-4 text-white/90 font-medium">
            AI Integration & Automation Specialist
          </p>
          
          <p className="text-lg sm:text-xl mb-8 text-white/80 max-w-3xl mx-auto">
            Computer Science graduate in Intelligent Systems, driven to solve real-world problems by harnessing automation and AI.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              variant="hero"
              size="lg"
              onClick={() => scrollToSection("#contact")}
              className="bg-white text-primary hover:bg-white/90"
            >
              <Mail className="w-5 h-5" />
              Get In Touch
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => scrollToSection("#about")}
              className="border-white text-white hover:bg-white hover:text-primary"
            >
              Learn More
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-12">
            <a
              href="https://www.linkedin.com/in/ryssel-calaor"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/80 hover:text-white transition-smooth p-2 hover:scale-110"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="mailto:rysselloucalaor@gmail.com"
              className="text-white/80 hover:text-white transition-smooth p-2 hover:scale-110"
            >
              <Mail className="w-6 h-6" />
            </a>
            <a
              href="https://www.onlinejobs.ph/jobseekers/info/4489746"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/80 hover:text-white transition-smooth p-2 hover:scale-110"
            >
              <Github className="w-6 h-6" />
            </a>
          </div>

            {/* Scroll Down Indicator */}
            <button
              onClick={() => scrollToSection("#about")}
              className="animate-bounce text-white/80 hover:text-white transition-smooth"
            >
              <ArrowDown className="w-8 h-8 mx-auto" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;