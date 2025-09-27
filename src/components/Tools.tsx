const Tools = () => {
  const tools = [
    { name: "n8n", logo: "https://docs.n8n.io/assets/images/n8n-logo-bw-1ef9160ee7c3f5a6cc1de57dc2dd8bb1.svg" },
    { name: "Zapier", logo: "https://cdn.worldvectorlogo.com/logos/zapier.svg" },
    { name: "Make", logo: "https://cdn.worldvectorlogo.com/logos/make.svg" },
    { name: "Vapi", logo: "https://docs.vapi.ai/img/logo-dark.svg" },
    { name: "GoHighLevel", logo: "https://cdn.worldvectorlogo.com/logos/gohighlevel.svg" },
    { name: "Asana", logo: "https://cdn.worldvectorlogo.com/logos/asana-logo.svg" },
    { name: "Monday.com", logo: "https://cdn.worldvectorlogo.com/logos/monday-logo.svg" },
    { name: "HubSpot", logo: "https://cdn.worldvectorlogo.com/logos/hubspot.svg" },
    { name: "Supabase", logo: "https://cdn.worldvectorlogo.com/logos/supabase-icon.svg" },
    { name: "Airtable", logo: "https://cdn.worldvectorlogo.com/logos/airtable.svg" },
    { name: "Notion", logo: "https://cdn.worldvectorlogo.com/logos/notion-logo-1.svg" },
    { name: "SQL", logo: "https://cdn.worldvectorlogo.com/logos/mysql-logo.svg" },
    { name: "Tableau", logo: "https://cdn.worldvectorlogo.com/logos/tableau-software.svg" },
    { name: "Python", logo: "https://cdn.worldvectorlogo.com/logos/python-5.svg" },
    { name: "JavaScript", logo: "https://cdn.worldvectorlogo.com/logos/logo-javascript.svg" },
    { name: "HTML", logo: "https://cdn.worldvectorlogo.com/logos/html-1.svg" },
    { name: "CSS", logo: "https://cdn.worldvectorlogo.com/logos/css-3.svg" },
    { name: "OpenAI", logo: "https://cdn.worldvectorlogo.com/logos/openai-2.svg" },
    { name: "Gemini", logo: "https://www.gstatic.com/lamda/images/gemini_sparkle_v002_d4735304ff6292a690345.svg" },
    { name: "API Integration", logo: "https://cdn.worldvectorlogo.com/logos/postman.svg" },
    { name: "Webhooks", logo: "https://cdn.worldvectorlogo.com/logos/webhook.svg" },
    { name: "REST API", logo: "https://cdn.worldvectorlogo.com/logos/swagger.svg" },
    { name: "Slack", logo: "https://cdn.worldvectorlogo.com/logos/slack-new-logo.svg" },
  ];

  return (
    <section id="tools" className="py-20 bg-section-bg overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Tools & Technologies
          </h2>
          <p className="text-lg text-muted-foreground">
            Core technologies I use to build automation solutions
          </p>
        </div>

        {/* Continuous Marquee */}
        <div className="relative overflow-hidden">
          <div className="flex space-x-8 animate-marquee">
            {[...tools, ...tools].map((tool, index) => (
              <div
                key={index}
                className="flex-shrink-0 flex flex-col items-center justify-center p-4 min-w-[80px] bg-card/30 backdrop-blur-sm border border-border/30 rounded-2xl hover:bg-card/60 hover:scale-110 hover:border-primary/20 transition-all duration-500 group cursor-pointer shadow-sm hover:shadow-lg"
              >
                <div className="w-12 h-12 flex items-center justify-center mb-2">
                  <img 
                    src={tool.logo} 
                    alt={`${tool.name} logo`}
                    className="w-full h-full object-contain transition-all duration-500 group-hover:scale-110"
                    onError={(e) => {
                      // Fallback to text if image fails to load
                      const parent = e.currentTarget.parentElement;
                      if (parent) {
                        parent.innerHTML = `<div class="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center"><span class="text-xs font-bold text-foreground">${tool.name}</span></div>`;
                      }
                    }}
                  />
                </div>
                <span className="text-xs font-medium text-muted-foreground group-hover:text-foreground transition-colors duration-300 text-center leading-tight">
                  {tool.name}
                </span>
              </div>
            ))}
          </div>

          {/* Fade gradient overlays */}
          <div className="absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-section-bg via-section-bg/80 to-transparent pointer-events-none z-10"></div>
          <div className="absolute inset-y-0 right-0 w-40 bg-gradient-to-l from-section-bg via-section-bg/80 to-transparent pointer-events-none z-10"></div>
        </div>
      </div>
    </section>
  );
};

export default Tools;