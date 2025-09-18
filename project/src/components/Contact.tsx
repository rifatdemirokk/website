import React, { useState } from 'react';
import { Send, MessageCircle, Mail, MapPin, Phone } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Contact = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Create mailto link with form data
    const subject = encodeURIComponent(`Contact from ${formData.name} - ${formData.company}`);
    const body = encodeURIComponent(`
Name: ${formData.name}
Company: ${formData.company}
Email: ${formData.email}
Phone: ${formData.phone}

Message:
${formData.message}
    `);
    
    window.location.href = `mailto:info.uponehr@gmail.com?subject=${subject}&body=${body}`;
    
    // Reset form
    setFormData({ name: '', company: '', email: '', phone: '', message: '' });
    alert('Thank you for your message! Your email client will open to send the message.');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const openWhatsApp = () => {
    window.open('https://wa.me/905436037190', '_blank');
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t('contact.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('contact.subtitle')}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Get In Touch</h3>
            
            <div className="space-y-6">
              {/* WhatsApp */}
              <div className="flex items-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <div className="bg-green-100 p-3 rounded-lg mr-4">
                  <MessageCircle className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">{t('contact.whatsapp')}</h4>
                  <p className="text-gray-600">+905436037190</p>
                  <button
                    onClick={openWhatsApp}
                    className="text-green-600 hover:text-green-700 font-medium mt-1 hover:underline"
                  >
                    Start Chat →
                  </button>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <div className="bg-blue-100 p-3 rounded-lg mr-4">
                  <Mail className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">{t('contact.email.label')}</h4>
                  <p className="text-gray-600">hello@upone.ai</p>
                  <a
                    href="mailto:hello@upone.ai"
                    className="text-blue-600 hover:text-blue-700 font-medium mt-1 hover:underline"
                  >
                    Send Email →
                  </a>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <div className="bg-orange-100 p-3 rounded-lg mr-4">
                  <MapPin className="w-6 h-6 text-orange-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Office Location</h4>
                  <p className="text-gray-600">{t('contact.address')}</p>
                </div>
              </div>
            </div>

            {/* CTA Banner */}
            <div className="mt-8 bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl p-6 text-white">
              <h4 className="font-bold text-lg mb-2">Ready to Get Started?</h4>
              <p className="mb-4">Join 500+ companies already using UpOne to transform their HR operations.</p>
              <button
                onClick={openWhatsApp}
                className="bg-white text-blue-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Start Free Trial
              </button>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Send us a message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    {t('contact.name')} *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                    {t('contact.company')} *
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    required
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="Company Name"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    {t('contact.email')} *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="john@company.com"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    {t('contact.phone')}
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  {t('contact.message')} *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                  placeholder="Tell us about your HR needs and how we can help..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white py-4 px-6 rounded-lg font-semibold flex items-center justify-center transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <Send className="w-5 h-5 mr-2" />
                {t('contact.send')}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;