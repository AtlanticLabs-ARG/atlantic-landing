import {
  About,
  Bases,
  Contact,
  Hero,
  Navbar,
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
 */}      <Publicity />
      <Contact />
    </main>
  );
}
