'use client';

import React, { useState } from 'react';
import { generators, waterPumps, tillerMachines } from '@/lib/products';

const FAQsPage = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [openFaqs, setOpenFaqs] = useState<number[]>([]);

  const toggleFaq = (index: number) => {
    setOpenFaqs(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const faqs = [
    {
      category: 'Generators',
      questions: [
        {
          question: 'What is the difference between portable and industrial generators?',
          answer: 'Portable generators (like JK-1300 and JK-3200E) are designed for smaller power needs and mobility, while industrial generators (like JK-5500E and JK-10500E) offer higher power output and are built for continuous operation in demanding environments.'
        },
        {
          question: 'How often should I perform maintenance on my generator?',
          answer: 'Regular maintenance is crucial. We recommend checking oil levels before each use, changing oil every 50-100 hours of operation, and replacing air filters every 100 hours. For detailed maintenance schedules, refer to your specific model\'s manual.'
        },
        {
          question: 'Can I run my generator continuously?',
          answer: 'Yes, but it depends on the model. Industrial generators like JK-7500E and JK-10500E are designed for longer continuous operation. Always follow the manufacturer\'s guidelines for continuous operation and ensure proper ventilation.'
        },
        {
          question: 'What type of fuel should I use?',
          answer: 'All our generators run on unleaded gasoline. We recommend using fresh fuel and adding a fuel stabilizer if the generator will be stored for more than 30 days.'
        }
      ]
    },
    {
      category: 'Water Pumps',
      questions: [
        {
          question: 'What is the difference between diesel and petrol water pumps?',
          answer: 'Diesel pumps (like WD-50 and WD-80) are more fuel-efficient and better for continuous operation, while petrol pumps (like WP-50 and WP-80) are lighter and easier to start. Choose based on your specific needs and usage patterns.'
        },
        {
          question: 'How do I prime my water pump?',
          answer: 'Fill the pump casing with water before starting. For submersible pumps, ensure they are fully submerged. For surface pumps, follow the priming procedure in your manual. Never run the pump dry.'
        },
        {
          question: 'What maintenance is required for water pumps?',
          answer: 'Regular maintenance includes checking oil levels, cleaning filters, inspecting seals, and ensuring proper lubrication. Diesel pumps require more frequent maintenance than petrol pumps.'
        },
        {
          question: 'How do I choose the right pump for my needs?',
          answer: 'Consider factors like required flow rate, head height, power source preference, and intended use. Our technical team can help you select the most suitable model for your specific requirements.'
        }
      ]
    },
    {
      category: 'Tiller Machines',
      questions: [
        {
          question: 'What is the difference between HT-950D and HT-1350D models?',
          answer: 'The HT-950D is a 5.5HP model suitable for medium-sized fields, while the HT-1350D is a 10HP heavy-duty model designed for larger areas and more intensive tilling operations.'
        },
        {
          question: 'How do I maintain my tiller machine?',
          answer: 'Regular maintenance includes checking and changing engine oil, cleaning air filters, inspecting tines, and ensuring proper lubrication of moving parts. Follow the maintenance schedule in your manual.'
        },
        {
          question: 'What accessories are available for tiller machines?',
          answer: 'We offer various accessories including deep hoe kits, ditching blades, ploughs, potato ploughs, antiwind blade kits, and wheels. These can be purchased separately to enhance your machine\'s capabilities.'
        },
        {
          question: 'How do I prepare my tiller for storage?',
          answer: 'Clean the machine thoroughly, drain the fuel or add stabilizer, change the oil, and store in a dry place. Remove the battery if equipped with electric start. Cover the machine to protect it from dust.'
        }
      ]
    },
    {
      category: 'General',
      questions: [
        {
          question: 'What is the warranty period for your products?',
          answer: 'Warranty periods vary by product and component. Generally, engines have 2-3 years warranty, while electrical components have 1 year. Please refer to our warranty page for detailed information.'
        },
        {
          question: 'How can I get spare parts for my equipment?',
          answer: 'Spare parts are available through our authorized dealers and service centers. You can also contact our customer service for assistance in locating the nearest parts supplier.'
        },
        {
          question: 'Do you provide training for equipment operation?',
          answer: 'Yes, we offer training sessions for proper operation and maintenance of our equipment. Contact your nearest dealer or our customer service for training schedules.'
        },
        {
          question: 'How do I contact technical support?',
          answer: 'You can reach our technical support team through our contact page, or call our toll-free number. We also offer online support through our website.'
        }
      ]
    }
  ];

  const filteredFaqs = activeCategory === 'all' 
    ? faqs 
    : faqs.filter(faq => faq.category === activeCategory);

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-red-600 text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-xl">
            Find answers to common questions about our products
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="container mx-auto px-4 py-16">
        {/* Category Filter */}
        <div className="flex flex-wrap gap-4 mb-12">
          <button
            onClick={() => setActiveCategory('all')}
            className={`px-6 py-2 rounded-lg ${
              activeCategory === 'all'
                ? 'bg-red-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            All Categories
          </button>
          {faqs.map((category) => (
            <button
              key={category.category}
              onClick={() => setActiveCategory(category.category)}
              className={`px-6 py-2 rounded-lg ${
                activeCategory === category.category
                  ? 'bg-red-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category.category}
            </button>
          ))}
        </div>

        {/* FAQs */}
        <div className="space-y-6">
          {filteredFaqs.map((category) => (
            <div key={category.category} className="space-y-4">
              {category.questions.map((faq, index) => (
                <div
                  key={index}
                  className="border border-gray-200 rounded-lg overflow-hidden"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full px-6 py-4 text-left bg-white hover:bg-gray-50 flex justify-between items-center"
                  >
                    <span className="text-lg font-medium text-gray-900">
                      {faq.question}
                    </span>
                    <svg
                      className={`w-5 h-5 text-gray-500 transform transition-transform ${
                        openFaqs.includes(index) ? 'rotate-180' : ''
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                  {openFaqs.includes(index) && (
                    <div className="px-6 py-4 bg-gray-50">
                      <p className="text-gray-700">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* Support Section */}
        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold text-black mb-4">Still Have Questions?</h2>
          <p className="text-gray-700 mb-4">Our customer support team is here to help you with any additional questions.</p>
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

export default FAQsPage;
