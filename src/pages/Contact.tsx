import ContactForm from '../components/ContactForm';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin 
} from 'lucide-react';
import Image5 from '../assets/About/Image5.jpg';

const ContactPage = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Visit Us",
      details: ["Mangu, Gachika-Mercy", "Njeri Road, Nakuru"],
      color: "text-emerald-500"
    },
    {
      icon: Phone,
      title: "Call Us",
      details: ["+254116250748"],
      color: "text-green-500"
    },
    {
      icon: Mail,
      title: "Email Us",
      details: ["info@newryfarm.co.ke", "sales@newryfarm.com"],
      color: "text-emerald-600"
    },
    {
      icon: Clock,
      title: "Working Hours",
      details: ["Mon - Fri: 9AM - 6PM", "Sat - Sun: 10AM - 4PM"],
      color: "text-emerald-700"
    }
  ];

  const socialLinks = [
    { icon: Facebook, href: "https://www.facebook.com", color: "hover:text-emerald-500" },
    { icon: Twitter, href: "https://x.com", color: "hover:text-blue-400" },
    { icon: Instagram, href: "https://instagram.com", color: "hover:text-pink-500" },
    { icon: Linkedin, href: "https://linkedin.com", color: "hover:text-blue-700" }
  ];

  return (
    <div className="relative w-full bg-gradient-to-br from-green-50 to-blue-50">
      {/* Hero Section */}
      <div className="relative h-96">
        <div className="absolute inset-0">
          <img
            src={Image5}
            alt="Contact Us"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-50" />
        </div>
        <div className="relative h-full flex items-center justify-center text-center px-4">
          <div className="space-y-4">
            <h1 className="text-5xl font-bold text-white mb-4">Contact Us</h1>
            <p className="text-xl text-gray-200 max-w-2xl mx-auto">
              Have questions about our sustainable farming solutions? We're here to help!
            </p>
          </div>
        </div>
      </div>

      {/* Contact Information Cards */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 -mt-20 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactInfo.map((info, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-6 transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              <div className={`${info.color} mb-4`}>
                <info.icon size={24} />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {info.title}
              </h3>
              {info.details.map((detail, idx) => (
                <p key={idx} className="text-gray-600">
                  {detail}
                </p>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form Section */}
          <div>
            <ContactForm />
          </div>

          {/* Map and Additional Info Section */}
          <div className="space-y-8">
            {/* Additional Information */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                Connect With Us
              </h3>
              <p className="text-gray-600 mb-6">
                Follow us on social media for the latest updates, farming tips, and sustainable agriculture news.
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className={`text-gray-400 transition-colors duration-300 ${social.color}`}
                  >
                    <social.icon size={24} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-green-600 text-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Be Ready to With Newry Farm?
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Join us in creating a sustainable future through innovative farming solutions.
          </p>
            <button className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-green-50 transition-colors duration-300">
            <a href="/products">Explore our Portfolio</a>
            </button>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
