import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Princy Shah Consulting transformed our approach to strategic planning. Their insights were invaluable in helping us navigate a critical growth phase.",
    author: "Sarah Mitchell",
    title: "CEO, TechVentures Inc.",
  },
  {
    quote: "The level of expertise and dedication we received exceeded our expectations. They truly became an extension of our leadership team.",
    author: "Michael Chen",
    title: "Managing Director, Atlas Partners",
  },
  {
    quote: "Their data-driven approach combined with practical wisdom helped us achieve results we didn't think were possible in our timeline.",
    author: "Emily Rodriguez",
    title: "VP Strategy, Horizon Health",
  },
  {
    quote: "Working with Princy Shah Consulting was a game-changer for our organization. Their strategic recommendations drove measurable improvements across all our key metrics.",
    author: "David Thompson",
    title: "President, Summit Industries",
  },
  {
    quote: "The collaborative approach and depth of understanding they brought to our challenges made all the difference. Highly recommend.",
    author: "Jennifer Walsh",
    title: "Chief Operating Officer, NextGen Solutions",
  },
  {
    quote: "From day one, they demonstrated a commitment to our success that went beyond typical consulting relationships. True partners in every sense.",
    author: "Robert Kim",
    title: "Founder, Apex Innovations",
  },
];

export default function Testimonials() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-32 pb-24">
        {/* Hero */}
        <section className="container mx-auto px-6 mb-20">
          <div className="max-w-4xl mx-auto text-center">
            <span className="text-primary font-medium text-sm tracking-wider uppercase mb-4 block">
              Testimonials
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground mb-6">
              What Our Clients Say
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Hear from business leaders who have partnered with us to achieve 
              transformative results.
            </p>
          </div>
        </section>

        {/* Testimonials Grid */}
        <section className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div 
                  key={testimonial.author}
                  className="bg-card border border-border rounded-3xl p-8 hover:shadow-card transition-shadow"
                >
                  <Quote className="w-10 h-10 text-teal-light mb-6" />
                  <p className="text-foreground leading-relaxed mb-6">
                    "{testimonial.quote}"
                  </p>
                  <div>
                    <p className="font-semibold text-foreground">
                      {testimonial.author}
                    </p>
                    <p className="text-muted-foreground text-sm">
                      {testimonial.title}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
