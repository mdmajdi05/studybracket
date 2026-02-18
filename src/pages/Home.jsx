import React from 'react';
import Hero from '../components/Hero';
import Classes from '../components/Classes';
import Courses from '../components/Courses';
import StudyResources from '../components/StudyResources';
import Gallery from '../components/Gallery';
import Testimonials from '../components/Testimonials';
import ComingSoonCourses from '../components/ComingSoonCourses';
import Gamification from '../components/Gamification';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <Hero />
      <Classes />
      <Gallery />
      <StudyResources />
      <ComingSoonCourses />
      <Gamification />
      <Testimonials />
      
      {/* Features Section */}
      <div className="py-20 bg-gradient-to-b from-light to-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-dark mb-4">Why Choose StudyBracket?</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">Trusted by 50,000+ CBSE students across Delhi</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card p-8 text-center hover:shadow-xl transition duration-300">
              <div className="text-6xl mb-4">📚</div>
              <h3 className="text-2xl font-bold mb-3 text-primary">Verified Content</h3>
              <p className="text-gray-600 leading-relaxed">All study materials are verified by CBSE-experienced teachers. No unverified or misleading content.</p>
            </div>
            <div className="card p-8 text-center hover:shadow-xl transition duration-300">
              <div className="text-6xl mb-4">🎯</div>
              <h3 className="text-2xl font-bold mb-3 text-secondary">Board Focused</h3>
              <p className="text-gray-600 leading-relaxed">Specially designed for CBSE Delhi Board curriculum. Complete alignment with board exam patterns.</p>
            </div>
            <div className="card p-8 text-center hover:shadow-xl transition duration-300">
              <div className="text-6xl mb-4">⚡</div>
              <h3 className="text-2xl font-bold mb-3 text-yellow-500">100% Free</h3>
              <p className="text-gray-600 leading-relaxed">All resources, PDFs, and materials are completely free. No hidden charges or subscriptions.</p>
            </div>
          </div>

          {/* Additional Features */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-primary to-blue-400 text-white p-12 rounded-2xl">
              <h3 className="text-3xl font-bold mb-4">📊 Complete Solutions</h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <span className="text-2xl mr-3">✓</span>
                  <span>CBSE Curriculum Aligned</span>
                </li>
                <li className="flex items-center">
                  <span className="text-2xl mr-3">✓</span>
                  <span>Sample Papers & Solutions</span>
                </li>
                <li className="flex items-center">
                  <span className="text-2xl mr-3">✓</span>
                  <span>Important Questions Collections</span>
                </li>
                <li className="flex items-center">
                  <span className="text-2xl mr-3">✓</span>
                  <span>Video Explanations</span>
                </li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-secondary to-green-400 text-white p-12 rounded-2xl">
              <h3 className="text-3xl font-bold mb-4">🏆 Student Success</h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <span className="text-2xl mr-3">✓</span>
                  <span>95% Board Exam Success Rate</span>
                </li>
                <li className="flex items-center">
                  <span className="text-2xl mr-3">✓</span>
                  <span>Average Score Improvement: 20%</span>
                </li>
                <li className="flex items-center">
                  <span className="text-2xl mr-3">✓</span>
                  <span>Expert Teacher Created Materials</span>
                </li>
                <li className="flex items-center">
                  <span className="text-2xl mr-3">✓</span>
                  <span>24/7 Learning Access</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Final CTA */}
      <div className="py-20 bg-white">
        <div className="container-custom text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-dark mb-6">Start Your Board Exam Preparation Today!</h2>
          <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
            Join thousands of successful students who improved their scores using StudyBracket
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/classes" className="bg-gradient-to-r from-primary to-secondary text-white px-10 py-4 rounded-xl font-bold hover:shadow-xl transition transform hover:-translate-y-1 text-lg">
              Explore All Classes →
            </Link>
            <Link to="/contact" className="border-2 border-primary text-primary px-10 py-4 rounded-xl font-bold hover:bg-light transition text-lg">
              Get Support
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;