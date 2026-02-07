import { feedbackService } from "@/api/apiService";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useForm } from "@/hooks/useForm";
import { MessageSquare, Quote, Send } from "lucide-react";
import { useEffect, useState } from "react";

interface TestimonialData {
  fullName: string;
  companyName: string;
  industry: string;
  feedback: string;
  consent: boolean;
}

export default function Testimonials() {
  const [approvedTestimonials, setApprovedTestimonials] = useState<TestimonialData[]>([]);
  const [formData, setFormData] = useState<TestimonialData>({
    fullName: "",
    companyName: "",
    industry: "",
    feedback: "",
    consent: false,
  });

  const { toast } = useToast();

  const { handleSubmit: submitForm, loading: isSubmitting, errors } = useForm(async (data: TestimonialData) => {
    const response = await feedbackService.submitFeedback(data);
    if (response.data.success) {
      toast({
        title: "Thank you!",
        description: "Your testimonial has been submitted for review. We'll be in touch soon.",
      });
      setFormData({
        fullName: "",
        companyName: "",
        industry: "",
        feedback: "",
        consent: false,
      });
      fetchData();
    }
  });

  const fetchData = async () => {
    try {
      const response = await feedbackService.getFeedbacks();
      if (response.data.success) {
        setApprovedTestimonials(response.data.data);
      }
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchData();
    if (window.location.hash === "#submit") {
      const element = document.getElementById("submit");
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, []);

  useEffect(() => {
    if (errors) {
      errors.forEach((err: any) => {
        toast({
          title: "Validation Error",
          description: err.message,
          variant: "destructive",
        });
      });
    }
  }, [errors, toast]);

  const onFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.consent) {
      toast({
        title: "Consent required",
        description: "Please agree to display your testimonial on our website.",
        variant: "destructive",
      });
      return;
    }
    await submitForm(formData);
  };

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-32 pb-24">
        <section className="container mx-auto px-6 mb-16">
          <div className="max-w-4xl mx-auto text-center">
            <span className="text-primary font-medium text-sm tracking-wider uppercase mb-4 block">
              Testimonials
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground mb-6">
              What Our Clients Say
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              We're building lasting relationships with our clients. 
              Read what they have to say about working with us.
            </p>
          </div>
        </section>

        {approvedTestimonials.length > 0 ? (
          <section className="container mx-auto px-6 mb-20">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {approvedTestimonials.map((testimonial, index) => (
                <Card key={index} className="bg-card border-border/50 hover:shadow-card transition-shadow">
                  <CardContent className="pt-6">
                    <Quote className="w-8 h-8 text-primary/30 mb-4" />
                    <p className="text-foreground mb-4 leading-relaxed">
                      "{testimonial.feedback}"
                    </p>
                    <div className="border-t border-border pt-4">
                      <p className="font-semibold text-foreground">{testimonial.fullName}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.companyName}</p>
                      <p className="text-xs text-primary">{testimonial.industry}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        ) : (
          <section className="container mx-auto px-6 mb-16">
            <div className="max-w-md mx-auto">
              <Card className="bg-card border-border/50 text-center p-8">
                <CardContent className="pt-0">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <MessageSquare className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                    Testimonials Coming Soon
                  </h3>
                  <p className="text-muted-foreground">
                    We're currently working with amazing clients. Their feedback will be shared here soon.
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>
        )}

        <section id="submit" className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto">
            <Card className="bg-card border-border">
              <CardHeader className="text-center">
                <CardTitle className="font-display text-2xl md:text-3xl font-semibold text-foreground">
                  Share Your Experience
                </CardTitle>
                <p className="text-muted-foreground mt-2">
                  Have you worked with us? We'd love to hear your feedback.
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={onFormSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="fullName">Full Name *</Label>
                      <Input
                        id="fullName"
                        placeholder="Your full name"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="companyName">Company Name *</Label>
                      <Input
                        id="companyName"
                        placeholder="Your company name"
                        value={formData.companyName}
                        onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="industry">Industry</Label>
                    <Input
                      id="industry"
                      placeholder="e.g., Solar Energy, SaaS, MedTech"
                      value={formData.industry}
                      onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="feedback">Your Feedback *</Label>
                    <Textarea
                      id="feedback"
                      placeholder="Share your experience working with us..."
                      rows={5}
                      value={formData.feedback}
                      onChange={(e) => setFormData({ ...formData, feedback: e.target.value })}
                      required
                    />
                  </div>

                  <div className="flex items-start space-x-3">
                    <Checkbox
                      id="consent"
                      checked={formData.consent}
                      onCheckedChange={(checked) => 
                        setFormData({ ...formData, consent: checked === true })
                      }
                    />
                    <Label htmlFor="consent" className="text-sm text-muted-foreground leading-relaxed cursor-pointer">
                      I consent to having my testimonial displayed on the Princy Shah Consulting website 
                      after review and approval. *
                    </Label>
                  </div>

                  <Button 
                    type="submit" 
                    variant="hero" 
                    size="lg" 
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      "Submitting..."
                    ) : (
                      <>
                        <Send className="w-4 h-4 mr-2" />
                        Submit Testimonial
                      </>
                    )}
                  </Button>

                  <p className="text-xs text-muted-foreground text-center">
                    All testimonials are reviewed before being published on our website.
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}