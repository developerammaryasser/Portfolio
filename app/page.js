import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";
import Testimonials from "@/components/sections/Testimonials";


export default function Home() {
  return (
    <main className="">
      <Hero />
      <About />
      <Projects />
      <Testimonials />
      <Contact />
    </main>
  );
}
