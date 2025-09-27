import { Card } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";

const Portfolio = () => {
  const projectCategories = [
    {
      title: "n8n Projects",
      description: "Advanced workflow automation solutions built with n8n for complex business processes.",
      logo: "https://docs.n8n.io/assets/images/n8n-logo-bw-1ef9160ee7c3f5a6cc1de57dc2dd8bb1.svg",
      technologies: ["n8n", "API Integration", "Webhooks"],
      url: "https://www.canva.com/design/DAGz_oIacGc/H19TO77n-zH3_nXcNCVV4Q/view?utm_content=DAGz_oIacGc&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=ha4a12c76bb"
    },
    {
      title: "Make Projects", 
      description: "Sophisticated automation scenarios using Make platform for seamless integrations.",
      logo: "https://www.make.com/en/help/image/uuid-a2518a62-3e93-7faa-fe7e-c0b5f8096c89.svg",
      technologies: ["Make", "API Integration", "REST API"],
      url: "https://www.canva.com/design/DAGz_4o63vU/cE-RXFm0vITOFUnseM1--g/view?utm_content=DAGz_4o63vU&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h1e334e6b61"
    },
    {
      title: "AI/ML Projects",
      description: "Intelligent solutions leveraging artificial intelligence and machine learning capabilities.",
      logo: "https://cdn.worldvectorlogo.com/logos/openai-2.svg",
      technologies: ["OpenAI", "Python", "Gemini"],
      url: "https://www.canva.com/design/DAG0CaIiPbk/i6_AS5Xv7jx2sl2dDbIBWw/view?utm_content=DAG0CaIiPbk&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=he242f2907a"
    },
    {
      title: "Zapier Projects",
      description: "Streamlined workflow automation connecting your favorite apps and services.",
      logo: "https://cdn.worldvectorlogo.com/logos/zapier.svg",
      technologies: ["Zapier", "Webhooks", "API Integration"],
      url: "https://www.canva.com/design/DAGz_iwLeNE/Zi5W8QLPhfjc8O2HTjoGOA/view?utm_content=DAGz_iwLeNE&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h4839ac1124"  
    },
    {
      title: "GHL Projects",
      description: "Comprehensive business automation solutions using GoHighLevel platform.",
      logo: "https://assets.gohighlevel.com/images/GHL-Logo-White.svg",
      technologies: ["GoHighLevel", "CRM", "Marketing Automation"],
      url: "https://www.canva.com/design/DAG0ESwYuPI/X-97cLtiHcdAOjYvuVXzgQ/view?utm_content=DAG0ESwYuPI&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h667425454a"
    }
  ];

  const handleProjectClick = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="portfolio" className="py-20 bg-section-bg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Portfolio
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore my project categories showcasing automation solutions and innovative applications
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projectCategories.map((category, index) => (
            <Card 
              key={index} 
              className="p-8 bg-gradient-card border-0 shadow-md hover:shadow-xl transition-smooth group cursor-pointer"
              onClick={() => handleProjectClick(category.url)}
            >
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-muted/50 rounded-lg flex items-center justify-center">
                    <img 
                      src={category.logo} 
                      alt={`${category.title} logo`}
                      className="w-8 h-8 object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                      onError={(e) => {
                        const parent = e.currentTarget.parentElement;
                        if (parent) {
                          parent.innerHTML = `<span class="text-xs font-bold text-foreground">${category.title.split(' ')[0]}</span>`;
                        }
                      }}
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold text-foreground group-hover:text-primary transition-smooth">
                      {category.title}
                    </h3>
                  </div>
                  <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-smooth" />
                </div>
                
                <p className="text-muted-foreground leading-relaxed">
                  {category.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {category.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-3 py-1 text-xs bg-muted/50 text-muted-foreground rounded-full font-medium border border-border/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="pt-4 border-t border-border/50">
                  <span className="text-sm text-primary font-medium group-hover:underline">
                    View Projects →
                  </span>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;