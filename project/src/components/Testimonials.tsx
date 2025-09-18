import React from 'react';
import { Star, Quote } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Testimonials = () => {
  const { t, language } = useLanguage();

  const testimonials = [
    {
      en: {
        name: 'Sarah Johnson',
        company: 'TechStart Inc.',
        role: 'HR Director',
        content: 'UpOne transformed our HR operations completely. The AI attendance bot saved us 15 hours per week, and the recruitment assistant helped us hire 40% faster.',
        rating: 5,
      },
      tr: {
        name: 'Mehmet Yılmaz',
        company: 'İnova Tekstil',
        role: 'İK Müdürü',
        content: 'UpOne İK operasyonlarımızı tamamen dönüştürdü. AI devam botu haftada 15 saat tasarruf ettirdi ve işe alım asistanı %40 daha hızlı işe alım yapmamızı sağladı.',
        rating: 5,
      },
    },
    {
      en: {
        name: 'Michael Chen',
        company: 'Grand Plaza Hotel',
        role: 'Operations Manager',
        content: 'Managing 200+ employees across shifts was a nightmare until UpOne. Now everything is automated and we have real-time insights into our workforce.',
        rating: 5,
      },
      tr: {
        name: 'Ayşe Demir',
        company: 'Büyük Otel Zinciri',
        role: 'Operasyon Müdürü',
        content: 'Vardiyalar arasında 200+ çalışanı yönetmek UpOne\'dan önce bir kabusdu. Şimdi her şey otomatik ve iş gücümüz hakkında gerçek zamanlı görüşlerimiz var.',
        rating: 5,
      },
    },
    {
      en: {
        name: 'Lisa Rodriguez',
        company: 'Steel Works Manufacturing',
        role: 'Plant Manager',
        content: 'The location-based attendance tracking is perfect for our industrial environment. No more buddy punching, and payroll accuracy improved dramatically.',
        rating: 5,
      },
      tr: {
        name: 'Fatma Kaya',
        company: 'Çelik İmalat Sanayi',
        role: 'Tesis Müdürü',
        content: 'Konum tabanlı devam takibi endüstriyel ortamımız için mükemmel. Artık sahte puantaj yok ve bordro doğruluğu önemli ölçüde arttı.',
        rating: 5,
      },
    },
  ];

  const currentTestimonials = testimonials.map(testimonial => testimonial[language]);

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t('testimonials.title')}
          </h2>
          <p className="text-xl text-gray-600">
            See what industry leaders say about UpOne
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {currentTestimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 relative"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 text-blue-100">
                <Quote className="w-8 h-8" />
              </div>

              {/* Stars */}
              <div className="flex mb-6">
                {[...Array(testimonial.rating)].map((_, starIndex) => (
                  <Star key={starIndex} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Content */}
              <p className="text-gray-700 leading-relaxed mb-6 italic">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="border-t pt-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-gray-600 text-sm">{testimonial.role}</p>
                    <p className="text-blue-600 text-sm font-medium">{testimonial.company}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Badges */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-8">Trusted by leading companies worldwide</p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {/* Placeholder company logos */}
            <div className="bg-gray-200 px-8 py-4 rounded-lg">TechCorp</div>
            <div className="bg-gray-200 px-8 py-4 rounded-lg">IndustrialCo</div>
            <div className="bg-gray-200 px-8 py-4 rounded-lg">HotelGroup</div>
            <div className="bg-gray-200 px-8 py-4 rounded-lg">StartupHub</div>
            <div className="bg-gray-200 px-8 py-4 rounded-lg">ManufacturingInc</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;