import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Phone, Mail, Linkedin, Target, Eye, Heart } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-32 pb-24">
        {/* Hero */}
        <section className="container mx-auto px-6 mb-20">
          <div className="max-w-4xl mx-auto text-center">
            <span className="text-primary font-medium text-sm tracking-wider uppercase mb-4 block">
              About Us
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground mb-6">
              Building Futures Through Strategic Vision
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Princy Shah Consulting is a founder-led strategic advisory firm dedicated 
              to helping businesses navigate complexity and achieve transformative growth.
            </p>
          </div>
        </section>

        {/* Philosophy */}
        <section className="container mx-auto px-6 mb-20">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-6">
                  Our Philosophy
                </h2>
                <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                  We believe that true consulting goes beyond delivering reports—it's about 
                  becoming a trusted partner invested in your success. Every engagement 
                  is approached with the rigor of analysis and the creativity of vision.
                </p>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Our founder-led approach ensures that senior expertise is directly 
                  applied to your challenges, providing personalized attention and 
                  strategic depth that larger firms often cannot match.
                </p>
              </div>
              <div className="bg-secondary/50 rounded-3xl p-8">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-teal-light flex items-center justify-center flex-shrink-0">
                      <Target className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Vision</h3>
                      <p className="text-muted-foreground text-sm">
                        To be the trusted partner that enables businesses to realize 
                        their full potential through strategic clarity and execution excellence.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-teal-light flex items-center justify-center flex-shrink-0">
                      <Eye className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Mission</h3>
                      <p className="text-muted-foreground text-sm">
                        Delivering actionable insights and strategic frameworks that 
                        drive measurable results and sustainable competitive advantage.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-teal-light flex items-center justify-center flex-shrink-0">
                      <Heart className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Values</h3>
                      <p className="text-muted-foreground text-sm">
                        Integrity, Excellence, Partnership, Innovation, and Results-Orientation 
                        guide everything we do.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Info */}
        <section className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="bg-teal-dark rounded-3xl p-8 md:p-12">
              <h2 className="font-display text-2xl md:text-3xl font-semibold text-primary-foreground mb-8 text-center">
                Get in Touch
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <a 
                  href="tel:9284261593" 
                  className="flex items-center gap-4 p-4 rounded-xl bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors"
                >
                  <Phone className="w-5 h-5 text-primary-foreground" />
                  <span className="text-primary-foreground">928-426-1593</span>
                </a>
                <a 
                  href="mailto:contact@princyshah.com" 
                  className="flex items-center gap-4 p-4 rounded-xl bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors"
                >
                  <Mail className="w-5 h-5 text-primary-foreground" />
                  <span className="text-primary-foreground">Email Us</span>
                </a>
                <a 
                  href="#" 
                  className="flex items-center gap-4 p-4 rounded-xl bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors"
                >
                  <Linkedin className="w-5 h-5 text-primary-foreground" />
                  <span className="text-primary-foreground">LinkedIn</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
