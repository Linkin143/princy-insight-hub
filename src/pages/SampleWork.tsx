import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    category: "Strategic Advisory",
    title: "Market Expansion Strategy",
    client: "Technology Services Company",
    description: "Developed comprehensive market entry strategy for Southeast Asian expansion, resulting in 40% revenue growth within 18 months.",
    results: ["40% revenue growth", "3 new markets", "Strategic partnerships"],
  },
  {
    category: "Business Consulting",
    title: "Operational Transformation",
    client: "Manufacturing Enterprise",
    description: "Led end-to-end operational transformation initiative, optimizing processes and implementing lean methodologies.",
    results: ["30% cost reduction", "50% faster delivery", "Quality improvement"],
  },
  {
    category: "Growth Strategy",
    title: "Digital Transformation Roadmap",
    client: "Financial Services Firm",
    description: "Created digital transformation strategy and implementation roadmap, enabling new digital revenue streams.",
    results: ["New digital products", "25% efficiency gains", "Enhanced CX"],
  },
  {
    category: "Leadership Development",
    title: "Executive Team Alignment",
    client: "Healthcare Organization",
    description: "Facilitated strategic alignment program for executive team, improving decision-making and organizational agility.",
    results: ["Team alignment", "Faster decisions", "Cultural shift"],
  },
];

export default function SampleWork() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-32 pb-24">
        {/* Hero */}
        <section className="container mx-auto px-6 mb-20">
          <div className="max-w-4xl mx-auto text-center">
            <span className="text-primary font-medium text-sm tracking-wider uppercase mb-4 block">
              Sample Work
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground mb-6">
              Our Impact in Action
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Explore a selection of our client engagements and the transformative 
              outcomes we've helped achieve.
            </p>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <div 
                  key={project.title}
                  className="group bg-card border border-border rounded-3xl p-8 hover:shadow-card hover:border-primary/30 transition-all duration-300"
                >
                  <div className="flex items-start justify-between mb-6">
                    <span className="text-primary text-sm font-medium">
                      {project.category}
                    </span>
                    <div className="w-10 h-10 rounded-full border border-border flex items-center justify-center group-hover:border-primary group-hover:bg-primary transition-colors">
                      <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-primary-foreground transition-colors" />
                    </div>
                  </div>
                  
                  <h2 className="font-display text-xl font-semibold text-foreground mb-2">
                    {project.title}
                  </h2>
                  <p className="text-muted-foreground text-sm mb-4">
                    {project.client}
                  </p>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.results.map((result) => (
                      <span 
                        key={result}
                        className="px-3 py-1 bg-teal-light text-primary text-sm rounded-full"
                      >
                        {result}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
