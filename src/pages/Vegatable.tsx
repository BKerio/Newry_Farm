import { LeafyGreenIcon, DropletsIcon, ShieldCloseIcon} from "lucide-react";
import HeroImage from "../assets/About/Image5.jpg";
import Veg1 from "../assets/About/Veg-1.jpg";
import Veg2 from "../assets/About/Veg-2.jpg";
import Veg3 from "../assets/About/Veg-3.jpg";


const OrganicVegetablesPage = () => {
  const features = [
    {
        id: "eggs",
        icon: LeafyGreenIcon,
        title: "Home-Grown Vegetables",
        description: (
            <>
                We use natural fertilizers like compost and animal manure to ensure healthy and chemical-free produce.
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
        id: "broilers",
        icon: ShieldCloseIcon,
        title: "Advanced Pest Control",
        description: (
            <>
                Our pest control methods rely on biological and herbal solutions, avoiding harmful chemicals for safer vegetables.
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
        id: "kienyeji-hens",
        icon: DropletsIcon,
        title: "Excellent Water Conservation",
        description: (
            <>
                Efficient irrigation and rainwater harvesting systems help us grow vegetables sustainably and responsibly.
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
    { id: 1, src: Veg1, alt: "Fresh Carrots", title: "Fresh Carrots" },
    { id: 2, src: Veg2, alt: "Fresh Spinach & Kales", title: "Fresh Spinach & Kales" },
    { id: 3, src: Veg3, alt: "Fresh Tomatoes", title: "Fresh Tomatoes" },
   
  ];

  return (
    <section className="bg-gradient-to-b from-green-50 via-white to-green-100">
  <div className="relative h-96 overflow-hidden">
    <img src={HeroImage} alt="Poultry Farming" loading="eager" className="w-full h-full object-cover" />
  </div>


  {/* Features Section */}
  <div className="py-16 text-center">
  <h2 className="text-4xl font-bold text-yellow-400">Some of Our Organic Vegetables Farming Features</h2>
  <p className="text-gray-600 mt-4 mb-12 max-w-3xl mx-auto">
          Learn more about our vegetables farming practices that prioritize sustainability and quality.
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
  <h2 className="text-4xl font-extrabold text-center text-yellow-600 mb-8">Organic Vegetables Gallery</h2>
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

export default OrganicVegetablesPage;
