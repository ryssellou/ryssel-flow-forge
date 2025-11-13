import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Linkedin, ExternalLink } from "lucide-react";

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
    <section id="contact" className="py-12 sm:py-16 md:py-20 bg-section-bg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4 sm:mb-6">
            Let's Work Together
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
            Ready to automate your business processes? Let's discuss how we can work together.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-10 sm:mb-12">
          {contactInfo.map((contact, index) => (
            <Card key={index} className="p-4 sm:p-5 md:p-6 bg-card border border-border hover:shadow-md transition-smooth click-effect text-center">
              <div className="space-y-3 sm:space-y-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-muted rounded-full mx-auto flex items-center justify-center">
                  <contact.icon className="w-5 h-5 sm:w-6 sm:h-6 text-muted-foreground" />
                </div>
                <div className="space-y-1 sm:space-y-2">
                  <h3 className="text-sm sm:text-base font-medium text-foreground">{contact.title}</h3>
                  <p className="text-xs text-muted-foreground">{contact.description}</p>
                  {contact.href !== "#" ? (
                    <a
                      href={contact.href}
                      target={contact.href.startsWith("http") ? "_blank" : undefined}
                      rel={contact.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="inline-flex items-center text-sm font-medium text-foreground hover:text-primary transition-smooth"
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
          ))}
        </div>

        <div className="text-center space-y-4 sm:space-y-6 max-w-2xl mx-auto px-4">
          <h3 className="text-lg sm:text-xl font-medium text-foreground">Ready to Get Started?</h3>
          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
            I'm always interested in discussing new opportunities and projects. 
            Whether you need automation solutions, AI integration, or technical consultation, 
            I'd love to hear about your challenges.
          </p>

          <Button
            size="lg"
            className="click-effect w-full sm:w-auto"
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