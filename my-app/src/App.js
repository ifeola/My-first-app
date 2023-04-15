import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Work from "./components/Work";
import About from "./components/About";
import Services from "./components/Services/Services";
import Contact from "./components/Contact";
import Skills from "./components/Skills/Skills";
import Blog from "./components/Blog/Blog";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div className="bg__container">
      <Nav />
      <main className="main">
        <Hero />
        <Work />
        <About />
        <Services />
        <Contact />
        <Skills />
        <Projects />
        <Blog />
      </main>
      <Footer />
    </div>
  );
}

export default App;
