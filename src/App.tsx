import Navbar from "./components/Navbar";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div
      className="
        flex flex-col min-h-screen
        bg-[#121212] text-platinum
        transition-colors duration-300
      "
    >
      <Navbar />

      <main className="flex-1">
        <section
          id="about"
          className="
            w-full
            px-6 md:px-12   /* horizontal space from App background */
            py-6 md:py-12  /* vertical space from App background */
            flex justify-center
          "
        >
          <About />
        </section>

        <section id="projects">
          <Projects />
        </section>

        <section id="contact" className="py-16">
          <Contact />
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;
