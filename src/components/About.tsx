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
    <section id="about" className="py-20 bg-section-bg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            About Me
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A passionate technologist with a drive to innovate and make a positive impact
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Profile Content */}
          <div className="space-y-6">
            <div className="prose prose-lg">
              <p className="text-foreground leading-relaxed">
                I am Ry Calaor, a Computer Science graduate specializing in Intelligent Systems. 
                My academic journey and hands-on experiences have honed my skills in leveraging 
                technology for impactful solutions. With a strong foundation in automation and AI, 
                I thrive on tackling complex challenges and driving innovation through collaborative 
                and creative problem-solving.
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary" className="text-sm">Cavite, Philippines</Badge>
              <Badge variant="outline" className="text-sm">Computer Science</Badge>
              <Badge variant="outline" className="text-sm">Intelligent Systems</Badge>
            </div>
          </div>

          {/* Highlights Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((highlight, index) => (
              <Card key={index} className="p-6 bg-gradient-card border-0 shadow-md hover:shadow-lg transition-smooth">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
                    <highlight.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-foreground">{highlight.title}</h3>
                  <p className="text-sm text-muted-foreground">{highlight.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;