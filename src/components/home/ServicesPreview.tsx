import { Button } from "@/components/ui/button";
import { ArrowRight, Briefcase, Compass, LineChart, Users } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    icon: Compass,
    title: "Strategic Advisory",
    description: "Navigate complex business landscapes with expert guidance and actionable insights.",
  },
  {
    icon: LineChart,
    title: "Business Consulting",
    description: "Transform operations and processes to drive efficiency and sustainable growth.",
  },
  {
    icon: Users,
    title: "Leadership Development",
    description: "Build high-performing teams and cultivate leadership excellence across your organization.",
  },
  {
    icon: Briefcase,
    title: "Market Analysis",
    description: "Gain competitive advantage through deep market intelligence and trend analysis.",
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-12">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group p-8 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-card transition-all duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-14 h-14 rounded-xl bg-teal-light flex items-center justify-center mb-6 group-hover:bg-primary transition-colors duration-300">
                <service.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
              <Link 
                to="/services" 
                className="inline-flex items-center gap-2 text-primary font-medium mt-4 group-hover:gap-3 transition-all"
              >
                Learn More <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button variant="hero" size="lg" asChild>
            <Link to="/services">View All Services</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
