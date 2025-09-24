import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail, ExternalLink } from "lucide-react";
import personalPicture from "@/assets/ryssel-profile.png";

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
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left">
            {/* Greeting */}
            <div className="mb-8">
              <p className="text-2xl text-muted-foreground mb-4 font-light">Hello!</p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light text-foreground tracking-tight mb-4">
                I'm <span className="font-bold bg-gradient-to-r from-primary via-primary-variant to-primary bg-clip-text text-transparent animate-pulse shadow-lg" style={{
                  textShadow: '0 0 20px hsl(var(--primary) / 0.5)',
                  WebkitTextStroke: '1px hsl(var(--primary) / 0.3)'
                }}>Ryssel Calaor</span>
              </h1>
              
              <p className="text-2xl sm:text-3xl mb-8 text-foreground font-bold bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
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

          {/* Profile Picture */}
          <div className="flex-1 flex justify-center lg:justify-end">
            <div className="relative">
              <img 
                src={personalPicture} 
                alt="Ryssel Calaor - AI Automation Specialist"
                className="w-full max-w-md lg:max-w-lg xl:max-w-xl h-auto object-cover rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-500 animate-fade-in"
              />
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-primary-variant/20 rounded-3xl blur-xl opacity-30 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;