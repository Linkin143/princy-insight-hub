import { Button } from "@/components/ui/button";
import { 
  ArrowRight, 
  Layers, 
  TrendingUp,
  Presentation, 
  Cpu, 
  Users,
  ChevronDown,
  ChevronRight
} from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { cn } from "@/lib/utils";

const services = [
  {
    icon: Layers,
    title: "Business Models",
    shortDescription: "Comprehensive business model structuring and analysis to establish commercial clarity, economic strength, and strategic direction.",
    sections: [
      { heading: "Business Model Structuring" },
      { heading: "Revenue & Cost Economics" },
      { heading: "Customer & Market Economics" },
      { heading: "Comparative & Strategic Analysis" },
      { heading: "Scenario, Risk & Sustainability" },
    ]
  },
  {
    icon: TrendingUp,
    title: "Financial Forecasts",
    shortDescription: "Structured financial forecasting and planning for disciplined cash management, capital allocation, and performance tracking.",
    sections: [
      { heading: "Financial Projections" },
      { heading: "Budgeting & Capital Planning" },
      { heading: "Scenario & Sensitivity" },
      { heading: "MIS & Performance Tracking" },
    ]
  },
  {
    icon: Presentation,
    title: "Pitch Decks",
    shortDescription: "Investor-grade pitch decks to position the business clearly, credibly, and persuasively before investors and partners.",
    sections: [
      { heading: "Narrative & Strategic Positioning" },
      { heading: "Market & Competitive Positioning" },
      { heading: "Business & Financial Representation" },
      { heading: "Fundraising Readiness" },
    ]
  },
  {
    icon: Cpu,
    title: "Technology Support",
    shortDescription: "Technology and automation support for reliable execution, reporting accuracy, and operational efficiency.",
    sections: [
      { heading: "Product & Platform Development" },
      { heading: "Automation & AI" },
      { heading: "Dashboards & Internal Tools" },
      { heading: "Testing & Reliability" },
    ]
  },
  {
    icon: Users,
    title: "Advisory Support",
    shortDescription: "Ongoing advisory engagement providing structured judgement across business, finance, marketing, and operations.",
    sections: [
      { heading: "Business & Strategy Advisory" },
      { heading: "Financial & Capital Advisory" },
      { heading: "Marketing Advisory" },
      { heading: "Model, Forecast & Performance Advisory" },
      { heading: "Ongoing Engagements" },
    ]
  },
];

type Service = typeof services[0];

function ServiceCard({ service }: { service: Service }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="group p-6 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-card transition-all duration-300">
      <div className="w-12 h-12 rounded-xl bg-teal-light flex items-center justify-center mb-4 group-hover:bg-primary transition-colors duration-300">
        <service.icon className="w-5 h-5 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
      </div>
      <h3 className="font-display text-lg font-semibold text-foreground mb-2">
        {service.title}
      </h3>
      <p className="text-muted-foreground text-sm leading-relaxed mb-4">
        {service.shortDescription}
      </p>
      
      {/* Explore Scope Button */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="flex items-center gap-2 text-primary text-sm font-medium hover:gap-3 transition-all"
      >
        {isExpanded ? "Hide scope" : "Explore scope"}
        <ChevronDown className={cn(
          "w-4 h-4 transition-transform duration-200",
          isExpanded && "rotate-180"
        )} />
      </button>
      
      {/* Content Heads Preview */}
      <div className={cn(
        "overflow-hidden transition-all duration-300",
        isExpanded ? "max-h-96 mt-4 pt-4 border-t border-border" : "max-h-0"
      )}>
        <ul className="space-y-2">
          {service.sections.map((section, index) => (
            <li key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
              <ChevronRight className="w-3 h-3 text-primary flex-shrink-0" />
              {section.heading}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export function ServicesPreview() {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-6">
            Our Services
          </h2>
          <p className="text-muted-foreground text-lg">
            Services specially structured to suit the style and stage of your business, combining clarity, research, and disciplined thinking to add value beyond documentation.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto mb-12">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button variant="hero" size="lg" asChild>
            <Link to="/services">
              Know More <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}