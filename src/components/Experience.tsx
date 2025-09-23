import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Award } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Fullstack WordPress Developer Intern",
      company: "ROC.PH Digital Marketing Services",
      period: "June – August 2024",
      location: "Philippines",
      type: "Internship",
      description: "Completed 240 hours of hands-on training in fullstack web development and served as Team Leader for Side Project 4.",
      achievements: [
        "Led development team for major side project",
        "Gained expertise in full-stack WordPress development",
        "Completed intensive 240-hour training program"
      ]
    },
    {
      title: "Innovation Fellowship Intern",
      company: "Eskwelabs",
      period: "January – March 2025",
      location: "Philippines",
      type: "Fellowship",
      description: "Participated in data-driven innovation through collaborative, project-based learning in a startup setting and handled events operations.",
      achievements: [
        "Developed data-driven solutions",
        "Managed events operations",
        "Collaborated in startup environment",
        "Applied innovation methodologies"
      ]
    },
    {
      title: "Prompt Engineering Research and Integration Intern",
      company: "Excelerate",
      period: "July – August 2025",
      location: "International",
      type: "Research",
      description: "Gained practical experience in prompt engineering, research, and integration while collaborating with an international team.",
      achievements: [
        "Researched prompt engineering techniques",
        "Collaborated with international team",
        "Integrated AI solutions"
      ]
    },
    {
      title: "DIWA Scholar, No-Code Study Cohort #1",
      company: "Digital Innovation for Women Advancement (DICT Philippines)",
      period: "April 2025",
      location: "Philippines",
      type: "Scholarship",
      description: "Completed foundational training in no-code development and product prototyping through the Department of Information and Communications Technology program.",
      achievements: [
        "Mastered no-code development platforms",
        "Built product prototypes",
        "Completed specialized cohort program"
      ]
    },
    {
      title: "Data Analytics Online Internship",
      company: "Deloitte",
      period: "2025",
      location: "Online",
      type: "Virtual Internship",
      description: "Gained practical experience in analytics, data visualization, and insights generation.",
      achievements: [
        "Developed data visualization skills",
        "Generated business insights",
        "Applied analytics methodologies"
      ]
    }
  ];

  const competitions = [
    { name: "Global Hack Week: AI/ML (MLH)", result: "Top 5" },
    { name: "Global Hack Week: Games (MLH)", result: "Top 17" },
    { name: "Global Hack Week: Cloud (MLH)", result: "Top 16" },
    { name: "USG Fresh START Hackathon", result: "3rd Place Overall" }
  ];

  return (
    <section id="experience" className="py-20 bg-section-bg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Work Experience
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Professional journey through internships, fellowships, and competitive achievements
          </p>
        </div>

        {/* Experience Grid */}
        <div className="space-y-6 mb-16">
          {experiences.map((exp, index) => (
            <div key={index} className="border-b border-border pb-6 last:border-b-0 hover:bg-muted/20 transition-smooth p-4 rounded-lg click-effect">
              <div className="grid md:grid-cols-4 gap-4">
                <div className="md:col-span-2">
                  <h3 className="text-lg font-medium text-foreground mb-1">
                    {exp.title}
                  </h3>
                  <p className="text-muted-foreground font-medium mb-2">
                    {exp.company}
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {exp.description}
                  </p>
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4 mr-2" />
                    {exp.period}
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <MapPin className="w-4 h-4 mr-2" />
                    {exp.location}
                  </div>
                </div>
                
                <div className="flex justify-end">
                  <span className="px-2 py-1 text-xs bg-muted text-muted-foreground rounded">
                    {exp.type}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Competitions & Hackathons */}
        <div className="space-y-8">
          <h3 className="text-2xl font-bold text-foreground text-center">
            Competitions & Hackathons
          </h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            {competitions.map((comp, index) => (
              <Card key={index} className="p-4 bg-gradient-card border-0 shadow-md hover:shadow-lg transition-smooth">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <Award className="w-5 h-5 text-secondary" />
                    <span className="font-medium text-foreground">{comp.name}</span>
                  </div>
                  <Badge variant="secondary" className="font-semibold">
                    {comp.result}
                  </Badge>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;