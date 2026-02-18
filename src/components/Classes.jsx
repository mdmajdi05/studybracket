import React from 'react';
import { Link } from 'react-router-dom';
import { classes } from '../data/coursesData';
import { FaArrowRight, FaBook, FaVideo, FaFilePdf } from 'react-icons/fa';

const Classes = () => {
  return (
    <div className="py-20 bg-gradient-to-b from-white to-light">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-dark mb-4">Our Classes</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Select your class and access comprehensive study materials, video lectures, and PDFs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {classes.map((cls, idx) => (
            <Link to={`/class/${cls.id}`} key={cls.id}>
              <div 
                className="card p-8 text-center group cursor-pointer transform hover:-translate-y-4 h-full flex flex-col justify-center"
                style={{animation: `slideInUp 0.5s ease-out ${idx * 0.1}s both`}}
              >
                <div className="relative mb-6">
                  <div className="absolute inset-0 bg-gradient-to-b from-primary to-secondary rounded-full opacity-0 group-hover:opacity-20 transition duration-300 blur-lg"></div>
                  <div className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary group-hover:scale-110 transition duration-300">
                    {cls.id}
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-dark mb-3 group-hover:text-primary transition">{cls.name}</h3>
                <p className="text-gray-600 mb-6 flex-grow">All subjects with complete materials</p>
                
                <div className="flex justify-around mb-6 text-gray-400 text-sm">
                  <div className="flex flex-col items-center">
                    <FaBook className="text-lg mb-1 text-primary group-hover:scale-125 transition" />
                    <span>Courses</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <FaVideo className="text-lg mb-1 text-secondary group-hover:scale-125 transition" />
                    <span>Videos</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <FaFilePdf className="text-lg mb-1 text-red-500 group-hover:scale-125 transition" />
                    <span>PDFs</span>
                  </div>
                </div>

                <div className="flex items-center justify-center text-primary group-hover:text-secondary group-hover:translate-x-1 transition duration-300">
                  <span className="mr-2 font-semibold">Explore</span>
                  <FaArrowRight />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-gradient-to-r from-primary to-secondary text-white rounded-2xl p-12 text-center">
          <h3 className="text-3xl font-bold mb-4">Not sure where to start?</h3>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Check out our complete course catalog with video lectures and study materials for all class levels
          </p>
          <Link to="/courses" className="inline-block bg-white text-primary px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition duration-300 transform hover:-translate-y-1">
            View All Courses
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Classes;