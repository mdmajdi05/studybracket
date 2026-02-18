import React from 'react';
import { FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';
import Breadcrumb from '../components/Breadcrumb';

const About = () => {
  const teamMembers = [
    {
      id: 1,
      name: 'Priya Sharma',
      role: 'Founder & CEO',
      image: '👨‍💼',
      bio: 'Ex-IIT Delhi, 8+ years in EdTech',
      social: { twitter: '#', linkedin: '#', instagram: '#' }
    },
    {
      id: 2,
      name: 'Rajesh Kumar',
      role: 'Head of Content',
      image: '🧑‍🏫',
      bio: 'M.Sc Physics, Former Gold Medalist',
      social: { twitter: '#', linkedin: '#', instagram: '#' }
    },
    {
      id: 3,
      name: 'Anjali Verma',
      role: 'Lead Educator',
      image: '👩‍🎓',
      bio: '12+ years teaching, 50K+ students',
      social: { twitter: '#', linkedin: '#', instagram: '#' }
    },
    {
      id: 4,
      name: 'Karan Singh',
      role: 'Head of Technology',
      image: '💻',
      bio: 'Full Stack Developer, MERN Specialist',
      social: { twitter: '#', linkedin: '#', instagram: '#' }
    }
  ];

  const stats = [
    { number: '50K+', label: 'Active Students', icon: '👥' },
    { number: '500+', label: 'Study Materials', icon: '📚' },
    { number: '95%', label: 'Success Rate', icon: '🎯' },
    { number: '4.9★', label: 'Student Rating', icon: '⭐' }
  ];

  return (
    <>
      <Breadcrumb />
      <main className="min-h-screen bg-gradient-to-b from-light to-white">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-r from-primary to-secondary text-white px-4">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto animate-fade-in">
              <h1 className="text-5xl md:text-6xl font-black mb-6">About StudyBracket</h1>
              <p className="text-2xl text-blue-100 leading-relaxed">
                Empowering CBSE students across India with free, high-quality educational content and mentorship since 2024.
              </p>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20 px-4">
          <div className="container-custom">
            <div className="grid md:grid-cols-2 gap-12 mb-16">
              {/* Mission */}
              <div className="bg-white rounded-2xl p-12 shadow-lg border-l-4 border-primary hover:shadow-2xl transition">
                <div className="text-5xl mb-4">🎯</div>
                <h2 className="text-3xl font-bold text-dark mb-4">Our Mission</h2>
                <p className="text-gray-700 text-lg leading-relaxed">
                  To make quality CBSE education accessible to every student, regardless of their background or location. We believe that education should be free, engaging, and effective.
                </p>
                <div className="mt-6 space-y-3 text-gray-600">
                  <p>✓ Free for all students, forever</p>
                  <p>✓ Expert-curated content</p>
                  <p>✓ Interactive learning experience</p>
                </div>
              </div>

              {/* Vision */}
              <div className="bg-white rounded-2xl p-12 shadow-lg border-l-4 border-secondary hover:shadow-2xl transition">
                <div className="text-5xl mb-4">🚀</div>
                <h2 className="text-3xl font-bold text-dark mb-4">Our Vision</h2>
                <p className="text-gray-700 text-lg leading-relaxed">
                  To be India's most trusted online learning platform for CBSE students, helping millions achieve academic excellence and realize their dreams.
                </p>
                <div className="mt-6 space-y-3 text-gray-600">
                  <p>✓ Personalized learning paths</p>
                  <p>✓ 24/7 doubt support</p>
                  <p>✓ World-class instructors</p>
                </div>
              </div>
            </div>

            {/* Why Choose Us */}
            <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl p-12 mb-16">
              <h2 className="text-3xl font-bold text-center mb-12">Why Choose StudyBracket?</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="text-5xl mb-4">💯</div>
                  <h3 className="font-bold text-lg mb-2">100% Free</h3>
                  <p className="text-gray-600">No hidden charges, completely free forever</p>
                </div>
                <div className="text-center">
                  <div className="text-5xl mb-4">📚</div>
                  <h3 className="font-bold text-lg mb-2">CBSE Aligned</h3>
                  <p className="text-gray-600">Strictly follows CBSE curriculum</p>
                </div>
                <div className="text-center">
                  <div className="text-5xl mb-4">🎓</div>
                  <h3 className="font-bold text-lg mb-2">Expert Teachers</h3>
                  <p className="text-gray-600">Qualified and experienced educators</p>
                </div>
                <div className="text-center">
                  <div className="text-5xl mb-4">🏆</div>
                  <h3 className="font-bold text-lg mb-2">Proven Results</h3>
                  <p className="text-gray-600">95% of our students pass with flying colors</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-dark text-white px-4">
          <div className="container-custom">
            <h2 className="text-4xl font-bold text-center mb-16">By The Numbers</h2>
            <div className="grid md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center p-8 bg-white/10 rounded-2xl backdrop-blur-sm hover:bg-white/20 transition">
                  <div className="text-5xl mb-4">{stat.icon}</div>
                  <div className="text-5xl font-bold text-yellow-300 mb-2">{stat.number}</div>
                  <div className="text-lg text-blue-100">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Meet Our Team */}
        <section className="py-20 px-4">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                  Meet Our Amazing Team
                </span>
              </h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                A passionate group of educators, developers, and innovators dedicated to transforming education in India.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member, index) => (
                <div
                  key={member.id}
                  className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-500 hover:-translate-y-2 group"
                  style={{ animation: `slideInUp 0.6s ease-out ${index * 0.1}s both` }}
                >
                  {/* Avatar */}
                  <div className="bg-gradient-to-br from-primary to-secondary p-12 text-center group-hover:scale-110 transition duration-500">
                    <div className="text-8xl">{member.image}</div>
                  </div>

                  {/* Info */}
                  <div className="p-6 text-center">
                    <h3 className="text-xl font-bold text-dark mb-2">{member.name}</h3>
                    <p className="text-primary font-bold mb-3">{member.role}</p>
                    <p className="text-gray-600 text-sm mb-6">{member.bio}</p>

                    {/* Social Links */}
                    <div className="flex justify-center gap-4">
                      <a href={member.social.twitter} className="text-gray-400 hover:text-primary transition text-xl">
                        <FaTwitter />
                      </a>
                      <a href={member.social.linkedin} className="text-gray-400 hover:text-primary transition text-xl">
                        <FaLinkedin />
                      </a>
                      <a href={member.social.instagram} className="text-gray-400 hover:text-primary transition text-xl">
                        <FaInstagram />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-20 bg-gradient-to-r from-primary to-secondary text-white px-4">
          <div className="container-custom text-center">
            <h2 className="text-4xl font-bold mb-6">Have Questions?</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Get in touch with our team. We're here to help!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-primary px-8 py-4 rounded-lg font-bold hover:bg-blue-50 transition">
                Contact Us
              </button>
              <button className="border-2 border-white px-8 py-4 rounded-lg font-bold hover:bg-white hover:text-primary transition">
                Join Our Team
              </button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default About;
