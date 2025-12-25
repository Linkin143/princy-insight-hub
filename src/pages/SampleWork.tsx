import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    category: "Pitch Decks",
    title: "Investor Pitch Development",
    client: "Tech Startup",
    description: "Investor-focused pitch deck with structured storytelling, TAM-SAM-SOM, revenue model, and pitch scripts.",
    results: ["Clear narrative", "Investor ready", "Professional design"],
  },
  {
    category: "Business Models",
    title: "Revenue Model Redesign",
    client: "E-commerce Company",
    description: "Comprehensive business model with revenue streams, unit-level costing, and break-even analysis.",
    results: ["Scalable model", "Pricing strategy", "GTM logic"],
  },
  {
    category: "MIS & Dashboards",
    title: "Management Dashboard",
    client: "Manufacturing Enterprise",
    description: "Decision-ready MIS pack with KPI dashboards, cashflow snapshots, and variance analysis.",
    results: ["Real-time KPIs", "Visual clarity", "Performance tracking"],
  },
  {
    category: "SOP Documentation",
    title: "Operational SOPs",
    client: "Healthcare Startup",
    description: "Complete SOP documentation with workflows, RACI matrices, and exception handling protocols.",
    results: ["Process clarity", "Team alignment", "Quality control"],
  },
  {
    category: "Strategic Advisory",
    title: "Strategic Growth Planning",
    client: "Retail Business",
    description: "Integrated business planning with market direction inputs, strategy notes, and decision support.",
    results: ["Market strategy", "Growth roadmap", "Clear direction"],
  },
  {
    category: "Content & Communication",
    title: "Corporate Communications",
    client: "Financial Services",
    description: "Company profiles, vision-mission drafting, website content, and marketing plan writing.",
    results: ["Brand clarity", "Consistent voice", "Market positioning"],
  },
  {
    category: "Research & Analysis",
    title: "Market Research Package",
    client: "Consumer Goods",
    description: "Comprehensive market overview with SWOT analysis, competitive mapping, and GTM suggestions.",
    results: ["Market insights", "Competitive edge", "Strategic inputs"],
  },
  {
    category: "Tech / AI Support",
    title: "Digital Transformation",
    client: "Logistics Company",
    description: "AI-powered automation solutions, workflow optimization, and internal dashboard development.",
    results: ["Process automation", "Tech integration", "Efficiency gains"],
  },
];

export default function SampleWork() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-32 pb-24">
        {/* Hero */}
        <section className="container mx-auto px-6 mb-20">
          <div className="max-w-4xl mx-auto text-center">
            <span className="text-primary font-medium text-sm tracking-wider uppercase mb-4 block">
              Sample Work
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground mb-6">
              Our Impact in Action
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Explore a selection of our client engagements and the innovative 
              outcomes we've helped achieve.
            </p>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {projects.map((project) => (
                <div 
                  key={project.title}
                  className="group bg-card border border-border rounded-2xl p-6 hover:shadow-card hover:border-primary/30 transition-all duration-300"
                >
                  <div className="flex items-start justify-between mb-4">
                    <span className="text-primary text-sm font-medium">
                      {project.category}
                    </span>
                    <div className="w-10 h-10 rounded-full border border-border flex items-center justify-center group-hover:border-primary group-hover:bg-primary transition-colors">
                      <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-primary-foreground transition-colors" />
                    </div>
                  </div>
                  
                  <h2 className="font-display text-xl font-semibold text-foreground mb-2">
                    {project.title}
                  </h2>
                  <p className="text-muted-foreground text-sm mb-3">
                    {project.client}
                  </p>
                  <p className="text-muted-foreground text-sm mb-5 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.results.map((result) => (
                      <span 
                        key={result}
                        className="px-3 py-1 bg-teal-light text-primary text-xs rounded-full"
                      >
                        {result}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
