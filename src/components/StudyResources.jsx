import React, { useState } from 'react';
import { classes, studyResources } from '../data/coursesData';
import { FaDownload, FaFilePdf, FaSearch } from 'react-icons/fa';
import Toast from './Toast';
import { generateSamplePDF, downloadPDF } from '../utils/pdfGenerator';

const StudyResources = () => {
  const [selectedClass, setSelectedClass] = useState(classes[0].id);
  const [searchTerm, setSearchTerm] = useState('');
  const [toast, setToast] = useState(null);


  const handleDownload = (pdf) => {
    try {
      // Generate PDF using jsPDF
      const doc = generateSamplePDF(pdf.name, selectedClass);
      downloadPDF(doc, pdf.name);
      
      // Show success toast
      setToast({
        message: `✓ ${pdf.name} downloaded successfully!`,
        type: 'success'
      });
    } catch {
      // Fallback to direct download if jsPDF fails
      const link = document.createElement('a');
      link.href = pdf.url;
      link.download = pdf.name + '.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      setToast({
        message: `✓ ${pdf.name} started downloading!`,
        type: 'success'
      });
    }
  };

  const filteredResources = studyResources[selectedClass]?.filter(resource =>
    resource.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

return (
    <div className="py-20 bg-white">
        <div className="container-custom">
            <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-dark mb-4">Study Resources</h2>
                <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                  Download free PDF notes, formula sheets, and study guides for all subjects
                </p>
            </div>

            {/* Class Selector */}
            <div className="flex flex-wrap justify-center gap-3 mb-12">
                {classes.map((cls, idx) => (
                    <button
                        key={cls.id}
                        onClick={() => setSelectedClass(cls.id)}
                        className={`px-6 py-3 rounded-lg font-semibold transition duration-300 transform hover:-translate-y-1 ${
                            selectedClass === cls.id
                                ? 'bg-gradient-to-r from-primary to-secondary text-white shadow-lg'
                                : 'bg-gray-100 text-dark hover:bg-gray-200'
                        }`}
                        style={{animation: `slideInUp 0.3s ease-out ${idx * 0.05}s both`}}
                    >
                        {cls.name}
                    </button>
                ))}
            </div>

            {/* Search Bar */}
            <div className="max-w-xl mx-auto mb-12">
                <div className="relative">
                    <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-lg" />
                    <input
                        type="text"
                        placeholder="Search PDF notes..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full px-4 py-3 pl-12 rounded-lg border-2 border-gray-200 focus:border-primary focus:outline-none transition duration-300 text-dark"
                    />
                </div>
            </div>

            {/* Resources Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredResources?.map((resource, idx) => (
                    <div 
                      key={resource.id} 
                      className="card p-6 flex flex-col hover:shadow-2xl transition duration-300"
                      style={{animation: `slideInUp 0.5s ease-out ${idx * 0.05}s both`}}
                    >
                        <div className="flex items-start mb-4">
                            <div className="text-4xl text-red-500 mr-4 flex-shrink-0">
                                <FaFilePdf />
                            </div>
                            <div className="flex-1">
                                <h3 className="font-bold text-dark text-base leading-tight">{resource.name}</h3>
                            </div>
                        </div>
                        
                        <div className="bg-light px-3 py-2 rounded-lg mb-4 text-center">
                            <p className="text-sm text-gray-600 font-medium">{resource.size}</p>
                        </div>

                        <p className="text-gray-500 text-xs mb-4 flex-grow">
                          High-quality PDF for Class {selectedClass} students
                        </p>

                        <button
                            onClick={() => handleDownload(resource)}
                            className="w-full bg-gradient-to-r from-secondary to-green-500 text-white px-4 py-3 rounded-lg hover:shadow-lg transition duration-300 font-bold flex items-center justify-center space-x-2 group hover:-translate-y-1"
                        >
                            <FaDownload className="group-hover:scale-125 transition" />
                            <span>Download PDF</span>
                        </button>
                    </div>
                ))}
            </div>

            {filteredResources?.length === 0 && (
                <div className="text-center py-16">
                    <FaFilePdf className="text-6xl text-gray-300 mx-auto mb-4" />
                    <p className="text-gray-500 text-lg font-semibold">No PDFs found</p>
                    <p className="text-gray-400">Try searching with different keywords</p>
                </div>
            )}

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
    </div>
);
};

export default StudyResources;