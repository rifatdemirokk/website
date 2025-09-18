import React from 'react';
import { Shield, Clock, Zap, Globe, Award } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const WhyChooseUs = () => {
  const { t } = useLanguage();

  const reasons = [
    {
      icon: <Award className="w-8 h-8" />,
      title: t('why.trusted'),
      color: 'blue',
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: t('why.support'),
      color: 'orange',
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: t('why.security'),
      color: 'green',
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: t('why.integration'),
      color: 'purple',
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: t('why.multilingual'),
      color: 'indigo',
    },
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'blue':
        return 'bg-blue-100 text-blue-600 group-hover:bg-blue-600 group-hover:text-white';
      case 'orange':
        return 'bg-orange-100 text-orange-600 group-hover:bg-orange-600 group-hover:text-white';
      case 'green':
        return 'bg-green-100 text-green-600 group-hover:bg-green-600 group-hover:text-white';
      case 'purple':
        return 'bg-purple-100 text-purple-600 group-hover:bg-purple-600 group-hover:text-white';
      case 'indigo':
        return 'bg-indigo-100 text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white';
      default:
        return 'bg-gray-100 text-gray-600 group-hover:bg-gray-600 group-hover:text-white';
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Choose UpOne?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join thousands of companies worldwide who trust UpOne for their HR automation needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="group bg-white rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className={`${getColorClasses(reason.color)} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 transition-all duration-300`}>
                {reason.icon}
              </div>
              <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                {reason.title}
              </h3>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
              500+
            </div>
            <div className="text-gray-600 font-medium">Companies</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
              90%
            </div>
            <div className="text-gray-600 font-medium">Efficiency Gain</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold bg-gradient-to-r from-green-500 to-green-600 bg-clip-text text-transparent">
              24/7
            </div>
            <div className="text-gray-600 font-medium">Support</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold bg-gradient-to-r from-purple-500 to-purple-600 bg-clip-text text-transparent">
              3x
            </div>
            <div className="text-gray-600 font-medium">Faster Hiring</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;