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
    <section className="min-h-screen flex items-center justify-center bg-background relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <img 
          src={personalPicture} 
          alt="Ryssel Calaor - AI Automation Specialist"
          className="w-full h-full object-cover opacity-10 dark:opacity-5"
        />
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          {/* Greeting */}
          <div className="mb-8">
            <p className="text-xl text-muted-foreground mb-2">Hello!</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light text-foreground tracking-tight">
              I'm <span className="font-bold text-primary">Ryssel Calaor</span>
            </h1>
          </div>
          
            <p className="text-xl sm:text-2xl mb-8 text-muted-foreground font-light">
              AI Automation Specialist
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
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
            <div className="flex justify-center space-x-6 mb-12">
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
    </section>
  );
};

export default Hero;