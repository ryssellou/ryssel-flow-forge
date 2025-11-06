import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Zap, Settings, Database, Workflow, Code, Brain, Building2 } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Zap,
      title: "Zapier Automation",
      description: "Custom workflow automation using Zapier to connect your favorite apps and streamline business processes.",
      features: ["Multi-app integration", "Custom triggers", "Data synchronization", "Workflow optimization"]
    },
    {
      icon: Settings,
      title: "Make (Integromat) Solutions",
      description: "Advanced automation scenarios using Make platform for complex business logic and data processing.",
      features: ["Visual scenario building", "API integrations", "Error handling", "Real-time monitoring"]
    },
    {
      icon: Workflow,
      title: "n8n Workflows",
      description: "Self-hosted automation solutions with n8n for complete control over your automation infrastructure.",
      features: ["Custom nodes", "Self-hosted", "Open source", "Advanced logic"]
    },
    {
      icon: Building2,
      title: "GoHighLevel Automation",
      description: "All-in-one CRM and marketing automation solutions using GoHighLevel platform for agencies and businesses.",
      features: ["CRM automation", "Marketing funnels", "Client management", "Pipeline automation"]
    },
    {
      icon: Database,
      title: "API Integration",
      description: "Seamless integration of various APIs to connect different systems and enable data flow.",
      features: ["REST API integration", "Webhook setup", "Data transformation", "Authentication handling"]
    },
    {
      icon: Code,
      title: "Google Apps Script",
      description: "Custom automation solutions using Google Apps Script for Google Workspace and related services.",
      features: ["Google Sheets automation", "Gmail integration", "Drive automation", "Custom functions"]
    },
    {
      icon: Brain,
      title: "AI Integration",
      description: "Implement AI solutions into existing workflows and systems for enhanced automation capabilities.",
      features: ["AI model integration", "Intelligent automation", "Data analysis", "Process optimization"]
    },
    {
      icon: Brain,
      title: "Machine Learning & AI",
      description: "Develop and deploy machine learning models and AI-powered solutions tailored to your business needs.",
      features: ["ML model development", "AI consulting", "Predictive analytics", "Custom AI solutions"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive automation and integration solutions to streamline your business processes
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="p-6 bg-gradient-card border-0 shadow-md hover:shadow-xl transition-smooth group">
              <div className="space-y-4">
                <div className="w-14 h-14 bg-gradient-primary rounded-xl flex items-center justify-center group-hover:scale-110 transition-bounce">
                  <service.icon className="w-7 h-7 text-white" />
                </div>
                
                <h3 className="text-xl font-semibold text-foreground">
                  {service.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
                
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="text-sm text-muted-foreground flex items-center">
                      <div className="w-1.5 h-1.5 bg-secondary rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-lg text-muted-foreground mb-6">
            Ready to automate your business processes?
          </p>
          <Button variant="hero" size="lg" onClick={() => {
            const element = document.querySelector("#contact");
            if (element) element.scrollIntoView({ behavior: "smooth" });
          }}>
            Get Started Today
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;