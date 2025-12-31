import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  Layers, 
  TrendingUp,
  Presentation, 
  Cpu, 
  Users,
  ArrowRight,
  ChevronDown,
  ChevronRight
} from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

const services = [
  {
    icon: Layers,
    title: "Business Models",
    shortDescription: "Comprehensive business model structuring and analysis to establish commercial clarity, economic strength, and strategic direction.",
    sections: [
      {
        heading: "Business Model Structuring",
        bullets: [
          "End-to-end business model design",
          "Revenue stream identification and layering",
          "Primary and secondary revenue models",
          "Pricing structure, logic, and tiers",
          "Cost structure mapping",
          "Fixed and variable cost classification",
          "Value chain and operating model alignment",
          "Asset-light vs asset-heavy model assessment",
          "Centralised vs decentralised operating models"
        ]
      },
      {
        heading: "Revenue & Cost Economics",
        bullets: [
          "Unit economics analysis",
          "Contribution margin analysis",
          "Gross and operating margin assessment",
          "Break-even and payback analysis",
          "Operating leverage analysis",
          "Cost absorption analysis",
          "Capacity utilisation impact analysis",
          "Margin optimisation levers"
        ]
      },
      {
        heading: "Customer & Market Economics",
        bullets: [
          "Customer segmentation economics",
          "Customer lifetime value analysis",
          "Customer acquisition cost analysis",
          "Channel-wise profitability analysis",
          "Volume, pricing, and mix analysis",
          "Demand elasticity assessment",
          "Retention and repeat economics"
        ]
      },
      {
        heading: "Comparative & Strategic Analysis",
        bullets: [
          "Industry benchmarking",
          "Peer and competitor model comparison",
          "Model comparison: current vs proposed",
          "In-house vs outsourced economics",
          "Subscription vs transactional models",
          "Scale vs margin trade-off analysis",
          "Domestic vs international expansion economics"
        ]
      },
      {
        heading: "Scenario, Risk & Sustainability",
        bullets: [
          "Base, upside, and downside model scenarios",
          "Assumption stress testing",
          "Sensitivity to pricing, cost, and volume changes",
          "Risk identification at model level",
          "Regulatory and operational risk impact",
          "Long-term sustainability assessment",
          "Scalability constraints analysis",
          "Investor-grade documentation and logic notes"
        ]
      }
    ]
  },
  {
    icon: TrendingUp,
    title: "Financial Forecasts",
    shortDescription: "Structured financial forecasting and planning for disciplined cash management, capital allocation, and performance tracking.",
    sections: [
      {
        heading: "Financial Projections",
        bullets: [
          "Profit and Loss projections",
          "Cash Flow projections",
          "Balance Sheet projections",
          "Three to five year integrated forecasts"
        ]
      },
      {
        heading: "Budgeting & Capital Planning",
        bullets: [
          "Annual and operating budgets",
          "Cash runway and burn analysis",
          "Fund utilisation planning",
          "Capital requirement assessment"
        ]
      },
      {
        heading: "Scenario & Sensitivity",
        bullets: [
          "Scenario-based financial outcomes",
          "Sensitivity to revenue, cost, and capital changes",
          "Downside risk modelling"
        ]
      },
      {
        heading: "MIS & Performance Tracking",
        bullets: [
          "Management reporting structures",
          "KPI frameworks",
          "Periodic performance dashboards",
          "Decision-support financial reporting"
        ]
      }
    ]
  },
  {
    icon: Presentation,
    title: "Pitch Decks",
    shortDescription: "Investor-grade pitch decks to position the business clearly, credibly, and persuasively before investors and partners.",
    sections: [
      {
        heading: "Narrative & Strategic Positioning",
        bullets: [
          "Pitch storyline and sequencing",
          "Founder vision articulation",
          "Strategic intent positioning",
          "Problem–solution articulation",
          "Business overview structuring",
          "Long-term value creation narrative"
        ]
      },
      {
        heading: "Market & Competitive Positioning",
        bullets: [
          "Market sizing (TAM, SAM, SOM)",
          "Market growth and trend analysis",
          "Industry structure assessment",
          "Competitive landscape mapping",
          "Differentiation and moat articulation",
          "Entry barriers and scalability narrative"
        ]
      },
      {
        heading: "Business & Financial Representation",
        bullets: [
          "Business model presentation",
          "Revenue drivers explanation",
          "Cost structure overview",
          "Financial highlights and key metrics",
          "Unit economics summary",
          "Operating leverage narrative",
          "Growth milestones and roadmap"
        ]
      },
      {
        heading: "Fundraising Readiness",
        bullets: [
          "Capital requirement articulation",
          "Use of funds structuring",
          "Funding stage alignment",
          "Investor return logic",
          "Key risk disclosures",
          "Investor Q&A preparation",
          "Deck refinement and iteration"
        ]
      }
    ]
  },
  {
    icon: Cpu,
    title: "Technology Support",
    shortDescription: "Technology and automation support for reliable execution, reporting accuracy, and operational efficiency.",
    sections: [
      {
        heading: "Product & Platform Development",
        bullets: [
          "Website development (static, dynamic, CMS, landing pages)",
          "Web application development",
          "Mobile application development (Android / iOS)",
          "Backend system development",
          "API integrations",
          "Third-party tool integrations",
          "Maintenance, upgrades, and issue resolution"
        ]
      },
      {
        heading: "Automation & AI",
        bullets: [
          "Workflow automation",
          "Task and process automation",
          "CRM automation",
          "Lead and sales process automation",
          "Finance and reporting automation",
          "Chatbots for sales, support, and internal use",
          "AI agents for internal workflows",
          "Data pipelines and system integrations"
        ]
      },
      {
        heading: "Dashboards & Internal Tools",
        bullets: [
          "Business dashboards",
          "MIS and reporting dashboards",
          "Finance dashboards",
          "Sales and marketing dashboards",
          "Operations dashboards",
          "Custom internal tools for finance, sales, and operations",
          "Data visualisation and reporting frameworks"
        ]
      },
      {
        heading: "Testing & Reliability",
        bullets: [
          "End-to-end testing (web, mobile, desktop)",
          "Functional testing",
          "Performance and load testing",
          "Integration testing",
          "Basic security testing",
          "Reliability and stability checks"
        ]
      }
    ]
  },
  {
    icon: Users,
    title: "Advisory Support",
    shortDescription: "Ongoing advisory engagement providing structured judgement across business, finance, marketing, and operations.",
    sections: [
      {
        heading: "Business & Strategy Advisory",
        bullets: [
          "Growth strategy advisory",
          "Market entry and expansion advisory",
          "Business restructuring guidance",
          "Go-to-market strategy",
          "Pricing and monetisation decisions",
          "Scale planning and execution guidance"
        ]
      },
      {
        heading: "Financial & Capital Advisory",
        bullets: [
          "Fundraising readiness advisory",
          "Equity vs debt structuring guidance",
          "Capital allocation decisions",
          "Cash flow and liquidity oversight",
          "Financial risk identification",
          "Investor and lender discussion support"
        ]
      },
      {
        heading: "Marketing Advisory",
        bullets: [
          "Marketing strategy advisory",
          "Brand positioning and narrative guidance",
          "Customer acquisition strategy",
          "CAC, LTV, and payback analysis",
          "Marketing budget planning",
          "Marketing spend effectiveness review",
          "Channel and campaign evaluation"
        ]
      },
      {
        heading: "Model, Forecast & Performance Advisory",
        bullets: [
          "Business model reviews",
          "Financial forecast reviews",
          "Assumption validation",
          "Scenario interpretation",
          "Performance gap analysis",
          "Corrective action guidance"
        ]
      },
      {
        heading: "Ongoing Engagements",
        bullets: [
          "Periodic strategic reviews",
          "Financial performance monitoring",
          "Monthly or quarterly advisory calls",
          "Founder and leadership decision support",
          "Retainer-based advisory relationships"
        ]
      }
    ]
  }
];

