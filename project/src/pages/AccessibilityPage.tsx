import React from 'react';
import { Eye, Ear, Hand, Brain, CheckCircle, Mail } from 'lucide-react';

const AccessibilityPage = () => {
  const accessibilityFeatures = [
    {
      icon: <Eye className="w-8 h-8" />,
      title: 'Visual Accessibility',
      features: [
        'High contrast color schemes',
        'Scalable fonts and UI elements',
        'Screen reader compatibility',
        'Alternative text for images',
        'Focus indicators for navigation',
      ],
    },
    {
      icon: <Ear className="w-8 h-8" />,
      title: 'Auditory Accessibility',
      features: [
        'Visual alerts and notifications',
        'Captions for video content',
        'Text alternatives for audio',
        'Adjustable notification sounds',
        'Silent mode options',
      ],
    },
    {
      icon: <Hand className="w-8 h-8" />,
      title: 'Motor Accessibility',
      features: [
        'Keyboard navigation support',
        'Large clickable areas',
        'Drag and drop alternatives',
        'Customizable interface layouts',
        'Voice command integration',
      ],
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: 'Cognitive Accessibility',
      features: [
        'Clear and simple language',
        'Consistent navigation patterns',
        'Progress indicators',
        'Error prevention and recovery',
        'Customizable complexity levels',
      ],
    },
  ];

  const wcagCompliance = [
    {
      level: 'WCAG 2.1 AA',
      status: 'Compliant',
      description: 'Meets international accessibility standards for web content',
    },
    {
      level: 'Section 508',
      status: 'Compliant',
      description: 'Complies with US federal accessibility requirements',
    },
    {
      level: 'ADA Compliance',
      status: 'Compliant',
      description: 'Follows Americans with Disabilities Act guidelines',
    },
    {
      level: 'EN 301 549',
      status: 'In Progress',
      description: 'European accessibility standard for ICT products',
    },
  ];

  const assistiveTechnologies = [
    'JAWS (Job Access With Speech)',
    'NVDA (NonVisual Desktop Access)',
    'VoiceOver (macOS and iOS)',
    'TalkBack (Android)',
    'Dragon NaturallySpeaking',
    'Switch Control devices',
    'Eye-tracking systems',
    'Voice recognition software',
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Accessibility <span className="bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent">Statement</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              UpOne is committed to ensuring digital accessibility for people with disabilities. 
              We continually improve the user experience for everyone and apply relevant accessibility standards.
            </p>
            <div className="inline-flex items-center bg-green-100 text-green-800 px-6 py-3 rounded-full font-semibold">
              <CheckCircle className="w-5 h-5 mr-2" />
              WCAG 2.1 AA Compliant
            </div>
          </div>
        </div>
      </section>

      {/* Our Commitment */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Commitment to Accessibility</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                At UpOne, we believe that technology should be accessible to everyone, regardless of their abilities. 
                Our commitment to accessibility is not just about compliance—it's about creating an inclusive 
                experience that empowers all users to effectively manage their HR operations.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                We follow the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA standards and continuously 
                work to improve the accessibility of our platform through regular audits, user feedback, and 
                collaboration with accessibility experts.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Regular accessibility audits and testing</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">User feedback integration and continuous improvement</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Collaboration with disability advocacy groups</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Staff training on accessibility best practices</span>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-100 to-orange-100 rounded-2xl p-8">
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Accessibility Goals</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                    Ensure all users can navigate and use our platform effectively
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                    Provide multiple ways to access and interact with content
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                    Maintain compatibility with assistive technologies
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                    Continuously improve based on user feedback and standards
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Accessibility Features */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Accessibility Features</h2>
            <p className="text-xl text-gray-600">
              Comprehensive accessibility features designed for users with diverse needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {accessibilityFeatures.map((category, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg">
                <div className="flex items-center mb-4">
                  <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mr-4 text-blue-600">
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{category.title}</h3>
                </div>
                <ul className="space-y-2">
                  {category.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Standards Compliance */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Standards & Compliance</h2>
            <p className="text-xl text-gray-600">
              We adhere to international accessibility standards and guidelines
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {wcagCompliance.map((standard, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-bold text-gray-900">{standard.level}</h3>
                  <div className={`flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                    standard.status === 'Compliant' 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-orange-100 text-orange-800'
                  }`}>
                    {standard.status === 'Compliant' ? (
                      <CheckCircle className="w-4 h-4 mr-1" />
                    ) : (
                      <Eye className="w-4 h-4 mr-1" />
                    )}
                    {standard.status}
                  </div>
                </div>
                <p className="text-gray-600">{standard.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Assistive Technologies */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Assistive Technology Support</h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                UpOne is designed to work seamlessly with a wide range of assistive technologies. 
                We regularly test our platform with popular screen readers, voice recognition software, 
                and other assistive devices to ensure compatibility and optimal user experience.
              </p>
              <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
                <h4 className="font-semibold text-blue-900 mb-3">Testing & Validation</h4>
                <p className="text-blue-800 text-sm">
                  We conduct regular testing with real users who rely on assistive technologies 
                  to ensure our platform meets their needs and expectations.
                </p>
              </div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Supported Technologies</h3>
              <div className="grid grid-cols-1 gap-3">
                {assistiveTechnologies.map((tech, index) => (
                  <div key={index} className="flex items-center p-3 bg-gray-50 rounded-lg">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{tech}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feedback and Support */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Accessibility Feedback & Support</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We welcome your feedback on the accessibility of UpOne. Your input helps us improve 
              and ensure our platform works for everyone.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-blue-50 rounded-xl p-8 border border-blue-200">
              <h3 className="text-xl font-bold text-blue-900 mb-4">Report Accessibility Issues</h3>
              <p className="text-blue-800 mb-6">
                If you encounter any accessibility barriers while using UpOne, please let us know. 
                We are committed to addressing issues promptly and effectively.
              </p>
              <div className="space-y-3 text-blue-800">
                <div className="flex items-center">
                  <Mail className="w-5 h-5 mr-3" />
                  <span>accessibility@upone.ai</span>
                </div>
                <div className="flex items-center">
                  <span className="w-5 h-5 mr-3 text-center">📞</span>
                  <span>+905436037190</span>
                </div>
              </div>
            </div>

            <div className="bg-green-50 rounded-xl p-8 border border-green-200">
              <h3 className="text-xl font-bold text-green-900 mb-4">Accessibility Support</h3>
              <p className="text-green-800 mb-6">
                Our support team is trained to assist users with disabilities and can provide 
                additional guidance on using UpOne with assistive technologies.
              </p>
              <div className="space-y-3 text-green-800">
                <div className="flex items-center">
                  <Mail className="w-5 h-5 mr-3" />
                  <span>support@upone.ai</span>
                </div>
                <div className="flex items-center">
                  <span className="w-5 h-5 mr-3 text-center">💬</span>
                  <span>Live chat available 24/7</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Continuous Improvement */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Continuous Improvement</h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            Accessibility is an ongoing commitment. We regularly update our platform based on user feedback, 
            new technologies, and evolving accessibility standards.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Provide Feedback
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
              Contact Support
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AccessibilityPage;