import React from 'react';
import { Calendar, Shield, AlertCircle } from 'lucide-react';

const TermsPage = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-orange-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Terms & <span className="bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent">Conditions</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Please read these terms and conditions carefully before using UpOne's services.
            </p>
            <div className="flex items-center justify-center text-sm text-gray-500">
              <Calendar className="w-4 h-4 mr-2" />
              <span>Last updated: January 15, 2025</span>
            </div>
          </div>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            
            {/* Important Notice */}
            <div className="bg-orange-50 border border-orange-200 rounded-lg p-6 mb-8">
              <div className="flex items-start">
                <AlertCircle className="w-6 h-6 text-orange-600 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-orange-800 mb-2">Important Notice</h3>
                  <p className="text-orange-700 mb-0">
                    By accessing and using UpOne's services, you agree to be bound by these Terms and Conditions. 
                    If you do not agree to these terms, please do not use our services.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Acceptance of Terms</h2>
                <p className="text-gray-600 leading-relaxed">
                  These Terms and Conditions ("Terms") govern your use of UpOne's AI-powered HR automation platform 
                  and related services (the "Service") operated by UpOne ("us", "we", or "our"). By accessing or 
                  using our Service, you agree to be bound by these Terms.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Description of Service</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  UpOne provides AI-powered HR automation solutions including but not limited to:
                </p>
                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                  <li>Attendance tracking and management through Telegram bot integration</li>
                  <li>Leave management and approval workflows</li>
                  <li>AI-powered recruitment assistance and candidate screening</li>
                  <li>Automated reporting and analytics</li>
                  <li>Custom HR automation solutions</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">3. User Accounts and Registration</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  To access certain features of our Service, you must create an account. You agree to:
                </p>
                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                  <li>Provide accurate, current, and complete information during registration</li>
                  <li>Maintain and update your account information</li>
                  <li>Keep your account credentials secure and confidential</li>
                  <li>Accept responsibility for all activities under your account</li>
                  <li>Notify us immediately of any unauthorized use of your account</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Acceptable Use Policy</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  You agree not to use the Service to:
                </p>
                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                  <li>Violate any applicable laws or regulations</li>
                  <li>Infringe upon the rights of others</li>
                  <li>Transmit harmful, offensive, or inappropriate content</li>
                  <li>Attempt to gain unauthorized access to our systems</li>
                  <li>Interfere with or disrupt the Service or servers</li>
                  <li>Use the Service for any commercial purpose without authorization</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Subscription and Payment Terms</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Our Service is offered on a subscription basis with the following terms:
                </p>
                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                  <li>Subscription fees are billed in advance on a monthly or annual basis</li>
                  <li>All fees are non-refundable except as required by law</li>
                  <li>We reserve the right to change pricing with 30 days notice</li>
                  <li>Failure to pay may result in service suspension or termination</li>
                  <li>You are responsible for all taxes associated with your subscription</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Data Privacy and Security</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  We take data privacy and security seriously:
                </p>
                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                  <li>Your data is processed according to our Privacy Policy</li>
                  <li>We implement industry-standard security measures</li>
                  <li>You retain ownership of your business data</li>
                  <li>We may use aggregated, anonymized data for service improvement</li>
                  <li>Data backup and recovery procedures are in place</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Intellectual Property Rights</h2>
                <p className="text-gray-600 leading-relaxed">
                  The Service and its original content, features, and functionality are owned by UpOne and are 
                  protected by international copyright, trademark, patent, trade secret, and other intellectual 
                  property laws. You may not copy, modify, distribute, sell, or lease any part of our Service.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Service Availability and Support</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  We strive to provide reliable service with:
                </p>
                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                  <li>99.9% uptime target (excluding scheduled maintenance)</li>
                  <li>24/7 customer support for paid subscribers</li>
                  <li>Regular updates and feature improvements</li>
                  <li>Advance notice of scheduled maintenance when possible</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Limitation of Liability</h2>
                <p className="text-gray-600 leading-relaxed">
                  To the maximum extent permitted by law, UpOne shall not be liable for any indirect, incidental, 
                  special, consequential, or punitive damages, including without limitation, loss of profits, data, 
                  use, goodwill, or other intangible losses, resulting from your use of the Service.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Termination</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Either party may terminate this agreement:
                </p>
                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                  <li>You may cancel your subscription at any time</li>
                  <li>We may terminate for breach of these Terms</li>
                  <li>We may discontinue the Service with 30 days notice</li>
                  <li>Upon termination, your access to the Service will cease</li>
                  <li>Data export options are available before account closure</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Changes to Terms</h2>
                <p className="text-gray-600 leading-relaxed">
                  We reserve the right to modify these Terms at any time. We will notify users of significant 
                  changes via email or through the Service. Continued use of the Service after changes constitutes 
                  acceptance of the new Terms.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Governing Law</h2>
                <p className="text-gray-600 leading-relaxed">
                  These Terms shall be governed by and construed in accordance with the laws of Turkey, 
                  without regard to its conflict of law provisions. Any disputes shall be resolved in the 
                  courts of Istanbul, Turkey.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">13. Contact Information</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  If you have any questions about these Terms and Conditions, please contact us:
                </p>
                <div className="bg-gray-50 rounded-lg p-4">
                  <ul className="text-gray-600 space-y-2">
                    <li><strong>Email:</strong> info.uponehr@gmail.com</li>
                    <li><strong>WhatsApp:</strong> +905436037190</li>
                    <li><strong>Address:</strong> Istanbul, Turkey</li>
                  </ul>
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
            <Shield className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Questions about our Terms?</h2>
            <p className="text-gray-600 mb-6">
              Our legal team is available to clarify any questions you may have about these terms and conditions.
            </p>
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
              Contact Legal Team
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TermsPage;