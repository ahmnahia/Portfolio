import Navbar from "@/Components/Navbar";
import Hero from "@/Components/Hero";
import AboutMe from "@/Components/AboutMe";
import Hero2 from "@/Components/2/Hero";
import AboutMe2 from "@/Components/2/AboutMe2";
import Work from "@/Components/Work";
import Contact from "@/Components/Contact";
import Footer from "@/Components/Footer";

export default function Home() {
  return (
    <div className="">
      <Navbar />
      <main className="pt-[70px] ">
        {/* <Hero /> */}
        <Hero2 />
        {/* <AboutMe /> */}
        <AboutMe2 />
        <Work />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
