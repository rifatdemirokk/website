import React, { useState } from 'react';
import { ChevronDown, Search, HelpCircle, Shield, CreditCard, Settings, Zap } from 'lucide-react';

const FAQPage = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Questions', icon: <HelpCircle className="w-5 h-5" /> },
    { id: 'general', label: 'General', icon: <HelpCircle className="w-5 h-5" /> },
    { id: 'pricing', label: 'Pricing & Plans', icon: <CreditCard className="w-5 h-5" /> },
    { id: 'technical', label: 'Technical Support', icon: <Settings className="w-5 h-5" /> },
    { id: 'security', label: 'Security & Privacy', icon: <Shield className="w-5 h-5" /> },
    { id: 'features', label: 'Features', icon: <Zap className="w-5 h-5" /> },
  ];

  const faqs = [
    {
      id: 1,
      category: 'general',
      question: 'What is UpOne and how does it work?',
      answer: 'UpOne is an AI-powered HR automation platform that streamlines attendance tracking, leave management, recruitment, and other HR processes. Our intelligent Telegram bot and web dashboard work together to automate routine HR tasks, saving you time and reducing errors.',
    },
    {
      id: 2,
      category: 'general',
      question: 'Which industries can benefit from UpOne?',
      answer: 'UpOne is designed for various industries including manufacturing, hospitality, retail, technology startups, and any business with employees. Our solutions are particularly effective for companies with 20-500 employees looking to automate their HR operations.',
    },
    {
      id: 3,
      category: 'pricing',
      question: 'How does your pricing work?',
      answer: 'We offer flexible pricing plans based on the number of employees and features needed. Our plans start at $49.99/month (billed yearly) for up to 40 employees. We also offer monthly billing and custom enterprise solutions for larger organizations.',
    },
    {
      id: 4,
      category: 'pricing',
      question: 'Is there a free trial available?',
      answer: 'We offer personalized demos and consultations to help you understand how UpOne can benefit your organization. Contact our sales team to schedule a demo and discuss your specific needs.',
    },
    {
      id: 5,
      category: 'pricing',
      question: 'Can I upgrade or downgrade my plan?',
      answer: 'Yes, you can change your plan at any time. Upgrades take effect immediately, while downgrades take effect at the next billing cycle. Our customer success team will help you choose the right plan for your needs.',
    },
    {
      id: 6,
      category: 'technical',
      question: 'How do I integrate UpOne with my existing systems?',
      answer: 'UpOne offers APIs and integrations with popular HR, payroll, and business management systems. Our technical team provides full setup support and can create custom integrations if needed. Most integrations can be completed within 1-2 weeks.',
    },
    {
      id: 7,
      category: 'technical',
      question: 'What kind of support do you provide?',
      answer: 'We provide 24/7 customer support through multiple channels including email, chat, and phone. Our support team includes technical specialists who can help with setup, troubleshooting, and optimization of your UpOne implementation.',
    },
    {
      id: 8,
      category: 'technical',
      question: 'How long does it take to set up UpOne?',
      answer: 'Basic setup can be completed in 1-2 days. Full implementation with custom configurations and integrations typically takes 1-2 weeks. Our onboarding team guides you through every step of the process.',
    },
    {
      id: 9,
      category: 'security',
      question: 'How secure is my data with UpOne?',
      answer: 'We take data security very seriously. UpOne uses enterprise-grade encryption, secure cloud infrastructure, and follows industry best practices for data protection. We are compliant with GDPR, SOC 2, and other major security standards.',
    },
    {
      id: 10,
      category: 'security',
      question: 'Where is my data stored?',
      answer: 'Your data is stored in secure, encrypted cloud servers with multiple backup locations. We use leading cloud providers with 99.9% uptime guarantees and maintain data centers in multiple regions for redundancy.',
    },
    {
      id: 11,
      category: 'security',
      question: 'Who has access to my company data?',
      answer: 'Only authorized personnel within your organization have access to your data. UpOne employees have limited access only when necessary for support purposes and with your explicit permission. All access is logged and monitored.',
    },
    {
      id: 12,
      category: 'features',
      question: 'How does the AI attendance bot work?',
      answer: 'Our AI Telegram bot uses location-based tracking and intelligent algorithms to automatically record employee attendance. Employees simply interact with the bot to clock in/out, request leave, or check their schedules. The system handles complex scenarios like shift work and overtime automatically.',
    },
    {
      id: 13,
      category: 'features',
      question: 'Can UpOne handle different shift patterns?',
      answer: 'Yes, UpOne supports flexible shift patterns, rotating schedules, part-time work, and complex overtime rules. You can configure custom shift patterns for different departments or employee groups.',
    },
    {
      id: 14,
      category: 'features',
      question: 'Does UpOne work for remote employees?',
      answer: 'Absolutely! UpOne is designed to work seamlessly with remote, hybrid, and on-site employees. Our system can track work hours, manage virtual attendance, and handle different time zones automatically.',
    },
    {
      id: 15,
      category: 'features',
      question: 'How accurate is the AI recruitment assistant?',
      answer: 'Our AI recruitment assistant has a 95% accuracy rate in CV screening and candidate matching. It continuously learns from your hiring decisions to improve recommendations and can significantly reduce time-to-hire while improving candidate quality.',
    },
  ];

  const toggleItem = (id: number) => {
    setOpenItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  const filteredFaqs = faqs.filter(faq => {
    const matchesCategory = selectedCategory === 'all' || faq.category === selectedCategory;
    const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Frequently Asked <span className="bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent">Questions</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Find answers to common questions about UpOne's AI-powered HR solutions. 
              Can't find what you're looking for? Contact our support team.
            </p>
          </div>
        </div>
      </section>

      {/* Search and Categories */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Search */}
          <div className="relative mb-8">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search frequently asked questions..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg"
            />
          </div>

          {/* Categories */}
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === category.id
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.icon}
                <span className="ml-2">{category.label}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Items */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4">
            {filteredFaqs.map((faq) => (
              <div key={faq.id} className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                <button
                  onClick={() => toggleItem(faq.id)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <h3 className="text-lg font-semibold text-gray-900 pr-4">
                    {faq.question}
                  </h3>
                  <ChevronDown
                    className={`w-5 h-5 text-gray-500 transition-transform flex-shrink-0 ${
                      openItems.includes(faq.id) ? 'transform rotate-180' : ''
                    }`}
                  />
                </button>
                {openItems.includes(faq.id) && (
                  <div className="px-6 pb-4">
                    <div className="border-t pt-4">
                      <p className="text-gray-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {filteredFaqs.length === 0 && (
            <div className="text-center py-12">
              <div className="text-gray-400 mb-4">
                <Search className="w-16 h-16 mx-auto" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No questions found</h3>
              <p className="text-gray-600">Try adjusting your search terms or category filter.</p>
            </div>
          )}
        </div>
      </section>

      {/* Contact Support */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Still have questions?</h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            Our support team is here to help. Get in touch and we'll respond as quickly as possible.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Contact Support
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
              Schedule Demo
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQPage;