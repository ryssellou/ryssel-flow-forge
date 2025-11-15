import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Linkedin, ExternalLink } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "rysselloucalaor@gmail.com",
      href: "mailto:rysselloucalaor@gmail.com",
      description: "Send me an email anytime"
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+63 9760317437",
      href: "tel:+639760317437",
      description: "Call or text me"
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Cavite, Philippines",
      href: "#",
      description: "Based in Cavite"
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      value: "ryssel-calaor",
      href: "https://www.linkedin.com/in/ryssel-calaor",
      description: "Connect with me professionally"
    }
  ];

  return (
    <section id="contact" className="py-20 sm:py-24 md:py-28 bg-section-bg relative overflow-hidden">
      {/* Premium Background Effects */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]"></div>
      <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="text-center mb-16 sm:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6">
            Let's Work Together
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to automate your business processes? Let's discuss how we can work together.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {contactInfo.map((contact, index) => {
            const contactRef = useScrollAnimation('scale-in', index * 100);
            return (
              <div key={index} ref={contactRef} className="opacity-0">
                <Card className="p-6 sm:p-8 bg-card border border-border/50 hover:shadow-premium transition-all duration-500 click-effect text-center h-full">
                  <div className="space-y-4">
                    <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-primary/10 rounded-full mx-auto flex items-center justify-center">
                      <contact.icon className="w-7 h-7 sm:w-8 sm:h-8 text-primary" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-base sm:text-lg font-medium text-foreground">{contact.title}</h3>
                      <p className="text-sm text-muted-foreground">{contact.description}</p>
                      {contact.href !== "#" ? (
                        <a
                          href={contact.href}
                          target={contact.href.startsWith("http") ? "_blank" : undefined}
                          rel={contact.href.startsWith("http") ? "noopener noreferrer" : undefined}
                          className="inline-flex items-center text-sm font-medium text-foreground hover:text-primary transition-all duration-300"
                        >
                          {contact.value}
                          {contact.href.startsWith("http") && <ExternalLink className="w-3 h-3 ml-1" />}
                        </a>
                      ) : (
                        <p className="text-sm font-medium text-foreground">{contact.value}</p>
                      )}
                    </div>
                  </div>
                </Card>
              </div>
            );
          })}
        </div>

        <div className="text-center space-y-6 max-w-2xl mx-auto">
          <h3 className="text-xl sm:text-2xl font-medium text-foreground">Ready to Get Started?</h3>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
            I'm always interested in discussing new opportunities and projects. 
            Whether you need automation solutions, AI integration, or technical consultation, 
            I'd love to hear about your challenges.
          </p>

          <Button
            size="lg"
            className="click-effect w-full sm:w-auto hover:scale-105 transition-all duration-300"
            onClick={() => window.location.href = "mailto:rysselloucalaor@gmail.com"}
          >
            <Mail className="w-4 h-4 mr-2" />
            Get In Touch
          </Button>

          <div className="mt-12 pt-8 border-t border-border">
            <p className="text-muted-foreground text-sm">
              © 2024 Ryssel Calaor. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;