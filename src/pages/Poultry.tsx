import { Egg, Drumstick, Baby, Feather, CogIcon } from "lucide-react";
import HeroImage from "../assets/About/Poultry.jpg";
import PoultryImage1 from "../assets/About/Poultry-1.jpg";
import PoultryImage2 from "../assets/About/Poultry-2.jpg";
import PoultryImage3 from "../assets/About/Poultry-3.jpg";
import PoultryImage4 from "../assets/About/Poultry-4.jpg";
import PoultryImage5 from "../assets/About/Poultry-5.jpg";
import PoultryImage6 from "../assets/About/Poultry-6.jpg";

const PoultryFarmingPage = () => {
  const features = [
    {
      id: "eggs",
      icon: Egg,
      title: "Eggs",
      description: (
        <>
          We offer a variety of fresh and nutritious eggs, produced by healthy and well-cared-for hens. Our commitment to quality control ensures that our eggs meet and exceed industry standards.
          <a
            href="mailto:info@company.com"
            className="text-sm text-green-700 hover:text-green-800 mt-4 inline-block underline decoration-dotted animate-pulse"
          >
            Get More Info →
          </a>
        </>
      ),
    },
    {
      id: "broilers",
      icon: Drumstick,
      title: "Broilers",
      description: (
        <>
          Broilers are specially raised chickens for meat production. Known for their tender and flavourful meat, our broilers undergo careful breeding and feeding to ensure optimal taste and texture.
          <a
            href="mailto:info@company.com"
            className="text-sm text-green-700 hover:text-green-800 mt-4 inline-block underline decoration-dotted animate-pulse"
          >
            Get More Info →
          </a>
        </>
      ),
    },
    {
      id: "kienyeji-hens",
      icon: Feather,
      title: "Kienyeji Hens",
      description: (
        <>
          Our local hens are sourced from trusted breeds, reared with attention to natural and sustainable farming practices. These hens are free range and consuming natural feed hence producing organic eggs and organic chicken meat of exceptional quality and are valued for their traditional taste.
          <a
            href="mailto:info@company.com"
            className="text-sm text-green-700 hover:text-green-800 mt-4 inline-block underline decoration-dotted animate-pulse"
          >
            Get More Info →
          </a>
        </>
      ),
    },
    {
      id: "baby-chicks",
      icon: Baby,
      title: "Baby Chicks",
      description: (
        <>
          Our baby chicks are the beginning of a healthy and productive life cycle. Carefully hatched and nurtured, they are provided with the best conditions for growth, setting the foundation for strong and robust poultry.
          <a
            href="mailto:info@company.com"
            className="text-sm text-green-700 hover:text-green-800 mt-4 inline-block underline decoration-dotted animate-pulse"
          >
            Get More Info →
          </a>
        </>
      ),
    },
    {
      id: "improved-kienyeji-chicks",
      icon: CogIcon,
      title: "Improved Kienyeji Chickens",
      description: (
        <>
          Our improved Kienyeji chickens are bred with advanced methods to ensure robust health and productivity. Ideal for organic meat and eggs.
          <a
            href="mailto:info@company.com"
            className="text-sm text-green-700 hover:text-green-800 mt-4 inline-block underline decoration-dotted animate-pulse"
          >
            Get More Info →
          </a>
        </>
      ),
    },
    {
      id: "fertilized-eggs",
      icon: Egg,
      title: "Fertilized Eggs",
      description: (
        <>
          Fertilized eggs serve as the foundation for customers looking to hatch their own chicks or maintain a self-sustaining flock.
          <a
            href="mailto:info@company.com"
            className="text-sm text-green-700 hover:text-green-800 mt-4 inline-block underline decoration-dotted animate-pulse"
          >
            Get More Info →
          </a>
        </>
      ),
    },
  ];

const galleryImages = [
    { id: 1, src: PoultryImage1, alt: "Fresh Eggs", title: "Fresh Eggs" },
    { id: 2, src: PoultryImage2, alt: "Broilers", title: "Broilers" },
    { id: 3, src: PoultryImage3, alt: "Kienyeji Hens", title: "Kienyeji Hens" },
    { id: 4, src: PoultryImage4, alt: "Baby Chicks", title: "Baby Chicks" },
    { id: 5, src: PoultryImage5, alt: "Fertilized Eggs", title: "Fertilized Eggs" },
    { id: 6, src: PoultryImage6, alt: "Improved Kienyejis", title: "Improved Kienyejis" },
  ];

  return (
    <section className="bg-gradient-to-b from-green-50 via-white to-green-100">
  <div className="relative h-96 overflow-hidden">
    <img src={HeroImage} alt="Poultry Farming" loading="eager" className="w-full h-full object-cover" />
  </div>
  {/* Features Section */}
  <div className="py-16 text-center">
  <h2 className="text-4xl font-bold text-yellow-400">Some of Our Poultry Farming Features</h2>
  <p className="text-gray-600 mt-4 mb-12 max-w-3xl mx-auto">
          Learn more about our poultry farming practices that prioritize sustainability and quality.
        </p>
    <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {features.map((feature) => (
        <div key={feature.id} className="flex flex-col items-center bg-green-50 p-6 rounded-lg shadow-lg">
          <feature.icon className="h-12 w-12 text-green-700" />
          <h3 className="mt-4 text-xl font-semibold text-green-800">{feature.title}</h3>
          <p className="mt-2 text-sm text-gray-700">{feature.description}</p>
        </div>
      ))}
    </div>
  </div>
  <div className="py-16">
  <h2 className="text-4xl font-extrabold text-center text-yellow-600 mb-8">Poultry Gallery</h2>
    <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {galleryImages.map((image) => (
        <div key={image.id} className="relative group rounded-lg shadow-lg overflow-hidden">
          <img src={image.src} alt={image.alt} loading="eager" className="w-full h-64 object-cover" />
          <div className="absolute bottom-0 left-0 w-full bg-white/70 p-4">
            <h3 className="text-lg font-semibold text-green-800">{image.title}</h3>
          </div>
        </div>
      ))}
    </div>
  </div>
  
</section>

  );
};

export default PoultryFarmingPage;
