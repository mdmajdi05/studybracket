import React from 'react';
import { FaStar, FaQuoteLeft } from 'react-icons/fa';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Aarav Singh',
      class: 'Class 12 Student',
      school: 'Delhi Public School',
      rating: 5,
      text: 'StudyBracket helped me score 95 in mathematics! The materials are so well-structured and easy to understand. Highly recommended!',
      image: '👨‍🎓'
    },
    {
      name: 'Priya Sharma',
      class: 'Class 10 Student',
      school: 'Mount Abu School',
      rating: 5,
      text: 'I improved my science score from 70 to 92 using these study materials. The PDFs are really comprehensive and cover everything.',
      image: '👩‍🎓'
    },
    {
      name: 'Rohan Kumar',
      class: 'Class 11 Student',
      school: 'Ryan International',
      rating: 5,
      text: 'Best free resource for CBSE students! The videos and notes are prepared by real teachers. Worth every bit of attention!',
      image: '👨‍🎓'
    },
    {
      name: 'Ananya Gupta',
      class: 'Class 9 Student',
      school: 'Delhi Public School',
      rating: 5,
      text: 'Started using StudyBracket from class 9. Now in class 12 and still using it. Trust me, it really works!',
      image: '👩‍🎓'
    }
  ];

  return (
    <div className="py-20 bg-gradient-to-b from-white to-light">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-dark mb-4">What Students Say</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Join thousands of successful CBSE students who trusted StudyBracket
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, idx) => (
            <div 
              key={idx}
              className="card p-6 hover:shadow-xl transition duration-300"
              style={{animation: `slideInUp 0.5s ease-out ${idx * 0.1}s both`}}
            >
              <div className="flex items-center mb-4">
                <div className="text-4xl mr-3">{testimonial.image}</div>
                <div>
                  <h3 className="font-bold text-dark">{testimonial.name}</h3>
                  <p className="text-xs text-gray-500">{testimonial.school}</p>
                </div>
              </div>

              <div className="flex mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <FaStar key={i} className="text-yellow-400 text-sm" />
                ))}
              </div>

              <div className="mb-3">
                <FaQuoteLeft className="text-primary text-lg opacity-50 mb-2" />
                <p className="text-gray-600 text-sm italic leading-relaxed">{testimonial.text}</p>
              </div>

              <p className="text-xs text-secondary font-semibold">{testimonial.class}</p>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 bg-gradient-to-r from-primary to-secondary text-white p-12 rounded-2xl">
          <div className="text-center">
            <div className="text-5xl font-bold mb-2">50,000+</div>
            <p>Active Students</p>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold mb-2">4.9★</div>
            <p>Average Rating</p>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold mb-2">95%</div>
            <p>Success Rate</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
