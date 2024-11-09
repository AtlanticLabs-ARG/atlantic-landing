import {
  About,
  Bases,
  Contact,
  Hero,
  NavBar,
  Partners,
  Publicity,
  Team,
} from "@/components";

export default function Home() {
  return (
    <main>
      <NavBar />
      <Hero />
      <About />
      <Team />
      <Bases />
      <Partners />
      <Publicity />
      <Contact />
    </main>
  );
}
