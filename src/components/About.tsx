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
          <h2 className="text-3xl sm:text-4xl font-light text-foreground mb-6">
            About Me
          </h2>
          <div className="prose prose-lg max-w-3xl mx-auto">
            <p className="text-lg text-foreground leading-relaxed mb-8">
              Hi! I'm Ry, an AI Automation Specialist. I help businesses stop wasting hours on repetitive tasks by building AI-powered automation systems. That way, they can cut costs, save time, and focus on growth instead of busywork.
            </p>
          </div>
        </div>

        {/* Content Sections */}
        <div className="grid md:grid-cols-2 gap-12">
          {/* Leadership and Global Exposure */}
          <div className="space-y-4">
            <h3 className="text-xl font-medium text-foreground mb-4">Leadership and Global Exposure</h3>
            <div className="space-y-3 text-muted-foreground">
              <p className="leading-relaxed">Led multiple NGO and school organizations.</p>
              <p className="leading-relaxed">Participated in international collaborations.</p>
            </div>
          </div>

          {/* Competitions and Hackathons */}
          <div className="space-y-4">
            <h3 className="text-xl font-medium text-foreground mb-4">Competitions and Hackathons</h3>
            <div className="space-y-3 text-muted-foreground">
              <p className="leading-relaxed">Top 10 thesis paper.</p>
              <p className="leading-relaxed">Multiple hackathon achievements.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;