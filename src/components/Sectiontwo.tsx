import { useState } from 'react';
import { Sprout, Cloud, Sun, Bug, Heart, Egg } from 'lucide-react';
import Image1 from '../assets/About/Product1.jpg';
import Image2 from '../assets/About/Product2.jpg';
import Image3 from '../assets/About/Product3.jpg';
import Image4 from '../assets/About/Product4.jpg';
import Image5 from '../assets/About/Product5.jpg';
import Image6 from '../assets/About/Product6.jpg';

const SectionTwo = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const galleryItems = [
    {
      title: "Healthy Baby Chicks",
      description: "Nurturing baby chicks for a sustainable and healthy future.",
      icon: <Sprout size={24} />, 
      image: Image1,
    },
    {
      title: "Fresh Consumable Eggs",
      description: "Providing fresh, consumable eggs directly from our farm.",
      icon: <Egg size={24} />, 
      image: Image3,
    },
    {
      title: "Improved Kienyeji Chickens",
      description: "Enhancing traditional kienyeji chickens with modern techniques.",
      icon: <Bug size={24} />, 
      image: Image4,
    },
    {
      title: "Fresh Fertilized Eggs",
      description: "Supplying fresh, fertilized eggs for breeding and consumption.",
      icon: <Heart size={24} />, 
      image: Image2,
    },
    {
      title: "Hybrid Broiler Chickens",
      description: "Raising hybrid broiler chickens for better meat production.",
      icon: <Sun size={24} />, 
      image: Image5,
    },
    {
      title: "Cool Ecosystem For Dairy Farming",
      description: "Creating a sustainable ecosystem for efficient dairy farming.",
      icon: <Cloud size={24} />, 
      image: Image6,
    },
  ];

  return (
    <section className="relative py-20 overflow-hidden bg-gradient-to-b from-green-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-semibold relative inline-block">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-green-400">
              Our Wonderful Work Portfolio
            </span>
            <Sprout
              className="absolute -top-8 -right-8 text-green-400 animate-bounce"
              size={32}
            />
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-3 items-start">
          {galleryItems.map((item, index) => (
            <div
              key={index}
              className="relative group"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden transform transition-all duration-300 hover:-translate-y-2">
                <div className="aspect-w-16 aspect-h-9 relative">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-64 object-cover"
                    decoding="sync"
                    fetchPriority="high"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-green-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                <div className="p-6 relative">
                  <div className="absolute -top-8 right-4 bg-white rounded-full p-3 shadow-lg transform -translate-y-1/2 transition-transform duration-300 group-hover:rotate-12">
                    {item.icon}
                  </div>

                  <h3 className="text-xl font-bold text-green-800 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-green-600">{item.description}</p>

                  <div
                    className={`absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-green-400 to-green-600 transform scale-x-0 transition-transform duration-300 ${
                      hoveredIndex === index ? 'scale-x-100' : ''
                    }`}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SectionTwo;
