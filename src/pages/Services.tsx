import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Compass, LineChart, Users, Briefcase, TrendingUp, Settings, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Compass,
    title: "Strategic Advisory",
    description: "Navigate complex business landscapes with expert guidance and actionable insights that drive transformation.",
    elements: [
      { name: "Corporate Strategy Development", desc: "Comprehensive strategic planning aligned with your vision and market dynamics." },
      { name: "Business Model Innovation", desc: "Reimagine your value proposition and revenue streams for sustainable growth." },
      { name: "Strategic Roadmapping", desc: "Clear, actionable plans with milestones to guide execution and measure progress." },
    ],
  },
  {
    icon: LineChart,
    title: "Business Consulting",
    description: "Transform operations and processes to drive efficiency, reduce costs, and achieve operational excellence.",
    elements: [
      { name: "Process Optimization", desc: "Streamline workflows and eliminate inefficiencies across your organization." },
      { name: "Performance Management", desc: "Implement metrics and frameworks to track and improve business outcomes." },
      { name: "Change Management", desc: "Guide successful transitions with stakeholder alignment and clear communication." },
    ],
  },
  {
    icon: Users,
    title: "Leadership Development",
    description: "Build high-performing teams and cultivate leadership excellence at every level of your organization.",
    elements: [
      { name: "Executive Coaching", desc: "One-on-one guidance for senior leaders to enhance their strategic capabilities." },
      { name: "Team Effectiveness", desc: "Build cohesive teams that collaborate effectively and deliver results." },
      { name: "Succession Planning", desc: "Develop future leaders and ensure organizational continuity." },
    ],
  },
  {
    icon: Briefcase,
    title: "Market Analysis",
    description: "Gain competitive advantage through deep market intelligence, trend analysis, and strategic positioning.",
    elements: [
      { name: "Competitive Intelligence", desc: "Understand your competitive landscape and identify strategic opportunities." },
      { name: "Market Entry Strategy", desc: "Navigate new markets with confidence through thorough analysis and planning." },
      { name: "Customer Insights", desc: "Deep understanding of customer needs and behaviors to drive growth." },
    ],
  },
  {
    icon: TrendingUp,
    title: "Growth Strategy",
    description: "Accelerate business growth through innovative strategies and execution excellence.",
    elements: [
      { name: "Revenue Optimization", desc: "Maximize revenue potential through pricing, mix, and channel strategies." },
      { name: "Partnership Development", desc: "Identify and cultivate strategic partnerships for mutual growth." },
      { name: "M&A Advisory", desc: "Strategic guidance on mergers, acquisitions, and integration planning." },
    ],
  },
  {
    icon: Settings,
    title: "Operational Excellence",
    description: "Optimize your operations for maximum efficiency, quality, and customer satisfaction.",
    elements: [
      { name: "Supply Chain Optimization", desc: "Streamline supply chain operations for cost efficiency and resilience." },
      { name: "Quality Management", desc: "Implement systems to ensure consistent quality and continuous improvement." },
      { name: "Technology Integration", desc: "Leverage technology to enhance operational capabilities and insights." },
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
              Tailored advisory services designed to address your unique business 
              challenges and unlock new opportunities for growth.
            </p>
          </div>
        </section>

        {/* Services */}
        <section className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto space-y-12">
            {services.map((service, index) => (
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
