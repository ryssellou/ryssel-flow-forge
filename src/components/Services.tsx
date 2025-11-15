import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Zap, Settings, Database, Workflow, Code, Brain, Building2 } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

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
    <section id="services" className="py-20 sm:py-24 md:py-28 bg-background relative overflow-hidden">
      {/* Premium Background Effects */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="text-center mb-16 sm:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6">
            Services
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive automation and integration solutions to streamline your business processes
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {services.map((service, index) => {
            const cardRef = useScrollAnimation('fade-in-up', index * 80);
            return (
              <div key={index} ref={cardRef} className="opacity-0">
                <Card className="p-4 sm:p-5 md:p-6 bg-gradient-card border-0 shadow-md hover:shadow-premium transition-all duration-500 group h-full">
                  <div className="space-y-3 sm:space-y-4">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-primary rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <service.icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                    </div>
                
                    <h3 className="text-lg sm:text-xl font-semibold text-foreground">
                      {service.title}
                    </h3>
                    
                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
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
              </div>
            );
          })}
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