export default function Hero() {
  return (
    <section className="relative py-32 md:py-48 bg-gradient-to-br from-primary/10 via-background to-background overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
            Big Happy Holding Company
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 leading-relaxed">
            Driving innovative digital solutions and sustainable value creation through strategic investments in mobile software and gaming applications.
          </p>
          <a
            href="#about"
            className="inline-flex items-center justify-center rounded-full text-lg font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background bg-primary text-primary-foreground hover:bg-primary/90 h-12 px-8 py-2 shadow-lg hover:shadow-xl"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
}