import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Calendar, Mail, MessageCircle, ClipboardCheck } from "lucide-react";

interface ActionCTAProps {
  variant?: "default" | "compact";
  showTitle?: boolean;
}

export function ActionCTA({ variant = "default", showTitle = true }: ActionCTAProps) {
  const whatsappNumber = "919284261593";
  const whatsappMessage = encodeURIComponent("Hi, I would like to inquire about your consulting services.");
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  // Google Calendar appointment scheduling link - replace with actual calendar link
  const calendarLink = "https://calendar.google.com/calendar/appointments/schedules/AcZssZ1234567890";

  if (variant === "compact") {
    return (
      <div className="flex flex-wrap gap-3 justify-center">
        <Button variant="hero" size="lg" asChild>
          <a href={calendarLink} target="_blank" rel="noopener noreferrer">
            <Calendar className="w-4 h-4 mr-2" />
            Schedule a Call
          </a>
        </Button>
        <Button variant="heroOutline" size="lg" asChild>
          <Link to="/contact">
            <Mail className="w-4 h-4 mr-2" />
            Send an Inquiry
          </Link>
        </Button>
        <Button variant="outline" size="lg" className="border-green-600 text-green-600 hover:bg-green-50" asChild>
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
            <MessageCircle className="w-4 h-4 mr-2" />
            WhatsApp
          </a>
        </Button>
        <Button variant="outline" size="lg" asChild>
          <Link to="/contact?type=process-review">
            <ClipboardCheck className="w-4 h-4 mr-2" />
            Request Process Review
          </Link>
        </Button>
      </div>
    );
  }

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center rounded-3xl gradient-teal p-10 md:p-12 shadow-elevated relative overflow-hidden">
          {/* Background decorations */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary-foreground/10 rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-primary-foreground/10 rounded-full translate-y-1/2 -translate-x-1/2" />
          
          <div className="relative z-10">
            {showTitle && (
              <>
                <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-primary-foreground mb-6">
                  Ready to Transform Your Business?
                </h2>
                <p className="text-primary-foreground/80 text-lg mb-10 max-w-2xl mx-auto">
                  Let's discuss how strategic consulting can help you achieve your goals 
                  and navigate your next phase of growth.
                </p>
              </>
            )}
            <div className="flex flex-wrap gap-4 justify-center">
              <Button 
                size="xl" 
                className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
                asChild
              >
                <a href={calendarLink} target="_blank" rel="noopener noreferrer">
                  <Calendar className="w-5 h-5 mr-2" />
                  Schedule a Call
                </a>
              </Button>
              <Button 
                variant="outline" 
                size="xl"
                className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
                asChild
              >
                <Link to="/contact">
                  <Mail className="w-5 h-5 mr-2" />
                  Send an Inquiry
                </Link>
              </Button>
              <Button 
                size="xl"
                className="bg-green-600 text-white hover:bg-green-700"
                asChild
              >
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  WhatsApp Message
                </a>
              </Button>
              <Button 
                variant="outline" 
                size="xl"
                className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
                asChild
              >
                <Link to="/contact?type=process-review">
                  <ClipboardCheck className="w-5 h-5 mr-2" />
                  Request Process Review
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
