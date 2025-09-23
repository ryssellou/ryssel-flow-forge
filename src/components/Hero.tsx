import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail, ExternalLink } from "lucide-react";
import personalPicture from "@/assets/ry-calaor.png";

const Hero = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-background relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-16 text-center lg:text-left">
          {/* Personal Photo */}
          <div className="flex-shrink-0">
            <div className="w-64 h-64 lg:w-72 lg:h-72 rounded-full overflow-hidden shadow-xl bg-gradient-to-br from-muted to-background p-1">
              <div className="w-full h-full rounded-full overflow-hidden">
                <img 
                  src={personalPicture} 
                  alt="Ryssel Calaor - AI Automation Specialist"
                  className="w-full h-full object-cover grayscale-[20%] contrast-110"
                />
              </div>
            </div>
          </div>
          
          {/* Hero Content */}
          <div className="max-w-2xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light mb-6 text-foreground tracking-tight">
              <span className="block font-normal">Ryssel</span>
              <span className="block font-bold">Calaor</span>
            </h1>
          
            <p className="text-xl sm:text-2xl mb-8 text-muted-foreground font-light">
              AI Automation Specialist
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-16">
              <Button
                size="lg"
                onClick={() => scrollToSection("#contact")}
                className="click-effect"
              >
                <Mail className="w-4 h-4 mr-2" />
                Get In Touch
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => scrollToSection("#portfolio")}
                className="click-effect"
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                My Works
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex justify-center lg:justify-start space-x-6 mb-12">
              <a
                href="https://www.linkedin.com/in/ryssel-calaor"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-smooth p-2 hover:scale-110 click-effect"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:rysselloucalaor@gmail.com"
                className="text-muted-foreground hover:text-foreground transition-smooth p-2 hover:scale-110 click-effect"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a
                href="https://www.onlinejobs.ph/jobseekers/info/4489746"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-smooth p-2 hover:scale-110 click-effect"
              >
                <ExternalLink className="w-5 h-5" />
              </a>
            </div>

            {/* Scroll Down Indicator */}
            <button
              onClick={() => scrollToSection("#tools")}
              className="animate-bounce text-muted-foreground hover:text-foreground transition-smooth click-effect"
            >
              <ArrowDown className="w-6 h-6 mx-auto" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;