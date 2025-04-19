'use client';

import React from 'react';
import Link from 'next/link';

const TermsOfServicePage = () => {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-red-600 text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Terms of Service
          </h1>
          <p className="text-xl">
            Last updated: March 2024
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto prose prose-lg">
          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Acceptance of Terms</h2>
              <p className="text-gray-700">
                By accessing and using Jeeko and Kishan King's website and services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Services Description</h2>
              <p className="text-gray-700">
                We provide power equipment solutions under our brands:
              </p>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">Jeeko</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>Industrial generators</li>
                    <li>Commercial water pumps</li>
                    <li>Heavy-duty tiller machines</li>
                    <li>Professional-grade equipment</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">Kishan King</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>Agricultural generators</li>
                    <li>Farm water pumps</li>
                    <li>Agricultural tiller machines</li>
                    <li>Farmer-friendly equipment</li>
                  </ul>
                </div>
                <p className="text-gray-700">
                  Both brands offer:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Equipment maintenance and repair services</li>
                  <li>Technical support and consultation</li>
                  <li>Warranty services</li>
                  <li>Product information and documentation</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. User Responsibilities</h2>
              <p className="text-gray-700">
                As a user of our services, you agree to:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Provide accurate and complete information</li>
                <li>Use equipment according to manufacturer guidelines</li>
                <li>Maintain proper safety protocols</li>
                <li>Comply with all applicable laws and regulations</li>
                <li>Not misuse or damage our equipment or services</li>
                <li>Use products for their intended purposes only</li>
                <li>Follow brand-specific usage guidelines</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Product Warranty</h2>
              <p className="text-gray-700">
                Our products come with brand-specific warranties:
              </p>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">Jeeko Warranty</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>Industrial-grade warranty coverage</li>
                    <li>Extended service options</li>
                    <li>Priority technical support</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">Kishan King Warranty</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>Agricultural equipment warranty</li>
                    <li>Seasonal maintenance programs</li>
                    <li>Farmer support services</li>
                  </ul>
                </div>
                <p className="text-gray-700">
                  All warranty claims are subject to:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Proper product registration</li>
                  <li>Adherence to maintenance schedules</li>
                  <li>Use according to manufacturer guidelines</li>
                  <li>Valid proof of purchase</li>
                  <li>Compliance with warranty terms and conditions</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Service Appointments</h2>
              <p className="text-gray-700">
                When scheduling service appointments:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Specify the brand (Jeeko or Kishan King) of your equipment</li>
                <li>Provide accurate equipment information</li>
                <li>Be available during scheduled time slots</li>
                <li>Ensure safe access to equipment</li>
                <li>Cancel or reschedule with 24 hours notice</li>
                <li>Pay applicable service fees as agreed</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Payment Terms</h2>
              <p className="text-gray-700">
                All payments must be made in accordance with:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Agreed pricing and payment schedules</li>
                <li>Valid payment methods</li>
                <li>Applicable taxes and fees</li>
                <li>Refund policies as specified</li>
                <li>Late payment penalties if applicable</li>
                <li>Brand-specific payment terms where applicable</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Intellectual Property</h2>
              <p className="text-gray-700">
                All content, including but not limited to:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Product designs and specifications</li>
                <li>Technical documentation</li>
                <li>Branding and logos (Jeeko and Kishan King)</li>
                <li>Website content</li>
                <li>Training materials</li>
                <li>Brand-specific marketing materials</li>
              </ul>
              <p className="text-gray-700 mt-4">
                are the property of our company and protected by intellectual property laws.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Limitation of Liability</h2>
              <p className="text-gray-700">
                Neither Jeeko nor Kishan King shall be liable for:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Indirect or consequential damages</li>
                <li>Equipment misuse or improper operation</li>
                <li>Force majeure events</li>
                <li>Third-party actions or services</li>
                <li>Unauthorized modifications to equipment</li>
                <li>Brand-specific usage outside intended purposes</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Termination</h2>
              <p className="text-gray-700">
                We reserve the right to terminate services if:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Terms are violated</li>
                <li>Payments are not made</li>
                <li>Safety is compromised</li>
                <li>Fraud is detected</li>
                <li>Legal requirements are not met</li>
                <li>Brand guidelines are not followed</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Changes to Terms</h2>
              <p className="text-gray-700">
                We may update these terms at any time. Continued use of our services after changes constitutes acceptance of the new terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Governing Law</h2>
              <p className="text-gray-700">
                These terms are governed by the laws of the jurisdiction in which our company operates.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Contact Information</h2>
              <p className="text-gray-700">
                For questions about these terms, please contact us:
              </p>
              <div className="mt-4">
                <Link 
                  href="/contact" 
                  className="text-red-600 hover:text-red-700 font-medium"
                >
                  Contact Support
                </Link>
              </div>
            </section>
          </div>
        </div>
      </section>
    </main>
  );
};

export default TermsOfServicePage;
