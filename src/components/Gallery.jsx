import React, { useState } from 'react';
import { FaTimes, FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const galleryImages = [
    {
      id: 1,
      title: 'Study Notes Collection',
      image: '📚',
      description: 'Comprehensive study notes for all subjects'
    },
    {
      id: 2,
      title: 'Formula Sheets',
      image: '📐',
      description: 'Complete formula sheets for Math & Science'
    },
    {
      id: 3,
      title: 'Sample Question Papers',
      image: '📝',
      description: 'Real CBSE question papers from past years'
    },
    {
      id: 4,
      title: 'Diagram Collections',
      image: '🔬',
      description: 'Important diagrams for Biology & Physics'
    },
    {
      id: 5,
      title: 'Video Lectures',
      image: '🎥',
      description: 'Professional video explanations'
    },
    {
      id: 6,
      title: 'Practice Tests',
      image: '✍️',
      description: 'Full-length mock tests for practice'
    },
    {
      id: 7,
      title: 'Map Collections',
      image: '🗺️',
      description: 'Geography maps for Social Science'
    },
    {
      id: 8,
      title: 'Important References',
      image: '📖',
      description: 'Curated reference materials'
    }
  ];

  const currentIdx = selectedImage ? galleryImages.findIndex(img => img.id === selectedImage) : -1;

  const handleNext = () => {
    if (currentIdx < galleryImages.length - 1) {
      setSelectedImage(galleryImages[currentIdx + 1].id);
    }
  };

  const handlePrev = () => {
    if (currentIdx > 0) {
      setSelectedImage(galleryImages[currentIdx - 1].id);
    }
  };

  return (
    <div className="py-20 bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-dark mb-4">Study Resources Gallery</h2>
          <p className="text-gray-600 text-lg">
            Browse our comprehensive collection of study materials
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {galleryImages.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => setSelectedImage(item.id)}
              className="card p-8 text-center cursor-pointer group hover:shadow-2xl transition duration-300 transform hover:-translate-y-2"
              style={{animation: `slideInUp 0.5s ease-out ${idx * 0.08}s both`}}
            >
              <div className="text-6xl mb-4 group-hover:scale-125 transition duration-300">{item.image}</div>
              <h3 className="font-bold text-dark mb-2 text-sm md:text-base group-hover:text-primary transition">{item.title}</h3>
              <p className="text-xs text-gray-500 group-hover:text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage !== null && (
          <div className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl max-w-2xl w-full">
              <div className="flex justify-between items-center p-6 border-b">
                <h3 className="text-xl font-bold text-dark">
                  {galleryImages.find(img => img.id === selectedImage)?.title}
                </h3>
                <button
                  onClick={() => setSelectedImage(null)}
                  className="text-2xl text-gray-500 hover:text-dark transition"
                >
                  <FaTimes />
                </button>
              </div>

              <div className="p-12 text-center bg-light">
                <div className="text-9xl mb-6">
                  {galleryImages.find(img => img.id === selectedImage)?.image}
                </div>
                <h2 className="text-3xl font-bold text-dark mb-4">
                  {galleryImages.find(img => img.id === selectedImage)?.title}
                </h2>
                <p className="text-gray-600 text-lg mb-8">
                  {galleryImages.find(img => img.id === selectedImage)?.description}
                </p>
              </div>

              {/* Navigation */}
              <div className="flex justify-between items-center p-6 border-t bg-gradient-to-r from-light to-white">
                <button
                  onClick={handlePrev}
                  disabled={currentIdx === 0}
                  className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition disabled:opacity-50 disabled:cursor-not-allowed flex items-center"
                >
                  <FaArrowLeft className="mr-2" />
                  Previous
                </button>

                <span className="text-gray-600 font-semibold">
                  {currentIdx + 1} / {galleryImages.length}
                </span>

                <button
                  onClick={handleNext}
                  disabled={currentIdx === galleryImages.length - 1}
                  className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition disabled:opacity-50 disabled:cursor-not-allowed flex items-center"
                >
                  Next
                  <FaArrowRight className="ml-2" />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Gallery;
