import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Trophy, Users, Globe, BookOpen } from "lucide-react";

const Education = () => {
  const educationData = [
    {
      degree: "BS Computer Science with Specialization in Intelligent Systems",
      school: "De La Salle University Dasmariñas",
      period: "2021-2025",
      honor: "Summa Cum Laude",
      icon: GraduationCap
    },
    {
      degree: "Science, Engineering, Technology, & Mathematics (STEM)",
      school: "De La Salle University Dasmariñas Senior High School",
      period: "2018-2021",
      honor: "With High Distinction",
      icon: BookOpen
    }
  ];

  const achievements = [
    {
      icon: Trophy,
      title: "Academic Excellence",
      items: [
        "Consistent Dean's Lister – Recognized every semester",
        "Top 10 Thesis Paper – Ranked among top undergraduate theses",
        "Co-Creator of 'EaTanong HeartWise' – Heart health companion app"
      ]
    },
    {
      icon: Users,
      title: "Leadership Roles",
      items: [
        "Senior Sister & VP for Special Projects – Youth for Christ DLSU-D",
        "Associate Executive Director – Youth for Christ DLSU-D",
        "Secretary General – Youth for Christ DLSU-D",
        "CSCS College Head – University Student Election Commission"
      ]
    },
    {
      icon: Globe,
      title: "Global Exposure",
      items: [
        "X-Culture Global Collaboration Participant",
        "2020 AIB US Southeast Annual Conference Attendee",
        "International Conference on Research, Inclusivity, and Sustainability (InCRIS 2025) – Presenter"
      ]
    }
  ];

  return (
    <section id="education" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Education
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Academic excellence and continuous learning in Computer Science and Intelligent Systems
          </p>
        </div>

        {/* Education Cards */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {educationData.map((edu, index) => (
            <Card key={index} className="p-6 bg-gradient-card border-0 shadow-md hover:shadow-lg transition-smooth">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center flex-shrink-0">
                  <edu.icon className="w-6 h-6 text-white" />
                </div>
                <div className="space-y-3 flex-1">
                  <h3 className="text-lg font-semibold text-foreground">
                    {edu.degree}
                  </h3>
                  <p className="text-secondary font-medium">
                    {edu.school}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">{edu.period}</Badge>
                    <Badge variant="secondary" className="bg-success text-white">
                      {edu.honor}
                    </Badge>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Achievements */}
        <div className="grid lg:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <Card key={index} className="p-6 bg-section-bg border-0 shadow-md hover:shadow-lg transition-smooth">
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                    <achievement.icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">
                    {achievement.title}
                  </h3>
                </div>
                
                <ul className="space-y-3">
                  {achievement.items.map((item, idx) => (
                    <li key={idx} className="text-sm text-muted-foreground flex items-start">
                      <div className="w-1.5 h-1.5 bg-secondary rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;