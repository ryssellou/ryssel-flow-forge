import { Card } from "@/components/ui/card";
import { ExternalLink, Github } from "lucide-react";

const Portfolio = () => {
  const projects = [
    {
      title: "EaTanong HeartWise",
      description: "Heart health companion app featuring food classification, blood pressure logging, and personalized health tools.",
      category: "Mobile Application",
      technologies: ["AI/ML", "Health Tech", "Mobile Development"]
    },
    {
      title: "Automation Workflow System",
      description: "Custom automation system integrating multiple APIs and reducing manual work by 80%.",
      category: "Process Automation",
      technologies: ["Zapier", "Make", "API Integration"]
    },
    {
      title: "Data Analytics Dashboard",
      description: "Interactive dashboard for business insights and data visualization.",
      category: "Data Analytics",
      technologies: ["JavaScript", "SQL", "Data Visualization"]
    },
    {
      title: "No-Code Solution Platform",
      description: "Complete no-code platform for rapid product prototyping and deployment.",
      category: "Platform Development",
      technologies: ["No-Code", "Prototyping", "Integration"]
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-section-bg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-light text-foreground mb-4">
            Portfolio
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Selected projects showcasing automation solutions and innovative applications
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="p-6 bg-card border border-border hover:shadow-lg transition-smooth click-effect group">
              <div className="space-y-4">
                <div className="flex items-start justify-between">
                  <div className="space-y-2">
                    <h3 className="text-xl font-medium text-foreground group-hover:text-primary transition-smooth">
                      {project.title}
                    </h3>
                    <p className="text-sm text-muted-foreground font-medium">
                      {project.category}
                    </p>
                  </div>
                  <div className="flex space-x-2">
                    <button className="p-2 text-muted-foreground hover:text-foreground transition-smooth click-effect">
                      <ExternalLink className="w-4 h-4" />
                    </button>
                    <button className="p-2 text-muted-foreground hover:text-foreground transition-smooth click-effect">
                      <Github className="w-4 h-4" />
                    </button>
                  </div>
                </div>
                
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-2 py-1 text-xs bg-muted text-muted-foreground rounded font-medium"
                    >
                      {tech}
                    </span>
                  ))}
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