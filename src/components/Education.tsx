import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Linkedin, ExternalLink, Calendar } from "lucide-react";

const Education = () => {
  const education = [
    {
      degree: "BS Computer Science, Intelligent Systems",
      school: "De La Salle University Dasmariñas",
      period: "2021-2025",
      location: "Philippines",
      achievements: ["Summa Cum Laude"]
    },
    {
      degree: "Senior High School, STEM",
      school: "De La Salle University Dasmariñas",
      period: "2018-2021",
      location: "Philippines", 
      achievements: ["With High Distinction"]
    }
  ];

  return (
    <section id="education" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-light text-foreground mb-4">
            Education
          </h2>
        </div>

        <div className="max-w-3xl mx-auto space-y-8">
          {education.map((edu, index) => (
            <div key={index} className="border-b border-border pb-6 last:border-b-0 hover:bg-muted/20 transition-smooth p-4 rounded-lg click-effect">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="md:col-span-2">
                  <h3 className="text-lg font-medium text-foreground mb-1">
                    {edu.degree}
                  </h3>
                  <p className="text-muted-foreground font-medium mb-2">
                    {edu.school}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {edu.achievements.map((achievement, idx) => (
                      <span key={idx} className="px-2 py-1 text-xs bg-muted text-muted-foreground rounded">
                        {achievement}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4 mr-2" />
                    {edu.period}
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <MapPin className="w-4 h-4 mr-2" />
                    {edu.location}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;