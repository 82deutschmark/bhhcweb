import { Card, CardContent } from "@/components/ui/card";
import { StarIcon, ExternalLinkIcon } from "lucide-react";
import { SiAppstore } from "react-icons/si";

export default function Portfolio() {
  const appStoreUrl = "https://apps.apple.com/us/app/peekaboo-barn/id300590611";
  const websiteUrl = "https://www.peekaboobarn.com";

  return (
    <section id="portfolio" className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">Featured Portfolio</h2>
        <div className="max-w-5xl mx-auto">
          <Card className="overflow-hidden">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-3xl font-bold mb-4 text-primary">Peekaboo Barn</h3>
                  <div className="flex items-center mb-4">
                    <div className="flex items-center mr-4">
                      <StarIcon className="h-5 w-5 text-yellow-400 fill-current" />
                      <span className="ml-1 font-semibold">4.5</span>
                    </div>
                    <span className="text-gray-600">10M+ Downloads</span>
                  </div>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    A beloved children's mobile game that has delighted millions of families worldwide. 
                    This interactive educational app helps toddlers learn animal names and sounds through 
                    engaging peek-a-boo gameplay.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <a
                      href={appStoreUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors"
                    >
                      <SiAppstore className="h-5 w-5 mr-2" />
                      Download on App Store
                    </a>
                    <a
                      href={websiteUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
                    >
                      <ExternalLinkIcon className="h-5 w-5 mr-2" />
                      Visit Website
                    </a>
                  </div>
                </div>
                <div className="relative aspect-[3/4] bg-gray-100 rounded-lg overflow-hidden shadow-lg">
                  <img
                    src="https://is1-ssl.mzstatic.com/image/thumb/Purple116/v4/51/c5/85/51c5855f-8631-6245-8fb0-642ce3ea8555/AppIcon-0-0-1x_U007emarketing-0-0-0-7-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/460x0w.webp"
                    alt="Peekaboo Barn App"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="mt-8 pt-8 border-t">
                <h4 className="text-xl font-semibold mb-4">Featured Reviews</h4>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="flex text-yellow-400 mb-2">
                      {[...Array(5)].map((_, i) => (
                        <StarIcon key={i} className="h-4 w-4 fill-current" />
                      ))}
                    </div>
                    <p className="text-gray-600 text-sm">"Perfect for toddlers! My 2-year-old loves this app and has learned so many animal names."</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="flex text-yellow-400 mb-2">
                      {[...Array(5)].map((_, i) => (
                        <StarIcon key={i} className="h-4 w-4 fill-current" />
                      ))}
                    </div>
                    <p className="text-gray-600 text-sm">"Beautiful design and engaging gameplay. It's educational and entertaining at the same time."</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}