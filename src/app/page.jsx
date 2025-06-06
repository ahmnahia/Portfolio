import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutMe from "@/components/AboutMe";
import Work from "@/components/Work";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="">
      <Navbar />
      <main className="pt-[70px]">
        <Hero />
        <AboutMe />
        <Work />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
