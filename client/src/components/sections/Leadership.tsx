import { Card, CardContent } from "@/components/ui/card";
import { LinkedinIcon } from "lucide-react";

const leaders = [
  {
    name: "Andreas Vagelatos",
    role: "Chief Executive Officer (CEO) & Chief Financial Officer (CFO)",
    description: "Provides overall leadership and strategic direction. Oversees financial planning and ensures the company remains fiscally resilient for long-term growth.",
  },
  {
    name: "Mark Barney",
    role: "Chief Technology Officer (CTO)",
    description: "Directs the technological vision of Big Happy Holding Company, focusing on product development and platform integrity across our diverse portfolio of mobile apps.",
  },
  {
    name: "Brianne Baker",
    role: "Chief Creative Officer (CCO)",
    description: "Heads our creative efforts, user experience, and product design—particularly around the Peekaboo Studio brand. She ensures our apps maintain a distinctive visual identity and delivers engaging user experiences.",
    linkedin: "https://www.linkedin.com/in/briannebaker",
  },
  {
    name: "Eric Dickinson",
    role: "General Counsel",
    description: "Manages the company's legal affairs, from overseeing compliance and contract negotiations to handling intellectual property matters. Ensures the firm's operations are conducted in accordance with all applicable regulations.",
  },
];

export default function Leadership() {
  return (
    <section id="leadership" className="py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Leadership & Partners</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {leaders.map((leader) => (
            <Card key={leader.name}>
              <CardContent className="pt-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold">{leader.name}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{leader.role}</p>
                  </div>
                  {leader.linkedin && (
                    <a
                      href={leader.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-primary"
                    >
                      <LinkedinIcon className="h-5 w-5" />
                    </a>
                  )}
                </div>
                <p className="text-muted-foreground">{leader.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}