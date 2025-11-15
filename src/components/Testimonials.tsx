import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Star, Quote } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Mitchell",
      role: "CEO",
      company: "TechVision Solutions",
      content: "Ryssel transformed our workflow completely. The automation solutions he implemented saved us 40+ hours per week and increased our team's productivity by 200%. Exceptional work!",
      rating: 5,
      initials: "SM"
    },
    {
      name: "Michael Chen",
      role: "Operations Director",
      company: "GlobalSync Inc",
      content: "Working with Ryssel was a game-changer. His AI integration expertise helped us streamline our entire operation. The ROI was visible within the first month. Highly recommended!",
      rating: 5,
      initials: "MC"
    },
    {
      name: "Emily Rodriguez",
      role: "Marketing Manager",
      company: "Creative Dynamics",
      content: "The automation systems Ryssel built for our marketing campaigns are phenomenal. We've doubled our output while cutting manual work in half. His attention to detail is unmatched.",
      rating: 5,
      initials: "ER"
    },
    {
      name: "David Thompson",
      role: "Founder",
      company: "StartupFlow",
      content: "Ryssel's expertise in AI and automation is outstanding. He helped us scale from 10 to 100 clients without adding staff. The solutions are elegant, reliable, and perfectly tailored to our needs.",
      rating: 5,
      initials: "DT"
    },
    {
      name: "Lisa Wang",
      role: "Product Manager",
      company: "InnovateTech",
      content: "The integration solutions Ryssel delivered exceeded all expectations. Our systems now communicate seamlessly, and we've eliminated countless hours of manual data entry. Brilliant work!",
      rating: 5,
      initials: "LW"
    },
    {
      name: "James Anderson",
      role: "CTO",
      company: "DataStream Analytics",
      content: "Ryssel's technical skills and problem-solving abilities are exceptional. He automated our most complex workflows and the results speak for themselves. A true professional.",
      rating: 5,
      initials: "JA"
    }
  ];

  const titleRef = useScrollAnimation('fade-in-up');
  const subtitleRef = useScrollAnimation('fade-in-up', 200);

  return (
    <section id="testimonials" className="py-20 sm:py-24 md:py-28 lg:py-32 bg-muted/30 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]"></div>
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 sm:mb-20 lg:mb-24">
          <h2 
            ref={titleRef}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 bg-gradient-primary bg-clip-text text-transparent"
          >
            Client Success Stories
          </h2>
          <p 
            ref={subtitleRef}
            className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto"
          >
            Don't just take my word for it - hear from clients who've transformed their businesses with automation
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((testimonial, index) => {
            const ref = useScrollAnimation('scale-in', index * 100);
            
            return (
              <Card 
                key={index}
                ref={ref}
                className="group hover:shadow-premium transition-all duration-700 border-border/50 bg-card/50 backdrop-blur-sm"
              >
                <CardContent className="p-6 sm:p-8">
                  {/* Quote Icon */}
                  <div className="mb-4 sm:mb-6">
                    <Quote className="w-8 h-8 sm:w-10 sm:h-10 text-primary/20" />
                  </div>

                  {/* Rating */}
                  <div className="flex gap-1 mb-4 sm:mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 fill-primary text-primary" />
                    ))}
                  </div>

                  {/* Content */}
                  <p className="text-sm sm:text-base text-foreground/90 mb-6 sm:mb-8 leading-relaxed">
                    "{testimonial.content}"
                  </p>

                  {/* Client Info */}
                  <div className="flex items-center gap-3 sm:gap-4 pt-4 sm:pt-6 border-t border-border/50">
                    <Avatar className="w-12 h-12 sm:w-14 sm:h-14 ring-2 ring-primary/20">
                      <AvatarFallback className="bg-gradient-primary text-primary-foreground font-semibold text-sm sm:text-base">
                        {testimonial.initials}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-semibold text-foreground text-sm sm:text-base">{testimonial.name}</p>
                      <p className="text-xs sm:text-sm text-muted-foreground">{testimonial.role}</p>
                      <p className="text-xs sm:text-sm text-muted-foreground font-medium">{testimonial.company}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div 
          className="text-center mt-16 sm:mt-20"
        >
          <p className="text-base sm:text-lg text-muted-foreground">
            Want to see similar results for your business?{" "}
            <button 
              onClick={() => {
                const element = document.querySelector("#contact");
                if (element) element.scrollIntoView({ behavior: "smooth" });
              }}
              className="text-primary font-semibold hover:underline inline-flex items-center gap-1 transition-colors"
            >
              Let's talk
              <span className="inline-block group-hover:translate-x-1 transition-transform">→</span>
            </button>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
