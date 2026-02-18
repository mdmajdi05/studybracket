import React from 'react';

const Privacy = () => {
  return (
    <div className="py-16">
      <div className="container-custom max-w-3xl">
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-dark mb-6">Privacy Policy</h1>
          <p className="text-gray-600 text-sm mb-8">Last Updated: February 2024</p>
        </div>

        <div className="card p-8 space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-dark mb-4">1. Introduction</h2>
            <p className="text-gray-600 leading-relaxed">
              StudyBracket ("we", "us", or "our") operates the studybracket.com website. This page informs you of our policies 
              regarding the collection, use, and disclosure of personal data when you use our Service and the choices you have 
              associated with that data.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-dark mb-4">2. Information Collection and Use</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              We collect several different types of information:
            </p>
            <ul className="text-gray-600 space-y-2 ml-4">
              <li>• <strong>Contact Information:</strong> Name, email address, phone number</li>
              <li>• <strong>Usage Data:</strong> Browser type, pages visited, time on pages</li>
              <li>• <strong>Download Information:</strong> Which PDFs you download</li>
              <li>• <strong>Cookies:</strong> We may use cookies to enhance your experience</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-dark mb-4">3. Use of Data</h2>
            <p className="text-gray-600 leading-relaxed">
              StudyBracket uses the collected data for various purposes including:
            </p>
            <ul className="text-gray-600 space-y-2 ml-4 mt-4">
              <li>• To provide and maintain our Service</li>
              <li>• To improve and personalize your experience</li>
              <li>• To understand and analyze how you use our Service</li>
              <li>• To send you updates and promotional content (with your consent)</li>
              <li>• To monitor the usage of our Service</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-dark mb-4">4. Security of Data</h2>
            <p className="text-gray-600 leading-relaxed">
              The security of your data is important to us but remember that no method of transmission over the Internet 
              is 100% secure. While we strive to use commercially acceptable means to protect your personal data, we cannot 
              guarantee its absolute security.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-dark mb-4">5. Changes to This Privacy Policy</h2>
            <p className="text-gray-600 leading-relaxed">
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new 
              Privacy Policy on this page and updating the "Last Updated" date at the top.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-dark mb-4">6. Contact Us</h2>
            <p className="text-gray-600 leading-relaxed">
              If you have any questions about this Privacy Policy, please contact us at:
            </p>
            <p className="text-gray-600 mt-4 space-y-1">
              <div>StudyBracket</div>
              <div>Email: privacy@studybracket.com</div>
              <div>Address: New Delhi, India</div>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
