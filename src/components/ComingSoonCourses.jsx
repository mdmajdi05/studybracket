import React, { useState } from 'react';
import { FaClock, FaBell, FaCheckCircle } from 'react-icons/fa';

const ComingSoonCourses = () => {
  const [notifications, setNotifications] = useState({});

  const comingSoonCourses = [
    {
    id: 1,
    name: 'JEE Main 2027 Complete Preparation',
    category: 'Class 11-12',
    launchDate: '1 June 2026',
    students: 5120,
    icon: '📘',
    color: 'from-blue-500 to-indigo-600',
    description: 'Complete Physics, Chemistry & Maths for JEE Main with PYQs'
  },
  {
    id: 2,
    name: 'JEE Main Crash Course 2026',
    category: 'Dropper / Class 12',
    launchDate: '15 June 2026',
    students: 3890,
    icon: '🚀',
    color: 'from-indigo-400 to-purple-600',
    description: 'Revision, mock tests & high-weightage topics for JEE Main'
  },
  {
    id: 3,
    name: 'NEET 2027 Complete Preparation',
    category: 'Class 11-12',
    launchDate: '1 July 2026',
    students: 6345,
    icon: '🩺',
    color: 'from-green-500 to-emerald-600',
    description: 'Complete PCB syllabus with NCERT focus & PYQs for NEET'
  },
  {
    id: 4,
    name: 'NEET Crash Course 2026',
    category: 'Dropper / Class 12',
    launchDate: '20 July 2026',
    students: 4210,
    icon: '🎯',
    color: 'from-emerald-400 to-teal-600',
    description: 'Fast-track revision, mock tests & important diagrams for NEET'
  },
  {
    id: 5,
    name: 'JEE + NEET Foundation Program',
    category: 'Class 9-10',
    launchDate: '1 August 2026',
    students: 2980,
    icon: '🏆',
    color: 'from-yellow-400 to-orange-500',
    description: 'Strong foundation in Physics, Chemistry, Maths & Biology'
  },
    {
      id: 6,
      name: 'Advanced Python Programming',
      category: 'Class 12',
      launchDate: '1 March 2026',
      students: 2345,
      icon: '🐍',
      color: 'from-yellow-400 to-yellow-600',
      description: 'Master Python with real-world projects'
    },
    {
      id: 7,
      name: 'Web Development with MERN',
      category: 'Advanced',
      launchDate: '15 March 2026',
      students: 3421,
      icon: '🌐',
      color: 'from-blue-400 to-purple-600',
      description: 'Build full-stack web applications'
    },
    {
      id: 8,
      name: 'AI & Machine Learning Basics',
      category: 'Class 12 + Beyond',
      launchDate: '1 April 2026',
      students: 4567,
      icon: '🤖',
      color: 'from-green-400 to-emerald-600',
      description: 'Introduction to AI and ML concepts'
    },
    {
      id: 9,
      name: 'Competitive Programming',
      category: 'Class 11-12',
      launchDate: '10 April 2026',
      students: 1890,
      icon: '🏆',
      color: 'from-red-400 to-pink-600',
      description: 'Crack coding interviews with us'
    },
    {
      id: 10,
      name: 'Digital Marketing Mastery',
      category: 'Advanced',
      launchDate: '20 April 2026',
      students: 2765,
      icon: '📱',
      color: 'from-orange-400 to-red-600',
      description: 'Learn modern digital marketing'
    },
    {
      id: 11,
      name: 'Quantum Physics Explorer',
      category: 'Class 12',
      launchDate: '5 May 2026',
      students: 1234,
      icon: '⚛️',
      color: 'from-cyan-400 to-blue-600',
      description: 'Deep dive into quantum mechanics'
    },
    
  ];

  const toggleNotification = (id) => {
    setNotifications(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <section className="py-20 bg-gradient-to-b from-white to-light">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-yellow-100 px-4 py-2 rounded-full mb-4">
            <FaClock className="text-yellow-600" />
            <span className="text-yellow-700 font-semibold">Exciting New Courses</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              Coming Soon
            </span>
            <span className="block text-gray-800 mt-2 text-3xl">Elevate Your Learning</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Be the first to know when these exciting courses launch. Get notified and unlock early access!
          </p>
        </div>

        {/* Courses Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {comingSoonCourses.map((course, index) => (
            <div 
              key={course.id}
              className="group h-full"
              style={{
                animation: `slideInUp 0.6s ease-out ${index * 0.1}s both`
              }}
            >
              <div className="h-full bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-500 border border-gray-100 hover:border-primary flex flex-col hover:-translate-y-2">
                {/* Header with Icon */}
                <div className={`bg-gradient-to-br ${course.color} p-8 text-white relative overflow-hidden`}>
                  <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full -mr-8 -mt-8"></div>
                  <div className="text-6xl mb-4 relative z-10">{course.icon}</div>
                  <div className="text-xs font-bold bg-white/20 px-3 py-1 rounded-full w-fit relative z-10">
                    {course.category}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-grow flex flex-col">
                  <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-primary transition">
                    {course.name}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 flex-grow">
                    {course.description}
                  </p>

                  {/* Students interested */}
                  <div className="flex items-center gap-2 text-sm text-gray-500 mb-4 pb-4 border-b border-gray-200">
                    <FaBell className="text-yellow-500" />
                    <span><strong>{course.students.toLocaleString()}</strong> already interested</span>
                  </div>

                  {/* Launch Date */}
                  <div className="bg-blue-50 rounded-lg p-4 mb-4">
                    <div className="text-xs text-gray-600 mb-1">Launching:</div>
                    <div className="font-bold text-primary text-lg flex items-center gap-2">
                      <FaClock className="text-secondary" />
                      {course.launchDate}
                    </div>
                  </div>

                  {/* Notification Button */}
                  <button
                    onClick={() => toggleNotification(course.id)}
                    className={`w-full px-4 py-3 rounded-lg font-bold transition duration-300 flex items-center justify-center gap-2 ${
                      notifications[course.id]
                        ? 'bg-green-100 text-green-700 border-2 border-green-500'
                        : `bg-gradient-to-r ${course.color} text-white hover:shadow-lg`
                    }`}
                  >
                    {notifications[course.id] ? (
                      <>
                        <FaCheckCircle className="text-lg" />
                        Notification On
                      </>
                    ) : (
                      <>
                        <FaBell className="text-lg" />
                        Notify Me
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-20 bg-gradient-to-r from-primary to-secondary rounded-2xl p-12 text-white text-center">
          <h3 className="text-3xl font-bold mb-4">Don't Miss Out! 🚀</h3>
          <p className="text-lg text-blue-100 mb-6 max-w-2xl mx-auto">
            Subscribe to our newsletter to get updates on new courses, special offers, and exclusive resources.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-6 py-3 rounded-lg text-dark font-medium flex-grow max-w-xs focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
            <button className="bg-yellow-400 text-dark px-8 py-3 rounded-lg font-bold hover:bg-yellow-300 transition duration-300 whitespace-nowrap">
              Subscribe Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComingSoonCourses;
