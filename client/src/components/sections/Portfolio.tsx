import { Card, CardContent } from "@/components/ui/card";

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Featured Portfolio</h2>
        <div className="max-w-3xl">
          <Card>
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold mb-4">Peekaboo Barn</h3>
              <p className="text-muted-foreground mb-4">
                A beloved children's mobile game that has delighted millions of families worldwide.
              </p>
              <a
                href="https://apps.apple.com/us/app/peekaboo-barn/id300590611"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                View on App Store →
              </a>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