type ServiceSection = {
  heading: string;
  bullets: string[];
};

type Service = {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  shortDescription: string;
  sections: ServiceSection[];
};

function ServiceCard({ service }: { service: Service }) {
  const [isDetailOpen, setIsDetailOpen] = useState(false);
  const [expandedHeads, setExpandedHeads] = useState<Set<number>>(new Set());

  const toggleHead = (index: number) => {
    const newSet = new Set(expandedHeads);
    if (newSet.has(index)) {
      newSet.delete(index);
    } else {
      newSet.add(index);
    }
    setExpandedHeads(newSet);
  };

  return (
    <div className="bg-card border border-border rounded-2xl overflow-hidden hover:shadow-card hover:border-primary/20 transition-all duration-300">
      {/* Layer 1: Service Overview */}
      <div className="p-6">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-xl bg-teal-light flex items-center justify-center flex-shrink-0">
            <service.icon className="w-5 h-5 text-primary" />
          </div>
          <div className="flex-1">
            <h3 className="font-display text-lg font-semibold text-foreground mb-2">
              {service.title}
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              {service.shortDescription}
            </p>
          </div>
        </div>
        
        <button
          onClick={() => setIsDetailOpen(!isDetailOpen)}
          className="flex items-center gap-2 text-primary text-sm font-medium hover:gap-3 transition-all mt-4"
        >
          {isDetailOpen ? "Hide details" : "Explore scope"}
          <ChevronDown className={cn(
            "w-4 h-4 transition-transform duration-200",
            isDetailOpen && "rotate-180"
          )} />
        </button>
      </div>
      
      {/* Layer 2: Content Heads (collapsed by default) */}
      <div className={cn(
        "overflow-hidden transition-all duration-300 border-t border-border",
        isDetailOpen ? "max-h-[2000px] opacity-100" : "max-h-0 opacity-0 border-t-0"
      )}>
        <div className="p-4 space-y-2 bg-secondary/20">
          {service.sections.map((section, index) => (
            <div key={index} className="bg-card border border-border/50 rounded-xl overflow-hidden">
              {/* Content Head - Clickable */}
              <button
                onClick={() => toggleHead(index)}
                className="w-full flex items-center justify-between p-4 text-left hover:bg-secondary/50 transition-colors"
              >
                <span className="font-medium text-foreground text-sm">
                  {section.heading}
                </span>
                <ChevronRight className={cn(
                  "w-4 h-4 text-primary transition-transform duration-200 flex-shrink-0",
                  expandedHeads.has(index) && "rotate-90"
                )} />
              </button>
              
              {/* Layer 3: Bullet Points (revealed on click) */}
              <div className={cn(
                "overflow-hidden transition-all duration-200 bg-secondary/30",
                expandedHeads.has(index) ? "max-h-[500px]" : "max-h-0"
              )}>
                <ul className="px-4 py-3 space-y-2">
                  {section.bullets.map((bullet, bulletIndex) => (
                    <li key={bulletIndex} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
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
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground mb-6">
              Fitted Consultancy Services
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Fitted consultancy services designed to address your unique business 
              challenges and unlock new opportunities for growth.
            </p>
          </div>
        </section>

        {/* Layer 1: Services Overview */}
        <section className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
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