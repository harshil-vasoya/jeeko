import Image from "next/image"
import Link from "next/link"

export default function WP80Page() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <Link href="/products/agricultural/water-pumps" className="text-blue-600 hover:text-blue-800 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
            <path
              fillRule="evenodd"
              d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z"
              clipRule="evenodd"
            />
          </svg>
          Back to Water Pumps
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <div className="bg-white rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/images/water-pump-wp80.jpg"
              alt="Jeeko WP80 Water Pump"
              width={600}
              height={400}
              className="w-full h-auto"
            />
          </div>
          <div className="grid grid-cols-4 gap-2 mt-4">
            {/* Additional product images would go here */}
            <div className="bg-gray-100 rounded-lg p-2">
              <Image
                src="/images/water-pump-wp80.jpg"
                alt="Jeeko WP80 Water Pump"
                width={150}
                height={100}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>

        <div>
          <h1 className="text-3xl font-bold mb-4">Jeeko WP80 Water Pump</h1>
          <div className="bg-gray-100 p-4 rounded-lg mb-6">
            <h2 className="text-xl font-semibold mb-2">Key Specifications</h2>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="font-medium w-40">Pump Type:</span>
                <span>Diesel Water Pump</span>
              </li>
              <li className="flex items-start">
                <span className="font-medium w-40">Model:</span>
                <span>WP80</span>
              </li>
              <li className="flex items-start">
                <span className="font-medium w-40">Suction Capacity:</span>
                <span>3 inches</span>
              </li>
              <li className="flex items-start">
                <span className="font-medium w-40">Flow Rate:</span>
                <span>Up to 60,000 liters/hour</span>
              </li>
              <li className="flex items-start">
                <span className="font-medium w-40">Engine Type:</span>
                <span>4-stroke, air-cooled diesel engine</span>
              </li>
              <li className="flex items-start">
                <span className="font-medium w-40">Power Output:</span>
                <span>8.0 HP</span>
              </li>
              <li className="flex items-start">
                <span className="font-medium w-40">Fuel Tank Capacity:</span>
                <span>5.5 liters</span>
              </li>
              <li className="flex items-start">
                <span className="font-medium w-40">Max Head:</span>
                <span>32 meters</span>
              </li>
            </ul>
          </div>

          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-2">Product Description</h2>
            <p className="text-gray-700 mb-4">
              The Jeeko WP80 is a high-capacity 3-inch diesel water pump engineered for demanding agricultural and
              industrial applications. Powered by a robust 8.0 HP diesel engine, this professional-grade pump delivers
              exceptional performance with a flow rate of up to 60,000 liters per hour.
            </p>
            <p className="text-gray-700 mb-4">
              Constructed with heavy-duty materials including a cast iron pump body and impeller, the WP80 is built to
              withstand harsh operating conditions and provide years of reliable service. The fuel-efficient diesel
              engine ensures lower operating costs and extended run times between refueling.
            </p>
            <p className="text-gray-700">
              This versatile water pump is ideal for large-scale irrigation, flood control, construction site
              dewatering, and water transfer applications where high volume and reliability are essential.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">Features</h2>
            <ul className="list-disc pl-5 space-y-1 text-gray-700">
              <li>High-capacity 3-inch inlet and outlet</li>
              <li>Powerful 8.0 HP diesel engine</li>
              <li>Heavy-duty cast iron construction</li>
              <li>Self-priming design with quick priming time</li>
              <li>Low fuel consumption for extended operation</li>
              <li>Oil alert system for engine protection</li>
              <li>Portable design with tubular steel frame</li>
              <li>Anti-vibration mounts for smooth operation</li>
              <li>Handles clean water and water with solids up to 8mm</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-6">Applications</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-blue-600 mb-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Large-Scale Irrigation</h3>
            <p className="text-gray-600">
              Efficiently irrigate large agricultural fields, plantations, and commercial farms.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-blue-600 mb-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Construction Dewatering</h3>
            <p className="text-gray-600">Quickly remove water from construction sites, excavations, and trenches.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-blue-600 mb-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Emergency Flood Control</h3>
            <p className="text-gray-600">Handle emergency water removal during floods and heavy rainfall situations.</p>
          </div>
        </div>
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-6">Related Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg overflow-hidden shadow-md">
            <Link href="/products/agricultural/water-pumps/wd-50">
              <div className="relative h-48">
                <Image src="/images/water-pump-wd50.jpg" alt="Jeeko WD50 Water Pump" fill className="object-cover" />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">Jeeko WD50 Water Pump</h3>
                <p className="text-gray-600 text-sm mb-2">2-inch compact water pump for smaller irrigation needs</p>
                <span className="text-blue-600 font-medium">View Details</span>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
