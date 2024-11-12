import {
  About,
  Bases,
  Contact,
  Hero,
  Navbar,
  Partners,
  Publicity,
  Team,
} from "@/components";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Team />
      <Bases />
      {/*       <Partners />
       */}
      <Publicity />
      <Contact />
    </main>
  );
}
