import React from 'react';
import { Link } from 'react-router-dom';
import { coursesData, classes } from '../data/coursesData';
import { FaPlay, FaUsers, FaTrophy, FaArrowRight } from 'react-icons/fa';
import Breadcrumb from './Breadcrumb';

const Courses = () => {
  // Get all unique courses from all classes
  const allCourses = [];
  Object.values(coursesData).forEach(classCourses => {
    classCourses.forEach(course => {
      if (!allCourses.find(c => c.id === course.id)) {
        allCourses.push(course);
      }
    });
  });

  return (
    <>
      <Breadcrumb />
      <div className="py-16">
        <div className="container-custom">
          {/* Header Section */}
          <div className="mb-20 animate-fade-in">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-4">
                <FaPlay className="text-primary" />
                <span className="text-primary font-semibold">Browse All Courses</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-black mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                  Our Comprehensive Courses
                </span>
              </h1>
              <p className="text-gray-600 text-xl max-w-2xl mx-auto leading-relaxed">
                Explore our complete collection of CBSE-aligned courses designed for Classes 9-12. All courses are 100% free and created by expert educators.
              </p>
            </div>

            {/* Featured Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <div className="card p-8 text-center hover:shadow-2xl hover:-translate-y-2 transition duration-300">
                <div className="text-5xl text-primary mb-4 flex justify-center animate-bounce"><FaPlay /></div>
                <h3 className="text-3xl font-bold text-dark mb-2">500+</h3>
                <p className="text-gray-600">Video Lectures</p>
              </div>
              <div className="card p-8 text-center hover:shadow-2xl hover:-translate-y-2 transition duration-300">
                <div className="text-5xl text-secondary mb-4 flex justify-center animate-bounce" style={{animationDelay: '0.1s'}}><FaUsers /></div>
                <h3 className="text-3xl font-bold text-dark mb-2">50K+</h3>
                <p className="text-gray-600">Active Students</p>
              </div>
              <div className="card p-8 text-center hover:shadow-2xl hover:-translate-y-2 transition duration-300">
                <div className="text-5xl text-yellow-500 mb-4 flex justify-center animate-bounce" style={{animationDelay: '0.2s'}}><FaTrophy /></div>
                <h3 className="text-3xl font-bold text-dark mb-2">4.8★</h3>
                <p className="text-gray-600">Average Rating</p>
              </div>
            </div>
          </div>

          {/* Courses by Class */}
          <div className="space-y-16">
            {classes.map((cls, classIndex) => (
              <div key={cls.id} style={{animation: `slideInUp 0.6s ease-out ${classIndex * 0.1}s both`}}>
                {/* Section Header with Decoration */}
                <div className="mb-10 relative">
                  <div className="flex items-center gap-6 mb-8">
                    <div>
                      <h2 className="text-4xl font-black text-dark">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                          {cls.name}
                        </span>
                      </h2>
                      <div className="h-1 w-24 bg-gradient-to-r from-primary to-secondary mt-2 rounded-full"></div>
                    </div>
                    <Link 
                      to={`/class/${cls.id}`} 
                      className="ml-auto flex items-center gap-2 text-primary font-bold hover:text-secondary transition text-lg group"
                    >
                      View All 
                      <FaArrowRight className="group-hover:translate-x-1 transition" />
                    </Link>
                  </div>
                </div>

                {/* Courses Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {coursesData[cls.id].map((course, idx) => (
                    <div 
                      key={course.id}
                      className="group h-full"
                      style={{animation: `slideInUp 0.5s ease-out ${idx * 0.08}s both`}}
                    >
                      <div className="h-full card p-6 cursor-pointer hover:shadow-2xl hover:-translate-y-2 transition duration-300 border-t-4 border-primary hover:border-secondary flex flex-col">
                        {/* Course Icon */}
                        <div className="text-6xl mb-4 group-hover:scale-125 group-hover:rotate-12 transition duration-300">
                          {course.icon}
                        </div>

                        {/* Course Info */}
                        <h4 className="text-xl font-bold text-dark mb-2 group-hover:text-primary transition">
                          {course.name}
                        </h4>
                        <p className="text-gray-600 text-sm mb-4 flex-grow group-hover:text-gray-700 transition">
                          {course.description}
                        </p>

                        {/* Course Meta */}
                        <div className="text-xs text-gray-500 space-y-1 mb-6 pb-4 border-b border-gray-200">
                          <div className="flex items-center gap-2">
                            <span className="text-base">📚</span>
                            <span>{course.chapters} Chapters</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="text-base">⏱️</span>
                            <span>{course.duration}</span>
                          </div>
                        </div>

                        {/* Join Button */}
                        <Link 
                          to={`/class/${cls.id}`}
                          className="w-full bg-gradient-to-r from-primary to-secondary text-white py-3 rounded-lg font-bold text-center hover:shadow-lg transition duration-300 transform group-hover:-translate-y-1 flex items-center justify-center gap-2"
                        >
                          <span>Join Now</span>
                          <FaArrowRight className="text-sm group-hover:translate-x-1 transition" />
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-20 bg-gradient-to-r from-primary via-blue-500 to-secondary text-white py-16 rounded-3xl shadow-2xl">
          <div className="container-custom text-center px-4">
            <h3 className="text-4xl md:text-5xl font-bold mb-6">Ready to Start Your Learning Journey? 🚀</h3>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Join thousands of successful CBSE students who are already learning with StudyBracket. All courses are completely free!
            </p>
            <Link 
              to="/" 
              className="inline-flex items-center gap-2 bg-white text-primary px-8 py-4 rounded-xl font-bold hover:bg-blue-50 transition text-lg transform hover:-translate-y-1"
            >
              Start Learning Free
              <FaArrowRight />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Courses;