import { useEffect, useRef } from "react";

const Tools = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const tools = [
    { name: "Zapier", logo: "https://cdn.worldvectorlogo.com/logos/zapier.svg" },
    { name: "Make", logo: "https://cdn.worldvectorlogo.com/logos/make-formerly-integromat.svg" },
    { name: "n8n", logo: "https://raw.githubusercontent.com/n8n-io/n8n/master/assets/n8n-logo.svg" },
    { name: "Google Apps Script", logo: "https://www.gstatic.com/images/branding/productlogos/apps_script/v7/192px.svg" },
    { name: "JavaScript", logo: "https://cdn.worldvectorlogo.com/logos/logo-javascript.svg" },
    { name: "SQL", logo: "https://cdn.worldvectorlogo.com/logos/mysql-logo.svg" },
    { name: "API Integration", logo: "https://cdn.worldvectorlogo.com/logos/postman.svg" },
    { name: "Webhooks", logo: "https://cdn.worldvectorlogo.com/logos/webhook.svg" },
    { name: "REST APIs", logo: "https://cdn.worldvectorlogo.com/logos/swagger.svg" },
    { name: "Google Sheets", logo: "https://cdn.worldvectorlogo.com/logos/google-sheets.svg" },
    { name: "Excel", logo: "https://cdn.worldvectorlogo.com/logos/microsoft-excel-2013.svg" },
    { name: "Notion", logo: "https://cdn.worldvectorlogo.com/logos/notion-logo-1.svg" },
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