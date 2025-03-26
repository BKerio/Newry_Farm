import { Card, CardContent } from '../components/ui/Card';
import { motion } from 'framer-motion';
import SectionTwo from '../components/Sectiontwo';
import Image5 from '../assets/About/Image5.jpg';

const AboutUs = () => {
  const coreValues = [
    {
      title: 'Quality Assurance',
      description: 'We prioritize the production of premium poultry products through stringent quality control measures.',
      icon: '🚀'
    },
    {
      title: 'Sustainability',
      description: 'Committed to environmentally friendly and sustainable farming practices.',
      icon: '🎯'
    },
    {
      title: 'Customer Satisfaction',
      description: 'Ensuring the happiness and satisfaction of our customers is at the core of our operations.',
      icon: '🌟'
    },
    {
      title: 'Integrity',
      description: 'Upholding the highest standards of honesty, transparency, and ethical behavior in all our dealings.',
      icon: '🤝'
    },
    {
      title: 'Innovation',
      description: 'Embracing continuous improvement and innovation to stay ahead in the dynamic agricultural landscape.',
      icon: '⚙️'
    }
  ];

  const reasonsToChooseUs = [
    {
      title: "Quality Products",
      description: "Our poultry products are known for their freshness, nutritional value, and superior quality."
    },
    {
      title: "Reliable Supply Chain",
      description: "We boast a robust and reliable supply chain, ensuring timely delivery to our clients."
    },
    {
      title: "Expertise",
      description: "With years of experience, our team possesses the expertise to meet diverse customer requirements."
    },
    {
      title: "Sustainable Practices",
      description: "We are dedicated to sustainable and eco-friendly farming practices, promoting responsible agriculture."
    },
    {
      title: "Global Standards",
      description: "Our commitment to international standards guarantees products of the highest quality for both local and international clients."
    },
    {
      title: "Customer-Centric Approach",
      description: "Newry Farm values customer feedback, providing personalized service and addressing specific needs."
    }
  ];

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <div className="w-full mx-auto bg-gradient-to-br from-green-50 to-green-100">
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
            alt="Contact Us"
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
              About Us
            </h1>
            <p className="text-2xl text-gray-200 max-w-2xl mx-auto font-light">
              Transforming Ideas to Reality
            </p>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="mt-8"
            >
              <div className="w-8 h-8 mx-auto border-2 border-white rounded-full flex items-center justify-center">
                <span className="text-white text-2xl">↓</span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>

      {/* Mission & Vision Section */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <motion.div 
          className="grid md:grid-cols-2 gap-8"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={{
            initial: { opacity: 0 },
            animate: { opacity: 1, transition: { staggerChildren: 0.2 } }
          }}
        >
          <motion.div variants={fadeInUp}>
            <Card className="shadow-lg p-8 bg-gradient-to-br from-green-500 to-emerald-600 text-white transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
              <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
              <CardContent className="text-gray-100 text-lg">
                To empower businesses through innovative solutions that drive growth and success, 
                while maintaining the highest standards of quality and customer satisfaction.
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <Card className="shadow-lg p-8 bg-gradient-to-br from-emerald-500 to-emerald-400 text-white transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
              <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
              <CardContent className="text-gray-100 text-lg">
                To become the global leader in delivering transformative solutions that shape 
                the future of industries and create lasting positive impact.
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>

      {/* Core Values Section */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24 bg-white/50">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-extrabold">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-emerald-600">
          Our Core Values
        </span>
          </h2>
        </motion.div>
        <motion.div 
          className="grid md:grid-cols-1 lg:grid-cols-5 gap-8"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={{
        animate: { transition: { staggerChildren: 0.1 } }
          }}
        >
          {coreValues.map((value, index) => (
        <motion.div
          key={index}
          variants={{
            initial: { opacity: 0, scale: 0.9 },
            animate: { opacity: 1, scale: 1 }
          }}
        >
          <Card className="shadow-lg p-4 h-full bg-white/80 backdrop-blur-sm transform transition-all duration-300 hover:scale-105 hover:shadow-xl rounded-lg">
            <div className="text-2xl mb-3">{value.icon}</div>
            <h3 className="text-md font-bold mb-2 text-gray-800">{value.title}</h3>
            <CardContent className="text-gray-600 text-sm">
          {value.description}
            </CardContent>
          </Card>
        </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Reasons to Choose Us Section */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-extrabold">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-emerald-600">
              Why Choose Us
            </span>
          </h2>
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasonsToChooseUs.map((reason, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transform transition-all duration-300 hover:-translate-y-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <h3 className="text-2xl font-bold mb-4 text-green-800">{reason.title}</h3>
              <p className="text-gray-600">{reason.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Previous Work Section */}
      <motion.div 
        className="mb-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <SectionTwo />
      </motion.div>

      {/* FAQs Section */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24 bg-white/50">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-extrabold">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-emerald-600">
              Frequently Asked Questions (FAQs)
            </span>
          </h2>
        </motion.div>
        <div className="space-y-8">
          {[
            {
              question: "What types of poultry products do you offer?",
              answer: "We offer a diverse range of products, including broilers, local hens, eggs, baby chicks, and fertilized eggs."
            },
            {
              question: "How long has Newry Farm Limited been in operation?",
              answer: "Newry Farm has been serving the agricultural industry since 2016."
            },
            {
              question: "Are your farming practices sustainable?",
              answer: "Yes, sustainability is a core value, and we adhere to eco-friendly farming practices."
            },
            {
              question: "Do you ship products internationally?",
              answer: "Yes, we serve both local and international markets, ensuring timely and reliable deliveries."
            },
            {
              question: "What sets Newry Farm apart from other poultry suppliers?",
              answer: "Our commitment to quality, sustainability, customer satisfaction, and innovation distinguishes us in the market."
            },
            {
              question: "How can clients place orders?",
              answer: "Orders can be placed through our website, email (info@newryfarm.co.ke), or by contacting our phone numbers."
            },
            {
              question: "Are your eggs and chicks disease-free?",
              answer: "Yes, we prioritize the health and well-being of our poultry, ensuring disease-free products."
            },
            {
              question: "What measures do you take to ensure product freshness?",
              answer: "Our robust supply chain and quick turnaround times guarantee the freshness of our products."
            },
            {
              question: "Can I visit your farm?",
              answer: "Yes, we welcome visits from interested parties. Please contact us to schedule a visit."
            },
            {
              question: "How do you handle customer complaints?",
              answer: "We have a dedicated customer support team to address and resolve any concerns promptly."
            },
            {
              question: "What certifications does Newry Farm hold?",
              answer: "We adhere to industry and international standards, holding relevant certifications for quality and safety."
            },
            {
              question: "Can I buy in bulk for commercial purposes?",
              answer: "Absolutely, we cater to both individual and commercial customers, offering competitive pricing for bulk orders."
            }
          ].map((faq, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transform transition-all duration-300 hover:-translate-y-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <h3 className="text-2xl font-bold mb-4 text-green-800">{faq.question}</h3>
              <p className="text-gray-600">{faq.answer}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
};

export default AboutUs;
