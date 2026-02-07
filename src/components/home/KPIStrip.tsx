import { Briefcase, Handshake, SquareCheckBig, Users } from "lucide-react";

const stats = [
  { icon: Users, value: "12+", label: "Clients Served" },
  { icon: Briefcase, value: "7+", label: "Ongoing Projects" },
  { icon: SquareCheckBig, value: "22+", label: "Completed Projects" },
  { icon: Handshake, value: "10+", label: "Strategic Partners" },
];

export function KPIStrip() {
  return (
    <section className="py-8 bg-secondary/50 border-y border-border">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-2">
                <stat.icon className="w-5 h-5 text-primary" />
              </div>
              <span className="font-display text-xl md:text-2xl font-semibold text-foreground">
                {stat.value}
              </span>
              <span className="text-muted-foreground text-sm">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}