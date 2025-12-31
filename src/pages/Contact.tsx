import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Linkedin, Mail, Phone } from "lucide-react";
import { toast } from "sonner";

export default function Contact() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thank you for your message! We'll be in touch soon.");
  };

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-32 pb-24">
        {/* Hero */}
        <section className="container mx-auto px-6 mb-16">
          <div className="max-w-4xl mx-auto text-center">
            <span className="text-primary font-medium text-sm tracking-wider uppercase mb-4 block">
              Contact Us
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground mb-6">
              Let's Start a Conversation
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Ready to discuss how strategic consulting can help you achieve your 
              business goals? We'd love to hear from you.
            </p>
          </div>
        </section>

        {/* Contact Form & Info */}
        <section className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Contact Form */}
              <div className="bg-card border border-border rounded-3xl p-8 md:p-10">
                <h2 className="font-display text-2xl font-semibold text-foreground mb-6">
                  Send Us a Message
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        First Name
                      </label>
                      <Input placeholder="" required />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Last Name
                      </label>
                      <Input placeholder="" required />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Email
                    </label>
                    <Input type="email" placeholder="" required />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Company
                    </label>
                    <Input placeholder="" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Message
                    </label>
                    <Textarea 
                      placeholder="Tell us about your project or inquiry..." 
                      rows={5}
                      required
                    />
                  </div>
                  <Button type="submit" variant="hero" size="lg" className="w-full">
                    Send Message
                  </Button>
                </form>
              </div>

              {/* Contact Info */}
              <div className="space-y-8">
                <div>
                  <h2 className="font-display text-2xl font-semibold text-foreground mb-6">
                    Get in Touch
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    We're here to answer any questions you may have about our 
                    consulting services. Reach out to us and we'll respond as 
                    soon as possible.
                  </p>
                </div>

                <div className="space-y-6">
                  <a 
                    href="tel:9284261593" 
                    className="flex items-start gap-4 p-4 rounded-xl bg-secondary hover:bg-secondary/80 transition-colors"
                  >
                    <div className="w-12 h-12 rounded-xl bg-teal-light flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">Phone</p>
                      <p className="text-muted-foreground">928-426-1593</p>
                    </div>
                  </a>

                  <a 
                    href="mailto:princyshahconsulting@gmail.com" 
                    className="flex items-start gap-4 p-4 rounded-xl bg-secondary hover:bg-secondary/80 transition-colors"
                  >
                    <div className="w-12 h-12 rounded-xl bg-teal-light flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">Email</p>
                      <p className="text-muted-foreground">princyshahconsulting@gmail.com</p>
                    </div>
                  </a>

                  <a 
                    href="https://www.linkedin.com/in/princy-shah-071882176/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" 
                    className="flex items-start gap-4 p-4 rounded-xl bg-secondary hover:bg-secondary/80 transition-colors"
                  >
                    <div className="w-12 h-12 rounded-xl bg-teal-light flex items-center justify-center flex-shrink-0">
                      <Linkedin className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">LinkedIn</p>
                      <p className="text-muted-foreground">Connect with us</p>
                    </div>
                  </a>
                </div>

                {/* CTA Card */}
                <div className="bg-teal-dark rounded-3xl p-8 mt-8">
                  <h3 className="font-display text-xl font-semibold text-primary-foreground mb-3">
                    Schedule a Consultation
                  </h3>
                  <p className="text-primary-foreground/80 text-sm mb-6">
                    Prefer to speak directly? Schedule a call with our team 
                    to discuss your specific needs.
                  </p>
                  <Button 
                    className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 w-full"
                    asChild
                  >
                    <a href="https://calendly.com" target="_blank" rel="noopener noreferrer">
                      Book a Call
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}