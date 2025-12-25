import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  Award, 
  Zap, 
  Palette, 
  Lightbulb, 
  Globe, 
  LayoutGrid,
  ArrowRight 
} from "lucide-react";

const benefits = [
  {
    icon: Award,
    title: "Time-Cost-Quality Benefit",
    description: "Delivering optimal balance across all three dimensions for maximum value.",
  },
  {
    icon: Zap,
    title: "Fast Turnaround",
    description: "Quick delivery without compromising on quality or attention to detail.",
  },
  {
    icon: Palette,
    title: "Customised, Not Template-Based",
    description: "Every solution is fitted to your specific needs, never off-the-shelf.",
  },
  {
    icon: Lightbulb,
    title: "Insight Driven Work",
    description: "Research-backed strategies that deliver measurable business outcomes.",
  },
  {
    icon: Globe,
    title: "International Standards",
    description: "Standards fit for international markets and global competitiveness.",
  },
  {
    icon: LayoutGrid,
    title: "Structure & Strategy",
    description: "Structure to facts and strategy to ideas for clear, actionable outcomes.",
  },
];

export default function WhyUs() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-32 pb-24">
        {/* Hero */}
        <section className="container mx-auto px-6 mb-20">
          <div className="max-w-4xl mx-auto text-center">
            <span className="text-primary font-medium text-sm tracking-wider uppercase mb-4 block">
              Why Choose Us
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground mb-6">
              A Partner Invested in Your Success
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              We combine deep expertise with a collaborative approach, ensuring every 
              strategy is fitted to your specific goals and market dynamics.
            </p>
          </div>
        </section>

        {/* Benefits Grid */}
        <section className="container mx-auto px-6 mb-20">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit) => (
                <div 
                  key={benefit.title}
                  className="bg-card border border-border rounded-2xl p-8 hover:shadow-card hover:border-primary/30 transition-all duration-300"
                >
                  <div className="w-14 h-14 rounded-xl bg-teal-light flex items-center justify-center mb-6">
                    <benefit.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="bg-secondary/50 rounded-3xl p-10 text-center">
              <h2 className="font-display text-2xl md:text-3xl font-semibold text-foreground mb-4">
                Ready to Experience the Difference?
              </h2>
              <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
                Let's discuss how our fitted approach can help you achieve your business goals.
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
