import { useState } from 'react';
import { Users, Briefcase, Award, Sprout, Leaf, Cloud, Sun, ChevronRight } from 'lucide-react';
import Image5 from '../assets/About/image-x.jpg';

const AboutSection = () => {
  const [activeFeature, setActiveFeature] = useState<number | null>(null);
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  const features = [
    { 
      icon: Users, 
      text: "50+ Experts",
      description: "Industry-leading agricultural specialists",
      color: "from-blue-400 to-blue-600"
    },
    { 
      icon: Briefcase, 
      text: "100+ Projects",
      description: "Successful farming innovations",
      color: "from-green-400 to-green-600"
    },
    { 
      icon: Award, 
      text: "15+ Awards",
      description: "Recognition for excellence",
      color: "from-yellow-400 to-yellow-600"
    },
    { 
      icon: Sprout, 
      text: "1000+ Farms",
      description: "Farms transformed worldwide",
      color: "from-emerald-400 to-emerald-600"
    }
  ];

  // FloatingElement remains for the overall section background if needed
  const FloatingElement = ({ Icon, style }: { 
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    Icon: React.ComponentType<any>;
    style: {
      top?: string;
      left?: string;
      right?: string;
      bottom?: string;
      speed: number;
      rotation?: number;
    };
  }) => (
    <div 
      className="absolute text-green-200 transition-all duration-1000"
      style={{
        top: style.top,
        left: style.left,
        right: style.right,
        bottom: style.bottom,
        transform: `translateY(${scrollY * style.speed}px) rotate(${style.rotation || 0}deg)`
      }}
    >
      <Icon size={24} className="animate-float" />
    </div>
  );

  return (
    <section className="relative py-32 overflow-hidden bg-gradient-to-b from-green-50 via-white to-green-50">
      {/* Enhanced animated background elements (global section background) */}
      <div className="absolute inset-0 overflow-hidden">
        {[
          { Icon: Leaf, style: { top: '5%', left: '5%', speed: 0.3, rotation: 45 } },
          { Icon: Cloud, style: { top: '15%', right: '10%', speed: -0.2, rotation: 0 } },
          { Icon: Sprout, style: { bottom: '25%', left: '15%', speed: 0.4, rotation: -15 } },
          { Icon: Sun, style: { top: '30%', right: '20%', speed: -0.3, rotation: 0 } },
          { Icon: Leaf, style: { bottom: '10%', right: '5%', speed: 0.2, rotation: 120 } }
        ].map((item, index) => (
          <FloatingElement key={index} Icon={item.Icon} style={item.style} />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 relative">
          <h2 className="text-5xl font-semibold inline-block">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-green-400">
              Who are We?
            </span>
            <Sprout 
              className="absolute -top-8 -right-8 text-green-400 animate-bounce"
              size={32}
            />
          </h2>
        </div>

        {/* Grid with Left Column: Image & Right Column: Static Text & Features */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column: Image */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-green-600 transform rotate-3 rounded-xl transition-transform duration-300 group-hover:rotate-6" />
            <div className="relative transition-transform duration-300 group-hover:-translate-y-2">
              <img 
                src={Image5}
                alt="Smart Farming" 
                className={`rounded-xl shadow-xl transition-opacity duration-700 ${isImageLoaded ? 'opacity-100' : 'opacity-0'}`}
                onLoad={() => setIsImageLoaded(true)}
              />
              <div className="absolute -bottom-6 -right-6 bg-white text-gray-800 p-6 rounded-xl shadow-xl transform rotate-3 transition-transform duration-300 group-hover:rotate-6">
                <div className="flex items-center space-x-2">
                  <Sprout className="text-green-500" size={24} />
                  <p className="font-bold text-lg">Innovating for a Greener Tomorrow</p>
                  <ChevronRight className="text-green-500 animate-bounce-x" size={20} />
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Static Text & Features (floating decorations removed) */}
          <div className="space-y-8">
            <div className="p-6 bg-white rounded-xl shadow-lg transition-all duration-300">
              <p className="text-lg text-gray-700 leading-relaxed">
                Since 2016, Newry Farm Limited has grown into a leading agricultural company in Nakuru County,
                offering high-quality poultry, organic vegetables, dairy, pork, and beef products.
                Committed to sustainability, ethical practices, and customer satisfaction, we serve local and international markets with
                excellence, innovation, and a dedication that defines our journey.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {features.map((item, index) => (
                <div
                  key={index}
                  className="group"
                  onMouseEnter={() => setActiveFeature(index)}
                  onMouseLeave={() => setActiveFeature(null)}
                >
                  <div className={`bg-white p-6 rounded-xl shadow-md transition-all duration-300 ${activeFeature === index ? 'ring-2 ring-green-400' : ''}`}>
                    <div className="flex items-center space-x-4">
                      <div className={`p-3 rounded-full bg-gradient-to-r ${item.color}`}>
                        <item.icon className="text-white" size={24} />
                      </div>
                      <div>
                        <h3 className="font-bold text-xl text-gray-800">{item.text}</h3>
                        <p className="text-sm text-gray-600">{item.description}</p>
                      </div>
                    </div>
                    {/* Removed the animated underline element */}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced animated bottom wave */}
      <div className="absolute bottom-0 left-0 right-0 transform translate-y-1/2">
        <svg className="w-full" viewBox="0 0 1440 120" xmlns="http://www.w3.org/2000/svg">
          <path 
            d="M0,64L40,69.3C80,75,160,85,240,80C320,75,400,53,480,42.7C560,32,640,32,720,42.7C800,53,880,75,960,80C1040,85,1120,75,1200,58.7C1280,43,1360,21,1400,10.7L1440,0L1440,120L0,120Z"
            fill="#4ade80"
            fillOpacity="0.2"
          />
          <path 
            d="M0,84L40,89.3C80,95,160,105,240,100C320,95,400,73,480,62.7C560,52,640,52,720,62.7C800,73,880,95,960,100C1040,105,1120,95,1200,78.7C1280,63,1360,41,1400,30.7L1440,20L1440,120L0,120Z"
            fill="#4ade80"
            fillOpacity="0.3"
          />
        </svg>
      </div>
    </section>
  );
};

export default AboutSection;
