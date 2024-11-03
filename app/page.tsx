import {
  About,
  Bases,
  Contact,
  Footer,
  Hero,
  Partners,
  Publicity,
  Team,
} from "@/components";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Team />
      <Bases />
      <Partners />
      <Publicity />
      <Contact />
      <Footer />
    </main>
  );
}
