import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, MessageCircle, MapPin, ArrowUp, Instagram, Twitter, Linkedin, Youtube } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-white relative">
      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg transition-all duration-200 hover:scale-110"
      >
        <ArrowUp className="w-6 h-6" />
      </button>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg flex items-center justify-center mr-3">
                <span className="text-white font-bold text-xl">U</span>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                UpOne
              </span>
            </div>
            <p className="text-gray-300 leading-relaxed mb-6">
              {t('footer.description')}
            </p>
            <div className="flex space-x-4">
              <a
                href="https://instagram.com/uponehr"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 hover:bg-gray-700 p-2 rounded-lg transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 text-pink-500" />
              </a>
              <a
                href="https://twitter.com/uponehr"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 hover:bg-gray-700 p-2 rounded-lg transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5 text-blue-400" />
              </a>
              <a
                href="https://linkedin.com/company/uponehr"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 hover:bg-gray-700 p-2 rounded-lg transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5 text-blue-500" />
              </a>
              <a
                href="https://youtube.com/c/uponehr"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 hover:bg-gray-700 p-2 rounded-lg transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5 text-red-500" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">{t('footer.quickLinks')}</h3>
            <ul className="space-y-4">
              <li>
                <button
                  onClick={() => scrollToSection('home')}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  {t('nav.home')}
                </button>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/success-stories"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Success Stories
                </Link>
              </li>
              <li>
                <Link
                  to="/media"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Media
                </Link>
              </li>
              <li>
                <Link
                  to="/faq"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">{t('footer.contact')}</h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <MessageCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">WhatsApp</p>
                  <a
                    href="https://wa.me/905436037190"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-green-400 transition-colors"
                  >
                    +905436037190
                  </a>
                </div>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 text-blue-500 mr-3 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">Email</p>
                  <a
                    href="mailto:info.uponehr@gmail.com"
                    className="text-white hover:text-blue-400 transition-colors"
                  >
                    info.uponehr@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-center">
                <MapPin className="w-5 h-5 text-orange-500 mr-3 flex-shrink-0" />
                <Link to="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors">
                  {t('contact.address')}
                </Link>
              </div>
              <Link to="/terms" className="text-gray-400 hover:text-white text-sm transition-colors">
                Terms
              </Link>
              <Link to="/security" className="text-gray-400 hover:text-white text-sm transition-colors">
                Security
              </Link>
              <Link to="/accessibility" className="text-gray-400 hover:text-white text-sm transition-colors">
                Accessibility
              </Link>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Stay Updated</h3>
            <p className="text-gray-300 mb-4">
              Get the latest updates on AI-powered HR solutions
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 px-4 py-2 rounded-l-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-r-lg transition-colors">
                <Mail className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              {t('footer.copyright')}
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                {t('footer.privacy')}
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                {t('footer.terms')}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
