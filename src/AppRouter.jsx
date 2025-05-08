import { Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Home from './pages/Home';
import About from './pages/About';
import Project from './pages/Project';
import JoinUs from './pages/JoinUs';
import Preloader from './components/ui/Preloader';
import './App.css';

gsap.registerPlugin(ScrollTrigger);

function AppRouter() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
      pageRevealAnimation();
    }, 2000);
  }, []);

  const pageRevealAnimation = () => {
    gsap.to('.page-reveal', {
      y: '-100%',
      duration: 1.5,
      ease: 'power3.inOut',
    });
  };

  return (
    <>
      {loading && <Preloader onComplete={() => setLoading(false)} />}

      <div className="page-reveal"></div>

      <div className={`app-content ${loading ? 'hidden' : ''}`}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Project />} />
          <Route path="/join-us" element={<JoinUs />} />
        </Routes>
      </div>
    </>
  );
}

export default AppRouter;