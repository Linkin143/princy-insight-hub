import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Users, Award, Handshake, TrendingUp } from "lucide-react";

const differentiators = [
  {
    icon: Users,
    title: "Founder-Led Engagement",
    description: "Direct access to senior-level expertise on every project. No handoffs to junior consultants—you get the experience you're paying for.",
  },
  {
    icon: Award,
    title: "Proven Track Record",
    description: "10+ years of successful engagements across industries, with measurable results and lasting client relationships.",
  },
  {
    icon: Handshake,
    title: "True Partnership",
    description: "We invest in understanding your business deeply, becoming an extension of your team rather than just an outside advisor.",
  },
  {
    icon: TrendingUp,
    title: "Results-Focused",
    description: "Every recommendation is actionable and tied to clear outcomes. We measure success by your results, not our deliverables.",
  },
];

const values = [
  "Integrity in all interactions",
  "Excellence in execution",
  "Commitment to results",
  "Respect for your time",
  "Transparency in communication",
  "Innovation in approach",
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
              strategy is tailored to your specific goals and market dynamics.
            </p>
          </div>
        </section>

        {/* Differentiators */}
        <section className="container mx-auto px-6 mb-20">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {differentiators.map((item) => (
                <div 
                  key={item.title}
                  className="bg-card border border-border rounded-3xl p-8 hover:shadow-card transition-shadow"
                >
                  <div className="w-14 h-14 rounded-xl bg-teal-light flex items-center justify-center mb-6">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h2 className="font-display text-xl font-semibold text-foreground mb-4">
                    {item.title}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="container mx-auto px-6 mb-20">
          <div className="max-w-4xl mx-auto">
            <div className="bg-secondary/50 rounded-3xl p-10 md:p-12">
              <h2 className="font-display text-2xl md:text-3xl font-semibold text-foreground mb-8 text-center">
                Our Commitment to You
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {values.map((value) => (
                  <div key={value} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-accent flex-shrink-0" />
                    <span className="text-foreground">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-display text-2xl md:text-3xl font-semibold text-foreground mb-4">
              Ready to Experience the Difference?
            </h2>
            <p className="text-muted-foreground mb-8">
              Let's discuss how we can help you achieve your goals.
            </p>
            <Button variant="hero" size="lg" asChild>
              <Link to="/contact">Start a Conversation</Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
