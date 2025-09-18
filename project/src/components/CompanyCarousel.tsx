import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const CompanyCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const companies = [
    'TechCorp', 'Global Industries', 'Hotel Paradise', 'StartupX', 'Manufacturing Plus',
    'Digital Solutions', 'Enterprise Group', 'Innovation Labs', 'Business Pro',
    'Modern Systems', 'Smart Tech', 'Future Works', 'Advanced Corp', 'Premier Hotels',
    'Industrial Solutions', 'Creative Agency', 'Data Systems', 'Cloud Services',
    'Mobile First', 'AI Innovations', 'Secure Networks', 'Growth Partners'
  ];

  const visibleCompanies = 6; // Number of companies visible at once
  const totalSlides = Math.ceil(companies.length / visibleCompanies);

  useEffect(() => {
    if (isAutoScrolling) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
      }, 3000);
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isAutoScrolling, totalSlides]);

  const handlePrevious = () => {
    setIsAutoScrolling(false);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalSlides) % totalSlides);
    setTimeout(() => setIsAutoScrolling(true), 5000);
  };

  const handleNext = () => {
    setIsAutoScrolling(false);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
    setTimeout(() => setIsAutoScrolling(true), 5000);
  };

  const getVisibleCompanies = () => {
    const startIndex = currentIndex * visibleCompanies;
    const endIndex = startIndex + visibleCompanies;
    return companies.slice(startIndex, endIndex);
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Trusted by Leading Companies Worldwide
          </h2>
          <p className="text-gray-600">
            Join 500+ companies that have transformed their HR operations with UpOne
          </p>
        </div>

        <div className="relative">
          {/* Navigation Arrows */}
          <button
            onClick={handlePrevious}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 z-10 bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-110"
            aria-label="Previous companies"
          >
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </button>

          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 z-10 bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-110"
            aria-label="Next companies"
          >
            <ChevronRight className="w-6 h-6 text-gray-600" />
          </button>

          {/* Company Logos Container */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {Array.from({ length: totalSlides }).map((_, slideIndex) => (
                <div key={slideIndex} className="w-full flex-shrink-0">
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
                    {companies
                      .slice(slideIndex * visibleCompanies, (slideIndex + 1) * visibleCompanies)
                      .map((company, index) => (
                        <div
                          key={`${slideIndex}-${index}`}
                          className="flex items-center justify-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-200 transform hover:scale-105"
                        >
                          <div className="text-center">
                            <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg flex items-center justify-center mb-3 mx-auto">
                              <span className="text-blue-600 font-bold text-lg">
                                {company.charAt(0)}
                              </span>
                            </div>
                            <span className="text-gray-700 font-medium text-sm">
                              {company}
                            </span>
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentIndex(index);
                  setIsAutoScrolling(false);
                  setTimeout(() => setIsAutoScrolling(true), 5000);
                }}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  index === currentIndex
                    ? 'bg-blue-600 scale-110'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Auto-scroll indicator */}
        <div className="text-center mt-6">
          <div className="inline-flex items-center text-sm text-gray-500">
            <div className={`w-2 h-2 rounded-full mr-2 ${isAutoScrolling ? 'bg-green-500 animate-pulse' : 'bg-gray-400'}`}></div>
            {isAutoScrolling ? 'Auto-scrolling active' : 'Auto-scroll paused'}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyCarousel;