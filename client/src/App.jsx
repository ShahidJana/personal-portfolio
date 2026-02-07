import { useEffect, useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { PortfolioProvider } from './context/PortfolioContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Experience from './pages/Experience';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import Contact from './pages/Contact';
import { FiArrowUp } from 'react-icons/fi';

import { AnimatePresence } from 'framer-motion';
import PageTransition from './components/PageTransition';

function App() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <PortfolioProvider>
      {/* <div className="relative min-h-screen bg-transparent text-text-primary selection:bg-accent-primary selection:text-white overflow-x-hidden"> */}
      <Navbar />
      <main className="relative z-10 pb-20 lg:pb-0 lg:pl-24 lg:pr-0">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<PageTransition> <Home /></PageTransition>} />
            <Route path="/about" element={<PageTransition><About /></PageTransition>} />
            <Route path="/experience" element={<PageTransition><Experience /></PageTransition>} />
            <Route path="/projects" element={<PageTransition><Projects /></PageTransition>} />
            <Route path="/skills" element={<PageTransition><Skills /></PageTransition>} />
            <Route path="/contact" element={<PageTransition><Contact /></PageTransition>} />
          </Routes>
        </AnimatePresence>
      </main>
      {/* <Footer />

        <button
          className={`fixed bottom-8 right-8 z-[1000] flex items-center justify-center w-12 h-12 bg-accent-gradient text-white rounded-full shadow-lg cursor-pointer border-none transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl active:scale-95 ${showScrollTop ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
            }`}
          onClick={scrollToTop}
          aria-label="Scroll to top"
        >
          <FiArrowUp className="text-2xl" />
        </button> */}
      {/* </div> */}
    </PortfolioProvider>
  );
}

export default App;
