import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Trophy, Users, Lightbulb, Target } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const About = () => {
  const titleRef = useScrollAnimation('fade-in-up');
  const descRef = useScrollAnimation('fade-in-up', 100);
  const highlights = [
    {
      icon: Trophy,
      title: "Academic Excellence",
      description: "Summa Cum Laude graduate with consistent Dean's List recognition"
    },
    {
      icon: Users,
      title: "Leadership and Global Exposure",
      description: "Experienced handling NGO and school organizations. Participated in international collaborations."
    },
    {
      icon: Lightbulb,
      title: "Competitions and Hackathons",
      description: "Top 10 thesis paper. Multiple hackathon achievements."
    },
    {
      icon: Target,
      title: "Problem Solver",
      description: "Passionate about using technology to drive positive change"
    }
  ];

  return (
    <section id="about" className="py-12 sm:py-16 md:py-20 bg-background relative overflow-hidden">
      {/* Premium Background Effects */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl relative z-10">
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <div ref={titleRef} className="opacity-0">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4 sm:mb-6">
              About Me
            </h2>
          </div>
          <div ref={descRef} className="prose prose-lg max-w-3xl mx-auto px-4 opacity-0">
            <p className="text-base sm:text-lg text-foreground leading-relaxed mb-6 sm:mb-8">
              Hi! I'm Ry, an AI Automation Specialist. I help businesses stop wasting hours on repetitive tasks by building AI-powered automation systems. That way, they can cut costs, save time, and focus on growth instead of busywork.
            </p>
          </div>
        </div>

        {/* Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
          {highlights.map((highlight, index) => {
            const IconComponent = highlight.icon;
            const cardRef = useScrollAnimation('scale-in', index * 100);
            return (
              <div key={index} ref={cardRef} className="opacity-0">
                <Card className="p-5 sm:p-6 md:p-8 text-center hover:shadow-premium transition-all duration-500 hover:scale-105 border border-border/50 bg-card/50 backdrop-blur-sm glass-effect h-full">
                  <div className="mb-4 sm:mb-6 flex justify-center">
                    <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-primary rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                    </div>
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-3 sm:mb-4">{highlight.title}</h3>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{highlight.description}</p>
                </Card>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;