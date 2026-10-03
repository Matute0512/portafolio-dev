import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#030712] text-gray-100 bg-tech-grid relative selection:bg-emerald-500/30 selection:text-emerald-300">
      {/* Production-Grade Semantic Header with Skip Link */}
      <Navbar />

      {/* Main Landmark for Screen Readers and Keyboard Navigation */}
      <main id="main-content" className="relative z-10 focus:outline-none" tabIndex={-1}>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>

      {/* System Footer */}
      <Footer />
    </div>
  );
}

export default App;
