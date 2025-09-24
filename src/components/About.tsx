import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Trophy, Users, Lightbulb, Target } from "lucide-react";

const About = () => {
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
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
            About Me
          </h2>
          <div className="prose prose-lg max-w-3xl mx-auto">
            <p className="text-lg text-foreground leading-relaxed mb-8">
              Hi! I'm Ry, an AI Automation Specialist. I help businesses stop wasting hours on repetitive tasks by building AI-powered automation systems. That way, they can cut costs, save time, and focus on growth instead of busywork.
            </p>
          </div>
        </div>

        {/* Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {highlights.map((highlight, index) => {
            const IconComponent = highlight.icon;
            return (
              <Card key={index} className="p-8 text-center hover:shadow-lg transition-all duration-300 hover:scale-105 border border-border bg-card/50 backdrop-blur-sm">
                <div className="mb-6 flex justify-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                    <IconComponent className="w-8 h-8 text-primary" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">{highlight.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{highlight.description}</p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;