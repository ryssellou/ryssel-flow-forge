import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Database, Zap, Languages } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      icon: Zap,
      title: "Automation Platforms",
      skills: ["Zapier", "Make (Integromat)", "n8n"],
      color: "bg-gradient-primary"
    },
    {
      icon: Code,
      title: "Programming & Development",
      skills: ["Google Apps Script", "JavaScript", "SQL", "TypeScript"],
      color: "bg-gradient-tech"
    },
    {
      icon: Database,
      title: "Integration & APIs",
      skills: ["API Integration", "Webhooks", "REST APIs", "Data Transformation"],
      color: "bg-secondary"
    },
    {
      icon: Languages,
      title: "Languages",
      skills: ["English (Fluent)", "Filipino (Native)"],
      color: "bg-accent"
    }
  ];

  const tools = [
    "Google Sheets", "Excel", "Notion", "Git", "GitHub", 
    "WordPress", "Database Design", "Data Visualization",
    "Project Management", "Technical Documentation"
  ];

  return (
    <section id="skills" className="py-20 bg-section-bg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Skills & Technologies
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Technical expertise in automation, integration, and intelligent systems development
          </p>
        </div>

        {/* Main Skill Categories */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {skillCategories.map((category, index) => (
            <Card key={index} className="p-6 bg-gradient-card border-0 shadow-md hover:shadow-lg transition-smooth group">
              <div className="space-y-4">
                <div className={`w-12 h-12 ${category.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-bounce`}>
                  <category.icon className="w-6 h-6 text-white" />
                </div>
                
                <h3 className="text-lg font-semibold text-foreground">
                  {category.title}
                </h3>
                
                <div className="space-y-2">
                  {category.skills.map((skill, idx) => (
                    <div key={idx} className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Additional Tools & Technologies */}
        <Card className="p-8 bg-gradient-card border-0 shadow-md">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold text-foreground mb-2">
              Additional Tools & Technologies
            </h3>
            <p className="text-muted-foreground">
              Comprehensive toolkit for modern development and automation
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-3">
            {tools.map((tool, index) => (
              <Badge 
                key={index} 
                variant="outline" 
                className="text-sm py-2 px-4 hover:bg-primary hover:text-primary-foreground transition-smooth cursor-default"
              >
                {tool}
              </Badge>
            ))}
          </div>
        </Card>

        {/* Expertise Highlights */}
        <div className="mt-12 grid lg:grid-cols-3 gap-8">
          <Card className="p-6 bg-background border border-primary/20 shadow-md">
            <div className="text-center space-y-3">
              <div className="w-12 h-12 bg-gradient-primary rounded-full mx-auto flex items-center justify-center">
                <span className="text-white font-bold text-lg">AI</span>
              </div>
              <h4 className="font-semibold text-foreground">AI Integration</h4>
              <p className="text-sm text-muted-foreground">
                Specialization in Intelligent Systems with focus on practical AI implementation
              </p>
            </div>
          </Card>
          
          <Card className="p-6 bg-background border border-secondary/20 shadow-md">
            <div className="text-center space-y-3">
              <div className="w-12 h-12 bg-secondary rounded-full mx-auto flex items-center justify-center">
                <span className="text-white font-bold text-lg">⚡</span>
              </div>
              <h4 className="font-semibold text-foreground">Automation Expert</h4>
              <p className="text-sm text-muted-foreground">
                Proficient in multiple automation platforms for streamlined workflows
              </p>
            </div>
          </Card>
          
          <Card className="p-6 bg-background border border-accent/20 shadow-md">
            <div className="text-center space-y-3">
              <div className="w-12 h-12 bg-accent rounded-full mx-auto flex items-center justify-center">
                <span className="text-white font-bold text-lg">🔗</span>
              </div>
              <h4 className="font-semibold text-foreground">Integration Specialist</h4>
              <p className="text-sm text-muted-foreground">
                Seamless API integrations and data synchronization across platforms
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;