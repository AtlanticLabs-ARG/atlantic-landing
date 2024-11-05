import {
  About,
  Bases,
  Contact,
  Footer,
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
      <Footer />
    </main>
  );
}
