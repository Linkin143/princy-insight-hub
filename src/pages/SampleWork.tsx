import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink, FileText } from "lucide-react";
import { useState } from "react";

type TabType = "business-models" | "pitch-decks" | "financial-forecasts";

interface SampleProject {
  name: string;
  description: string;
  fileUrl: string;
}

const businessModels: SampleProject[] = [
  {
    name: "Casa Edge — B2B Furniture Business",
    description: "A structured business model developed for a B2B furniture manufacturing and distribution business, focusing on project-based revenue, cost structure, capacity utilisation, and margin behaviour.",
    fileUrl: "#", // Replace with Google Drive link
  },
  {
    name: "Audit IQ — Audit Software Tool",
    description: "A business model created for an audit-focused software platform, capturing subscription logic, user scaling, fixed vs variable costs, and long-term operating leverage.",
    fileUrl: "#", // Replace with Google Drive link
  },
  {
    name: "Ecotrax — Carbon Trading Platform",
    description: "A business model designed for a carbon trading platform, analysing transaction-based revenues, compliance flows, platform scalability, and regulatory sensitivity.",
    fileUrl: "#", // Replace with Google Drive link
  },
];

const pitchDecks: SampleProject[] = [
  {
    name: "Fund Bridge — Investor & Startup Platform",
    description: "A pitch deck created for a platform connecting startups seeking capital with investors, focusing on marketplace dynamics, trust mechanisms, and monetisation logic.",
    fileUrl: "https://docs.google.com/presentation/d/1VtfueDI-Jlozf0Ut4SsKN-oQ-tD3yd0-9-TCHL6OMs4/edit?usp=drivesdk", 
  },
  {
    name: "Coinnect — Online Money Transfer App",
    description: "An investor pitch deck developed for a digital money transfer application, highlighting transaction flows, user acquisition, compliance considerations, and revenue scalability.",
    fileUrl: "https://docs.google.com/presentation/d/1_w3yFC6WO_1LqHYNMFn27AG6-puXPYCnNlTGQNTDIHU/edit?usp=drivesdk", 
  },
  {
    name: "Mindsync — Ed-Tech Platform",
    description: "A pitch deck built for an education technology platform for students, focusing on learning delivery, user engagement, pricing structure, and growth strategy.",
    fileUrl: "https://docs.google.com/presentation/d/1yAgfY7HoBM7VxQD-lbHu70iAgrm9XygAkcGGBAlLOpk/edit?usp=drivesdk", 
  },
];

const financialForecasts: SampleProject[] = [
  // Placeholder for future uploads
];

const tabDescriptions: Record<TabType, string> = {
  "business-models": "This folder contains structured business models built to understand revenue mechanics, cost behaviour, scalability, and long-term sustainability across different business types.",
  "pitch-decks": "This folder contains investor-oriented pitch decks created to demonstrate narrative structure, clarity of positioning, and financial articulation across different business ideas.",
  "financial-forecasts": "This folder includes structured financial forecasts prepared to demonstrate scenario planning, cash flow visibility, and decision-oriented financial projections.",
};

function ProjectCard({ project }: { project: SampleProject }) {
  return (
    <Card className="h-full flex flex-col bg-card border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-card">
      <CardHeader className="pb-3">
        <div className="flex items-start gap-3">
          <div className="p-2 rounded-lg bg-primary/10">
            <FileText className="w-5 h-5 text-primary" />
          </div>
          <CardTitle className="text-lg font-semibold text-foreground leading-tight">
            {project.name}
          </CardTitle>
        </div>
      </CardHeader>
      <CardContent className="flex-1 flex flex-col">
        <CardDescription className="text-muted-foreground leading-relaxed flex-1 mb-4">
          {project.description}
        </CardDescription>
        <Button
          variant="outline"
          className="w-full gap-2"
          asChild
        >
          <a href={project.fileUrl} target="_blank" rel="noopener noreferrer">
            <ExternalLink className="w-4 h-4" />
            View / Download
          </a>
        </Button>
      </CardContent>
    </Card>
  );
}

function PlaceholderCard() {
  return (
    <Card className="h-full flex flex-col bg-card/50 border-dashed border-border/50">
      <CardHeader className="pb-3">
        <div className="flex items-start gap-3">
          <div className="p-2 rounded-lg bg-muted">
            <FileText className="w-5 h-5 text-muted-foreground" />
          </div>
          <CardTitle className="text-lg font-semibold text-muted-foreground leading-tight">
            Coming Soon
          </CardTitle>
        </div>
      </CardHeader>
      <CardContent className="flex-1 flex flex-col">
        <CardDescription className="text-muted-foreground/70 leading-relaxed flex-1 mb-4">
          Additional sample forecasts will be added here to demonstrate different forecasting scenarios and methodologies.
        </CardDescription>
        <Button variant="outline" className="w-full gap-2" disabled>
          <ExternalLink className="w-4 h-4" />
          View / Download
        </Button>
      </CardContent>
    </Card>
  );
}

export default function SampleWork() {
  const [activeTab, setActiveTab] = useState<TabType>("business-models");

  const tabs: { id: TabType; label: string }[] = [
    { id: "business-models", label: "Business Models" },
    { id: "pitch-decks", label: "Pitch Decks" },
    { id: "financial-forecasts", label: "Financial Forecasts" },
  ];

  const getProjects = () => {
    switch (activeTab) {
      case "business-models":
        return businessModels;
      case "pitch-decks":
        return pitchDecks;
      case "financial-forecasts":
        return financialForecasts;
    }
  };

  const projects = getProjects();

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-secondary/30 to-background">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                Sample Work
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                This section showcases internally developed sample work created to demonstrate approach, structure, and depth of analysis. The work is illustrative in nature and represents how different business problems are studied, structured, and translated into usable financial outputs.
              </p>
            </div>
          </div>
        </section>

        {/* Tabs Section */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-6">
            {/* Tab Buttons */}
            <div className="flex flex-wrap justify-center gap-3 mb-10">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-6 py-3 rounded-full font-medium text-sm md:text-base transition-all duration-300 ${
                    activeTab === tab.id
                      ? "bg-primary text-primary-foreground shadow-card"
                      : "bg-secondary text-muted-foreground hover:bg-secondary/80 hover:text-foreground"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Tab Description */}
            <div className="max-w-3xl mx-auto text-center mb-12">
              <p className="text-muted-foreground leading-relaxed">
                {tabDescriptions[activeTab]}
              </p>
            </div>

            {/* Project Cards */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {projects.length > 0 ? (
                projects.map((project, index) => (
                  <ProjectCard key={index} project={project} />
                ))
              ) : (
                <>
                  <PlaceholderCard />
                  <PlaceholderCard />
                  <PlaceholderCard />
                </>
              )}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
