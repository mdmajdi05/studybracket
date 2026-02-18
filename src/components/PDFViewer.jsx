import React, { useState } from 'react';
import { FaDownload, FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const PDFViewer = ({ pdf, onClose }) => {
  const [zoom, setZoom] = useState(100);

  if (!pdf) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 z-50 flex flex-col">
      <div className="bg-dark text-white p-4 flex items-center justify-between">
        <button onClick={onClose} className="text-2xl hover:text-primary transition">
          <FaArrowLeft />
        </button>
        <div className="flex-1 text-center">
          <h2 className="font-bold">{pdf.name}</h2>
        </div>
        <div className="flex items-center space-x-4">
          <select
            value={zoom}
            onChange={(e) => setZoom(parseInt(e.target.value))}
            className="bg-gray-700 text-white px-3 py-1 rounded"
          >
            <option value={50}>50%</option>
            <option value={75}>75%</option>
            <option value={100}>100%</option>
            <option value={150}>150%</option>
            <option value={200}>200%</option>
          </select>
          <a
            href={pdf.url}
            download
            className="bg-secondary text-white px-4 py-2 rounded-lg hover:bg-green-600 transition flex items-center"
          >
            <FaDownload className="mr-2" />
            Download
          </a>
        </div>
      </div>
      <div className="flex-1 overflow-auto flex items-center justify-center p-4">
        <iframe
          src={pdf.url}
          title={pdf.name}
          style={{
            width: `${zoom}%`,
            height: '100%',
            maxHeight: '100%'
          }}
          className="border-2 border-gray-600"
        />
      </div>
    </div>
  );
};

export default PDFViewer;
