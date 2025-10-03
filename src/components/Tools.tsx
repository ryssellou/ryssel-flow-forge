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
import restApiLogo from "@/assets/rest-api-logo-new.png";
import slackLogo from "@/assets/slack-logo.png";
import sqlLogo from "@/assets/sql-logo.png";
import supabaseLogo from "@/assets/supabase-logo.webp";
import pythonLogo from "@/assets/python-logo.png";
import webhooksLogo from "@/assets/webhooks-logo-new.png";
import zapierLogo from "@/assets/zapier-logo.png";
import vapiLogo from "@/assets/vapi-logo.avif";
import airtableLogo from "@/assets/airtable-logo.png";
import apiIntegrationLogo from "@/assets/api-integration-logo.jpg";
import geminiLogoNew from "@/assets/gemini-logo-new.png";
import openaiLogoNew from "@/assets/openai-logo-new.webp";

const Tools = () => {
  const tools = [
    { name: "n8n", logo: n8nLogo, isLocal: true },
    { name: "Zapier", logo: zapierLogo, isLocal: true },
    { name: "Make", logo: makeLogo, isLocal: true },
    { name: "Vapi", logo: vapiLogo, isLocal: true },
    { name: "GoHighLevel", logo: goHighLevelLogo, isLocal: true },
    { name: "Asana", logo: "https://cdn.worldvectorlogo.com/logos/asana-logo.svg", isLocal: false },
    { name: "Monday.com", logo: mondayLogo, isLocal: true },
    { name: "HubSpot", logo: hubspotLogo, isLocal: true },
    { name: "Supabase", logo: supabaseLogo, isLocal: true },
    { name: "Airtable", logo: airtableLogo, isLocal: true },
    { name: "Notion", logo: notionLogo, isLocal: true },
    { name: "SQL", logo: sqlLogo, isLocal: true },
    { name: "Tableau", logo: "https://cdn.worldvectorlogo.com/logos/tableau-software.svg", isLocal: false },
    { name: "Python", logo: pythonLogo, isLocal: true },
    { name: "JavaScript", logo: javascriptLogo, isLocal: true },
    { name: "HTML", logo: htmlLogo, isLocal: true },
    { name: "CSS", logo: "https://cdn.worldvectorlogo.com/logos/css-3.svg", isLocal: false },
    { name: "OpenAI", logo: openaiLogoNew, isLocal: true },
    { name: "Gemini", logo: geminiLogoNew, isLocal: true },
    { name: "API Integration", logo: apiIntegrationLogo, isLocal: true },
    { name: "Webhooks", logo: webhooksLogo, isLocal: true },
    { name: "REST API", logo: restApiLogo, isLocal: true },
    { name: "Slack", logo: slackLogo, isLocal: true },
  ];

  return (
    <section id="tools" className="py-32 bg-background overflow-hidden relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Tools & Technologies
          </h2>
          <p className="text-lg text-muted-foreground">
            Core technologies I use to build automation solutions
          </p>
        </div>

        {/* Minimalist Marquee Band */}
        <div className="relative overflow-hidden py-12">
          <div className="flex space-x-6 animate-marquee">
            {[...tools, ...tools, ...tools].map((tool, index) => (
              <div
                key={index}
                className="flex-shrink-0 flex items-center justify-center p-6 min-w-[120px] bg-muted/5 backdrop-blur-sm border border-border/10 rounded-lg hover:bg-muted/10 hover:border-border/20 transition-all duration-700 ease-in-out group cursor-pointer"
              >
                <div className="w-14 h-14 flex items-center justify-center">
                  <img 
                    src={tool.isLocal ? tool.logo : tool.logo} 
                    alt={`${tool.name} logo`}
                    className="w-full h-full object-contain opacity-70 group-hover:opacity-100 transition-opacity duration-700 ease-in-out"
                    onError={(e) => {
                      const parent = e.currentTarget.parentElement;
                      if (parent) {
                        parent.innerHTML = `<div class="w-14 h-14 bg-muted/10 rounded-lg flex items-center justify-center"><span class="text-xs font-semibold text-muted-foreground">${tool.name}</span></div>`;
                      }
                    }}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Subtle fade gradient overlays */}
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background via-background/90 to-transparent pointer-events-none z-10"></div>
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background via-background/90 to-transparent pointer-events-none z-10"></div>
        </div>
      </div>
    </section>
  );
};

export default Tools;