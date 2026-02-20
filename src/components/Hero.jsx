import React from 'react';
import { Link } from 'react-router-dom';
import { FaGraduationCap, FaBook, FaDownload, FaStar, FaAward, FaFire, FaCheckCircle } from 'react-icons/fa';

const Hero = () => {
return (
    <div className="relative overflow-hidden bg-gradient-to-br from-primary via-blue-400 to-secondary text-white py-15">
        {/* Animated background elements */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-white opacity-10 rounded-full -translate-x-1/2 -translate-y-1/2 animate-pulse"></div>
        <div className="absolute top-1/2 right-0 w-80 h-80 bg-yellow-300 opacity-5 rounded-full translate-x-1/2 animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-white opacity-5 rounded-full translate-y-1/2 animate-pulse" style={{animationDelay: '2s'}}></div>
        
        <div className="container-custom relative z-10 py-20 md:py-32">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full mb-8 backdrop-blur-sm border border-white/20 animate-fade-in">
                <FaFire className="text-yellow-300" />
                <span className="text-sm font-semibold">🎉 Live for 50K+ Students</span>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-8 animate-slide-in-left">
                    {/* Main Heading */}
                    <div>
                        <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
                            <span className="block mb-2">Crush Your</span>
                            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 via-yellow-100 to-white">Board Exams</span>
                            <span className="block text-blue-100">Like a Pro 🚀</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-blue-50 leading-relaxed mb-2 font-light">
                            The #1 CBSE Study Platform for Classes 9-12
                        </p>
                        <p className="text-lg text-blue-100 leading-relaxed">
                            50+ Expert Courses • 1000+ Video Lectures • 500+ PDFs • 100% Free
                        </p>
                    </div>

                    {/* Trust Indicators */}
                    <div className="grid grid-cols-3 gap-4">
                        <div className="bg-white/10 backdrop-blur-sm px-4 py-3 rounded-xl border border-white/20 hover:bg-white/20 transition">
                            <div className="text-2xl font-bold text-yellow-300">95%</div>
                            <div className="text-sm text-blue-100">Board Success</div>
                        </div>
                        <div className="bg-white/10 backdrop-blur-sm px-4 py-3 rounded-xl border border-white/20 hover:bg-white/20 transition">
                            <div className="text-2xl font-bold text-green-300">4.9★</div>
                            <div className="text-sm text-blue-100">5000+ Reviews</div>
                        </div>
                        <div className="bg-white/10 backdrop-blur-sm px-4 py-3 rounded-xl border border-white/20 hover:bg-white/20 transition">
                            <div className="text-2xl font-bold text-cyan-300">₹0</div>
                            <div className="text-sm text-blue-100">Completely Free</div>
                        </div>
                    </div>

                    {/* CTA Buttons */}
                    <div className="flex flex-wrap gap-4 pt-4">
                        <Link to="/classes" className="group relative px-8 py-4 rounded-xl font-bold text-lg overflow-hidden shadow-xl transition duration-300 transform hover:-translate-y-1">
                            <div className="absolute inset-0 bg-white group-hover:bg-gray-100 transition"></div>
                            <div className="relative flex items-center justify-center text-primary">
                                <FaGraduationCap className="mr-3 group-hover:scale-125 transition" />
                                Start Learning Free
                            </div>
                        </Link>
                        <Link to="/courses" className="group px-8 py-4 rounded-xl font-bold text-lg border-2 border-white hover:bg-white hover:text-primary transition duration-300 transform hover:-translate-y-1 shadow-lg flex items-center">
                            <FaBook className="mr-3 group-hover:scale-125 transition" />
                            Explore All Courses
                        </Link>
                    </div>

                    {/* Feature List */}
                    <div className="space-y-3 pt-4">
                        <div className="flex items-center gap-3 text-blue-50">
                            <FaCheckCircle className="text-green-300 text-lg flex-shrink-0" />
                            <span>Access all study materials instantly</span>
                        </div>
                        <div className="flex items-center gap-3 text-blue-50">
                            <FaCheckCircle className="text-green-300 text-lg flex-shrink-0" />
                            <span>Expert teachers & verified content</span>
                        </div>
                        <div className="flex items-center gap-3 text-blue-50">
                            <FaCheckCircle className="text-green-300 text-lg flex-shrink-0" />
                            <span>24/7 doubt support community</span>
                        </div>
                    </div>
                </div>

                {/* Right Side - Image & Cards */}
                <div className="hidden md:block relative animate-slide-in-right">
                    <div className="relative">
                        {/* Floating card 1 */}
                        <div className="absolute z-11 -top-8 -left-12 bg-white/95 text-dark px-6 py-4 rounded-xl shadow-2xl z-10 animate-bounce" style={{animationDuration: '3s'}}>
                            <div className="flex  items-center gap-2">
                                <FaAward className="text-yellow-500 text-xl" />
                                <div>
                                    <div className="font-bold text-sm">Top Rated</div>
                                    <div className="text-xs text-gray-600">by students</div>
                                </div>
                            </div>
                        </div>

                        {/* Main Image */}
                        <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-b from-yellow-300 to-secondary rounded-3xl blur-2xl opacity-30"></div>
                            <img 
                                src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" 
                                alt="Students learning" 
                                className="rounded-3xl shadow-2xl relative z-10 transform hover:scale-105 transition duration-500 border-4 border-white/20"
                            />
                        </div>

                        {/* Floating card 2 */}
                        <div className="absolute -bottom-6 -right-8 bg-white/95 text-dark px-6 py-4 rounded-xl shadow-2xl z-10 animate-bounce" style={{animationDuration: '3.5s', animationDelay: '0.5s'}}>
                            <div className="flex items-center gap-2">
                                <FaDownload className="text-secondary text-xl" />
                                <div>
                                    <div className="font-bold text-sm">500+ PDFs</div>
                                    <div className="text-xs text-gray-600">ready to download</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Stats Bar */}
            {/* <div className="mt-16 pt-12 border-t border-white/20 grid grid-cols-4 md:grid-cols-4 gap-4">
                <div className="text-center">
                    <div className="text-3xl md:text-4xl font-bold text-yellow-300 mb-1">50+</div>
                    <div className="text-sm text-blue-100">Courses</div>
                </div>
                <div className="text-center">
                    <div className="text-3xl md:text-4xl font-bold text-green-300 mb-1">1K+</div>
                    <div className="text-sm text-blue-100">Videos</div>
                </div>
                <div className="text-center">
                    <div className="text-3xl md:text-4xl font-bold text-cyan-300 mb-1">500+</div>
                    <div className="text-sm text-blue-100">PDFs</div>
                </div>
                <div className="text-center">
                    <div className="text-3xl md:text-4xl font-bold text-pink-300 mb-1">50K+</div>
                    <div className="text-sm text-blue-100">Students</div>
                </div>
            </div> */}
        </div>
    </div>
);
};

export default Hero;