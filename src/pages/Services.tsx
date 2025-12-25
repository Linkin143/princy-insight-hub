import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Presentation, Layers, TrendingUp, HeadphonesIcon, Cpu, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Presentation,
    title: "Pitch Decks",
    description: "Compelling presentations that communicate your vision and win investor confidence.",
    elements: [
      { name: "Investor Pitch Decks", desc: "Professionally crafted decks designed to secure funding and partnerships." },
      { name: "Sales Presentations", desc: "Persuasive materials that convert prospects into clients." },
      { name: "Corporate Presentations", desc: "Polished decks for board meetings, conferences, and stakeholder communications." },
    ],
  },
  {
    icon: Layers,
    title: "Business Model",
    description: "Strategic frameworks that define how your business creates, delivers, and captures value.",
    elements: [
      { name: "Business Model Canvas", desc: "Comprehensive mapping of your value proposition, channels, and revenue streams." },
      { name: "Revenue Model Design", desc: "Innovative approaches to monetization fitted to your market." },
      { name: "Scalability Planning", desc: "Strategies for sustainable growth and market expansion." },
    ],
  },
  {
    icon: TrendingUp,
    title: "Financial Forecasts",
    description: "Data-driven projections that guide strategic decisions and attract investment.",
    elements: [
      { name: "Revenue Projections", desc: "Realistic forecasts based on market analysis and growth assumptions." },
      { name: "Financial Modelling", desc: "Comprehensive models for scenario planning and decision-making." },
      { name: "Investment Analysis", desc: "ROI calculations and investment readiness assessments." },
    ],
  },
  {
    icon: HeadphonesIcon,
    title: "Advisory Support",
    description: "Expert guidance to navigate complex business challenges and opportunities.",
    elements: [
      { name: "Strategic Advisory", desc: "Ongoing counsel for critical business decisions and market positioning." },
      { name: "Business Development", desc: "Support for partnerships, market entry, and growth initiatives." },
      { name: "Operational Guidance", desc: "Practical advice on process optimization and efficiency improvements." },
    ],
  },
  {
    icon: Cpu,
    title: "Tech Support",
    description: "Technical expertise to power your digital transformation and innovation.",
    elements: [
      { name: "Technology Strategy", desc: "Roadmaps for digital transformation and technology adoption." },
      { name: "Platform Selection", desc: "Guidance on tools and platforms fitted to your business needs." },
      { name: "Implementation Support", desc: "Technical assistance for seamless deployment and integration." },
    ],
  },
];

export default function Services() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-32 pb-24">
        {/* Hero */}
        <section className="container mx-auto px-6 mb-20">
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

        {/* Services */}
        <section className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto space-y-12">
            {services.map((service) => (
              <div 
                key={service.title}
                className="bg-card border border-border rounded-3xl p-8 md:p-10 hover:shadow-card transition-shadow"
              >
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  {/* Service Header */}
                  <div className="lg:col-span-1">
                    <div className="w-14 h-14 rounded-xl bg-teal-light flex items-center justify-center mb-6">
                      <service.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h2 className="font-display text-2xl font-semibold text-foreground mb-4">
                      {service.title}
                    </h2>
                    <p className="text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  {/* Service Elements */}
                  <div className="lg:col-span-2">
                    <div className="space-y-6">
                      {service.elements.map((element) => (
                        <div key={element.name} className="flex gap-4">
                          <div className="flex-shrink-0 mt-1.5">
                            <div className="w-2 h-2 rounded-full bg-primary" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-foreground mb-1">
                              {element.name}
                            </h3>
                            <p className="text-muted-foreground text-sm">
                              {element.desc}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
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
