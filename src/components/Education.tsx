import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Linkedin, ExternalLink, Calendar } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

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
    <section id="education" className="py-12 sm:py-16 md:py-20 bg-background relative overflow-hidden">
      {/* Premium Background Effects */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]"></div>
      <div className="absolute top-0 left-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3 sm:mb-4">
            Education
          </h2>
        </div>

        <div className="max-w-3xl mx-auto space-y-6 sm:space-y-8">
          {education.map((edu, index) => {
            const eduRef = useScrollAnimation('fade-in-up', index * 200);
            return (
              <div key={index} ref={eduRef} className="border-b border-border pb-5 sm:pb-6 last:border-b-0 hover:bg-muted/20 transition-all duration-500 p-3 sm:p-4 rounded-lg click-effect opacity-0">
                <div className="grid md:grid-cols-3 gap-3 sm:gap-4">
                  <div className="md:col-span-2">
                    <h3 className="text-base sm:text-lg font-medium text-foreground mb-1">
                      {edu.degree}
                    </h3>
                    <p className="text-sm sm:text-base text-muted-foreground font-medium mb-2">
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
                  
                  <div className="space-y-2 mt-2 md:mt-0">
                    <div className="flex items-center text-xs sm:text-sm text-muted-foreground">
                      <Calendar className="w-3 h-3 sm:w-4 sm:h-4 mr-2 flex-shrink-0" />
                      {edu.period}
                    </div>
                    <div className="flex items-center text-xs sm:text-sm text-muted-foreground">
                      <MapPin className="w-3 h-3 sm:w-4 sm:h-4 mr-2 flex-shrink-0" />
                      {edu.location}
                    </div>
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

export default Education;