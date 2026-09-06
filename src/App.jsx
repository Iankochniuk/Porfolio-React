import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import SmoothScroll from "./components/SmoothScroll";
import Background from "./components/ui/Background";
import Cursor from "./components/ui/Cursor";
import ScrollProgress from "./components/ui/ScrollProgress";
import BackToTop from "./components/ui/BackToTop";

function App() {
  return (
    <div className="relative overflow-x-hidden bg-[#09090B] text-white">
      <Background />
      <Cursor />
      <SmoothScroll />
      <ScrollProgress />
      <BackToTop />

      <div className="relative z-10">
        <Navbar />

        <Hero />

        <About />

        <Skills />

        <Projects />

        <Contact />

        <Footer />
      </div>
    </div>
  );
}

export default App;
