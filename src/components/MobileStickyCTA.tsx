import { Button } from "@/components/ui/button";
import { Calendar, MessageCircle } from "lucide-react";

export function MobileStickyCTA() {
  const whatsappNumber = "919284261593";
  const whatsappMessage = encodeURIComponent("Hi, I would like to inquire about your consulting services.");
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;
  const calendarLink = "https://calendar.google.com/calendar/appointments/schedules/AcZssZ3TIs6dABcRR_Ak5DX5JihBbHWwk30odS8SF8O4GuOmFlxAP6qKvQt0W0dUyWj8-xz2ELAuoplh?gv=true";

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-background border-t border-border p-3 md:hidden">
      <div className="flex gap-2">
        <Button 
          variant="hero" 
          size="sm" 
          className="flex-1"
          asChild
        >
          <a href={calendarLink} target="_blank" rel="noopener noreferrer">
            <Calendar className="w-4 h-4 mr-1" />
            Schedule Call
          </a>
        </Button>
        <Button 
          size="sm"
          className="flex-1 bg-green-600 text-white hover:bg-green-700"
          asChild
        >
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
            <MessageCircle className="w-4 h-4 mr-1" />
            WhatsApp
          </a>
        </Button>
      </div>
    </div>
  );
}
