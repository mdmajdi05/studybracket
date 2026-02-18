import React, { useState } from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.subject && formData.message) {
      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSubmitted(false), 3000);
    }
  };

  return (
    <div className="py-16">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-dark mb-6">Contact Us</h1>
          <p className="text-xl text-gray-600">Have questions? We'd love to hear from you. Get in touch with us today!</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Form */}
          <div className="card p-8">
            <h2 className="text-2xl font-bold text-dark mb-6">Send us a Message</h2>
            {submitted && (
              <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-6">
                ✓ Thank you! We'll get back to you soon.
              </div>
            )}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-dark font-semibold mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Your name"
                  required
                />
              </div>
              <div>
                <label className="block text-dark font-semibold mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="your@email.com"
                  required
                />
              </div>
              <div>
                <label className="block text-dark font-semibold mb-2">Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="What is this about?"
                  required
                />
              </div>
              <div>
                <label className="block text-dark font-semibold mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                  placeholder="Your message here..."
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-primary text-white py-3 rounded-lg font-bold hover:bg-blue-600 transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            <div className="card p-6 flex items-start">
              <div className="text-3xl text-primary mr-4 mt-1">
                <FaPhone />
              </div>
              <div>
                <h3 className="text-xl font-bold text-dark mb-2">Phone</h3>
                <p className="text-gray-600">+91 98765 43210</p>
                <p className="text-gray-600">+91 99876 54321</p>
              </div>
            </div>

            <div className="card p-6 flex items-start">
              <div className="text-3xl text-secondary mr-4 mt-1">
                <FaEnvelope />
              </div>
              <div>
                <h3 className="text-xl font-bold text-dark mb-2">Email</h3>
                <p className="text-gray-600">info@studybracket.com</p>
                <p className="text-gray-600">support@studybracket.com</p>
              </div>
            </div>

            <div className="card p-6 flex items-start">
              <div className="text-3xl text-blue-500 mr-4 mt-1">
                <FaMapMarkerAlt />
              </div>
              <div>
                <h3 className="text-xl font-bold text-dark mb-2">Address</h3>
                <p className="text-gray-600">StudyBracket Office</p>
                <p className="text-gray-600">New Delhi, India</p>
              </div>
            </div>

            <div className="card p-6">
              <h3 className="text-xl font-bold text-dark mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-2xl text-gray-600 hover:text-primary transition">
                  <FaFacebook />
                </a>
                <a href="#" className="text-2xl text-gray-600 hover:text-primary transition">
                  <FaTwitter />
                </a>
                <a href="#" className="text-2xl text-gray-600 hover:text-primary transition">
                  <FaInstagram />
                </a>
                <a href="#" className="text-2xl text-gray-600 hover:text-primary transition">
                  <FaYoutube />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="bg-light p-12 rounded-lg">
          <h2 className="text-3xl font-bold text-dark mb-8 text-center">FAQs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-bold text-dark mb-2">Q: How do I download PDF notes?</h4>
              <p className="text-gray-600">A: Navigate to your class page and click the download button on any PDF resource.</p>
            </div>
            <div>
              <h4 className="font-bold text-dark mb-2">Q: Are all courses free?</h4>
              <p className="text-gray-600">A: Yes, all courses and PDF materials are completely free for all students.</p>
            </div>
            <div>
              <h4 className="font-bold text-dark mb-2">Q: Can I access courses offline?</h4>
              <p className="text-gray-600">A: You can download PDFs and notes to access offline. Videos require internet connection.</p>
            </div>
            <div>
              <h4 className="font-bold text-dark mb-2">Q: How often are new courses added?</h4>
              <p className="text-gray-600">A: We add new courses and resources regularly. Check back often for updates!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
