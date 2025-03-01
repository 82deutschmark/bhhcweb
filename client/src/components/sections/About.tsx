import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, Target, TrendingUp } from "lucide-react";

export default function About() {
  const approaches = [
    {
      icon: Target,
      title: "Strategic Portfolio",
      description: "Each acquisition is chosen to complement our existing suite of products, maximizing synergy and overall market reach.",
    },
    {
      icon: BookOpen,
      title: "Creative & Technical Balance",
      description: "We unite pioneering design with robust engineering, ensuring that new and existing applications remain modern and competitive.",
    },
    {
      icon: TrendingUp,
      title: "Long-Term Perspective",
      description: "We're an investor-minded organization focused on sustainable value. We reinvest in promising ventures and prioritize partnerships that share our vision.",
    },
  ];

  return (
    <section id="about" className="py-24 content-container section-transition">
      <div className="container mx-auto px-4">
        <div className="flex justify-center mb-8">
          <img src="/images/logo-background.png" alt="Company Logo" className="max-w-xs mx-auto" />
        </div>
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-primary">About Us</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8 rounded-full"></div>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Big Happy Holding Company is a private investment and operating firm dedicated to acquiring, developing, and distributing mobile software applications. Our mission is to cultivate a diverse, growth-oriented portfolio that leverages innovative technology, creative vision, and operational excellence to deliver meaningful returns for our partners.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {approaches.map((approach) => (
            <Card key={approach.title} className="hover-card border-t-4 border-t-primary content-container"> {/* Added content-container */}
              <CardContent className="pt-6">
                <approach.icon className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-3">{approach.title}</h3>
                <p className="text-muted-foreground">{approach.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}