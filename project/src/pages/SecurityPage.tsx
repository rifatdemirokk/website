import React from 'react';
import { Shield, Lock, Eye, Server, CheckCircle, AlertTriangle } from 'lucide-react';

const SecurityPage = () => {
  const securityFeatures = [
    {
      icon: <Lock className="w-8 h-8" />,
      title: 'End-to-End Encryption',
      description: 'All data is encrypted in transit and at rest using AES-256 encryption standards.',
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Multi-Factor Authentication',
      description: 'Enhanced account security with SMS, email, and authenticator app options.',
    },
    {
      icon: <Server className="w-8 h-8" />,
      title: 'Secure Infrastructure',
      description: 'Hosted on enterprise-grade cloud infrastructure with 99.9% uptime guarantee.',
    },
    {
      icon: <Eye className="w-8 h-8" />,
      title: 'Access Controls',
      description: 'Role-based permissions and audit logs for all system access and changes.',
    },
  ];

  const certifications = [
    {
      name: 'SOC 2 Type II',
      description: 'Audited security controls for availability, confidentiality, and privacy',
      status: 'Certified',
    },
    {
      name: 'ISO 27001',
      description: 'International standard for information security management systems',
      status: 'In Progress',
    },
    {
      name: 'GDPR Compliant',
      description: 'Full compliance with European data protection regulations',
      status: 'Certified',
    },
    {
      name: 'CCPA Compliant',
      description: 'California Consumer Privacy Act compliance for US customers',
      status: 'Certified',
    },
  ];

  const securityPractices = [
    'Regular security audits and penetration testing',
    'Automated vulnerability scanning and monitoring',
    'Employee security training and background checks',
    'Incident response plan with 24/7 monitoring',
    'Data backup and disaster recovery procedures',
    'Secure development lifecycle (SDLC) practices',
    'Third-party security assessments',
    'Continuous compliance monitoring',
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Security & <span className="bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent">Compliance</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Your data security is our top priority. Learn about our comprehensive security measures, 
              compliance certifications, and commitment to protecting your sensitive information.
            </p>
            <div className="flex justify-center space-x-8 text-sm text-gray-500">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">99.9%</div>
                <div>Uptime SLA</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600">256-bit</div>
                <div>AES Encryption</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-600">24/7</div>
                <div>Security Monitoring</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Security Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Enterprise-Grade Security Features</h2>
            <p className="text-xl text-gray-600">
              Comprehensive security measures designed to protect your most sensitive data
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {securityFeatures.map((feature, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="bg-blue-100 w-16 h-16 rounded-xl flex items-center justify-center mb-4 text-blue-600">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Certifications */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Compliance & Certifications</h2>
            <p className="text-xl text-gray-600">
              We maintain the highest standards of compliance with industry regulations
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-bold text-gray-900">{cert.name}</h3>
                  <div className={`flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                    cert.status === 'Certified' 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-orange-100 text-orange-800'
                  }`}>
                    {cert.status === 'Certified' ? (
                      <CheckCircle className="w-4 h-4 mr-1" />
                    ) : (
                      <AlertTriangle className="w-4 h-4 mr-1" />
                    )}
                    {cert.status}
                  </div>
                </div>
                <p className="text-gray-600">{cert.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Practices */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Security Practices</h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                We implement a comprehensive security program that covers every aspect of our operations, 
                from development to deployment and ongoing monitoring. Our security practices are continuously 
                updated to address emerging threats and maintain the highest level of protection.
              </p>
              <div className="space-y-3">
                {securityPractices.map((practice, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{practice}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-100 to-orange-100 rounded-2xl p-8">
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Security Incident Response</h3>
                <p className="text-gray-600 mb-6">
                  Our dedicated security team monitors systems 24/7 and maintains a comprehensive 
                  incident response plan to quickly address any security concerns.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                      <span className="text-blue-600 font-bold text-sm">1</span>
                    </div>
                    <span className="text-gray-700">Immediate threat detection and isolation</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                      <span className="text-blue-600 font-bold text-sm">2</span>
                    </div>
                    <span className="text-gray-700">Rapid response and containment</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                      <span className="text-blue-600 font-bold text-sm">3</span>
                    </div>
                    <span className="text-gray-700">Customer notification and remediation</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Data Protection */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Data Protection & Privacy</h2>
            <p className="text-xl text-gray-600">
              Your data is protected at every level with industry-leading security measures
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-lg text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Lock className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Data Encryption</h3>
              <p className="text-gray-600">
                All data is encrypted using AES-256 encryption both in transit and at rest, 
                ensuring your information remains secure at all times.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Server className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Secure Infrastructure</h3>
              <p className="text-gray-600">
                Our infrastructure is hosted on enterprise-grade cloud platforms with 
                multiple layers of security and redundancy.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Eye className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Access Control</h3>
              <p className="text-gray-600">
                Strict access controls and audit logs ensure only authorized personnel 
                can access your data when necessary.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Security Contact */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Security Questions or Concerns?</h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            Our security team is available to address any questions about our security practices, 
            compliance certifications, or to report security issues.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Contact Security Team
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
              Report Security Issue
            </button>
          </div>
          <div className="mt-8 text-blue-100 text-sm">
            <p>Security Email: security@upone.ai | Emergency: +905436037190</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SecurityPage;