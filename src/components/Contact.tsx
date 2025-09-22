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
    <section id="contact" className="py-20 bg-gradient-primary text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-72 h-72 bg-white rounded-full translate-x-36 -translate-y-36"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full -translate-x-48 translate-y-48"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Let's Work Together
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Ready to automate your business processes and integrate AI solutions? 
            Let's discuss how I can help transform your workflows.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {contactInfo.map((contact, index) => (
            <Card key={index} className="p-6 bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 transition-smooth">
              <div className="text-center space-y-4">
                <div className="w-12 h-12 bg-white/20 rounded-full mx-auto flex items-center justify-center">
                  <contact.icon className="w-6 h-6" />
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold">{contact.title}</h3>
                  <p className="text-sm text-white/80">{contact.description}</p>
                  {contact.href !== "#" ? (
                    <a
                      href={contact.href}
                      target={contact.href.startsWith("http") ? "_blank" : undefined}
                      rel={contact.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="inline-flex items-center text-sm font-medium hover:underline"
                    >
                      {contact.value}
                      {contact.href.startsWith("http") && <ExternalLink className="w-3 h-3 ml-1" />}
                    </a>
                  ) : (
                    <p className="text-sm font-medium">{contact.value}</p>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center space-y-6">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
            <p className="text-white/90 mb-6">
              I'm always interested in discussing new opportunities and projects. 
              Whether you need automation solutions, AI integration, or technical consultation, 
              I'd love to hear about your challenges and how we can solve them together.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="hero"
              size="lg"
              className="bg-white text-primary hover:bg-white/90"
              onClick={() => window.location.href = "mailto:rysselloucalaor@gmail.com"}
            >
              <Mail className="w-5 h-5" />
              Send Email
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-primary"
              onClick={() => window.open("https://www.linkedin.com/in/ryssel-calaor", "_blank")}
            >
              <Linkedin className="w-5 h-5" />
              Connect on LinkedIn
            </Button>
          </div>

          <div className="mt-8 pt-8 border-t border-white/20">
            <p className="text-white/70 text-sm">
              © 2024 Ryssel Lou C. Calaor. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;