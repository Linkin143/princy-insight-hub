import { CheckCircle2 } from "lucide-react";

const reasons = [
  {
    title: "Time-Cost-Quality Benefit",
    description: "Optimal balance of speed, affordability, and excellence in every deliverable.",
  },
  {
    title: "Fast Turnaround",
    description: "Quick delivery without compromising on quality or attention to detail.",
  },
  {
    title: "Customised, Not Template-Based",
    description: "Every solution is fitted to your unique needs—no generic approaches.",
  },
  {
    title: "Insight Driven Work",
    description: "Research-led analysis that uncovers opportunities and drives informed decisions.",
  },
  {
    title: "International Standards",
    description: "Work quality fit for global markets and international investors.",
  },
  {
    title: "Structure & Strategy",
    description: "Structure to facts and strategy to ideas—turning complexity into clarity.",
  },
];

export function WhyUsSection() {
  return (
    <section className="py-24 bg-secondary/50">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          {/* Content */}
          <div>
            <span className="text-primary font-medium text-sm tracking-wider uppercase mb-4 block">
              Why Choose Us
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-semibold text-foreground mb-6">
              A Partner Invested in Your Success
            </h2>
            <p className="text-muted-foreground text-lg mb-10">
              We combine deep expertise with a collaborative approach, ensuring every 
              strategy is tailored to your specific goals and market dynamics.
            </p>

            <div className="space-y-6">
              {reasons.map((reason) => (
                <div key={reason.title} className="flex gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <CheckCircle2 className="w-5 h-5 text-green-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{reason.title}</h3>
                    <p className="text-muted-foreground text-sm">{reason.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="aspect-square rounded-3xl bg-gradient-to-br from-teal-light via-secondary to-cream overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-24 h-24 rounded-full gradient-teal flex items-center justify-center mx-auto mb-6 shadow-elevated">
                    <span className="text-primary-foreground font-display font-bold text-4xl">P</span>
                  </div>
                  <p className="font-display text-2xl font-semibold text-foreground">
                    Princy Shah Consulting
                  </p>
                  <p className="text-muted-foreground mt-2">
                    Insight that thinks. Vision that leads.
                  </p>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute top-10 left-10 w-20 h-20 rounded-full bg-primary/10 animate-float" />
              <div className="absolute bottom-16 right-12 w-16 h-16 rounded-xl bg-green-accent/20 animate-float-delayed" />
              <div className="absolute top-1/3 right-8 w-12 h-12 rounded-full border-2 border-primary/30 animate-float-slow" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
