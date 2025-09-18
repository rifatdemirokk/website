import React from 'react';
import { Users, Target, Award, Globe, Heart, Zap } from 'lucide-react';

const AboutPage = () => {
  const values = [
    {
      icon: <Target className="w-8 h-8" />,
      title: 'Innovation First',
      description: 'We constantly push the boundaries of AI technology to deliver cutting-edge HR solutions.',
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Customer Success',
      description: 'Your success is our success. We are committed to helping you achieve your HR goals.',
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: 'People-Centered',
      description: 'We believe technology should enhance human potential, not replace it.',
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Efficiency',
      description: 'We streamline processes to save you time and resources while improving outcomes.',
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Excellence',
      description: 'We maintain the highest standards in everything we do, from code to customer service.',
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: 'Global Impact',
      description: 'We aim to transform HR operations for businesses worldwide, regardless of size.',
    },
  ];

  const team = [
    {
      name: 'Alex Johnson',
      role: 'CEO & Founder',
      bio: 'Former HR executive with 15+ years of experience in enterprise solutions.',
      image: 'AJ',
    },
    {
      name: 'Sarah Chen',
      role: 'CTO',
      bio: 'AI researcher and software architect specializing in machine learning applications.',
      image: 'SC',
    },
    {
      name: 'Michael Rodriguez',
      role: 'Head of Product',
      bio: 'Product strategist with expertise in user experience and business automation.',
      image: 'MR',
    },
    {
      name: 'Emily Davis',
      role: 'VP of Customer Success',
      bio: 'Customer success leader focused on helping businesses maximize their HR potential.',
      image: 'ED',
    },
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About <span className="bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent">UpOne</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              We're on a mission to revolutionize HR operations through intelligent automation, 
              helping businesses focus on what matters most - their people.
            </p>
            <div className="flex justify-center space-x-8 text-sm text-gray-500">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">2020</div>
                <div>Founded</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-600">500+</div>
                <div>Companies</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600">50+</div>
                <div>Team Members</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  UpOne was born from a simple observation: HR departments were drowning in administrative tasks 
                  that could be automated, preventing them from focusing on strategic initiatives and employee development.
                </p>
                <p>
                  Founded in 2020 by a team of HR professionals and AI experts, we set out to create intelligent 
                  solutions that would transform how businesses manage their human resources. Starting with a simple 
                  attendance tracking bot, we've evolved into a comprehensive AI-powered HR platform.
                </p>
                <p>
                  Today, we serve over 500 companies worldwide, from innovative startups to established enterprises, 
                  helping them save time, reduce costs, and improve employee satisfaction through smart automation.
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-100 to-orange-100 rounded-2xl p-8">
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Mission Statement</h3>
                <p className="text-gray-600 mb-6">
                  To empower businesses with AI-driven HR solutions that eliminate administrative burden 
                  and unlock human potential.
                </p>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Vision</h3>
                <p className="text-gray-600">
                  A world where HR professionals can focus entirely on strategic initiatives and employee 
                  development, while AI handles the routine tasks.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="bg-blue-100 w-16 h-16 rounded-xl flex items-center justify-center mb-4 text-blue-600">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-600">
              The passionate individuals behind UpOne's success
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="text-center">
                <div className="w-32 h-32 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full flex items-center justify-center text-white text-3xl font-bold mx-auto mb-4">
                  {member.image}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-blue-600 font-medium mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose UpOne */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose UpOne?</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Proven Track Record</h3>
              <p className="text-gray-600">
                Over 500 companies trust us with their HR operations, achieving an average of 90% reduction in administrative work.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Cutting-Edge Technology</h3>
              <p className="text-gray-600">
                Our AI-powered solutions are built on the latest machine learning technologies, ensuring accuracy and reliability.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Dedicated Support</h3>
              <p className="text-gray-600">
                Our customer success team provides 24/7 support to ensure you get the most out of our platform.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;