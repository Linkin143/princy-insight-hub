import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, BarChart3, Lightbulb, Target, TrendingUp, Sparkles } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-screen pt-32 pb-20 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 gradient-subtle" />
      
      {/* Floating elements */}
      <div className="absolute top-40 left-20 animate-float hidden lg:block">
        <div className="w-12 h-12 rounded-full bg-teal-light flex items-center justify-center shadow-soft">
          <Sparkles className="w-5 h-5 text-primary" />
        </div>
      </div>
      
      <div className="absolute top-60 left-12 animate-float-delayed hidden lg:block">
        <div className="w-10 h-10 rounded-full border-2 border-primary/20 flex items-center justify-center">
          <ArrowUpRight className="w-4 h-4 text-primary" />
        </div>
      </div>
      
      <div className="absolute top-80 left-28 animate-float-slow hidden lg:block">
        <div className="w-8 h-8 rounded-lg bg-green-accent/20 flex items-center justify-center">
          <Target className="w-4 h-4 text-green-accent" />
        </div>
      </div>
      
      <div className="absolute top-40 right-20 animate-float-delayed hidden lg:block">
        <div className="w-10 h-10 rounded-full border-2 border-primary/20 flex items-center justify-center">
          <BarChart3 className="w-4 h-4 text-primary" />
        </div>
      </div>
      
      <div className="absolute top-72 right-16 animate-float hidden lg:block">
        <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center shadow-soft">
          <TrendingUp className="w-5 h-5 text-primary" />
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main heading */}
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-semibold text-foreground mb-6 animate-fade-in-up">
            Strategic Advisory for{" "}
            <span className="text-primary">Transformative Growth</span>
          </h1>
          
          {/* Tagline */}
          <p className="text-lg md:text-xl text-muted-foreground mb-4 animate-fade-in-up-delayed">
            Insight that thinks. Vision that leads.
          </p>
          
          {/* Description */}
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-in-up-delayed-2">
            Empowering businesses with strategic consulting and expert advisory services 
            to navigate complexity and achieve sustainable success.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-fade-in-up-delayed-2">
            <Button variant="hero" size="xl" asChild>
              <Link to="/contact">Get Started</Link>
            </Button>
            <Button variant="heroOutline" size="xl" asChild>
              <Link to="/services">Explore Services</Link>
            </Button>
          </div>
          
          {/* Rating badge */}
          <div className="flex items-center justify-center gap-2 mb-20">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="font-semibold text-foreground">5.0</span>
            <span className="text-muted-foreground">from 50+ reviews</span>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {/* Card 1 - With image placeholder */}
          <div className="lg:row-span-2 rounded-2xl overflow-hidden shadow-card group">
            <div className="h-full bg-gradient-to-br from-teal-medium to-teal-dark p-6 flex flex-col justify-end min-h-[280px]">
              <Lightbulb className="w-8 h-8 text-primary-foreground/80 mb-4" />
              <h3 className="text-primary-foreground font-display text-xl font-semibold">
                Strategic Insights
              </h3>
              <p className="text-primary-foreground/70 text-sm mt-2">
                Data-driven decisions for lasting impact
              </p>
            </div>
          </div>

          {/* Card 2 - Stat */}
          <div className="rounded-2xl bg-green-accent p-6 shadow-card flex flex-col justify-center">
            <span className="text-4xl font-display font-bold text-primary-foreground">50+</span>
            <span className="text-primary-foreground/80 text-sm mt-1">
              Clients & Partners
            </span>
          </div>

          {/* Card 3 - Projects */}
          <div className="rounded-2xl bg-card border border-border p-6 shadow-card">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-lg bg-secondary flex items-center justify-center">
                <Target className="w-4 h-4 text-primary" />
              </div>
              <span className="text-muted-foreground text-sm">Total Projects</span>
            </div>
            <span className="text-4xl font-display font-bold text-foreground">200+</span>
            <p className="text-green-accent text-sm mt-1">Successful engagements</p>
          </div>

          {/* Card 4 - Years */}
          <div className="rounded-2xl bg-card border border-border p-6 shadow-card flex flex-col justify-center">
            <span className="text-4xl font-display font-bold text-foreground">10+</span>
            <span className="text-muted-foreground text-sm mt-1">
              Years of<br />Excellence
            </span>
          </div>

          {/* Card 5 - CTA */}
          <div className="lg:col-span-2 rounded-2xl bg-gradient-to-br from-teal-dark to-primary p-6 shadow-card">
            <div className="w-10 h-10 rounded-xl bg-primary-foreground/20 flex items-center justify-center mb-4">
              <TrendingUp className="w-5 h-5 text-primary-foreground" />
            </div>
            <h3 className="text-primary-foreground font-display text-xl font-semibold">
              Achieve Optimal Efficiency and Boost Productivity
            </h3>
            <p className="text-primary-foreground/70 text-sm mt-2">
              Let us transform your business strategy
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
