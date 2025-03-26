import { FacebookIcon, Twitter, Instagram, Linkedin, Mail, Phone, ChevronRight, ArrowRight, MapPin as MapIcon } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-tr  from-green-700 via-green-600 to-green-500 min-h-80">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -right-24 w-48 h-48 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/4 w-72 h-72 bg-emerald-300/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-teal-400/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 py-16">
        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
          {/* Large Brand Section */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <h3 className="text-4xl font-bold text-white">Newry Farm<span className="text-teal-200">.</span></h3>
              <p className="text-lg text-white/90 leading-relaxed">
                Pushing the boundaries of innovation. Creating tomorrow's solutions, today.
              </p>
            </div>

            {/* Stats Section */}
            <div className="grid grid-cols-3 gap-4 py-6">
              <div className="text-center p-4 bg-white/10 backdrop-blur-lg rounded-xl hover:bg-white/20 transition-all duration-300">
                <div className="text-2xl font-bold text-white">2K+</div>
                <div className="text-sm text-white/80">Clients</div>
              </div>
              
              <div className="text-center p-4 bg-white/10 backdrop-blur-lg rounded-xl hover:bg-white/20 transition-all duration-300">
                <div className="text-2xl font-bold text-white">10+</div>
                <div className="text-sm text-white/80">Years</div>
              </div>
            </div>

            {/* Newsletter Section */}
            <div className="relative">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-6 py-4 rounded-full bg-white/10 backdrop-blur-md text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50 pr-36"
              />
              <button className="absolute right-2 top-2 bg-white text-green-600 px-6 py-2 rounded-full font-medium hover:bg-opacity-90 transition-all duration-300 group">
                Subscribe
                <ArrowRight className="inline-block ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Links Sections */}
            <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Quick Links */}
            <div className="space-y-6">
              <h4 className="text-xl font-semibold text-white">Quick Links</h4>
              <ul className="space-y-4">
              {[
                { name: 'Home', path: '/' },
                { name: 'About Us', path: '/about' },
                { name: 'Poultry Products', path: '/poultry' },
                { name: 'Our Work', path: '/products' },
                { name: 'Our Services', path: '/services' },
                {
                name: 'Other Products',
                path: '#',
                dropdownItems: [
                  { name: 'Livestock Farming', path: '/livestock' },
                  { name: 'Organic Vegetables', path: '/vegetable' },
                ],
                },
                { name: 'Contact Us', path: '/contact' },
              ].map((item) => (
                <li key={item.name} className="group">
                <a href={item.path} className="flex items-center text-white/90 hover:text-white transition-colors">
                  <ChevronRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                  {item.name}
                </a>
                {item.dropdownItems && (
                  <ul className="ml-6 mt-2 space-y-2">
                  {item.dropdownItems.map((dropdownItem) => (
                    <li key={dropdownItem.name}>
                    <a href={dropdownItem.path} className="flex items-center text-white/70 hover:text-white transition-colors">
                      <ChevronRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                      {dropdownItem.name}
                    </a>
                    </li>
                  ))}
                  </ul>
                )}
                </li>
              ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <h4 className="text-xl font-semibold text-white">Contact Us</h4>
              <div className="space-y-4">
                <a href="mailto:info@company.com" className="flex items-center space-x-3 text-white/90 hover:text-white transition-colors">
                  <Mail className="w-5 h-5" />
                  <span> info@newryfarm.co.ke, <br/>sales@newryfarm.com</span>
                </a>
                <a href="tel:+15551234567" className="flex items-center space-x-3 text-white/90 hover:text-white transition-colors">
                  <Phone className="w-5 h-5" />
                  <span>+254116250748</span>
                </a>
                <div className="flex items-center space-x-3 text-white/90">
                  <MapIcon className="w-5 h-5" />
                  <span>Mangu, Gachika-Mercy<br/> Njeri Road, Nakuru </span>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="space-y-6">
              <h4 className="text-xl font-semibold text-white">Connect With Us</h4>
              <div className="grid grid-cols-2 gap-4">
              {[
                { icon: FacebookIcon, label: 'Facebook', url: 'https://www.facebook.com/' },
                { icon: Twitter, label: 'Twitter', url: 'https://x.com/' },
                { icon: Instagram, label: 'Instagram', url: 'https://www.instagram.com/' },
                { icon: Linkedin, label: 'LinkedIn', url: 'https://www.linkedin.com/' }
              ].map(({ icon: Icon, label, url }) => (
                <a
                key={label}
                href={url}
                className="flex items-center space-x-2 text-white/90 hover:text-white transition-colors p-2 rounded-lg hover:bg-white/10"
                >
                <Icon className="w-5 h-5" />
                <span>{label}</span>
                </a>
              ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/20">
          <div className="flex justify-center items-center text-white/80">
            <p>© {new Date().getFullYear()} Newry Farm. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;