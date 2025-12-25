import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    category: "Pitch Decks",
    title: "Investor Pitch Development",
    client: "Tech Startup",
    description: "Created compelling investor pitch deck that clearly communicated the value proposition and market opportunity.",
    results: ["Clear narrative", "Investor ready", "Professional design"],
  },
  {
    category: "Business Model",
    title: "Revenue Model Redesign",
    client: "E-commerce Company",
    description: "Developed innovative business model framework with multiple revenue streams fitted to market dynamics.",
    results: ["New revenue streams", "Scalable model", "Market fitted"],
  },
  {
    category: "Financial Forecasts",
    title: "Investment Readiness",
    client: "Healthcare Startup",
    description: "Built comprehensive financial models with realistic projections for investor presentations.",
    results: ["5-year projections", "Scenario analysis", "Investor clarity"],
  },
  {
    category: "Advisory Support",
    title: "Strategic Growth Planning",
    client: "Manufacturing Enterprise",
    description: "Provided ongoing strategic advisory to guide market expansion and operational improvements.",
    results: ["Market strategy", "Growth roadmap", "Clear direction"],
  },
  {
    category: "Tech Support",
    title: "Digital Transformation",
    client: "Retail Business",
    description: "Guided technology selection and implementation strategy for digital transformation initiative.",
    results: ["Tech roadmap", "Platform selection", "Seamless integration"],
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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {projects.map((project) => (
                <div 
                  key={project.title}
                  className="group bg-card border border-border rounded-3xl p-8 hover:shadow-card hover:border-primary/30 transition-all duration-300"
                >
                  <div className="flex items-start justify-between mb-6">
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
                  <p className="text-muted-foreground text-sm mb-4">
                    {project.client}
                  </p>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.results.map((result) => (
                      <span 
                        key={result}
                        className="px-3 py-1 bg-teal-light text-primary text-sm rounded-full"
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
