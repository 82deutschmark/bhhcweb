import { Card, CardContent } from "@/components/ui/card";
import { LinkedinIcon } from "lucide-react";

const leaders = [
  {
    name: "Andreas Vagelatos",
    role: "Chief Executive Officer (CEO) & Chief Financial Officer (CFO)",
    description: "A proven entrepreneur with multiple successful exits, including Aerserv (acquired by InMobi) and Aerify (acquired by Amazon's Sizmek). His expertise in growing and scaling tech startups is further demonstrated through roles as Venture Lead/EIR at Citigroup's Commercial Bank Accelerator and as a Venture Partner at Banyan Ventures.",
    image: "https://cdn.midjourney.com/1997c3fd-9161-41a8-ae8a-6754dc446f67/0_0.png"
  },
  {
    name: "Mark Barney",
    role: "Chief Technology Officer (CTO)",
    description: "Directs the technological vision of Big Happy Holding Company, focusing on product development and platform integrity across our diverse portfolio of mobile apps.",
    image: "https://cdn.midjourney.com/635529cd-51ec-49d1-a520-1b5d91a92e99/0_2.png"
  },
  {
    name: "Brianne Baker",
    role: "Chief Creative Officer (CCO)",
    description: "Leads the creative vision for the Peekaboo Interactive Games brand, blending innovative design with engaging gameplay to craft standout interactive experiences. Her expertise in user experience and product design ensures our applications maintain a distinctive visual identity while delivering compelling user engagement.",
    linkedin: "https://www.linkedin.com/in/briannebaker",
    portfolio: "https://www.brianne.work/",
    image: "https://cdn.midjourney.com/d6c48f7e-0a5e-41fc-83f0-aba0dcc4c4cc/0_3.png"
  },
  {
    name: "Eric Dickinson",
    role: "General Counsel",
    description: "Currently serving as Senior Product Counsel for Google Maps, Eric brings extensive legal and regulatory experience to our team. His expertise in advising on complex product launches plays a key role in guiding our strategic decisions while maintaining his full-time position at Google.",
    image: "https://cdn.midjourney.com/635529cd-51ec-49d1-a520-1b5d91a92e99/0_1.png"
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