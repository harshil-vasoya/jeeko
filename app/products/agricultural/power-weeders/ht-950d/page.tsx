import Image from "next/image"
import Link from "next/link"

export default function HT950DPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <Link href="/products/agricultural/power-weeders" className="text-blue-600 hover:text-blue-800 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd" />
          </svg>
          Back to Power Weeders
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <div className="bg-white rounded-lg overflow-hidden shadow-lg">
            <Image 
              src="/images/power-weeder-ht950d.jpg" 
              alt="Kishan King HT950D Power Weeder" 
              width={600} 
              height={400} 
              className="w-full h-auto"
            />
          </div>
          <div className="grid grid-cols-4 gap-2 mt-4">
            {/* Additional product images would go here */}
            <div className="bg-gray-100 rounded-lg p-2">
              <Image 
                src="/images/power-weeder-ht950d.jpg" 
                alt="Kishan King HT950D Power Weeder" 
                width={150} 
                height={100} 
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>

        <div>
          <h1 className="text-3xl font-bold mb-4">Kishan King HT950D Power Weeder</h1>
          <div className="bg-gray-100 p-4 rounded-lg mb-6">
            <h2 className="text-xl font-semibold mb-2">Key Specifications</h2>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="font-medium w-40">Engine:</span>
                <span>Diesel, 4-stroke, air-cooled</span>
              </li>
              <li className="flex items-start">
                <span className="font-medium w-40">Power:</span>
                <span>9.5 HP</span>
              </li>
              <li className="flex items-start">
                <span className="font-medium w-40">Tilling Width:</span>
                <span>Adjustable, 60-90 cm</span>
              </li>
              <li className="flex items-start">
                <span className="font-medium w-40">Tilling Depth:</span>
                <span>Up to 25 cm</span>
              </li>
              <li className="flex items-start">
                <span className="font-medium w-40">Transmission:</span>
                <span>Gear-driven, 2 forward + 1 reverse</span>
              </li>
              <li className="flex items-start">
                <span className="font-medium w-40">Fuel Tank Capacity:</span>
                <span>4.5 liters</span>
              </li>
              <li className="flex items-start">
                <span className="font-medium w-40">Starting System:</span>
                <span>Recoil start</span>
              </li>
              <li className="flex items-start">
                <span className="font-medium w-40">Weight:</span>
                <span>Approximately 145 kg</span>
              </li>
            </ul>
          </div>

          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-2">Product Description</h2>
            <p className="text-gray-700 mb-4">
              The Kishan King HT950D is a versatile 9.5 HP diesel power weeder designed for efficient soil cultivation, 
              weeding, and field preparation. This medium-duty power weeder is perfect for small to medium-sized farms, 
              offering excellent performance and fuel efficiency.
            </p>
            <p className="text-gray-700 mb-4">
              With its adjustable tilling width and depth, the HT950D can be customized to suit various crop types and 
              soil conditions. The powerful diesel engine provides reliable performance even in challenging terrain, 
              while the gear-driven transmission ensures smooth operation and durability.
            </p>
            <p className="text-gray-700">
              The ergonomic design includes adjustable handles for operator comfort and reduced fatigue during extended 
              use. Built with high-quality materials, the HT950D is engineered to provide years of dependable service 
              for agricultural professionals.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">Features</h2>
            <ul className="list-disc pl-5 space-y-1 text-gray-700">
              <li>Fuel-efficient 9.5 HP diesel engine</li>
              <li>Adjustable working width from 60-90 cm</li>
              <li>Heavy-duty gear transmission system</li>
              <li>Ergonomic design with adjustable handles</li>
              <li>Multiple tilling blade options</li>
              <li>Durable steel construction</li>
              <li>Easy maintenance access points</li>
              <li>Compatible with various farming attachments</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-6">Available Accessories</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          <div className="bg-white p-4 rounded-lg shadow-md">
            <div className="relative h-32 mb-3">
              <Image 
                src="/images/accessory-plough.jpg" 
                alt="Plough Attachment" 
                fill
                className="object-contain"
              />
            </div>
            <h3 className="text-center font-medium">Plough</h3>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <div className="relative h-32 mb-3">
              <Image 
                src="/images/accessory-potato-plough.jpg" 
                alt="Potato Plough Attachment" 
                fill
                className="object-contain"
              />
            </div>
            <h3 className="text-center font-medium">Potato Plough</h3>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <div className="relative h-32 mb-3">
              <Image 
                src="/images/accessory-ditching-blade.jpg" 
                alt="Ditching Blade Attachment" 
                fill
                className="object-contain"
              />
            </div>
            <h3 className="text-center font-medium">Ditching Blade</h3>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <div className="relative h-32 mb-3">
              <Image 
                src="/images/accessory-deep-hoe.jpg" 
                alt="Deep Hoe Attachment" 
                fill
                className="object-contain"
              />
            </div>
            <h3 className="text-center font-medium">Deep Hoe</h3>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <div className="relative h-32 mb-3">
              <Image 
                src="/images/accessory-wheel.jpg" 
                alt="Transport Wheel" 
                fill
                className="object-contain"
              />
            </div>
            <h3 className="text-center font-medium">Transport Wheel</h3>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <div className="relative h-32 mb-3">
              <Image 
                src="/images/accessory-antiwind-blade.jpg" 
                alt="Anti-Wind Blade" 
                fill
                className="object-contain"
              />
            </div>
            <h3 className="text-center font-medium">Anti-Wind Blade</h3>
          </div>
        </div>
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-6">Related Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg overflow-hidden shadow-md">
            <Link href="/products/agricultural/power-weeders/ht-1050d">
              <div className="relative h-48">
                <Image 
                  src="/images/power-weeder-ht1050d.jpg" 
                  alt="Kishan
I'll help you generate product and product detail pages for all the products you've listed in the three categories: generators, water pumps, and tiller machines.

Let me create the water pump product detail page template first:

\
