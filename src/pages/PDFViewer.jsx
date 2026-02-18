import React, { useState } from 'react';
import { FaArrowLeft, FaDownload, FaZoomIn, FaZoomOut } from 'react-icons/fa';
import { useNavigate, useLocation } from 'react-router-dom';

const PDFViewer = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [zoom, setZoom] = useState(100);
  
  const pdf = location.state?.pdf;

  if (!pdf) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-light to-white">
        <div className="card p-12 text-center">
          <h2 className="text-2xl font-bold text-dark mb-4">No PDF Selected</h2>
          <p className="text-gray-600 mb-6">Please select a PDF to view</p>
          <button
            onClick={() => navigate(-1)}
            className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition flex items-center justify-center mx-auto"
          >
            <FaArrowLeft className="mr-2" />
            Go Back
          </button>
        </div>
      </div>
    );
  }

  const handleZoomIn = () => {
    setZoom(prev => Math.min(prev + 25, 200));
  };

  const handleZoomOut = () => {
    setZoom(prev => Math.max(prev - 25, 50));
  };

  return (
    <div className="min-h-screen bg-dark flex flex-col">
      {/* Toolbar */}
      <div className="bg-dark text-white p-4 flex items-center justify-between border-b border-gray-700">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center text-blue-300 hover:text-white transition px-4 py-2 rounded hover:bg-gray-700"
        >
          <FaArrowLeft className="mr-2" />
          Back
        </button>

        <div className="flex-1 text-center">
          <h2 className="font-bold truncate">{pdf.name}</h2>
        </div>

        <div className="flex items-center space-x-4">
          <button
            onClick={handleZoomOut}
            className="flex items-center text-gray-300 hover:text-white transition px-3 py-2 rounded hover:bg-gray-700"
            disabled={zoom <= 50}
          >
            <FaZoomOut />
          </button>
          
          <span className="text-gray-300 font-semibold w-12 text-center">{zoom}%</span>
          
          <button
            onClick={handleZoomIn}
            className="flex items-center text-gray-300 hover:text-white transition px-3 py-2 rounded hover:bg-gray-700"
            disabled={zoom >= 200}
          >
            <FaZoomIn />
          </button>

          <div className="border-l border-gray-700 mx-2"></div>

          <a
            href={pdf.url}
            download
            className="bg-secondary text-white px-4 py-2 rounded-lg hover:bg-green-600 transition flex items-center space-x-2"
          >
            <FaDownload />
            <span>Download</span>
          </a>
        </div>
      </div>

      {/* PDF Container */}
      <div className="flex-1 overflow-auto flex items-center justify-center p-4">
        <div style={{ transform: `scale(${zoom / 100})`, transformOrigin: 'top center' }}>
          <iframe
            src={pdf.url}
            title={pdf.name}
            className="border-4 border-gray-700 rounded"
            style={{
              width: '800px',
              height: '1000px',
              minHeight: '100vh'
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default PDFViewer;
