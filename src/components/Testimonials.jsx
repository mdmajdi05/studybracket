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




// import React, { useState, useEffect, useRef } from "react";
// import { FaStar, FaQuoteLeft, FaChevronLeft, FaChevronRight } from "react-icons/fa";

// const Testimonials = () => {
//   const testimonials = [
//     {
//       name: 'Aarav Singh',
//       class: 'Class 12 Student',
//       school: 'Delhi Public School',
//       rating: 5,
//       text: 'StudyBracket helped me score 95 in mathematics! The materials are so well-structured and easy to understand. Highly recommended!',
//       image: '👨‍🎓'
//     },
//     {
//       name: 'Priya Sharma',
//       class: 'Class 10 Student',
//       school: 'Mount Abu School',
//       rating: 5,
//       text: 'I improved my science score from 70 to 92 using these study materials. The PDFs are really comprehensive and cover everything.',
//       image: '👩‍🎓'
//     },
//     {
//       name: 'Rohan Kumar',
//       class: 'Class 11 Student',
//       school: 'Ryan International',
//       rating: 5,
//       text: 'Best free resource for CBSE students! The videos and notes are prepared by real teachers. Worth every bit of attention!',
//       image: '👨‍🎓'
//     },
//     {
//       name: 'Ananya Gupta',
//       class: 'Class 9 Student',
//       school: 'Delhi Public School',
//       rating: 5,
//       text: 'Started using StudyBracket from class 9. Now in class 12 and still using it. Trust me, it really works!',
//       image: '👩‍🎓'
//     }
//   ];

//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [visibleCards, setVisibleCards] = useState(4);
//   const intervalRef = useRef(null);

//   // Responsive cards count
//   useEffect(() => {
//     const updateVisibleCards = () => {
//       if (window.innerWidth < 640) setVisibleCards(1);
//       else if (window.innerWidth < 1024) setVisibleCards(2);
//       else setVisibleCards(4);
//     };

//     updateVisibleCards();
//     window.addEventListener("resize", updateVisibleCards);
//     return () => window.removeEventListener("resize", updateVisibleCards);
//   }, []);

//   // Auto slide
//   useEffect(() => {
//     intervalRef.current = setInterval(() => {
//       nextSlide();
//     }, 3000);

//     return () => clearInterval(intervalRef.current);
//   }, [currentIndex]);

//   const nextSlide = () => {
//     setCurrentIndex((prev) => (prev + 1) % testimonials.length);
//   };

//   const prevSlide = () => {
//     setCurrentIndex(
//       (prev) => (prev - 1 + testimonials.length) % testimonials.length
//     );
//   };

//   const getVisibleTestimonials = () => {
//     let items = [];
//     for (let i = 0; i < visibleCards; i++) {
//       items.push(
//         testimonials[(currentIndex + i) % testimonials.length]
//       );
//     }
//     return items;
//   };

//   return (
//     <div className="py-20 bg-gradient-to-b from-white to-light">
//       <div className="container-custom">

//         <div className="text-center mb-16">
//           <h2 className="text-4xl md:text-5xl font-bold text-dark mb-4">
//             What Students Say
//           </h2>
//         </div>

//         {/* Slider */}
//         <div className="relative">

//           {/* Left Button */}
//           <button
//             onClick={prevSlide}
//             className="absolute -left-5 top-1/2 transform -translate-y-1/2 bg-white shadow-lg p-3 rounded-full z-10 hover:scale-110 transition"
//           >
//             <FaChevronLeft />
//           </button>

//           {/* Cards */}
//           <div className="flex gap-6 transition-all duration-500 ease-in-out">
//             {getVisibleTestimonials().map((testimonial, idx) => (
//               <div
//                 key={idx}
//                 className="card p-6 flex-1 min-w-0 bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300"
//               >
//                 <div className="flex items-center mb-4">
//                   <div className="text-4xl mr-3">{testimonial.image}</div>
//                   <div>
//                     <h3 className="font-bold text-dark">
//                       {testimonial.name}
//                     </h3>
//                     <p className="text-xs text-gray-500">
//                       {testimonial.school}
//                     </p>
//                   </div>
//                 </div>

//                 <div className="flex mb-3">
//                   {[...Array(testimonial.rating)].map((_, i) => (
//                     <FaStar key={i} className="text-yellow-400 text-sm" />
//                   ))}
//                 </div>

//                 <FaQuoteLeft className="text-primary text-lg opacity-50 mb-2" />
//                 <p className="text-gray-600 text-sm italic leading-relaxed mb-3">
//                   {testimonial.text}
//                 </p>

//                 <p className="text-xs text-secondary font-semibold">
//                   {testimonial.class}
//                 </p>
//               </div>
//             ))}
//           </div>

//           {/* Right Button */}
//           <button
//             onClick={nextSlide}
//             className="absolute -right-5 top-1/2 transform -translate-y-1/2 bg-white shadow-lg p-3 rounded-full z-10 hover:scale-110 transition"
//           >
//             <FaChevronRight />
//           </button>
//         </div>

//         {/* Dots */}
//         <div className="flex justify-center mt-8 space-x-2">
//           {testimonials.map((_, index) => (
//             <div
//               key={index}
//               onClick={() => setCurrentIndex(index)}
//               className={`h-2 w-2 rounded-full cursor-pointer transition ${
//                 index === currentIndex ? "bg-primary w-4" : "bg-gray-300"
//               }`}
//             />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Testimonials;
