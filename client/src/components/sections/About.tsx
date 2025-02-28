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
    <section id="about" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">About Us</h2>
        <div className="max-w-3xl mb-16">
          <p className="text-lg text-muted-foreground leading-relaxed">
            Big Happy Holding Company is a private investment and operating firm dedicated to acquiring, developing, and distributing mobile software applications. Our mission is to cultivate a diverse, growth-oriented portfolio that leverages innovative technology, creative vision, and operational excellence to deliver meaningful returns for our partners.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {approaches.map((approach) => (
            <Card key={approach.title}>
              <CardContent className="pt-6">
                <approach.icon className="h-10 w-10 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">{approach.title}</h3>
                <p className="text-muted-foreground">{approach.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
