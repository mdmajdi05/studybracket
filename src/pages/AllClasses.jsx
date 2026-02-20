import React from 'react';
import { Link } from 'react-router-dom';
import { classes , coursesData} from '../data/coursesData';
import { FaArrowRight, FaBook, FaVideo, FaFilePdf, FaStar } from 'react-icons/fa';

const AllClasses = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-light to-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary to-secondary text-white py-16">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">All Classes</h1>
          <p className="text-blue-100 text-lg max-w-2xl">
            Select your class and access comprehensive study materials designed specifically for CBSE Delhi Board standards
          </p>
        </div>
      </div>

      <div className="py-20">
        <div className="container-custom">
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
            <div className="card p-6 text-center">
              <div className="text-4xl font-bold text-primary mb-2">{classes.length}</div>
              <p className="text-gray-600">Classes ({classes[0]?.id} - {classes[classes.length - 1]?.id})</p>
            </div>
            <div className="card p-6 text-center">
              <div className="text-4xl font-bold text-secondary mb-2">16+</div>
              <p className="text-gray-600">Subject Courses</p>
            </div>
            <div className="card p-6 text-center">
              <div className="text-4xl font-bold text-yellow-500 mb-2">500+</div>
              <p className="text-gray-600">Study Materials</p>
            </div>
            <div className="card p-6 text-center">
              <div className="text-4xl font-bold text-red-500 mb-2">4.9★</div>
              <p className="text-gray-600">Student Rating</p>
            </div>
          </div>

          {/* All Classes Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {classes.map((cls, idx) => (
              <Link to={`/class/${cls.id}`} key={cls.id}>
                <div 
                  className="card p-8 text-center group cursor-pointer transform hover:-translate-y-4 h-full flex flex-col justify-center bg-gradient-to-br from-white to-light hover:from-primary hover:to-secondary transition-all duration-300"
                  style={{animation: `slideInUp 0.5s ease-out ${idx * 0.1}s both`}}
                >
                  <div className="relative mb-6">
                    <div className="absolute inset-0 bg-gradient-to-b from-primary to-secondary rounded-full opacity-0 group-hover:opacity-30 transition duration-300 blur-lg"></div>
                    <div className="text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary group-hover:scale-125 transition duration-300">
                      {cls.id}
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-dark group-hover:text-white transition mb-3">{cls.name}</h3>
                  <p className="text-gray-600 group-hover:text-blue-50 mb-6 flex-grow">CBSE Curriculum</p>
                  
                  <div className="flex justify-around mb-6 text-gray-400 group-hover:text-blue-50 text-sm transition">
                    <div className="flex flex-col items-center">
                      <FaBook className="text-lg mb-1 group-hover:scale-125 transition" />
                      <span>{coursesData[cls.id]?.length || 0} Courses</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <FaVideo className="text-lg mb-1 group-hover:scale-125 transition" />
                      <span>Videos</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <FaFilePdf className="text-lg mb-1 group-hover:scale-125 transition" />
                      <span>PDFs</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-center group-hover:text-white transition duration-300">
                    <span className="mr-2 font-semibold text-primary group-hover:text-white">Explore</span>
                    <FaArrowRight className="group-hover:translate-x-2 transition" />
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Info Section */}
          <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card p-8">
              <div className="text-4xl mb-4">📚</div>
              <h3 className="text-xl font-bold text-dark mb-3">Comprehensive Content</h3>
              <p className="text-gray-600">Complete CBSE curriculum aligned with Delhi Board standards. All chapters covered with detailed explanations and examples.</p>
            </div>
            <div className="card p-8">
              <div className="text-4xl mb-4">✍️</div>
              <h3 className="text-xl font-bold text-dark mb-3">Real Study Materials</h3>
              <p className="text-gray-600">Download verified study materials, sample papers, and important questions from actual CBSE exams past 10 years.</p>
            </div>
            <div className="card p-8">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-bold text-dark mb-3">Board Ready</h3>
              <p className="text-gray-600">Prepare for board exams with confidence. Our materials are prepared by experienced teachers who know CBSE patterns.</p>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-20 bg-gradient-to-r from-primary via-blue-400 to-secondary text-white rounded-2xl p-12 text-center">
            <h3 className="text-3xl font-bold mb-4">Ready to Excel in Your Exams?</h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Join thousands of students who have improved their scores using StudyBracket's verified resources
            </p>
            <Link to="/class/9" className="inline-block bg-white text-primary px-8 py-4 rounded-2xl font-bold hover:bg-gray-100 transition duration-300 transform hover:-translate-y-1 shadow-xl text-lg">
              Start Studying Now →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllClasses;
