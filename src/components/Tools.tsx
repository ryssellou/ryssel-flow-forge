import { useEffect, useRef } from "react";

const Tools = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const tools = [
    { name: "Zapier", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/zapier/zapier-original.svg" },
    { name: "Make", logo: "https://www.make.com/en/help/app/make" },
    { name: "n8n", logo: "https://docs.n8n.io/favicon.png" },
    { name: "Google Apps Script", logo: "https://developers.google.com/apps-script/images/gs-logo.svg" },
    { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" },
    { name: "SQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" },
    { name: "API Integration", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg" },
    { name: "Webhooks", logo: "https://webhooks.dev/assets/icons/webhooks-logo.svg" },
    { name: "REST APIs", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/swagger/swagger-original.svg" },
    { name: "Google Sheets", logo: "https://developers.google.com/sheets/api/images/sheets-icon.svg" },
    { name: "Excel", logo: "https://upload.wikimedia.org/wikipedia/commons/3/34/Microsoft_Office_Excel_%282019%E2%80%93present%29.svg" },
    { name: "Notion", logo: "https://upload.wikimedia.org/wikipedia/commons/4/45/Notion_app_logo.png" },
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
            {[...tools, ...tools].map((tool, index) => (
              <div
                key={index}
                className="flex-shrink-0 bg-card border border-border rounded-lg p-6 min-w-[200px] text-center hover:shadow-md transition-smooth click-effect"
              >
                <div className="text-3xl mb-3 flex justify-center">
                  <img 
                    src={tool.logo} 
                    alt={`${tool.name} logo`}
                    className="w-8 h-8 object-contain"
                    onError={(e) => {
                      // Fallback to a generic icon if the logo fails to load
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                </div>
                <h3 className="font-medium text-foreground text-sm">{tool.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tools;