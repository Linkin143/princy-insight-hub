import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MessageSquare, ArrowRight, Quote } from "lucide-react";

// Placeholder for future testimonials - these will be populated when testimonials are approved
const testimonials: Array<{
  name: string;
  company: string;
  industry: string;
  feedback: string;
}> = [];

export function TestimonialsPreview() {
  if (testimonials.length === 0) {
    return (
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-10">
            <span className="text-primary font-medium text-sm tracking-wider uppercase mb-4 block">
              Testimonials
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-4">
              What Our Clients Say
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We're building lasting relationships with our clients. 
              Testimonials coming soon as we grow our portfolio.
            </p>
          </div>

          <div className="max-w-md mx-auto">
            <Card className="bg-card border-border/50 text-center p-8">
              <CardContent className="pt-0">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <MessageSquare className="w-8 h-8 text-primary" />
                </div>
                <p className="text-muted-foreground mb-6">
                  Have you worked with us? Share your experience!
                </p>
                <Button variant="hero" size="lg" asChild>
                  <Link to="/testimonials#submit">
                    Submit a Testimonial <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-10">
          <span className="text-primary font-medium text-sm tracking-wider uppercase mb-4 block">
            Testimonials
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-4">
            What Our Clients Say
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-10">
          {testimonials.slice(0, 3).map((testimonial, index) => (
            <Card key={index} className="bg-card border-border/50 hover:shadow-card transition-shadow">
              <CardContent className="pt-6">
                <Quote className="w-8 h-8 text-primary/30 mb-4" />
                <p className="text-foreground mb-4 leading-relaxed">
                  "{testimonial.feedback}"
                </p>
                <div className="border-t border-border pt-4">
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                  <p className="text-xs text-primary">{testimonial.industry}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button variant="outline" size="lg" asChild>
            <Link to="/testimonials">
              View All Testimonials <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
