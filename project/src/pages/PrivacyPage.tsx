import React from 'react';
import { Calendar, Shield, Eye, Lock, Database, Users } from 'lucide-react';

const PrivacyPage = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-orange-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Privacy <span className="bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent">Policy</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Your privacy is important to us. This policy explains how we collect, use, and protect your information.
            </p>
            <div className="flex items-center justify-center text-sm text-gray-500">
              <Calendar className="w-4 h-4 mr-2" />
              <span>Last updated: January 15, 2025</span>
            </div>
          </div>
        </div>
      </section>

      {/* Privacy Overview */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Data Protection</h3>
              <p className="text-gray-600 text-sm">Enterprise-grade security measures protect your sensitive information</p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Eye className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Transparency</h3>
              <p className="text-gray-600 text-sm">Clear information about what data we collect and how we use it</p>
            </div>
            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Your Rights</h3>
              <p className="text-gray-600 text-sm">Full control over your personal data with easy access and deletion options</p>
            </div>
          </div>

          <div className="prose prose-lg max-w-none">
            <div className="space-y-8">
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Information We Collect</h2>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Personal Information</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  We collect information you provide directly to us, including:
                </p>
                <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-6">
                  <li>Name, email address, and contact information</li>
                  <li>Company information and job title</li>
                  <li>Account credentials and profile information</li>
                  <li>Payment and billing information</li>
                  <li>Communications with our support team</li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-900 mb-3">Employee Data</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  When you use our HR services, we may process employee data including:
                </p>
                <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-6">
                  <li>Employee names, contact details, and identification numbers</li>
                  <li>Attendance records and work schedules</li>
                  <li>Leave requests and approval records</li>
                  <li>Performance data and evaluation records</li>
                  <li>Recruitment and candidate information</li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-900 mb-3">Technical Information</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  We automatically collect certain technical information:
                </p>
                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                  <li>IP addresses and device information</li>
                  <li>Browser type and operating system</li>
                  <li>Usage patterns and feature interactions</li>
                  <li>Location data (when explicitly permitted)</li>
                  <li>Cookies and similar tracking technologies</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">2. How We Use Your Information</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  We use the collected information for the following purposes:
                </p>
                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                  <li>Providing and maintaining our HR automation services</li>
                  <li>Processing attendance, leave, and payroll data</li>
                  <li>Facilitating recruitment and candidate management</li>
                  <li>Generating reports and analytics</li>
                  <li>Communicating with you about our services</li>
                  <li>Providing customer support and technical assistance</li>
                  <li>Improving our services and developing new features</li>
                  <li>Ensuring security and preventing fraud</li>
                  <li>Complying with legal obligations</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Information Sharing and Disclosure</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  We do not sell, trade, or rent your personal information. We may share information in the following circumstances:
                </p>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Service Providers</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  We may share information with trusted third-party service providers who assist us in operating our platform, 
                  such as cloud hosting providers, payment processors, and analytics services.
                </p>

                <h3 className="text-xl font-semibold text-gray-900 mb-3">Legal Requirements</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  We may disclose information when required by law, court order, or government request, or to protect 
                  our rights, property, or safety.
                </p>

                <h3 className="text-xl font-semibold text-gray-900 mb-3">Business Transfers</h3>
                <p className="text-gray-600 leading-relaxed">
                  In the event of a merger, acquisition, or sale of assets, your information may be transferred as part 
                  of the transaction, subject to the same privacy protections.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Data Security</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  We implement comprehensive security measures to protect your information:
                </p>
                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                  <li>End-to-end encryption for data transmission and storage</li>
                  <li>Regular security audits and penetration testing</li>
                  <li>Multi-factor authentication and access controls</li>
                  <li>Secure cloud infrastructure with redundant backups</li>
                  <li>Employee training on data protection best practices</li>
                  <li>Compliance with industry security standards (SOC 2, ISO 27001)</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Data Retention</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  We retain your information for as long as necessary to provide our services and comply with legal obligations:
                </p>
                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                  <li>Account information: Retained while your account is active</li>
                  <li>Employee data: Retained according to your company's retention policies</li>
                  <li>Financial records: Retained for 7 years for tax and audit purposes</li>
                  <li>Support communications: Retained for 3 years</li>
                  <li>Analytics data: Aggregated and anonymized after 2 years</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Your Privacy Rights</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  You have the following rights regarding your personal information:
                </p>
                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                  <li><strong>Access:</strong> Request a copy of your personal data</li>
                  <li><strong>Correction:</strong> Update or correct inaccurate information</li>
                  <li><strong>Deletion:</strong> Request deletion of your personal data</li>
                  <li><strong>Portability:</strong> Export your data in a machine-readable format</li>
                  <li><strong>Restriction:</strong> Limit how we process your information</li>
                  <li><strong>Objection:</strong> Object to certain types of processing</li>
                  <li><strong>Withdrawal:</strong> Withdraw consent for data processing</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Cookies and Tracking</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  We use cookies and similar technologies to enhance your experience:
                </p>
                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                  <li><strong>Essential cookies:</strong> Required for basic functionality</li>
                  <li><strong>Analytics cookies:</strong> Help us understand usage patterns</li>
                  <li><strong>Preference cookies:</strong> Remember your settings and preferences</li>
                  <li><strong>Marketing cookies:</strong> Deliver relevant content and advertisements</li>
                </ul>
                <p className="text-gray-600 leading-relaxed mt-4">
                  You can control cookie settings through your browser preferences or our cookie management tool.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">8. International Data Transfers</h2>
                <p className="text-gray-600 leading-relaxed">
                  Your information may be processed in countries other than your own. We ensure appropriate safeguards 
                  are in place, including standard contractual clauses and adequacy decisions, to protect your data 
                  during international transfers.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Children's Privacy</h2>
                <p className="text-gray-600 leading-relaxed">
                  Our services are not intended for individuals under 16 years of age. We do not knowingly collect 
                  personal information from children under 16. If we become aware of such collection, we will take 
                  steps to delete the information promptly.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Changes to This Policy</h2>
                <p className="text-gray-600 leading-relaxed">
                  We may update this Privacy Policy periodically to reflect changes in our practices or legal requirements. 
                  We will notify you of significant changes via email or through our platform. The updated policy will 
                  be effective when posted.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Contact Us</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  If you have questions about this Privacy Policy or want to exercise your privacy rights, contact us:
                </p>
                <div className="bg-gray-50 rounded-lg p-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">General Inquiries</h4>
                      <ul className="text-gray-600 space-y-1">
                        <li><strong>Email:</strong> info.uponehr@gmail.com</li>
                        <li><strong>WhatsApp:</strong> +905436037190</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Data Protection Officer</h4>
                      <ul className="text-gray-600 space-y-1">
                        <li><strong>Email:</strong> privacy@upone.ai</li>
                        <li><strong>Address:</strong> Istanbul, Turkey</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <Lock className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Questions about your privacy?</h2>
            <p className="text-gray-600 mb-6">
              Our privacy team is here to help you understand how we protect your data and exercise your rights.
            </p>
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
              Contact Privacy Team
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPage;