'use client';

import React from 'react';
import Link from 'next/link';

const PrivacyPolicyPage = () => {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-red-600 text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Privacy Policy
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
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Introduction</h2>
              <p className="text-gray-700">
                Jeeko and Kishan King ("we," "our," or "us") are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our websites or use our services related to our power equipment products.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Information We Collect</h2>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-800">2.1 Personal Information</h3>
                <p className="text-gray-700">
                  We may collect personal information that you voluntarily provide to us when you:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Register for an account</li>
                  <li>Request product information or quotes</li>
                  <li>Schedule service appointments</li>
                  <li>Subscribe to our newsletters</li>
                  <li>Contact our customer support</li>
                  <li>Participate in brand-specific programs</li>
                  <li>Register products for warranty</li>
                </ul>
                <p className="text-gray-700">
                  This information may include your name, email address, phone number, address, payment information, and brand preferences.
                </p>

                <h3 className="text-xl font-semibold text-gray-800">2.2 Usage Data</h3>
                <p className="text-gray-700">
                  We automatically collect certain information about your device and how you interact with our websites, including:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>IP address</li>
                  <li>Browser type</li>
                  <li>Device information</li>
                  <li>Pages visited</li>
                  <li>Time spent on pages</li>
                  <li>Brand-specific content interactions</li>
                  <li>Product preferences</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. How We Use Your Information</h2>
              <p className="text-gray-700">
                We use the collected information for various purposes, including:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Providing and maintaining our services</li>
                <li>Processing your orders and service requests</li>
                <li>Communicating about products and services</li>
                <li>Improving our websites and customer experience</li>
                <li>Preventing fraud and ensuring security</li>
                <li>Complying with legal obligations</li>
                <li>Personalizing brand-specific content</li>
                <li>Managing warranty registrations</li>
                <li>Sending brand-specific updates and offers</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Information Sharing</h2>
              <p className="text-gray-700">
                We may share your information with:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Service providers who assist in our operations</li>
                <li>Authorized dealers and service centers</li>
                <li>Legal authorities when required by law</li>
                <li>Third parties with your consent</li>
                <li>Brand-specific partners and affiliates</li>
                <li>Warranty service providers</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Data Security</h2>
              <p className="text-gray-700">
                We implement appropriate security measures to protect your personal information. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Your Rights</h2>
              <p className="text-gray-700">
                You have the right to:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Access your personal information</li>
                <li>Correct inaccurate information</li>
                <li>Request deletion of your information</li>
                <li>Opt-out of marketing communications</li>
                <li>Object to processing of your information</li>
                <li>Choose brand-specific communication preferences</li>
                <li>Manage warranty-related communications</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Cookies and Tracking</h2>
              <p className="text-gray-700">
                We use cookies and similar tracking technologies to improve your browsing experience and analyze website traffic. You can control cookies through your browser settings.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Children's Privacy</h2>
              <p className="text-gray-700">
                Our services are not intended for individuals under the age of 18. We do not knowingly collect personal information from children.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Changes to This Policy</h2>
              <p className="text-gray-700">
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the "Last updated" date.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Contact Us</h2>
              <p className="text-gray-700">
                If you have any questions about this Privacy Policy, please contact us at:
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

export default PrivacyPolicyPage;
