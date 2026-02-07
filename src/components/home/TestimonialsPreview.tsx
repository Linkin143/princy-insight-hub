import { feedbackService } from "@/api/apiService";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, ChevronLeft, ChevronRight, MessageSquare, Quote } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";

interface TestimonialData {
  fullName: string;
  companyName: string;
  industry: string;
  feedback: string;
}

export function TestimonialsPreview() {
  const [testimonials, setTestimonials] = useState<TestimonialData[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerSlide = window.innerWidth < 768 ? 1 : 3;

  const fetchData = async () => {
    try {
      const response = await feedbackService.getFeedbacks();
      if (response.data.success) {
        setTestimonials(response.data.data);
      }
    } catch (err) {
      console.error(err);
    }
  };

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex + itemsPerSlide >= testimonials.length ? 0 : prevIndex + itemsPerSlide
    );
  }, [testimonials.length, itemsPerSlide]);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - itemsPerSlide < 0 
        ? Math.max(0, testimonials.length - itemsPerSlide) 
        : prevIndex - itemsPerSlide
    );
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (testimonials.length > 0) {
      const interval = setInterval(() => {
        nextSlide();
      }, 6000); // 6 seconds auto-play speed
      return () => clearInterval(interval);
    }
  }, [testimonials, nextSlide]);

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

  // Calculate total number of dots/pages
  const totalPages = Math.ceil(testimonials.length / itemsPerSlide);

  return (
    <section className="py-16 bg-secondary/30 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-10">
          <span className="text-primary font-medium text-sm tracking-wider uppercase mb-4 block">
            Testimonials
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-4">
            What Our Clients Say
          </h2>
        </div>

        <div className="relative max-w-6xl mx-auto px-4 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8 transition-all duration-700 ease-in-out">
            {testimonials.slice(currentIndex, currentIndex + itemsPerSlide).map((testimonial, index) => (
              <Card key={index} className="bg-card border-border/50 hover:shadow-card transition-shadow h-full animate-in fade-in slide-in-from-right-5">
                <CardContent className="pt-6 flex flex-col h-full">
                  <Quote className="w-8 h-8 text-primary/30 mb-4" />
                  <p className="text-foreground mb-4 leading-relaxed flex-grow">
                    "{testimonial.feedback}"
                  </p>
                  <div className="border-t border-border pt-4 mt-auto">
                    <p className="font-semibold text-foreground">{testimonial.fullName}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.companyName}</p>
                    <p className="text-xs text-primary">{testimonial.industry}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <button
            onClick={prevSlide}
            className="absolute -left-2 md:left-0 top-1/2 -translate-y-1/2 p-2 rounded-full bg-background border border-border shadow-sm hover:bg-secondary transition-colors z-10"
            aria-label="Previous testimonials"
          >
            <ChevronLeft className="w-6 h-6 text-foreground" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute -right-2 md:right-0 top-1/2 -translate-y-1/2 p-2 rounded-full bg-background border border-border shadow-sm hover:bg-secondary transition-colors z-10"
            aria-label="Next testimonials"
          >
            <ChevronRight className="w-6 h-6 text-foreground" />
          </button>

          {/* Pagination Dots */}
          <div className="flex justify-center gap-2 mb-6">
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i * itemsPerSlide)}
                className={`w-2.5 h-2.5 rounded-full transition-all ${
                  Math.floor(currentIndex / itemsPerSlide) === i 
                  ? "bg-primary w-6" 
                  : "bg-primary/20 hover:bg-primary/40"
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>

        <div className="text-center mt-4">
          <Button variant="hero" size="lg" asChild>
            <Link to="/testimonials#submit">
              Submit Testimonial <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}