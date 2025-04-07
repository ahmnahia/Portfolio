import Navbar from "@/Components/Navbar";
import Hero from "@/Components/Hero";
import AboutMe from "@/Components/AboutMe";
import Work from "@/Components/Work";
import Contact from "@/Components/Contact";
import Footer from "@/Components/Footer";

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
