import { Card, CardContent } from "@/components/ui/card";
import { LinkedinIcon } from "lucide-react";

const leaders = [
  {
    name: "Andreas Vagelatos",
    role: "Chief Executive Officer (CEO) & Chief Financial Officer (CFO)",
    description: "Andreas Vagelatos is a proven entrepreneur whose ventures have attracted major industry attention. He founded Aerserv, acquired by InMobi, and Aerify, bought by Amazon's Sizmek, underscoring his ability to create companies with significant market value. Beyond these successful exits, he has demonstrated expertise in growing and scaling tech startups, notably through his roles as Venture Lead/EIR at Citigroup's Commercial Bank Accelerator and as a Venture Partner at Banyan Ventures.",
    image: "https://cdn.midjourney.com/2981fc58-a34d-469e-a494-3103e7fa7843/0_2.png"
  },
  {
    name: "Mark Barney",
    role: "Chief Technology Officer (CTO)",
    description: "Mark Barney is a seasoned gaming executive with over a decade of experience scaling and monetizing live-service games, including *Stronghold Kingdoms*, which he helped grow to over a million monthly active users. As a pioneer in cross-platform integration, in-app monetization, and long-tail revenue strategies, he has a proven track record of sustaining profitable and player-friendly economies through ethical monetization. Combining operational expertise with a deep understanding of player psychology, he brings invaluable practical know-how to direct the technological vision of Big Happy Holding Company, focusing on product development and platform integrity across our diverse portfolio of mobile apps.",
    image: "https://cdn.midjourney.com/635529cd-51ec-49d1-a520-1b5d91a92e99/0_2.png"
  },
  {
    name: "Brianne Baker",
    role: "Chief Creative Officer (CCO)",
    description: "Brianne Baker leads the creative vision for the Peekaboo Interactive Games brand, blending innovative design with engaging gameplay to craft standout interactive experiences. She is a seasoned UX and visual designer with a strong focus on educational technologies and interactive design. She has made significant contributions to children's educational applications, collaborating with major brands such as Mattel, AT&T/WarnerMedia, and others. Brianne co-founded Kinsome, a digital platform aimed at strengthening bonds between grandparents and grandchildren. Throughout her career, Brianne has designed over 100 published apps and experiences, with her work amassing over 5 million downloads. Her passion for educational and emerging technologies continues to drive her work in creating meaningful digital experiences that bridge generational gaps and foster learning.",
    linkedin: "https://www.linkedin.com/in/briannebaker",
    portfolio: "https://www.brianne.work/",
    image: "https://cdn.midjourney.com/a47ddc91-2bc6-4eea-a7bf-51f77e092412/0_2.png" 
  },
  {
    name: "Eric Dickinson",
    role: "General Counsel",
    description: "Eric Dickinson continues to make significant contributions at Google, where he serves full-time as Senior Product Counsel for Google Maps. As a longtime friend and trusted advisor, his extensive legal and regulatory expertise—honed through advising on complex product launches—plays a vital role in shaping our strategic decisions.",
    image: "https://cdn.midjourney.com/ff85cbce-6077-4e41-801e-01da3bb10cb5/0_3.png"
  },
];

export default function Leadership() {
  return (
    <section id="leadership" className="py-24 bg-gradient-to-b from-gray-50 to-white section-transition">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-primary">Leadership & Partners</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8 rounded-full"></div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {leaders.map((leader) => (
            <Card key={leader.name} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row gap-8">
                  {leader.image && (
                    <div className="md:w-2/5">
                      <div className="aspect-[2/3] relative">
                        <img
                          src={leader.image}
                          alt={leader.name}
                          className="absolute inset-0 w-full h-full object-cover rounded-lg shadow-md"
                        />
                      </div>
                    </div>
                  )}
                  <div className={`${leader.image ? 'md:w-3/5' : 'w-full'}`}>
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        {leader.portfolio ? (
                          <a 
                            href={leader.portfolio}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block hover:text-primary transition-colors"
                          >
                            <h3 className="text-2xl font-bold text-primary">{leader.name}</h3>
                          </a>
                        ) : (
                          <h3 className="text-2xl font-bold text-primary">{leader.name}</h3>
                        )}
                        <p className="text-sm font-medium text-gray-600 mt-2">{leader.role}</p>
                      </div>
                      {leader.linkedin && (
                        <a
                          href={leader.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-400 hover:text-primary transition-colors"
                        >
                          <LinkedinIcon className="h-6 w-6" />
                        </a>
                      )}
                    </div>
                    <p className="text-gray-600 leading-relaxed mt-4">{leader.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}