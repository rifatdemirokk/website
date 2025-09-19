import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import logo from '../../media/logofinal.png'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    if (location.pathname === '/') {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.location.href = `/#${sectionId}`;
    }
    setIsMenuOpen(false);
  };

  const navigationItems = [
    { label: t('nav.home'), action: () => scrollToSection('home'), isLink: false },
    { label: t('nav.features'), action: () => scrollToSection('features'), isLink: false },
    { label: 'About Us', to: '/about', isLink: true },
    { label: 'Success Stories', to: '/success-stories', isLink: true },
    { label: 'Media', to: '/media', isLink: true },
    { label: t('nav.pricing'), action: () => scrollToSection('pricing'), isLink: false },
    { label: 'FAQ', to: '/faq', isLink: true },
    { label: t('nav.contact'), action: () => scrollToSection('contact'), isLink: false },
  ];

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm'
      }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-25">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            {/* Logo resmi */}
            <Link to="/">
              <img src={logo} alt="UpOne Logo" className="w-24 h-24 mr-3" />
            </Link>

            {/* Metin logo 
            <Link to="/" className="text-2xl font-bold text-blue-700">
              UpOne
            </Link>*/}
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-6">
            {navigationItems.map((item, index) => (
              item.isLink ? (
                <Link
                  key={index}
                  to={item.to!}
                  className="text-gray-700 hover:text-blue-600 transition-colors duration-200"
                >
                  {item.label}
                </Link>
              ) : (
                <button
                  key={index}
                  onClick={item.action}
                  className="text-gray-700 hover:text-blue-600 transition-colors duration-200"
                >
                  {item.label}
                </button>
              )
            ))}
          </nav>

          {/* Language Switcher & CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="relative">
              <select
                value={language}
                onChange={(e) => setLanguage(e.target.value as 'en' | 'tr')}
                className="appearance-none bg-gray-50 border border-gray-300 rounded-lg px-4 py-2 pr-8 focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer"
              >
                <option value="en">EN</option>
                <option value="tr">TR</option>
              </select>
              <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" />
            </div>
            <button
              onClick={() => scrollToSection('contact')}
              className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-6 py-2 rounded-lg font-medium transition-all duration-200 transform hover:scale-105"
            >
              Schedule Demo
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-blue-600 transition-colors duration-200"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t shadow-lg">
          <div className="px-4 py-4 space-y-3">
            {navigationItems.map((item, index) => (
              item.isLink ? (
                <Link
                  key={index}
                  to={item.to!}
                  onClick={() => setIsMenuOpen(false)}
                  className="block w-full text-left text-gray-700 hover:text-blue-600 py-2"
                >
                  {item.label}
                </Link>
              ) : (
                <button
                  key={index}
                  onClick={item.action}
                  className="block w-full text-left text-gray-700 hover:text-blue-600 py-2"
                >
                  {item.label}
                </button>
              )
            ))}
            <div className="flex items-center justify-between pt-3 border-t">
              <select
                value={language}
                onChange={(e) => setLanguage(e.target.value as 'en' | 'tr')}
                className="bg-gray-50 border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="en">EN</option>
                <option value="tr">TR</option>
              </select>
              <button
                onClick={() => scrollToSection('contact')}
                className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-4 py-2 rounded-lg font-medium"
              >
                Schedule Demo
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;