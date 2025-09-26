const Tools = () => {
  const tools = [
    { name: "n8n", logo: "https://raw.githubusercontent.com/n8n-io/n8n/master/assets/n8n-logo.svg" },
    { name: "Zapier", logo: "https://cdn.worldvectorlogo.com/logos/zapier.svg" },
    { name: "Make", logo: "https://cdn.worldvectorlogo.com/logos/make-formerly-integromat.svg" },
    { name: "Vapi", logo: "https://assets-global.website-files.com/64f6f2c0e3f4c5a91c1e823a/64f6f2c0e3f4c5a91c1e8255_vapi-favicon.svg" },
    { name: "GoHighLevel", logo: "https://cdn.worldvectorlogo.com/logos/gohighlevel.svg" },
    { name: "Asana", logo: "https://cdn.worldvectorlogo.com/logos/asana-logo.svg" },
    { name: "Supabase", logo: "https://cdn.worldvectorlogo.com/logos/supabase-logo.svg" },
    { name: "Airtable", logo: "https://cdn.worldvectorlogo.com/logos/airtable.svg" },
    { name: "Notion", logo: "https://cdn.worldvectorlogo.com/logos/notion-logo-1.svg" },
    { name: "SQL", logo: "https://cdn.worldvectorlogo.com/logos/mysql-logo.svg" },
    { name: "Tableau", logo: "https://cdn.worldvectorlogo.com/logos/tableau-software.svg" },
    { name: "Python", logo: "https://cdn.worldvectorlogo.com/logos/python-5.svg" },
    { name: "JavaScript", logo: "https://cdn.worldvectorlogo.com/logos/logo-javascript.svg" },
    { name: "HTML", logo: "https://cdn.worldvectorlogo.com/logos/html-1.svg" },
    { name: "CSS", logo: "https://cdn.worldvectorlogo.com/logos/css-3.svg" },
    { name: "OpenAI", logo: "https://cdn.worldvectorlogo.com/logos/openai-2.svg" },
    { name: "Gemini", logo: "https://cdn.worldvectorlogo.com/logos/google-gemini.svg" },
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
          <div className="flex space-x-12 animate-marquee">
            {[...tools, ...tools].map((tool, index) => (
              <div
                key={index}
                className="flex-shrink-0 flex items-center justify-center w-16 h-16 bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl hover:bg-card hover:scale-105 transition-all duration-300 group cursor-pointer"
              >
                <img 
                  src={tool.logo} 
                  alt={`${tool.name} logo`}
                  className="w-10 h-10 object-contain filter group-hover:brightness-110 transition-all duration-300"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
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