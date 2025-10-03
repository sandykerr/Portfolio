import Navbar from "./components/Navbar";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50 text-gray-900 dark:bg-gray-900 dark:text-gray-100">
      <Navbar />

      <main className="flex-1">
        <section id="about" className="py-16">
          <About />
        </section>

        <section id="projects" className="py-16 bg-gray-800 dark:bg-gray-800">
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
