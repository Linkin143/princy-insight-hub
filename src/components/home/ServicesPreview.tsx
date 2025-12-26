import { Button } from "@/components/ui/button";
import { 
  ArrowRight, 
  Layers, 
  TrendingUp,
  Presentation, 
  Cpu, 
  Users
} from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    icon: Layers,
    title: "Business Models",
    description: "Comprehensive business model structuring and analysis to establish commercial clarity and strategic direction.",
  },
  {
    icon: TrendingUp,
    title: "Financial Forecasts",
    description: "Structured financial forecasting and planning for disciplined cash management and performance tracking.",
  },
  {
    icon: Presentation,
    title: "Pitch Decks",
    description: "Investor-grade pitch decks to position the business clearly and persuasively before investors and partners.",
  },
  {
    icon: Cpu,
    title: "Technology Support",
    description: "Technology and automation support for reliable execution and operational efficiency.",
  },
  {
    icon: Users,
    title: "Advisory Support",
    description: "Ongoing advisory engagement providing structured judgement across business, finance, and operations.",
  },
];

export function ServicesPreview() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <span className="text-primary font-medium text-sm tracking-wider uppercase mb-4 block">
            Our Services
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-foreground mb-6">
            Comprehensive Consulting Solutions
          </h2>
          <p className="text-muted-foreground text-lg">
            Services specially structured to suit the style and stage of your business, combining clarity, research, and disciplined thinking to add value beyond documentation.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto mb-12">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group p-6 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-card transition-all duration-300"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="w-12 h-12 rounded-xl bg-teal-light flex items-center justify-center mb-4 group-hover:bg-primary transition-colors duration-300">
                <service.icon className="w-5 h-5 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button variant="hero" size="lg" asChild>
            <Link to="/services">
              View All Services <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}