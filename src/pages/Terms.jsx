import React from 'react';

const Terms = () => {
  return (
    <div className="py-16">
      <div className="container-custom max-w-3xl">
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-dark mb-6">Terms and Conditions</h1>
          <p className="text-gray-600 text-sm mb-8">Last Updated: February 2024</p>
        </div>

        <div className="card p-8 space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-dark mb-4">1. Acceptance of Terms</h2>
            <p className="text-gray-600 leading-relaxed">
              By accessing and using the StudyBracket website, you accept and agree to be bound by the terms and provision of this agreement.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-dark mb-4">2. Use License</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Permission is granted to temporarily download one copy of the materials (information or software) on StudyBracket's website 
              for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under 
              this license you may not:
            </p>
            <ul className="text-gray-600 space-y-2 ml-4">
              <li>• Modify or copy the materials</li>
              <li>• Use the materials for any commercial purpose</li>
              <li>• Remove any copyright or other proprietary notations from the materials</li>
              <li>• Transfer the materials to another person or "mirror" the materials on any other server</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-dark mb-4">3. Disclaimer</h2>
            <p className="text-gray-600 leading-relaxed">
              The materials on StudyBracket's website are provided on an "as is" basis. StudyBracket makes no warranties, expressed or implied, 
              and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of 
              merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-dark mb-4">4. Limitations</h2>
            <p className="text-gray-600 leading-relaxed">
              In no event shall StudyBracket or its suppliers be liable for any damages (including, without limitation, damages for loss of 
              data or profit, or due to business interruption) arising out of the use or inability to use the materials on StudyBracket's website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-dark mb-4">5. Accuracy of Materials</h2>
            <p className="text-gray-600 leading-relaxed">
              The materials appearing on StudyBracket's website could include technical, typographical, or photographic errors. StudyBracket 
              does not warrant that any of the materials on its website are accurate, complete, or current.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-dark mb-4">6. Links</h2>
            <p className="text-gray-600 leading-relaxed">
              StudyBracket has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. 
              The inclusion of any link does not imply endorsement by StudyBracket of the site. Use of any such linked website is at the user's own risk.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-dark mb-4">7. Modifications</h2>
            <p className="text-gray-600 leading-relaxed">
              StudyBracket may revise these terms of service for its website at any time without notice. By using this website, you are 
              agreeing to be bound by the then-current version of these terms of service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-dark mb-4">8. Governing Law</h2>
            <p className="text-gray-600 leading-relaxed">
              These terms and conditions are governed by and construed in accordance with the laws of India, and you irrevocably submit 
              to the exclusive jurisdiction of the courts in that location.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-dark mb-4">9. Contact Information</h2>
            <p className="text-gray-600 leading-relaxed">
              If you have any questions about these Terms, please contact us at:
            </p>
            <p className="text-gray-600 mt-4 space-y-1">
              <div>Email: terms@studybracket.com</div>
              <div>Address: New Delhi, India</div>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Terms;
