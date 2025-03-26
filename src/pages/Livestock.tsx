import { PiggyBank, ShieldCheck, HeartPulse, Milk, Leaf } from "lucide-react";
import HeroImage from "../assets/About/LivestockHero.jpg";
import PiggeryImage1 from "../assets/About/Piggery-1.jpg";
import PiggeryImage2 from "../assets/About/Piggery-2.jpg";
import PiggeryImage3 from "../assets/About/Piggery-3.jpg";
import DairyImage1 from "../assets/About/Dairy-1.jpg";
import DairyImage2 from "../assets/About/Dairy-2.jpg";
import DairyImage3 from "../assets/About/Dairy-3.jpg";

const LivestockFarmingPage = () => {
  const features = [
    {
      id: "ethical-breeding",
      icon: PiggyBank,
      title: "Ethical Breeding",
      description: (
        <>
          Our pigs are ethically bred to promote good health, robustness, and high-quality meat. 
          <a
            href="mailto:info@newryfarm.co.ke"
            className="text-sm text-green-700 hover:text-green-800 mt-4 inline-block underline decoration-dotted animate-pulse"
          >
            Get More Info →
          </a>
        </>
      ),
    },
    {
      id: "nutritional-standards",
      icon: ShieldCheck,
      title: "Nutritional Standards",
      description: (
        <>
          We adhere to strict nutritional standards, providing a balanced diet to ensure optimal growth and superior meat quality. 
          <a
            href="mailto:info@newryfarm.co.ke"
            className="text-sm text-green-700 hover:text-green-800 mt-4 inline-block underline decoration-dotted animate-pulse"
          >
            Get More Info →
          </a>
        </>
      ),
    },
    {
      id: "hygienic-conditions",
      icon: HeartPulse,
      title: "Hygienic Conditions",
      description: (
        <>
          Our piggery facilities are maintained to the highest hygiene standards, preventing disease and ensuring healthy livestock. 
          <a
            href="mailto:info@newryfarm.co.ke"
            className="text-sm text-green-700 hover:text-green-800 mt-4 inline-block underline decoration-dotted animate-pulse"
          >
            Get More Info →
          </a>
        </>
      ),
    },
    {
      id: "quality-milk",
      icon: Milk,
      title: "Quality Milk Production",
      description: (
        <>
          Our dairy farms produce premium milk free from additives, raised through ethical and sustainable methods to ensure top-tier quality. 
          <a
            href="mailto:info@newryfarm.co.ke"
            className="text-sm text-green-700 hover:text-green-800 mt-4 inline-block underline decoration-dotted animate-pulse"
          >
            Get More Info →
          </a>
        </>
      ),
    },
    {
      id: "humane-treatment",
      icon: PiggyBank,
      title: "Humane Treatment",
      description: (
        <>
          Our cattle are treated with care and respect, ensuring their well-being throughout their lives. Healthy cows mean better milk! 
          <a
            href="mailto:info@newryfarm.co.ke"
            className="text-sm text-green-700 hover:text-green-800 mt-4 inline-block underline decoration-dotted animate-pulse"
          >
            Get More Info →
          </a>
        </>
      ),
    },
    {
      id: "sustainable-grazing",
      icon: Leaf,
      title: "Sustainable Grazing",
      description: (
        <>
          We prioritize environmentally friendly grazing practices, providing ample space and certified organic feeds to support sustainability. 
          <a
            href="mailto:info@newryfarm.co.ke"
            className="text-sm text-green-700 hover:text-green-800 mt-4 inline-block underline decoration-dotted animate-pulse"
          >
            Get More Info →
          </a>
        </>
      ),
    },
  ];

  const galleryImages = [
    { id: 1, src: PiggeryImage1, alt: "Healthy Pigs", title: "Healthy Pigs" },
    { id: 2, src: PiggeryImage2, alt: "Modern Piggery Facility", title: "Modern Piggery Facility" },
    { id: 3, src: PiggeryImage3, alt: "High-Quality Pork Products", title: "High-Quality Pork Products" },
    { id: 4, src: DairyImage1, alt: "Dairy Cattle", title: "Dairy Cattle" },
    { id: 5, src: DairyImage2, alt: "Milk Production Facility", title: "Milk Production Facility" },
    { id: 6, src: DairyImage3, alt: "Sustainable Grazing", title: "Sustainable Grazing" },
  ];

  return (
    <section className="bg-gradient-to-b from-pink-50 via-white to-blue-50">
      {/* Hero Image Section */}
      <div className="relative h-96 overflow-hidden">
        <img src={HeroImage} alt="Livestock Farming" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-transparent" />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-5xl font-bold text-white drop-shadow-lg">Livestock Farming</h1>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 text-center">
        <h2 className="text-4xl font-bold text-green-700">Livestock Farming Features</h2>
        <p className="text-gray-600 mt-4 mb-12 max-w-3xl mx-auto">
          Learn more about our piggery and dairy farming practices that prioritize sustainability and quality.
        </p>
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300"
            >
              <div className="flex items-center justify-center bg-gradient-to-tr from-yellow-100 to-yellow-600 text-white w-14 h-14 rounded-full mb-4">
                <feature.icon size={28} />
              </div>
              <h3 className="text-xl font-bold text-yellow-400 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Gallery Section */}
      <div className="py-16">
        <h2 className="text-4xl font-extrabold text-center text-green-800 mb-8">Our Livestock Gallery</h2>
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryImages.map((image) => (
            <div
              key={image.id}
              className="relative group bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
            >
              <img src={image.src} alt={image.alt} className="w-full h-64 object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-600/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 w-full bg-white/70 p-4 transition-opacity duration-300 group-hover:bg-blue-100">
                <h3 className="text-lg font-semibold text-blue-800">{image.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LivestockFarmingPage;
