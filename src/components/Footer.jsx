import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { classes } from '../data/coursesData';

const Footer = () => {
    return (
        <footer className="bg-dark text-white pt-16 pb-8">
            <div className="container-custom">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
                    {/* Brand */}
                    <div className="lg:col-span-1">
                        {/* <div className="flex items-center space-x-2 mb-4">
                        <div className="bg-gradient-to-br from-primary to-secondary px-3 py-2 rounded-lg font-bold">
                            SB
                        </div>
                        <div>
                            <h3 className="text-lg font-bold">
                                <span className="text-primary">Study</span>
                                <span className="text-secondary">Bracket</span>
                            </h3>
                            <p className="text-xs text-gray-400">CBSE Success</p>
                        </div>
                    </div> */}

                        <Link to="/" className="flex items-center space-x-2">
                            {/* <div className="bg-gradient-to-br from-primary to-secondary text-white px-3 py-2 rounded-lg font-bold text-lg"> */}
                            <div className="">
                                {/* SB */}


                            </div><img className='h-12 w-12 rounded-lg' src="/logo.png" alt="StudyBracket Logo" />
                            <div>
                                <span className="text-2xl font-bold text-yellow-500 block leading-none">StudyBracket</span>
                                <span className="text-xs text-white font-semibold">CBSE Success</span>
                            </div>
                        </Link>
                        <p className="text-gray-400 mb-4 text-sm">
                            The most trusted online education platform for CBSE students from Class 9 to 12.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="text-gray-400 hover:text-primary transition duration-300 text-xl">
                                <FaFacebook />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-primary transition duration-300 text-xl">
                                <FaTwitter />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-primary transition duration-300 text-xl">
                                <FaInstagram />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-primary transition duration-300 text-xl">
                                <FaYoutube />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4 text-primary border-b border-primary pb-2">Classes</h4>
                        <ul className="space-y-2 grid grid-cols-2">
                            {/*  <li>
                            <Link to="/class/9" className="text-gray-400 hover:text-primary transition duration-300">Class 9</Link></li>
                        <li><Link to="/class/10" className="text-gray-400 hover:text-primary transition duration-300">Class 10 (Board)</Link></li>
                        <li><Link to="/class/11" className="text-gray-400 hover:text-primary transition duration-300">Class 11 (Pre-Board)</Link></li>
                        <li><Link to="/class/12" className="text-gray-400 hover:text-primary transition duration-300">Class 12 (Final)</Link></li>
                        <li><Link to="/classes" className="text-gray-400 hover:text-primary transition duration-300 font-semibold">View All Classes</Link> 
                        </li>*/}


                            {classes.map(cls => (
                                <li key={cls.id} onClick={() =>window.scrollTo({top: 0, behavior: "smooth"})}
>
                                    <Link to={`/class/${cls.id}`} className="text-gray-400 hover:text-primary transition duration-300">{cls.name}</Link>
                                </li>
                            ))}

                        </ul>
                    </div>

                    {/* Resources */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4 text-secondary border-b border-secondary pb-2">Resources</h4>
                        <ul className="space-y-2">
                            <li><Link to="/courses" className="text-gray-400 hover:text-secondary transition duration-300">All Courses</Link></li>
                            <li><Link to="/" className="text-gray-400 hover:text-secondary transition duration-300">Sample Papers</Link></li>
                            <li><Link to="/" className="text-gray-400 hover:text-secondary transition duration-300">Study Materials</Link></li>
                            <li><Link to="/" className="text-gray-400 hover:text-secondary transition duration-300">Video Lectures</Link></li>
                            <li><Link to="/" className="text-gray-400 hover:text-secondary transition duration-300">Mock Tests</Link></li>
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4 text-yellow-400 border-b border-yellow-400 pb-2">Company</h4>
                        <ul className="space-y-2">
                            <li><Link to="/about" className="text-gray-400 hover:text-yellow-400 transition duration-300">About Us</Link></li>
                            <li><Link to="/contact" className="text-gray-400 hover:text-yellow-400 transition duration-300">Contact Us</Link></li>
                            <li><Link to="/privacy" className="text-gray-400 hover:text-yellow-400 transition duration-300">Privacy Policy</Link></li>
                            <li><Link to="/terms" className="text-gray-400 hover:text-yellow-400 transition duration-300">Terms & Conditions</Link></li>
                            <li><a href="#" className="text-gray-400 hover:text-yellow-400 transition duration-300">Blog</a></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4 text-blue-300 border-b border-blue-300 pb-2">Contact</h4>
                        <ul className="space-y-3">
                            <li className="flex items-start">
                                <FaPhone className="text-blue-300 mt-1 mr-3 flex-shrink-0" />
                                <div>
                                    <p className="text-xs text-gray-400">Call Us</p>
                                    <p className="text-gray-200 font-semibold">+91-9876-543-210</p>
                                </div>
                            </li>
                            <li className="flex items-start">
                                <FaEnvelope className="text-blue-300 mt-1 mr-3 flex-shrink-0" />
                                <div>
                                    <p className="text-xs text-gray-400">Email</p>
                                    <p className="text-gray-200 font-semibold">info@studybracket.com</p>
                                </div>
                            </li>
                            <li className="flex items-start">
                                <FaMapMarkerAlt className="text-blue-300 mt-1 mr-3 flex-shrink-0" />
                                <div>
                                    <p className="text-xs text-gray-400">Location</p>
                                    <p className="text-gray-200 font-semibold">New Delhi, India</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Newsletter Section */}
                <div className="flex justify-center flex-wrap  bg-gradient-to-r from-primary/20 to-secondary/20 p-8 rounded-lg mb-12">
                    <div className="max-w-md">
                        <h4 className="text-lg font-bold mb-2">Stay Updated!</h4>
                        <p className="text-gray-400 text-sm mb-4">Get latest study materials and exam tips delivered to your inbox.</p>
                        <div className="flex flex-wrap">
                            <input
                                type="email"
                                placeholder="Your email..."
                                className="flex-1 px-4 py-2 rounded-l-lg bg-gray-800 text-white placeholder-gray-500 focus:outline-none"
                            />
                            <button className="bg-primary text-white px-6 py-2 rounded-r-lg hover:bg-blue-600 transition font-bold">
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="border-t border-gray-800 pt-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-6">
                        <div>
                            <h4 className="font-semibold text-white mb-2">50,000+ Students</h4>
                            <p className="text-gray-400 text-sm">Actively learning and improving their scores</p>
                        </div>
                        <div>
                            <h4 className="font-semibold text-white mb-2">4.9★ Rating</h4>
                            <p className="text-gray-400 text-sm">Trusted by CBSE students across India</p>
                        </div>
                        <div>
                            <h4 className="font-semibold text-white mb-2">100% Free</h4>
                            <p className="text-gray-400 text-sm">No subscriptions, completely free access</p>
                        </div>
                    </div>

                    <div className="border-t border-gray-800 pt-8 text-center">
                        <p className="text-gray-400 mb-2">
                            © 2024 StudyBracket.com - All Rights Reserved
                        </p>
                        <p className="text-gray-500 text-sm mb-4">
                            Helping CBSE students succeed since 2024 | Based in New Delhi, India
                        </p>
                        {/* <p className="text-gray-500 text-sm border-t border-gray-700 pt-4">
                            Developed by <a href="https://majdi-portfolio.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-secondary transition duration-300 font-semibold">Majdi</a> ✨
                        </p> */}
                        <p className="text-gray-500 text-sm border-t border-gray-700 pt-4">
                            Developed by <a href="https://majdi-portfolio.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-secondary transition duration-300 font-semibold">Majdi</a> 
                            {/* ✨ */}
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;