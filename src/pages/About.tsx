import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { Award, Eye, Linkedin, Mail, Phone, Sparkles, Target, Users, Zap } from "lucide-react";
import FounderProfile from "../../attachments/Profile Photo/Founder_Pic.jpeg";

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
              Innovating Futures Through Strategic Vision
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Princy Shah Consulting is a founder-led strategic advisory firm dedicated 
              to helping businesses navigate complexity and achieve innovative growth.
            </p>
          </div>
        </section>

        {/* Founder Section */}
        <section className="container mx-auto px-6 mb-20">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="order-2 lg:order-1">
                <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-2">
                  Princy Shah
                </h2>
                <p className="text-primary font-medium mb-6">Founder</p>
                <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                  I founded Princy Shah Consulting to bring clarity and innovation to 
                  businesses seeking meaningful growth. My approach combines deep analytical 
                  thinking with a vision-led methodology that transforms challenges into opportunities.
                </p>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  I believe in building lasting partnerships with my clients, understanding 
                  their unique needs, and delivering solutions that create real, measurable impact.
                </p>
              </div>
              <div className="order-1 lg:order-2 flex justify-center">
                <div className="relative">
                  {/* Circular Photo Frame */}
                  <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-secondary/50 border-4 border-primary/20 overflow-hidden shadow-xl">
                    <img 
                      src={FounderProfile} 
                      alt="Princy Shah - Founder" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="text-center mt-4 text-primary font-medium">Founder</p>
                </div>
              </div>
            </div>
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
                  is approached with research-led analysis and insightful vision.
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
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Target className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Vision</h3>
                      <p className="text-muted-foreground text-sm">
                        Elevating the future with innovators through vision-led insight.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Eye className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Mission</h3>
                      <p className="text-muted-foreground text-sm">
                        Your business, my detailing — turning raw ideas into sharp systems that work.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="container mx-auto px-6 mb-20">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-8 text-center">
              Our Values
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-secondary/30 rounded-2xl p-6 border border-border">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Eye className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Vision with Structure</h3>
                <p className="text-muted-foreground text-sm">Big ideas grounded in practical frameworks.</p>
              </div>
              <div className="bg-secondary/30 rounded-2xl p-6 border border-border">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Sparkles className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Innovation with Sense</h3>
                <p className="text-muted-foreground text-sm">Creative solutions that make business sense.</p>
              </div>
              <div className="bg-secondary/30 rounded-2xl p-6 border border-border">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Target className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Clarity in All Things</h3>
                <p className="text-muted-foreground text-sm">Clear communication and transparent processes.</p>
              </div>
              <div className="bg-secondary/30 rounded-2xl p-6 border border-border">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Zap className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Speed with Discipline</h3>
                <p className="text-muted-foreground text-sm">Fast execution without compromising quality.</p>
              </div>
              <div className="bg-secondary/30 rounded-2xl p-6 border border-border">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Users className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Partnership with Purpose</h3>
                <p className="text-muted-foreground text-sm">Meaningful collaborations that drive results.</p>
              </div>
              <div className="bg-secondary/30 rounded-2xl p-6 border border-border">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Award className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Impact that Lasts</h3>
                <p className="text-muted-foreground text-sm">Sustainable solutions for long-term success.</p>
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
                  href="mailto:princyshahconsulting@gmail.com" 
                  className="flex items-center gap-4 p-4 rounded-xl bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors"
                >
                  <Mail className="w-5 h-5 text-primary-foreground" />
                  <span className="text-primary-foreground">Email Us</span>
                </a>
                <a 
                  href="https://www.linkedin.com/in/princy-shah-071882176/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" 
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