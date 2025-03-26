import React from 'react';
import AllHeroSection from "../components/Allpage";
import { Leaf, Sprout, Database, LucideRocket, CloudSun, ChartBar, LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface Service extends ServiceCardProps {
  id: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon: Icon, title, description }) => (
  <div className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
    <div className="bg-gradient-to-tr from-green-400 to-emerald-600 w-12 h-12 rounded-full flex items-center justify-center mb-4">
      <Icon className="text-white" size={24} />
    </div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const Services: React.FC = () => {
  const services: Service[] = [
    {
      id: 'poultry-management',
      icon: Sprout,
      title: "Poultry Management",
      description: "Advanced solutions for efficient and healthy poultry farming."
    },
    {
      id: 'poultry-automation',
      icon: LucideRocket,
      title: "Poultry Automation",
      description: "Automated systems for feeding, watering, and monitoring poultry."
    },
    {
      id: 'livestock-analytics',
      icon: Database,
      title: "Livestock Analytics",
      description: "Data-driven insights for optimizing livestock health and productivity."
    },
    {
      id: 'livestock-weather',
      icon: CloudSun,
      title: "Livestock Weather Monitoring",
      description: "Real-time weather data to ensure optimal conditions for livestock."
    },
    {
      id: 'organic-farming',
      icon: Leaf,
      title: "Organic Farming",
      description: "Sustainable practices for organic crop production and soil health."
    },
    {
      id: 'organic-yield',
      icon: ChartBar,
      title: "Organic Yield Optimization",
      description: "Strategies to maximize yield in organic farming through AI and data analytics."
    }
  ];

  const handleGetStarted = (): void => {
    window.location.href = '/contact';
  };

  return (
    <section>
      <AllHeroSection />
      <div className="py-16 px-4 max-w-7xl mx-auto">
        {/* Services Introduction */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-green-400">
          
            </span>
            </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Transforming agriculture through cutting-edge technology and sustainable solutions
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-tr from-green-400 to-emerald-600 rounded-lg p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Agricultural Practice?</h3>
            <p className="mb-6">Join the future of farming with our innovative solutions</p>
            <button
              type="button"
              onClick={handleGetStarted}
              className="bg-white text-emerald-600 px-8 py-3 rounded-full font-semibold hover:bg-opacity-90 transition-all duration-300"
            >
              Get Started
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;