import { useEffect, useRef } from "react";
import { Zap, RefreshCw, Link, BarChart, Code, Database, Plug, Webhook, Globe, Sheet, TrendingUp, FileText, LucideIcon } from "lucide-react";

const Tools = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const tools = [
    { name: "Zapier", icon: "Zap" },
    { name: "Make", icon: "RefreshCw" },
    { name: "n8n", icon: "Link" },
    { name: "Google Apps Script", icon: "BarChart" },
    { name: "JavaScript", icon: "Code" },
    { name: "SQL", icon: "Database" },
    { name: "API Integration", icon: "Plug" },
    { name: "Webhooks", icon: "Webhook" },
    { name: "REST APIs", icon: "Globe" },
    { name: "Google Sheets", icon: "Sheet" },
    { name: "Excel", icon: "TrendingUp" },
    { name: "Notion", icon: "FileText" },
  ];

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let scrollAmount = 0;
    const scroll = () => {
      scrollAmount += 0.5;
      if (scrollAmount >= scrollContainer.scrollWidth / 2) {
        scrollAmount = 0;
      }
      scrollContainer.scrollLeft = scrollAmount;
    };

    const interval = setInterval(scroll, 30);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="tools" className="py-20 bg-section-bg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Tools & Technologies
          </h2>
          <p className="text-lg text-muted-foreground">
            Core technologies I use to build automation solutions
          </p>
        </div>

        <div 
          ref={scrollRef}
          className="overflow-hidden whitespace-nowrap"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          <div className="inline-flex space-x-8 animate-scroll">
            {[...tools, ...tools].map((tool, index) => {
              const iconMap = {
                Zap, RefreshCw, Link, BarChart, Code, Database, Plug, Webhook, Globe, Sheet, TrendingUp, FileText
              };
              const IconComponent = iconMap[tool.icon as keyof typeof iconMap] as LucideIcon;
              
              return (
                <div
                  key={index}
                  className="flex-shrink-0 bg-card border border-border rounded-lg p-6 min-w-[200px] text-center hover:shadow-md transition-smooth click-effect"
                >
                  <div className="text-3xl mb-3 text-muted-foreground">
                    <IconComponent size={32} className="mx-auto" />
                  </div>
                  <h3 className="font-medium text-foreground text-sm">{tool.name}</h3>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tools;