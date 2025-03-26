import { PiggyBank, ShieldCheck, HeartPulse, Milk, Leaf } from "lucide-react";
import { motion } from "framer-motion";
import Image5 from "../assets/About/Image5.jpg";

const LivestockFarmingPage = () => {
  const piggeryFeatures = [
    {
      id: "ethical-breeding",
      icon: PiggyBank,
      title: "Ethical Breeding",
      description:
        "Our pigs are ethically bred to promote good health, robustness, and high-quality meat. We prioritize their well-being throughout the entire lifecycle.",
    },
    {
      id: "nutritional-standards",
      icon: ShieldCheck,
      title: "Nutritional Standards",
      description:
        "We adhere to strict nutritional standards, providing a balanced diet to ensure optimal growth and superior meat quality.",
    },
    {
      id: "hygienic-conditions",
      icon: HeartPulse,
      title: "Hygienic Conditions",
      description:
        "Our piggery facilities are maintained to the highest hygiene standards, preventing disease and ensuring healthy livestock.",
    },
  ];

  const dairyFeatures = [
    {
      id: "quality-milk",
      icon: Milk,
      title: "Quality Milk Production",
      description:
        "Our dairy farms produce premium milk free from additives, raised through ethical and sustainable methods to ensure top-tier quality.",
    },
    {
      id: "humane-treatment",
      icon: PiggyBank, // Reusing the piggy bank icon as Cow is not available
      title: "Humane Treatment",
      description:
        "Our cattle are treated with care and respect, ensuring their well-being throughout their lives. Healthy cows mean better milk!",
    },
    {
      id: "sustainable-grazing",
      icon: Leaf,
      title: "Sustainable Grazing",
      description:
        "We prioritize environmentally friendly grazing practices, providing ample space and certified feeds to support sustainability.",
    },
  ];

  const piggeryGallery = [
    { id: 1, src: "/images/pigs.jpg", alt: "Healthy Pigs" },
    { id: 2, src: "/images/piggery-facility.jpg", alt: "Modern Piggery Facility" },
    { id: 3, src: "/images/pork-products.jpg", alt: "High-Quality Pork Products" },
  ];

  const dairyGallery = [
    { id: 1, src: "/images/dairy-cattle.jpg", alt: "Dairy Cattle" },
    { id: 2, src: "/images/milk-production.jpg", alt: "Milk Production Facility" },
    { id: 3, src: "/images/sustainable-grazing.jpg", alt: "Sustainable Grazing Practices" },
  ];

  return (
    <section className="bg-gradient-to-b from-pink-50 via-white to-blue-50">
      {/* Hero Section with Parallax */}
      <motion.div 
        className="relative h-screen overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute inset-0">
          <img
            src={Image5}
            alt="Livestock Farming"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/20" />
        </div>
        <motion.div 
          className="relative h-full flex items-center justify-center text-center px-4"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <div className="space-y-6">
            <h1 className="text-6xl font-bold text-white mb-4 tracking-tight">
              Livestock Farming Services
            </h1>
            <p className="text-2xl text-gray-200 max-w-2xl mx-auto font-light">
              Ethical, sustainable, and premium livestock farming for a healthier future.
            </p>
          </div>
        </motion.div>
      </motion.div>

      {/* Piggery Features Section */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-extrabold mb-4 text-pink-700 drop-shadow-md">
          Piggery Farming
        </h2>
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {piggeryFeatures.map((feature) => (
            <div
              key={feature.id}
              className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300"
            >
              <div className="flex items-center justify-center bg-gradient-to-tr from-pink-500 to-red-600 text-white w-14 h-14 rounded-full mb-6">
                <feature.icon size={28} />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-pink-800">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Dairy Features Section */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-extrabold mb-4 text-blue-700 drop-shadow-md">
          Dairy Farming
        </h2>
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {dairyFeatures.map((feature) => (
            <div
              key={feature.id}
              className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300"
            >
              <div className="flex items-center justify-center bg-gradient-to-tr from-blue-500 to-indigo-600 text-white w-14 h-14 rounded-full mb-6">
                <feature.icon size={28} />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-blue-800">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Piggery Gallery Section */}
      <div className="mt-16">
        <h2 className="text-4xl font-extrabold text-center mb-10 text-pink-700 drop-shadow-md">
          Piggery Farming Gallery
        </h2>
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {piggeryGallery.map((image) => (
            <div
              key={image.id}
              className="rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300">
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-64 object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Dairy Gallery Section */}
      <div className="mt-16">
        <h2 className="text-4xl font-extrabold text-center mb-10 text-blue-700 drop-shadow-md">
          Dairy Farming Gallery
        </h2>
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {dairyGallery.map((image) => (
            <div
              key={image.id}
              className="rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300">
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-64 object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LivestockFarmingPage;
