import React, { useState } from 'react';
import { Check, Star, ArrowRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Pricing = () => {
  const { t } = useLanguage();
  const [isYearly, setIsYearly] = useState(false);

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const plans = [
    {
      name: t('pricing.starter.title'),
      monthlyPrice: 59.99,
      yearlyPrice: 49.99,
      features: [
        'Telegram AI Assistant',
        'Up to 40 employees',
        '20 monthly reports',
        'Salary calculations',
        '5 manager controls',
        'Basic attendance tracking',
      ],
      cta: t('pricing.starter.cta'),
      popular: false,
    },
    {
      name: t('pricing.professional.title'),
      monthlyPrice: 69.99,
      yearlyPrice: 57.99,
      features: [
        'Everything in Starter',
        'Up to 90 users',
        '40 monthly reports',
        '7 manager controls',
        'Advanced reporting',
        'Priority support',
      ],
      cta: t('pricing.professional.cta'),
      popular: true,
    },
    {
      name: t('pricing.enterprise.title'),
      monthlyPrice: 109.99,
      yearlyPrice: 90.99,
      features: [
        'Everything in Professional',
        'Up to 100 users',
        'AI Recruitment Assistant',
        '50 monthly reports',
        '5 monthly recruitments',
        'Employee training modules',
        'Automatic contract signing',
        'Employee notifications',
      ],
      cta: t('pricing.enterprise.cta'),
      popular: false,
    },
    {
      name: t('pricing.custom.title'),
      monthlyPrice: null,
      yearlyPrice: null,
      features: [
        'Unlimited employees',
        'Custom integrations',
        'Dedicated support',
        'Advanced analytics',
        'White-label solution',
        '24/7 priority support',
      ],
      cta: t('pricing.custom.cta'),
      popular: false,
      isCustom: true,
    },
  ];

  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t('pricing.title')}
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Choose the perfect plan for your business needs
          </p>
          
          {/* Pricing Toggle */}
          <div className="flex items-center justify-center space-x-4">
            <span className={`text-sm font-medium ${!isYearly ? 'text-blue-600' : 'text-gray-500'}`}>
              {t('pricing.monthly')}
            </span>
            <button
              onClick={() => setIsYearly(!isYearly)}
              className="relative inline-flex h-6 w-11 items-center rounded-full bg-gray-200 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              style={{ backgroundColor: isYearly ? '#2563eb' : '#e5e7eb' }}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  isYearly ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
            <span className={`text-sm font-medium ${isYearly ? 'text-blue-600' : 'text-gray-500'}`}>
              {t('pricing.yearly')}
            </span>
            {isYearly && (
              <span className="ml-2 inline-flex items-center rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-800">
                Save 20%
              </span>
            )}
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-2xl border-2 transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1 ${
                plan.popular
                  ? 'border-blue-500 shadow-lg'
                  : 'border-gray-200 hover:border-blue-300'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-2 rounded-full text-sm font-semibold flex items-center">
                    <Star className="w-4 h-4 mr-2" />
                    {t('pricing.professional.popular')}
                  </div>
                </div>
              )}

              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                
                <div className="mb-6">
                  {plan.isCustom ? (
                    <div className="flex items-baseline">
                      <span className="text-3xl font-bold text-gray-900">
                        Contact for Pricing
                      </span>
                    </div>
                  ) : (
                    <>
                      <div className="flex items-baseline">
                        <span className="text-4xl font-bold text-gray-900">
                          ${isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                        </span>
                        <span className="text-gray-600 ml-2">
                          /{isYearly ? 'month (billed yearly)' : 'month'}
                        </span>
                      </div>
                      {isYearly && (
                        <div className="text-sm text-green-600 font-medium mt-1">
                          Save ${((plan.monthlyPrice - plan.yearlyPrice) * 12).toFixed(0)}/year
                        </div>
                      )}
                    </>
                  )}
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={scrollToContact}
                  className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-200 flex items-center justify-center ${
                    plan.popular || plan.isCustom
                      ? 'bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shadow-md hover:shadow-lg'
                      : 'bg-gray-100 hover:bg-gray-200 text-gray-900'
                  }`}
                >
                  {plan.cta}
                  <ArrowRight className="ml-2 w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;