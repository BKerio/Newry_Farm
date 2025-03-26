import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Leaf, Cloud } from 'lucide-react';

// Import images directly
import Poultry1 from '../assets/About/Poultry.jpg';
import Poultry2 from '../assets/About/Poultry-2.jpg';
import Poultry3 from '../assets/About/Poultry-3.jpg';
import Poultry4 from '../assets/About/Poultry-4.jpg';
import Poultry5 from '../assets/About/Poultry-5.jpg';
import Poultry6 from '../assets/About/Poultry-6.jpg';

// Create an array of image objects (using the same image for lowRes and highRes in this example)
const images = [
  { lowRes: Poultry1, highRes: Poultry1 },
  { lowRes: Poultry2, highRes: Poultry2 },
  { lowRes: Poultry3, highRes: Poultry3 },
  { lowRes: Poultry4, highRes: Poultry4 },
  { lowRes: Poultry5, highRes: Poultry5 },
  { lowRes: Poultry6, highRes: Poultry6 },
];

const HeroSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  // Track which high-res images have loaded (initially all false)
  const [loadedHighRes, setLoadedHighRes] = useState<boolean[]>(
    new Array(images.length).fill(false)
  );

  // Automatically switch the active image every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Preload the main high-res image quickly.
  useEffect(() => {
    const img = new Image();
    img.src = images[0].highRes;
    img.onload = () => {
      setLoadedHighRes((prev) => {
        const newLoaded = [...prev];
        newLoaded[0] = true;
        return newLoaded;
      });
    };
  }, []);

  // Handler to load high-res images when the corresponding low-res image is loaded
  const handleHighResLoad = (index: number, highResSrc: string) => {
    const img = new Image();
    img.src = highResSrc;
    img.onload = () => {
      setLoadedHighRes((prev) => {
        const newLoaded = [...prev];
        newLoaded[index] = true;
        return newLoaded;
      });
    };
  };

  return (
    <motion.section className="relative min-h-screen w-full overflow-hidden">
      {/* Preload the main high-res image */}
      <link rel="preload" href={images[0].highRes} as="image" />

      {/* Image Grid */}
      <div className="absolute inset-0 grid grid-cols-2 md:grid-cols-3 gap-3 p-3">
        <AnimatePresence mode="wait">
          {images.map((imgData, index) => (
            <motion.div
              key={index}
              className="relative overflow-hidden rounded-xl"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{
                // Only the active image is fully opaque & scaled to 100%
                opacity: activeIndex === index ? 1 : 0.7,
                scale: activeIndex === index ? 1 : 0.95,
              }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.7 }}
            >
              <img
                src={loadedHighRes[index] ? imgData.highRes : imgData.lowRes}
                alt={`Farm image ${index + 1}`}
                className="h-full w-full object-cover transition-all duration-700 hover:scale-105"
                // Use lazy loading for non-critical images (first image is loaded eagerly)
                loading={index === 0 ? 'eager' : 'lazy'}
                decoding="async"
                onLoad={() => {
                  if (!loadedHighRes[index]) {
                    handleHighResLoad(index, imgData.highRes);
                  }
                }}
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/80 backdrop-blur-[2px]" />

      {/* Content */}
      <div className="relative z-10 flex min-h-screen items-center justify-center px-6">
        <motion.div className="text-center">
          <motion.div className="mb-8 flex items-center justify-center space-x-2">
            <Leaf className="h-8 w-8 text-green-400" />
          </motion.div>
          <motion.h1 className="mb-4 text-4xl font-extrabold text-transparent bg-gradient-to-r from-green-400 via-green-600 to-green-800 bg-clip-text">
            Discover Newry Farm
          </motion.h1>
          <p className="mb-6 text-lg text-gray-200">
            Explore the future of sustainable poultry farming with us.
          </p>

            <div className="flex flex-col items-center space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
            <a href="/products" className="rounded-lg bg-yellow-500 px-6 py-3 text-white hover:bg-green-600">
              Explore Products <ArrowRight className="ml-2 inline-block h-5 w-5" />
            </a>
            <a href="/services" className="rounded-lg border-2 border-green-500 px-6 py-3 text-green-400 hover:bg-green-500 hover:text-white">
              Features <Cloud className="ml-2 inline-block h-5 w-5" />
            </a>
            </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default HeroSection;
