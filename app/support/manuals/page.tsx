import React from 'react';
import Link from 'next/link';
import { generators, waterPumps, tillerMachines } from '@/lib/products';

const ManualsPage = () => {
  const productManuals = [
    {
      category: 'Generators',
      manuals: Object.values(generators).map(generator => ({
        title: generator.name,
        models: [generator.slug],
        pdfUrl: `/manuals/generators/${generator.slug}.pdf`,
        lastUpdated: '2024-03-01',
        description: generator.description,
        features: generator.features
      }))
    },
    {
      category: 'Water Pumps',
      subCategories: [
        {
          name: 'Diesel Water Pumps',
          manuals: Object.values(waterPumps)
            .filter(pump => pump.subCategory === 'Diesel Water Pump')
            .map(pump => ({
              title: pump.name,
              models: [pump.slug],
              pdfUrl: `/manuals/pumps/diesel/${pump.slug}.pdf`,
              lastUpdated: '2024-03-01',
              description: pump.description,
              features: pump.features
            }))
        },
        {
          name: 'Petrol Water Pumps',
          manuals: Object.values(waterPumps)
            .filter(pump => pump.subCategory === 'Petrol Water Pump')
            .map(pump => ({
              title: pump.name,
              models: [pump.slug],
              pdfUrl: `/manuals/pumps/petrol/${pump.slug}.pdf`,
              lastUpdated: '2024-03-01',
              description: pump.description,
              features: pump.features
            }))
        }
      ]
    },
    {
      category: 'Tiller Machines',
      manuals: Object.values(tillerMachines).map(tiller => ({
        title: tiller.name,
        models: [tiller.slug],
        pdfUrl: `/manuals/tillers/${tiller.slug}.pdf`,
        lastUpdated: '2024-03-01',
        description: tiller.description,
        features: tiller.features
      }))
    }
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-red-600 text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Product Manuals
          </h1>
          <p className="text-xl">
            Find detailed manuals for all our products
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {productManuals.map((category, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-6 border border-gray-200 hover:shadow-xl transition-shadow duration-300"
            >
              <h2 className="text-2xl font-bold text-red-600 mb-6">{category.category}</h2>
              <div className="space-y-6">
                {category.subCategories ? (
                  category.subCategories.map((subCategory, subIndex) => (
                    <div key={subIndex} className="mb-6">
                      <h3 className="text-lg font-semibold text-black mb-4">{subCategory.name}</h3>
                      {subCategory.manuals.map((manual, manualIndex) => (
                        <div key={manualIndex} className="border-b border-gray-200 pb-4 last:border-0">
                          <h4 className="text-md font-medium text-black mb-2">{manual.title}</h4>
                          <div className="text-sm text-gray-600 mb-2">
                            <span className="font-medium">Model:</span> {manual.models.join(', ')}
                          </div>
                          <div className="flex justify-between items-center">
                            <Link
                              href={manual.pdfUrl}
                              className="text-red-600 hover:text-red-700 font-medium flex items-center"
                            >
                              <svg
                                className="w-5 h-5 mr-2"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                                />
                              </svg>
                              Download Manual
                            </Link>
                            <span className="text-xs text-gray-500">
                              Updated: {manual.lastUpdated}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  ))
                ) : (
                  category.manuals.map((manual, manualIndex) => (
                    <div key={manualIndex} className="border-b border-gray-200 pb-4 last:border-0">
                      <h3 className="text-lg font-semibold text-black mb-2">{manual.title}</h3>
                      <div className="text-sm text-gray-600 mb-2">
                        <span className="font-medium">Model:</span> {manual.models.join(', ')}
                      </div>
                      <div className="flex justify-between items-center">
                        <Link
                          href={manual.pdfUrl}
                          className="text-red-600 hover:text-red-700 font-medium flex items-center"
                        >
                          <svg
                            className="w-5 h-5 mr-2"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                            />
                          </svg>
                          Download Manual
                        </Link>
                        <span className="text-xs text-gray-500">
                          Updated: {manual.lastUpdated}
                        </span>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Support Section */}
        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold text-black mb-4">Need Additional Help?</h2>
          <p className="text-gray-700 mb-4">Our technical support team is available to assist you with any questions about our products.</p>
          <Link 
            href="/contact" 
            className="inline-block bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-colors"
          >
            Contact Support
          </Link>
        </div>
      </section>
    </main>
  );
};

export default ManualsPage;
