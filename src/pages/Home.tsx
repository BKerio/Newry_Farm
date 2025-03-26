import React, { useEffect, useState } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import Sectiontwo from '../components/Sectiontwo';


// Intersection observer options
const observerOptions = {
  root: null,
  rootMargin: '50px',
  threshold: 0.1,
} as const;

// Interface for visible sections state
interface VisibleSections {
  hero: boolean;
  about: boolean;
  sectionTwo: boolean;
}

const Home: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const [visibleSections, setVisibleSections] = useState<VisibleSections>({
    hero: true,
    about: false,
    sectionTwo: false,
  });

  // Debug visibility state changes
  useEffect(() => {
    console.log('Visibility state:', visibleSections);
  }, [visibleSections]);

  // Intersection Observer setup
  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    const sections = document.querySelectorAll('.section-container');

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        const sectionId = entry.target.id;
        console.log(`Section ${sectionId} intersection:`, entry.isIntersecting);
        
        // Convert sectionId to match state key format
        const stateKey = sectionId === 'sectiontwo' ? 'sectionTwo' : sectionId as keyof VisibleSections;
        
        setVisibleSections(prev => ({
          ...prev,
          [stateKey]: entry.isIntersecting
        }));
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach((section) => {
      observer.observe(section);
      console.log(`Observing section: ${section.id}`);
    });

    observers.push(observer);

    return () => {
      observers.forEach(obs => obs.disconnect());
    };
  }, []);

  return (
    <>
      {/* Progress bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-green-500 transform-origin-left z-50"
        style={{ scaleX }}
      />

      <div className="w-full">
        {/* Hero Section */}
        <div id="hero" className="section-container min-h-screen">
          <HeroSection />
        </div>

        {/* About Section */}
        <div id="about" className="section-container min-h-screen">
          {(visibleSections.hero || visibleSections.about) && <AboutSection />}
        </div>

        {/* Section Two */}
        <div id="sectiontwo" className="section-container min-h-screen">
          <Sectiontwo />
        </div>
      </div>
    </>
  );
};

export default React.memo(Home);

// Add types for better type safety
declare module 'react' {
  interface CSSProperties {
    '--scroll-progress'?: string;
  }
}
