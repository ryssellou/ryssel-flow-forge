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
    <section className="min-h-screen flex items-center justify-center bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12">
          {/* Profile Picture */}
          <div className="flex-shrink-0 order-1 lg:order-2">
            <div className="relative">
              <img 
                src="/profile-pic-ryssel-calaor.png" 
                alt="Ryssel Calaor - AI Automation Specialist"
                className="w-[416px] h-[416px] lg:w-[500px] lg:h-[500px] object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute -inset-4 bg-primary/10 rounded-3xl blur-xl opacity-50 animate-pulse"></div>
            </div>
          </div>

          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left order-2 lg:order-1 max-w-lg">
            {/* Greeting */}
            <div className="mb-8">
              <p className="text-2xl text-muted-foreground mb-4 font-light">Hello!</p>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-light text-foreground tracking-tight mb-4">
                I'm <span className="font-bold text-foreground relative inline-block animate-pulse">Ryssel Calaor</span>
              </h1>
              
              <p className="text-xl sm:text-2xl mb-8 text-foreground font-semibold relative inline-block">
                AI Automation Specialist
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-16">
              <Button
                size="lg"
                onClick={() => scrollToSection("#contact")}
                className="click-effect hover:scale-105 transition-all duration-300 hover:shadow-lg"
              >
                <Mail className="w-4 h-4 mr-2" />
                Get In Touch
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => scrollToSection("#portfolio")}
                className="click-effect hover:scale-105 transition-all duration-300 hover:shadow-lg"
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
                className="text-muted-foreground hover:text-foreground transition-smooth p-2 hover:scale-110 click-effect hover:shadow-lg rounded-full"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="mailto:rysselloucalaor@gmail.com"
                className="text-muted-foreground hover:text-foreground transition-smooth p-2 hover:scale-110 click-effect hover:shadow-lg rounded-full"
              >
                <Mail className="w-6 h-6" />
              </a>
              <a
                href="https://www.onlinejobs.ph/jobseekers/info/4489746"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-smooth p-2 hover:scale-110 click-effect hover:shadow-lg rounded-full"
              >
                <ExternalLink className="w-6 h-6" />
              </a>
            </div>

            {/* Scroll Down Indicator */}
            <button
              onClick={() => scrollToSection("#tools")}
              className="animate-bounce text-muted-foreground hover:text-foreground transition-smooth click-effect lg:block hidden"
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