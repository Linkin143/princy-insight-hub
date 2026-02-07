import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, ClipboardCheck, FileText, Presentation, TrendingUp, Compass, Users, Cpu, Layers } from "lucide-react";
import { Link } from "react-router-dom";

const sampleWorkCategories = [
  {
    icon: ClipboardCheck,
    title: "Process Reviews",
    description: "Business process analysis and improvement documentation",
    samples: ["Coming Soon"],
    tab: "process-reviews"
  },
  {
    icon: FileText,
    title: "SOPs",
    description: "Standard Operating Procedures for consistent operations",
    samples: ["Coming Soon"],
    tab: "sops"
  },
  {
    icon: Layers,
    title: "Business Models",
    description: "Comprehensive business model frameworks for startups and enterprises",
    samples: ["Casa Edge", "Audit IQ", "Ecotrax"],
    tab: "business-models"
  },
  {
    icon: Presentation,
    title: "Pitch Decks",
    description: "Investor-ready pitch decks that tell compelling stories",
    samples: ["Fund Bridge", "Coinnect", "Mindsync"],
    tab: "pitch-decks"
  },
  {
    icon: TrendingUp,
    title: "Financial Forecasting",
    description: "Detailed financial projections and analysis models",
    samples: ["Aglovert", "Botanica", "Aurevia MedTech"],
    tab: "financial-forecasting"
  },
  {
    icon: Compass,
    title: "Strategy Optimization",
    description: "Strategic planning and optimization frameworks",
    samples: ["Coming Soon"],
    tab: "strategy-optimization"
  },
  {
    icon: Users,
    title: "Advisory Support",
    description: "Advisory deliverables across business and finance",
    samples: ["Coming Soon"],
    tab: "advisory-support"
  },
  {
    icon: Cpu,
    title: "Technology Support",
    description: "Technology solutions, dashboards, and automation tools",
    samples: ["Coming Soon"],
    tab: "technology-support"
  }
];

export function SampleWorkPreview() {
  return (
    <section className="py-16 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-4">
            Sample Work
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore our internally developed samples showcasing our expertise in business strategy, financial planning, and investor presentations.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-10">
          {sampleWorkCategories.map((category) => {
            const IconComponent = category.icon;
            return (
              <Link
                key={category.title}
                to={`/sample-work`}
                className="block"
              >
                <Card 
                  className="bg-card border-border hover:shadow-card hover:border-primary/20 transition-all duration-300 h-full cursor-pointer"
                >
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 rounded-lg bg-primary/10">
                        <IconComponent className="w-5 h-5 text-primary" />
                      </div>
                      <h3 className="font-semibold text-foreground">{category.title}</h3>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4">
                      {category.description}
                    </p>
                    <div className="space-y-1">
                      {category.samples.map((sample) => (
                        <div key={sample} className="text-sm text-foreground/80 flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary/60"></span>
                          {sample}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>

        <div className="text-center">
          <Button asChild variant="default" size="lg">
            <Link to="/sample-work">
              View All Samples
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}