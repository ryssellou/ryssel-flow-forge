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
import shopifyLogo from "@/assets/shopify-logo.png";
import wordpressLogo from "@/assets/wordpress-logo-new.jpg";
import shopifyLogoNew from "@/assets/shopify-logo-new.png";
import clickupLogo from "@/assets/clickup-logo.jpeg";
import resendLogo from "@/assets/resend-logo.jpeg";

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
    { name: "Shopify", logo: shopifyLogoNew, isLocal: true },
    { name: "WordPress", logo: wordpressLogo, isLocal: true },
    { name: "ClickUp", logo: clickupLogo, isLocal: true },
    { name: "Resend", logo: resendLogo, isLocal: true },
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

        {/* Continuous Marquee - Seamless infinite loop */}
        <div className="relative overflow-hidden">
          <div className="flex space-x-8 animate-marquee will-change-transform">
            {/* Exactly 2 copies for seamless -50% translation loop */}
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