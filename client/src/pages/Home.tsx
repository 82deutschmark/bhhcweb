import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Leadership from "@/components/sections/Leadership";
import Portfolio from "@/components/sections/Portfolio";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <main className="pt-16">
      <Hero />
      <About />
      <Leadership />
      <Portfolio />
      <Contact />
    </main>
  );
}
