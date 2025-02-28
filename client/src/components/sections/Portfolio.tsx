import { Card, CardContent } from "@/components/ui/card";
import { StarIcon, ExternalLinkIcon } from "lucide-react";
import { SiAppstore } from "react-icons/si";

const StarRating = ({ rating }: { rating: number }) => (
  <div className="flex text-yellow-400">
    {[...Array(rating)].map((_, i) => (
      <StarIcon key={i} className="h-4 w-4 fill-current" />
    ))}
  </div>
);

const ReviewCard = ({ text }: { text: string }) => (
  <div className="bg-white/50 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
    <StarRating rating={5} />
    <p className="text-gray-700 text-sm mt-3 leading-relaxed">{text}</p>
  </div>
);

export default function Portfolio() {
  const appStoreUrl = "https://apps.apple.com/us/app/peekaboo-barn/id300590611";
  const websiteUrl = "https://www.peekaboobarn.com";

  return (
    <section
      id="portfolio"
      className="py-32 bg-gradient-to-br from-gray-50 via-white to-gray-50"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-16 text-center">
          Featured Portfolio
        </h2>
        <div className="max-w-6xl mx-auto">
          <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <CardContent className="p-12">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <header className="mb-8">
                    <h3 className="text-4xl font-bold mb-2 text-primary">
                      Peekaboo Barn
                    </h3>
                    <p className="text-gray-600 text-lg italic">
                      Designed by legendary artist and developer Brianne Baker
                    </p>
                  </header>
                  <div className="flex items-center mb-6 space-x-4">
                    <div className="flex items-center">
                      <StarIcon className="h-6 w-6 text-yellow-400 fill-current" />
                      <span className="ml-2 font-semibold text-lg">4.5</span>
                    </div>
                    <span className="text-gray-700 font-medium">10M+ Downloads</span>
                  </div>
                  <p className="text-gray-700 text-lg mb-8 leading-relaxed">
                    A beloved children's mobile game that has delighted millions
                    of families worldwide. This interactive educational app
                    helps toddlers learn animal names and sounds through
                    engaging peek-a-boo gameplay.
                  </p>
                  <div className="flex flex-wrap gap-6">
                    <a
                      href={appStoreUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-6 py-3 bg-black text-white rounded-xl hover:bg-gray-800 transition-all duration-300 transform hover:-translate-y-1"
                    >
                      <SiAppstore className="h-6 w-6 mr-3" />
                      Download on App Store
                    </a>
                    <a
                      href={websiteUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-xl hover:bg-primary/90 transition-all duration-300 transform hover:-translate-y-1"
                    >
                      <ExternalLinkIcon className="h-6 w-6 mr-3" />
                      Visit Website
                    </a>
                  </div>
                </div>
                <div className="relative aspect-[3/4] bg-gradient-to-b from-gray-100 to-white rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src="https://is5-ssl.mzstatic.com/image/thumb/Purple126/v4/a2/1c/2d/a21c2d3f-6c0c-9a86-a76d-e43dd1f6616c/AppIcon-0-0-1x_U007emarketing-0-0-0-6-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/460x0w.webp"
                    alt="Peekaboo Barn App"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="mt-12 pt-12 border-t border-gray-100">
                <h4 className="text-2xl font-semibold mb-8">Featured Reviews</h4>
                <div className="grid sm:grid-cols-2 gap-6">
                  <ReviewCard text="Perfect for toddlers! My 2-year-old loves this app and has learned so many animal names. The interface is intuitive and engaging." />
                  <ReviewCard text="Beautiful design and engaging gameplay. It's educational and entertaining at the same time. The animations are smooth and delightful." />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}