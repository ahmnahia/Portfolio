import Navbar from "@/components_temp/Navbar";
import Hero from "@/components_temp/Hero";
import AboutMe from "@/components_temp/AboutMe";
import Work from "@/components_temp/Work";
import Contact from "@/components_temp/Contact";
import Footer from "@/components_temp/Footer";

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
