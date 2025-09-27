import n8nLogo from "@/assets/n8n-logo.png";
import makeLogo from "@/assets/make-logo.svg";
import goHighLevelLogo from "@/assets/gohighlevel-logo.png";
import mondayLogo from "@/assets/monday-logo.png";
import hubspotLogo from "@/assets/hubspot-logo.png";
import notionLogo from "@/assets/notion-logo.png";
import javascriptLogo from "@/assets/javascript-logo.webp";
import htmlLogo from "@/assets/html-logo.webp";
import openaiLogo from "@/assets/openai-logo.webp";
import geminiLogo from "@/assets/gemini-logo.png";

const Tools = () => {
  const tools = [
    { name: "n8n", logo: n8nLogo, isLocal: true },
    { name: "Zapier", logo: "https://cdn.worldvectorlogo.com/logos/zapier.svg", isLocal: false },
    { name: "Make", logo: makeLogo, isLocal: true },
    { name: "Vapi", logo: "https://docs.vapi.ai/img/logo-dark.svg", isLocal: false },
    { name: "GoHighLevel", logo: goHighLevelLogo, isLocal: true },
    { name: "Asana", logo: "https://cdn.worldvectorlogo.com/logos/asana-logo.svg", isLocal: false },
    { name: "Monday.com", logo: mondayLogo, isLocal: true },
    { name: "HubSpot", logo: hubspotLogo, isLocal: true },
    { name: "Supabase", logo: "https://cdn.worldvectorlogo.com/logos/supabase-icon.svg", isLocal: false },
    { name: "Airtable", logo: "https://cdn.worldvectorlogo.com/logos/airtable.svg", isLocal: false },
    { name: "Notion", logo: notionLogo, isLocal: true },
    { name: "SQL", logo: "https://cdn.worldvectorlogo.com/logos/mysql-logo.svg", isLocal: false },
    { name: "Tableau", logo: "https://cdn.worldvectorlogo.com/logos/tableau-software.svg", isLocal: false },
    { name: "Python", logo: "https://cdn.worldvectorlogo.com/logos/python-5.svg", isLocal: false },
    { name: "JavaScript", logo: javascriptLogo, isLocal: true },
    { name: "HTML", logo: htmlLogo, isLocal: true },
    { name: "CSS", logo: "https://cdn.worldvectorlogo.com/logos/css-3.svg", isLocal: false },
    { name: "OpenAI", logo: openaiLogo, isLocal: true },
    { name: "Gemini", logo: geminiLogo, isLocal: true },
    { name: "API Integration", logo: "https://cdn.worldvectorlogo.com/logos/postman.svg", isLocal: false },
    { name: "Webhooks", logo: "https://cdn.worldvectorlogo.com/logos/webhook.svg", isLocal: false },
    { name: "REST API", logo: "https://cdn.worldvectorlogo.com/logos/swagger.svg", isLocal: false },
    { name: "Slack", logo: "https://cdn.worldvectorlogo.com/logos/slack-new-logo.svg", isLocal: false },
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
                    src={tool.isLocal ? tool.logo : tool.logo} 
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