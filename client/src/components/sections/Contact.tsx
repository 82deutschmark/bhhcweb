
import { Card, CardContent } from "@/components/ui/card";

export default function Contact() {
  return (
    <section id="contact" className="py-24 content-container">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Ready to Connect?</h2>
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
          <div>
            <Card className="overflow-hidden shadow-md">
              <CardContent className="p-0">
                <img 
                  src="/images/contact-image.png" 
                  alt="Contact us" 
                  className="w-full h-auto object-cover"
                />
              </CardContent>
            </Card>
          </div>
          <div>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              We welcome collaborations with studios, founders, and strategic partners who share our commitment to excellence and innovation. Whether you're building the next big app or looking to transition existing assets, Big Happy Holding Company is here to explore the possibilities with you.
            </p>
            <div className="text-sm text-muted-foreground">
              <a href="mailto:info@bighappyhc.com" className="hover:text-primary transition-colors">
                info@bighappyhc.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
