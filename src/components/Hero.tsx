import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail, ExternalLink } from "lucide-react";

const Hero = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-hero relative overflow-hidden">
      {/* Premium Background Elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      
      <div className="container mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-16">
          {/* Profile Picture - Premium */}
          <div className="flex-shrink-0 order-1 lg:order-2 animate-fade-in">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-primary rounded-3xl blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-700"></div>
              <div className="absolute -inset-2 bg-gradient-premium rounded-3xl blur-xl opacity-20"></div>
              <img 
                src="/profile-pic-ryssel-calaor.png" 
                alt="Ryssel Calaor - AI Automation Specialist"
                className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[500px] lg:h-[500px] object-cover rounded-2xl shadow-premium ring-1 ring-border/20 group-hover:scale-105 transition-all duration-700 group-hover:shadow-glow"
              />
              <div className="absolute inset-0 rounded-2xl bg-gradient-shine opacity-0 group-hover:opacity-100 transition-opacity duration-700" style={{ backgroundSize: '200% 100%' }}></div>
            </div>
          </div>

          {/* Text Content - Premium */}
          <div className="flex-1 text-center lg:text-left order-2 lg:order-1 max-w-lg animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            {/* Greeting */}
            <div className="mb-8 sm:mb-10">
              <p className="text-xl sm:text-2xl md:text-3xl text-muted-foreground mb-4 sm:mb-5 font-light tracking-wide">Hello!</p>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-foreground tracking-tight mb-4 sm:mb-5">
                I'm <span className="font-bold text-foreground relative inline-block bg-gradient-primary bg-clip-text text-transparent animate-glow">Ryssel Calaor</span>
              </h1>
              
              <p className="text-xl sm:text-2xl md:text-3xl mb-8 sm:mb-10 text-foreground font-semibold relative inline-block">
                <span className="relative">
                  AI Automation Specialist
                  <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-primary rounded-full"></span>
                </span>
              </p>
            </div>

            {/* CTA Buttons - Premium */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-10 sm:mb-12 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              <Button
                size="lg"
                onClick={() => scrollToSection("#contact")}
                className="group relative overflow-hidden bg-gradient-premium hover:scale-105 transition-all duration-500 hover:shadow-premium w-full sm:w-auto h-12 sm:h-14 text-base sm:text-lg"
              >
                <span className="absolute inset-0 bg-gradient-shine animate-shimmer"></span>
                <Mail className="w-5 h-5 mr-2 relative z-10 group-hover:rotate-12 transition-transform duration-300" />
                <span className="relative z-10">Get In Touch</span>
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => scrollToSection("#portfolio")}
                className="group glass-effect hover:scale-105 transition-all duration-500 hover:shadow-lg w-full sm:w-auto h-12 sm:h-14 text-base sm:text-lg border-2"
              >
                <ExternalLink className="w-4 h-4 mr-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                My Works
              </Button>
            </div>

            {/* Social Links - Premium */}
            <div className="flex gap-5 justify-center lg:justify-start animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
              <a
                href="https://www.linkedin.com/in/ryssel-calaor"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative p-4 rounded-xl glass-effect hover:bg-primary/10 transition-all duration-500 hover:scale-110 hover:shadow-glow"
              >
                <Linkedin className="w-6 h-6 sm:w-7 sm:h-7 text-foreground group-hover:text-primary transition-colors duration-300 group-hover:rotate-12 transition-transform" />
              </a>
              <a
                href="mailto:rysselloucalaor@gmail.com"
                className="group relative p-4 rounded-xl glass-effect hover:bg-primary/10 transition-all duration-500 hover:scale-110 hover:shadow-glow"
              >
                <Mail className="w-6 h-6 sm:w-7 sm:h-7 text-foreground group-hover:text-primary transition-colors duration-300 group-hover:rotate-12 transition-transform" />
              </a>
              <a
                href="https://linktr.ee/rysselcalaor"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative p-4 rounded-xl glass-effect hover:bg-primary/10 transition-all duration-500 hover:scale-110 hover:shadow-glow"
              >
                <ExternalLink className="w-6 h-6 sm:w-7 sm:h-7 text-foreground group-hover:text-primary transition-colors duration-300 group-hover:rotate-12 transition-transform" />
              </a>
            </div>
          </div>

        </div>
      </div>
      
      {/* Scroll Down Indicator */}
      <div className="absolute bottom-10 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-fade-in z-50" style={{ animationDelay: '1s' }}>
        <button
          onClick={() => scrollToSection("#tools")}
          className="group flex flex-col items-center gap-3 p-3 hover:scale-110 transition-transform duration-500"
        >
          <span className="text-sm sm:text-base text-muted-foreground group-hover:text-primary transition-colors duration-300 tracking-wider font-medium">Scroll Down</span>
          <ArrowDown className="w-6 h-6 sm:w-7 sm:h-7 text-primary animate-bounce" />
        </button>
      </div>
    </section>
  );
};

export default Hero;