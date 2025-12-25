import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  Presentation, 
  Layers, 
  LayoutDashboard, 
  FileText, 
  Lightbulb, 
  PenTool, 
  FolderCheck, 
  Search, 
  Palette, 
  Cpu, 
  ArrowRight,
  ChevronDown
} from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

const services = [
  {
    icon: Presentation,
    title: "Pitch Decks",
    description: "Investor-focused pitch decks built with structured storytelling, clear logic, and professional presentation.",
    details: [
      "Slide structure & problem–solution framing",
      "Market overview & TAM–SAM–SOM",
      "Product/service overview & target segments",
      "Value proposition & go-to-market plan",
      "Traction, revenue model & cost logic",
      "Financial summary & use of funds",
      "Roadmap, ask slide & pitch scripts",
      "Investor one-pagers"
    ],
  },
  {
    icon: Layers,
    title: "Business Models",
    description: "Structured business and financial models that explain viability, sustainability, and scale.",
    details: [
      "Business model logic & customer segments",
      "Revenue and cost models",
      "Unit-level costing & pricing strategy",
      "Profit and loss & cashflow",
      "Break-even analysis & assumptions sheets",
      "GTM logic & roadmap",
      "Summary insights"
    ],
  },
  {
    icon: LayoutDashboard,
    title: "MIS & Dashboards",
    description: "Clear, decision-ready MIS and dashboards designed for founders and management.",
    details: [
      "Monthly MIS packs",
      "Revenue and expense summaries",
      "KPI dashboards",
      "Cashflow snapshots",
      "Year-to-date performance",
      "Basic variance analysis",
      "Visual charts"
    ],
  },
  {
    icon: FileText,
    title: "SOP Documentation",
    description: "Process documentation designed to bring order, clarity, and operational discipline.",
    details: [
      "Purpose, scope & definitions",
      "Roles and responsibilities",
      "Process descriptions & step-by-step workflows",
      "Activity flowcharts",
      "Controls, checks & exception handling",
      "Templates & RACI matrices",
      "Review schedules"
    ],
  },
  {
    icon: Lightbulb,
    title: "Business & Strategic Advisory",
    description: "Structured thinking support for direction-setting and informed decision-making.",
    details: [
      "Idea review & concept polishing",
      "Service structuring & pricing logic",
      "Market direction inputs",
      "Business plan & financial logic inputs",
      "Strategy notes & founder discussions",
      "Management decision support",
      "Integrated business planning"
    ],
  },
  {
    icon: PenTool,
    title: "Business Content & Communication",
    description: "Clear and structured content aligned with business intent and positioning.",
    details: [
      "Company profiles & executive summaries",
      "Vision–mission–values drafting",
      "Product and service descriptions",
      "Website content & pitch scripts",
      "Founder notes & email templates",
      "Social media bios",
      "Marketing plan writing"
    ],
  },
  {
    icon: FolderCheck,
    title: "Business Documentation & Governance",
    description: "Supporting documents for internal structure and control.",
    details: [
      "RCM creation",
      "SOP light documentation",
      "Policy notes & business process notes",
      "Assumption sheets & pricing sheets",
      "Basic internal audit assistance"
    ],
  },
  {
    icon: Search,
    title: "Research, Analysis & Strategic Inputs",
    description: "Research-backed inputs to support clarity and strategic direction.",
    details: [
      "Market overview notes",
      "Competitive landscape summaries",
      "SWOT analysis & competitive mapping",
      "Feasibility notes",
      "Problem–solution mapping",
      "GTM suggestions & business improvement notes",
      "Strategic planning inputs"
    ],
  },
  {
    icon: Palette,
    title: "Presentation & Visual Support",
    description: "Refinement and structuring of existing business material.",
    details: [
      "Pitch deck formatting",
      "Visual summary pages",
      "Clean pastel layouts",
      "Internal document formatting",
      "Document cleanup and polishing"
    ],
  },
  {
    icon: Cpu,
    title: "Tech / AI Related Support",
    description: "Technology support aligned with business systems and workflows.",
    details: [
      "AI and advanced tech solutions",
      "Automation and workflow solutions",
      "Dashboards and internal tools",
      "Web and application development",
      "Testing and quality assurance",
      "Technical operations support"
    ],
  },
];

function ServiceCard({ service }: { service: typeof services[0] }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="bg-card border border-border rounded-2xl p-6 hover:shadow-card hover:border-primary/20 transition-all duration-300">
      <div className="flex items-start gap-4 mb-4">
        <div className="w-12 h-12 rounded-xl bg-teal-light flex items-center justify-center flex-shrink-0">
          <service.icon className="w-5 h-5 text-primary" />
        </div>
        <div className="flex-1">
          <h3 className="font-display text-lg font-semibold text-foreground mb-2">
            {service.title}
          </h3>
          <p className="text-muted-foreground text-sm leading-relaxed">
            {service.description}
          </p>
        </div>
      </div>
      
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="flex items-center gap-2 text-primary text-sm font-medium hover:gap-3 transition-all mt-2"
      >
        View details
        <ChevronDown className={cn(
          "w-4 h-4 transition-transform duration-200",
          isExpanded && "rotate-180"
        )} />
      </button>
      
      <div className={cn(
        "overflow-hidden transition-all duration-300",
        isExpanded ? "max-h-96 mt-4 pt-4 border-t border-border" : "max-h-0"
      )}>
        <ul className="space-y-2">
          {service.details.map((detail, index) => (
            <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
              <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
              {detail}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function Services() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-32 pb-24">
        {/* Hero */}
        <section className="container mx-auto px-6 mb-16">
          <div className="max-w-4xl mx-auto text-center">
            <span className="text-primary font-medium text-sm tracking-wider uppercase mb-4 block">
              Our Services
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground mb-6">
              Comprehensive Consulting Solutions
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Fitted advisory services designed to address your unique business 
              challenges and unlock new opportunities for growth.
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {services.map((service) => (
                <ServiceCard key={service.title} service={service} />
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mx-auto mt-16 text-center">
            <div className="bg-secondary/50 rounded-3xl p-10">
              <h2 className="font-display text-2xl md:text-3xl font-semibold text-foreground mb-4">
                Ready to Get Started?
              </h2>
              <p className="text-muted-foreground mb-8">
                Let's discuss how our services can help you achieve your business goals.
              </p>
              <Button variant="hero" size="lg" asChild>
                <Link to="/contact">
                  Schedule a Consultation <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
