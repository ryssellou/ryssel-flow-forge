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
      title: "Leadership Experience",
      description: "Led multiple organizations and international collaborations"
    },
    {
      icon: Lightbulb,
      title: "Innovation Focus",
      description: "Top 10 thesis paper and multiple hackathon achievements"
    },
    {
      icon: Target,
      title: "Problem Solver",
      description: "Passionate about using technology to drive positive change"
    }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
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

        {/* Highlights Container */}
        <div className="bg-card border border-border rounded-lg p-8 space-y-8">
          {/* Academic Excellence */}
          <div className="space-y-2">
            <h3 className="text-xl font-semibold text-foreground">Academic Excellence</h3>
            <p className="text-muted-foreground leading-relaxed">
              Summa Cum Laude graduate with consistent Dean's List recognition.
            </p>
          </div>

          {/* Leadership and Global Exposure */}
          <div className="space-y-2">
            <h3 className="text-xl font-semibold text-foreground">Leadership and Global Exposure</h3>
            <div className="space-y-1 text-muted-foreground">
              <p className="leading-relaxed">Led multiple NGO and school organizations.</p>
              <p className="leading-relaxed">Participated in international collaborations.</p>
            </div>
          </div>

          {/* Problem Solver */}
          <div className="space-y-2">
            <h3 className="text-xl font-semibold text-foreground">Problem Solver</h3>
            <p className="text-muted-foreground leading-relaxed">
              Passionate about using technology to drive positive change.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;