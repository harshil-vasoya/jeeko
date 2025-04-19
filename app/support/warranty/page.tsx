import React from 'react';
import Image from 'next/image';

const WarrantyPage = () => {
  const warrantyItems = [
    {
      title: 'Generators',
      description: 'Our generators come with a comprehensive warranty covering manufacturing defects and workmanship. The warranty period varies based on the model and usage conditions.',
      coverage: [
        '2-3 years warranty on engine components',
        '1 year warranty on electrical components',
        '6 months warranty on consumable parts'
      ]
    },
    {
      title: 'Water Pumps',
      description: 'We provide extensive warranty coverage for our water pumps to ensure reliable performance in various applications.',
      coverage: [
        '2 years warranty on pump body and motor',
        '1 year warranty on mechanical seals',
        '6 months warranty on impeller and bearings'
      ]
    },
    {
      title: 'Tiller Machines',
      description: 'Our tiller machines are built for durability and come with a robust warranty program.',
      coverage: [
        '2 years warranty on engine and transmission',
        '1 year warranty on tines and gearbox',
        '6 months warranty on belts and bearings'
      ]
    }
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-red-600 text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Warranty Information
          </h1>
          <p className="text-xl">
            Your peace of mind is our priority
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {warrantyItems.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-6 border border-gray-200 hover:shadow-xl transition-shadow duration-300"
            >
              <h2 className="text-2xl font-bold text-red-600 mb-4">{item.title}</h2>
              <p className="text-gray-700 mb-4">{item.description}</p>
              <h3 className="text-lg font-semibold text-black mb-2">Coverage Includes:</h3>
              <ul className="list-disc list-inside text-gray-700">
                {item.coverage.map((coverage, idx) => (
                  <li key={idx} className="mb-1">{coverage}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Warranty Terms */}
        <div className="mt-16 bg-gray-50 p-8 rounded-lg">
          <h2 className="text-2xl font-bold text-black mb-4">Warranty Terms & Conditions</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Warranty is valid only for the original purchaser with proof of purchase</li>
            <li>Regular maintenance and service as per manufacturer's guidelines is required</li>
            <li>Warranty does not cover damage due to misuse, accidents, or natural disasters</li>
            <li>Unauthorized modifications void the warranty</li>
            <li>Warranty claims must be made through authorized service centers</li>
          </ul>
        </div>

        {/* Contact Section */}
        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold text-black mb-4">Need Help with Warranty?</h2>
          <p className="text-gray-700 mb-4">Our customer service team is here to assist you with any warranty-related queries.</p>
          <a 
            href="/contact" 
            className="inline-block bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-colors"
          >
            Contact Support
          </a>
        </div>
      </section>
    </main>
  );
};

export default WarrantyPage;
