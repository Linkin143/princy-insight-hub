import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { MessageSquare, ArrowRight } from "lucide-react";

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
              We're building lasting relationships with our clients. 
              Testimonials coming soon as we grow our portfolio.
            </p>
          </div>
        </section>

        {/* Empty State */}
        <section className="container mx-auto px-6 mb-20">
          <div className="max-w-2xl mx-auto">
            <div className="bg-card border border-border rounded-3xl p-12 text-center">
              <div className="w-20 h-20 rounded-full bg-teal-light flex items-center justify-center mx-auto mb-6">
                <MessageSquare className="w-10 h-10 text-primary" />
              </div>
              <h2 className="font-display text-2xl font-semibold text-foreground mb-4">
                Testimonials Coming Soon
              </h2>
              <p className="text-muted-foreground mb-8">
                We're currently working with amazing clients. Their feedback and success stories 
                will be shared here soon. In the meantime, feel free to reach out to learn more 
                about how we can help your business.
              </p>
              <Button variant="hero" size="lg" asChild>
                <Link to="/contact">
                  Get in Touch <ArrowRight className="ml-2 w-4 h-4" />
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
