import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { coursesData, studyResources } from '../data/coursesData';
import { FaDownload, FaFilePdf, FaBook, FaClock, FaArrowLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Toast from '../components/Toast';
import { generateSamplePDF, downloadPDF } from '../utils/pdfGenerator';

const ClassDetails = () => {
  const { classId } = useParams();
  const classNum = parseInt(classId);
  const [toast, setToast] = useState(null);
  
  const courses = coursesData[classNum] || [];
  const resources = studyResources[classNum] || [];

  const handleDownload = (resource) => {
    try {
      // Generate PDF using jsPDF
      const doc = generateSamplePDF(resource.name, classNum);
      downloadPDF(doc, resource.name);
      
      setToast({
        message: `✓ ${resource.name} downloaded successfully!`,
        type: 'success'
      });
    } catch {
      // Fallback to direct download if jsPDF fails
      const link = document.createElement('a');
      link.href = resource.url;
      link.download = resource.name + '.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      setToast({
        message: `✓ ${resource.name} started downloading!`,
        type: 'success'
      });
    }
  };

return (
    <div className="min-h-screen bg-gradient-to-b from-light to-white">
        {/* Header */}
        <div className="bg-gradient-to-r from-primary to-secondary text-white py-12">
          <div className="container-custom">
            <Link to="/" className="inline-flex items-center text-blue-100 hover:text-white mb-4 transition">
              <FaArrowLeft className="mr-2" />
              Back to Home
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold mb-3">Class {classNum}</h1>
            <p className="text-blue-100 text-lg">Complete study materials and resources for Class {classNum}</p>
          </div>
        </div>

        <div className="py-16">
            <div className="container-custom">
                
                {/* Courses Section */}
                <div className="mb-20">
                    <div className="mb-12">
                      <h2 className="text-3xl md:text-4xl font-bold text-dark mb-3">📚 Courses</h2>
                      <p className="text-gray-600">Comprehensive courses covering all subjects for Class {classNum}</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {courses.map((course, idx) => (
                            <div 
                              key={course.id} 
                              className="card p-6 hover:shadow-xl transition duration-300"
                              style={{animation: `slideInUp 0.5s ease-out ${idx * 0.1}s both`}}
                            >
                                <div className="text-5xl mb-4">{course.icon}</div>
                                <h3 className="text-xl font-bold text-dark mb-2 group-hover:text-primary transition">{course.name}</h3>
                                <p className="text-gray-600 text-sm mb-4 h-12">{course.description}</p>
                                <div className="space-y-2 mb-6 bg-light p-3 rounded-lg">
                                    <div className="flex items-center text-sm text-gray-600">
                                        <FaBook className="mr-3 text-primary flex-shrink-0" />
                                        <span>{course.chapters} Chapters</span>
                                    </div>
                                    <div className="flex items-center text-sm text-gray-600">
                                        <FaClock className="mr-3 text-secondary flex-shrink-0" />
                                        <span>{course.duration}</span>
                                    </div>
                                </div>
                                <button className="w-full bg-gradient-to-r from-primary to-blue-500 text-white py-2 rounded-lg hover:shadow-lg transition duration-300 font-semibold transform hover:-translate-y-1">
                                    View Course →
                                </button>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Divider */}
                <div className="border-t-2 border-gray-200 my-16"></div>

                {/* PDF Resources Section */}
                <div>
                    <div className="mb-12">
                      <h2 className="text-3xl md:text-4xl font-bold text-dark mb-3">📄 Study Materials</h2>
                      <p className="text-gray-600">Free PDF notes and resources for Class {classNum}</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {resources.map((resource, idx) => (
                            <div 
                              key={resource.id} 
                              className="card p-6 flex flex-col hover:shadow-xl transition duration-300"
                              style={{animation: `slideInUp 0.5s ease-out ${idx * 0.08}s both`}}
                            >
                                <div className="flex items-start mb-4">
                                  <div className="text-3xl text-red-500 mr-3 flex-shrink-0">
                                      <FaFilePdf />
                                  </div>
                                  <div className="flex-1 min-w-0">
                                    <h3 className="font-bold text-dark mb-1 line-clamp-2">{resource.name}</h3>
                                    <p className="text-xs text-gray-500">{resource.size}</p>
                                  </div>
                                </div>
                                
                                <div className="bg-light px-3 py-2 rounded-lg mb-4 text-center">
                                    <p className="text-xs text-gray-600 font-medium">📥 Ready to Download</p>
                                </div>

                                <button
                                    onClick={() => handleDownload(resource)}
                                    className="mt-auto w-full bg-gradient-to-r from-green-500 to-secondary text-white px-4 py-3 rounded-lg hover:shadow-lg transition duration-300 font-bold flex items-center justify-center space-x-2 group hover:-translate-y-1"
                                >
                                    <FaDownload className="group-hover:scale-110 transition" />
                                    <span>Download</span>
                                </button>
                            </div>
                        ))}
                    </div>

                    {resources.length === 0 && (
                      <div className="text-center py-12 card">
                        <FaFilePdf className="text-6xl text-gray-300 mx-auto mb-4" />
                        <p className="text-gray-500 text-lg font-semibold">No PDFs available yet</p>
                        <p className="text-gray-400">Check back soon for study materials</p>
                      </div>
                    )}
                </div>

                {/* CTA Section */}
                <div className="mt-16 bg-gradient-to-r from-primary to-secondary text-white rounded-2xl p-12 text-center">
                  <h3 className="text-3xl font-bold mb-4">Need more study materials?</h3>
                  <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                    Explore our complete course catalog with video lectures and comprehensive study guides
                  </p>
                  <Link to="/courses" className="inline-block bg-white text-primary px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition duration-300 transform hover:-translate-y-1">
                    Explore All Courses
                  </Link>
                </div>
            </div>
        </div>

        {/* Toast Notification */}
        {toast && (
            <Toast
                message={toast.message}
                type={toast.type}
                duration={3000}
                onClose={() => setToast(null)}
            />
        )}
    </div>
);
};

export default ClassDetails;