import Navbar from "@/Components/Navbar";
import Hero from "@/Components/Hero";
import AboutMe from "@/Components/AboutMe";
export default function Home() {
  return (
    <div className="">
      <Navbar />
      <main className="pt-[70px] ">
        <Hero />
        <AboutMe />
      </main>
      <footer className=""></footer>
    </div>
  );
}
