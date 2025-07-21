import Image from "next/image";
import Hero from "@/components/hero/page";
import About from "@/components/about/page";
import Skills from "@/components/skills/page";
import Projects from "@/components/build-project/page";
import Experience from "@/components/experience/page";
import  Contact  from "@/components/contactus/Page";
import Footer from "@/components/footer/page";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <Hero />
      <About />
      <Skills /> 
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </main>
  );
}
