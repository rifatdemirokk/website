import React from 'react';
import { Clock, Users, Settings, Brain, TrendingUp, Shield } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Features = () => {
  const { t } = useLanguage();

  const features = [
    {
      icon: <Clock className="w-8 h-8" />,
      title: t('features.attendance.title'),
      description: t('features.attendance.desc'),
      benefit: t('features.attendance.benefit'),
      color: 'blue',
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: t('features.recruitment.title'),
      description: t('features.recruitment.desc'),
      benefit: t('features.recruitment.benefit'),
      color: 'orange',
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: t('features.automation.title'),
      description: t('features.automation.desc'),
      benefit: t('features.automation.benefit'),
      color: 'green',
    },
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'blue':
        return {
          iconBg: 'bg-blue-100 text-blue-600',
          accentBorder: 'border-l-blue-500',
          benefitText: 'text-blue-700',
          benefitBg: 'bg-blue-50',
        };
      case 'orange':
        return {
          iconBg: 'bg-orange-100 text-orange-600',
          accentBorder: 'border-l-orange-500',
          benefitText: 'text-orange-700',
          benefitBg: 'bg-orange-50',
        };
      case 'green':
        return {
          iconBg: 'bg-green-100 text-green-600',
          accentBorder: 'border-l-green-500',
          benefitText: 'text-green-700',
          benefitBg: 'bg-green-50',
        };
      default:
        return {
          iconBg: 'bg-gray-100 text-gray-600',
          accentBorder: 'border-l-gray-500',
          benefitText: 'text-gray-700',
          benefitBg: 'bg-gray-50',
        };
    }
  };

  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t('features.title')}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-orange-500 mx-auto rounded-full"></div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {features.map((feature, index) => {
            const colorClasses = getColorClasses(feature.color);
            return (
              <div
                key={index}
                className="group relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
              >
                <div className={`absolute left-0 top-0 bottom-0 w-1 rounded-l-2xl ${colorClasses.accentBorder}`}></div>
                
                <div className="p-8">
                  {/* Icon */}
                  <div className={`${colorClasses.iconBg} w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    {feature.icon}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {feature.description}
                  </p>

                  {/* Benefit Badge */}
                  <div className={`${colorClasses.benefitBg} rounded-lg p-4 border-l-4 ${colorClasses.accentBorder}`}>
                    <div className="flex items-start">
                      <TrendingUp className={`${colorClasses.benefitText} w-5 h-5 mr-3 mt-0.5 flex-shrink-0`} />
                      <span className={`${colorClasses.benefitText} font-semibold text-sm`}>
                        {feature.benefit}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* AI Badge */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center bg-gradient-to-r from-blue-50 to-orange-50 border border-blue-200 rounded-full px-6 py-3">
            <Brain className="w-6 h-6 text-blue-600 mr-3" />
            <span className="text-blue-800 font-semibold">Powered by Advanced AI Technology</span>
            <Shield className="w-6 h-6 text-orange-600 ml-3" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;