import React from 'react';
import { ArrowRight, Play } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Hero = () => {
  const { t } = useLanguage();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="pt-16 pb-20 bg-gradient-to-br from-blue-50 via-white to-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8 items-center">
          {/* Content */}
          <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left lg:mx-0">
            <div className="animate-fade-in-up">
              <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl lg:text-6xl">
                <span className="block">{t('hero.headline').split(' ').slice(0, 3).join(' ')}</span>
                <span className="block bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent">
                  {t('hero.headline').split(' ').slice(3).join(' ')}
                </span>
              </h1>
              <p className="mt-6 text-xl text-gray-600 sm:text-2xl max-w-3xl">
                {t('hero.subheadline')}
              </p>
              <div className="mt-8 sm:flex sm:justify-center lg:justify-start sm:gap-4">
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-4 rounded-lg font-semibold text-lg flex items-center justify-center transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  Schedule Demo
                  <ArrowRight className="ml-2 w-5 h-5" />
                </button>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="mt-3 sm:mt-0 w-full sm:w-auto border-2 border-gray-300 hover:border-blue-600 text-gray-700 hover:text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg flex items-center justify-center transition-all duration-200"
                >
                  <Play className="mr-2 w-5 h-5" />
                  Contact Sales
                </button>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
            <div className="relative mx-auto w-full rounded-lg shadow-lg lg:max-w-md">
              <div className="relative block w-full bg-white rounded-lg overflow-hidden">
                <div className="h-96 bg-gradient-to-br from-blue-100 to-orange-100 flex items-center justify-center">
                  {/* Hero Dashboard Visualization */}
                  <div className="w-full max-w-sm p-6">
                    <div className="bg-white rounded-xl shadow-lg p-6 space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg"></div>
                        <div className="flex space-x-2">
                          <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                          <div className="w-3 h-3 bg-orange-500 rounded-full animate-pulse delay-75"></div>
                          <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse delay-150"></div>
                        </div>
                      </div>
                      
                      <div className="space-y-3">
                        <div className="bg-gray-100 h-4 rounded-full overflow-hidden">
                          <div className="bg-gradient-to-r from-blue-600 to-blue-700 h-full w-3/4 rounded-full animate-pulse"></div>
                        </div>
                        <div className="bg-gray-100 h-4 rounded-full overflow-hidden">
                          <div className="bg-gradient-to-r from-orange-500 to-orange-600 h-full w-1/2 rounded-full animate-pulse delay-300"></div>
                        </div>
                        <div className="bg-gray-100 h-4 rounded-full overflow-hidden">
                          <div className="bg-gradient-to-r from-green-500 to-green-600 h-full w-5/6 rounded-full animate-pulse delay-500"></div>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-4 pt-4">
                        <div className="bg-blue-50 p-3 rounded-lg text-center">
                          <div className="text-2xl font-bold text-blue-600">90%</div>
                          <div className="text-xs text-blue-600">Efficiency</div>
                        </div>
                        <div className="bg-orange-50 p-3 rounded-lg text-center">
                          <div className="text-2xl font-bold text-orange-600">3x</div>
                          <div className="text-xs text-orange-600">Faster</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;