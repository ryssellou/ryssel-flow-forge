import { Card } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";
import n8nLogo from "@/assets/n8n-logo.png";
import makeLogo from "@/assets/make-logo.svg";
import openaiLogo from "@/assets/openai-logo-new.webp";
import zapierLogo from "@/assets/zapier-logo.png";
import goHighLevelLogo from "@/assets/gohighlevel-logo.png";

const Portfolio = () => {
  const projectCategories = [
    {
      title: "n8n Projects",
      description: "Advanced workflow automation solutions built with n8n for complex business processes.",
      logo: n8nLogo,
      technologies: ["n8n", "API Integration", "Webhooks"],
      url: "https://www.canva.com/design/DAGz_oIacGc/H19TO77n-zH3_nXcNCVV4Q/view?utm_content=DAGz_oIacGc&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=ha4a12c76bb"
    },
    {
      title: "Make Projects", 
      description: "Sophisticated automation scenarios using Make platform for seamless integrations.",
      logo: makeLogo,
      technologies: ["Make", "API Integration", "REST API"],
      url: "https://www.canva.com/design/DAGz_4o63vU/cE-RXFm0vITOFUnseM1--g/view?utm_content=DAGz_4o63vU&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h1e334e6b61"
    },
    {
      title: "AI/ML Projects",
      description: "Intelligent solutions leveraging artificial intelligence and machine learning capabilities.",
      logo: openaiLogo,
      technologies: ["OpenAI", "Python", "Gemini"],
      url: "https://www.canva.com/design/DAG0CaIiPbk/i6_AS5Xv7jx2sl2dDbIBWw/view?utm_content=DAG0CaIiPbk&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=he242f2907a"
    },
    {
      title: "Zapier Projects",
      description: "Streamlined workflow automation connecting your favorite apps and services.",
      logo: zapierLogo,
      technologies: ["Zapier", "Webhooks", "API Integration"],
      url: "https://www.canva.com/design/DAGz_iwLeNE/Zi5W8QLPhfjc8O2HTjoGOA/view?utm_content=DAGz_iwLeNE&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h4839ac1124"  
    },
    {
      title: "GHL Projects",
      description: "Comprehensive business automation solutions using GoHighLevel platform.",
      logo: goHighLevelLogo,
      technologies: ["GoHighLevel", "CRM", "Marketing Automation"],
      url: "https://www.canva.com/design/DAG0ESwYuPI/X-97cLtiHcdAOjYvuVXzgQ/view?utm_content=DAG0ESwYuPI&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h667425454a"
    }
  ];

  const handleProjectClick = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="portfolio" className="py-12 sm:py-16 md:py-20 bg-section-bg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3 sm:mb-4">
            Portfolio
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
            Explore my project categories showcasing automation solutions and innovative applications
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
          {projectCategories.map((category, index) => (
            <Card 
              key={index} 
              className="p-5 sm:p-6 md:p-8 bg-gradient-card border-0 shadow-md hover:shadow-xl transition-smooth group cursor-pointer"
              onClick={() => handleProjectClick(category.url)}
            >
              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-center space-x-3 sm:space-x-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-muted/50 rounded-lg flex items-center justify-center flex-shrink-0">
                    <img 
                      src={category.logo} 
                      alt={`${category.title} logo`}
                      className="w-6 h-6 sm:w-8 sm:h-8 object-contain transition-all duration-300 group-hover:scale-110"
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