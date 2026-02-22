import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import ChatBot from "./components/ChatBot";
import Internships from "./components/Interships";
import  Contact  from "./components/Contact";

function App() {
  return (
      <div
      className="min-h-screen"
      style={{
        backgroundColor: "#FAFAF9",
        color: "#111827",
      }}
    >
    
      <Navbar />
      <main className="pt-20">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Internships />
        <Contact />
      </main>

      {/* Floating AI Chat */}
      <ChatBot />
    </div>
  );
}

export default App;