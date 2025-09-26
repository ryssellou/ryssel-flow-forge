const Tools = () => {
  const tools = [
    { name: "n8n", logo: "https://docs.n8n.io/assets/images/n8n-logo-bw-1ef9160ee7c3f5a6cc1de57dc2dd8bb1.svg" },
    { name: "Zapier", logo: "https://cdn.worldvectorlogo.com/logos/zapier.svg" },
    { name: "Make", logo: "https://www.make.com/en/help/image/uuid-a2518a62-3e93-7faa-fe7e-c0b5f8096c89.svg" },
    { name: "Vapi", logo: "https://docs.vapi.ai/img/logo-dark.svg" },
    { name: "GoHighLevel", logo: "https://cdn.worldvectorlogo.com/logos/gohighlevel.svg" },
    { name: "Asana", logo: "https://cdn.worldvectorlogo.com/logos/asana-logo.svg" },
    { name: "Supabase", logo: "https://supabase.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fsupabase-logo-icon.e7e5916b.png&w=64&q=75" },
    { name: "Airtable", logo: "https://cdn.worldvectorlogo.com/logos/airtable.svg" },
    { name: "Notion", logo: "https://cdn.worldvectorlogo.com/logos/notion-logo-1.svg" },
    { name: "SQL", logo: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHZpZXdCb3g9IjAgMCA2NCA2NCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjY0IiBoZWlnaHQ9IjY0IiByeD0iOCIgZmlsbD0iIzMzNzNkYyIvPgo8cGF0aCBkPSJNMTYgMjBoMzJ2NGgtMzJ6bTAgOGgzMnY0aC0zMnptMCA4aDMydjRoLTMyeiIgZmlsbD0iI2ZmZiIvPgo8L3N2Zz4K" },
    { name: "Tableau", logo: "https://cdn.worldvectorlogo.com/logos/tableau-software.svg" },
    { name: "Python", logo: "https://cdn.worldvectorlogo.com/logos/python-5.svg" },
    { name: "JavaScript", logo: "https://cdn.worldvectorlogo.com/logos/logo-javascript.svg" },
    { name: "HTML", logo: "https://cdn.worldvectorlogo.com/logos/html-1.svg" },
    { name: "CSS", logo: "https://cdn.worldvectorlogo.com/logos/css-3.svg" },
    { name: "OpenAI", logo: "https://cdn.worldvectorlogo.com/logos/openai-2.svg" },
    { name: "Gemini", logo: "https://www.gstatic.com/lamda/images/gemini_sparkle_v002_d4735304ff6292a690345.svg" },
    { name: "API Integration", logo: "https://cdn.worldvectorlogo.com/logos/postman.svg" },
    { name: "Webhooks", logo: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHZpZXdCb3g9IjAgMCA2NCA2NCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTMyIDhMMTYgMjRoMTZsMTYtMTZ6TTggMzJsMTYgMTZWMzJIOHpNNTYgMzJINDBWNDhsMTYtMTZ6IiBmaWxsPSIjMzMzIi8+Cjwvc3ZnPgo=" },
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
          <div className="flex space-x-12 animate-marquee">
            {[...tools, ...tools].map((tool, index) => (
              <div
                key={index}
                className="flex-shrink-0 flex items-center justify-center w-16 h-16 bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl hover:bg-card hover:scale-105 transition-all duration-300 group cursor-pointer"
              >
                <img 
                  src={tool.logo} 
                  alt={`${tool.name} logo`}
                  className="w-10 h-10 object-contain filter grayscale group-hover:grayscale-0 group-hover:brightness-110 transition-all duration-300"
                  onError={(e) => {
                    // Fallback to text if image fails to load
                    const parent = e.currentTarget.parentElement;
                    if (parent) {
                      parent.innerHTML = `<span class="text-xs font-bold text-foreground">${tool.name}</span>`;
                    }
                  }}
                />
              </div>
            ))}
          </div>

          {/* Fade gradient overlays */}
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-section-bg to-transparent pointer-events-none z-10"></div>
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-section-bg to-transparent pointer-events-none z-10"></div>
        </div>
      </div>
    </section>
  );
};

export default Tools;