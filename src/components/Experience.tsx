import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Award } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Experience = () => {
  const experiences = [
    {
      title: "AI Automation Engineer",
      company: "SELR AI",
      period: "November 2025",
      location: "International",
      type: "Freelance",
      description: "Developing and implementing AI-driven automation solutions, designing intelligent systems and workflows for enhanced efficiency.",
      achievements: [
        "Build AI automation solutions",
        "Design intelligent workflow systems",
        "Optimize processes with AI"
      ]
    },
    {
      title: "AI Automation Specialist",
      company: "AI Freedom Agency",
      period: "October 2025",
      location: "International",
      type: "Contract",
      description: "Specializing in AI automation solutions, implementing intelligent workflows and systems for clients across various industries.",
      achievements: [
        "Develop AI-powered automation solutions",
        "Implement intelligent workflow systems",
        "Deliver international client projects"
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
    },
    {
      title: "Fullstack Developer Intern (WordPress & Laravel)",
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
    }
  ];

  const competitions = [
    { name: "Global Hack Week: AI/ML (MLH)", result: "Top 5" },
    { name: "Global Hack Week: Games (MLH)", result: "Top 17" },
    { name: "Global Hack Week: Cloud (MLH)", result: "Top 16" },
    { name: "USG Fresh START Hackathon", result: "3rd Place Overall" }
  ];

  return (
    <section id="experience" className="py-12 sm:py-16 md:py-20 bg-section-bg relative overflow-hidden">
      {/* Premium Background Effects */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]"></div>
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3 sm:mb-4">
            Work Experience
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
            Professional journey through internships, fellowships, and competitive achievements
          </p>
        </div>

        {/* Experience Grid */}
        <div className="space-y-6 mb-16">
          {experiences.map((exp, index) => {
            const expRef = useScrollAnimation('slide-in-left', index * 100);
            return (
              <div key={index} ref={expRef} className="border-b border-border pb-6 last:border-b-0 hover:bg-muted/20 transition-all duration-500 p-4 rounded-lg click-effect opacity-0">
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
                      <Calendar className="w-4 h-4 mr-2 text-foreground" />
                      {exp.period}
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <MapPin className="w-4 h-4 mr-2 text-foreground" />
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
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;