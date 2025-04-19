import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"

export default function AgriculturalEquipmentPage() {
  return (
    <section className="py-12 md:py-16 lg:py-20">
      <div className="container">
        <div className="flex flex-wrap items-center gap-2 mb-8">
          <Link href="/" className="text-sm text-gray-500 hover:text-gray-900">
            Home
          </Link>
          <ChevronRight className="h-4 w-4 text-gray-400" />
          <Link href="/products" className="text-sm text-gray-500 hover:text-gray-900">
            Products
          </Link>
          <ChevronRight className="h-4 w-4 text-gray-400" />
          <span className="text-sm text-gray-900 font-medium">Agricultural Equipment</span>
        </div>

        <div className="flex flex-col items-center text-center mb-12">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-4">
            Kishan King Agricultural Equipment
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl">
            Advanced farming solutions designed for the modern Indian farmer
          </p>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-md mb-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="relative h-[300px] rounded-lg overflow-hidden">
              <Image
                src="/images/kishan-king-equipment.jpg"
                alt="Kishan King Agricultural Equipment"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-4">About Kishan King</h2>
              <p className="text-gray-600 mb-4">
                Kishan King is our specialized agricultural equipment brand, dedicated to providing innovative and
                reliable farming solutions that enhance productivity and efficiency for Indian farmers.
              </p>
              <p className="text-gray-600 mb-4">
                Our range of agricultural equipment is designed with the unique needs of Indian farming in mind,
                combining durability, performance, and ease of use to help farmers achieve better results with less
                effort.
              </p>
              <div className="flex items-center gap-4 mt-6">
                <Image
                  src="/images/kishan-king-logo.png"
                  alt="Kishan King Logo"
                  width={64}
                  height={64}
                  className="w-16 h-auto"
                />
                <span className="text-lg font-medium">Empowering Indian Farmers</span>
              </div>
            </div>
          </div>
        </div>

        <h2 className="text-2xl font-bold mb-8">Our Product Categories</h2>
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Power Weeders Category */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200 transition-all hover:shadow-xl">
            <div className="h-64 relative">
              <Image src="/images/power-weeder-ht1050d.jpg" alt="Power Weeders" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                <div className="p-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">Power Weeders</h3>
                  <p className="mb-4">Multi-functional tilling equipment for various farming operations</p>
                </div>
              </div>
            </div>
            <div className="p-6">
              <div className="mb-4">
                <h4 className="font-medium mb-2">Available Models:</h4>
                <ul className="space-y-1">
                  <li className="text-sm text-gray-600 flex items-start gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    HT950D - 5.5HP diesel engine
                  </li>
                  <li className="text-sm text-gray-600 flex items-start gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    HT1050D - 6HP diesel engine
                  </li>
                  <li className="text-sm text-gray-600 flex items-start gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    HT1350D - 10HP diesel engine
                  </li>
                </ul>
              </div>
              <Button asChild className="w-full bg-brand-secondary hover:bg-brand-secondary/90">
                <Link href="/products/agricultural/power-weeders">Explore Power Weeders</Link>
              </Button>
            </div>
          </div>

          {/* Water Pumps Category */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200 transition-all hover:shadow-xl">
            <div className="h-64 relative">
              <Image src="/images/water-pump-wd50.jpg" alt="Water Pumps" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                <div className="p-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">Water Pumps</h3>
                  <p className="mb-4">Efficient water management solutions for irrigation and water transfer</p>
                </div>
              </div>
            </div>
            <div className="p-6">
              <div className="mb-4">
                <h4 className="font-medium mb-2">Available Models:</h4>
                <ul className="space-y-1">
                  <li className="text-sm text-gray-600 flex items-start gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    WD50 - 4.8HP diesel water pump
                  </li>
                  <li className="text-sm text-gray-600 flex items-start gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    WP80 - 7HP petrol water pump
                  </li>
                </ul>
              </div>
              <Button asChild className="w-full bg-brand-secondary hover:bg-brand-secondary/90">
                <Link href="/products/agricultural/water-pumps">Explore Water Pumps</Link>
              </Button>
            </div>
          </div>
        </div>

        <div className="bg-green-50 p-8 rounded-lg mb-16">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold mb-2">Accessories & Attachments</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Enhance the versatility of your Kishan King equipment with our range of specialized accessories and
              attachments
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
            <div className="bg-white p-4 rounded-lg shadow-md text-center">
              <div className="h-24 relative mb-2">
                <Image src="/images/accessory-deep-hoe.jpg" alt="Deep Hoe Kit" fill className="object-contain" />
              </div>
              <span className="text-sm font-medium">Deep Hoe Kit</span>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md text-center">
              <div className="h-24 relative mb-2">
                <Image
                  src="/images/accessory-ditching-blade.jpg"
                  alt="Ditching Blade"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="text-sm font-medium">Ditching Blade</span>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md text-center">
              <div className="h-24 relative mb-2">
                <Image src="/images/accessory-plough.jpg" alt="Plough" fill className="object-contain" />
              </div>
              <span className="text-sm font-medium">Plough</span>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md text-center">
              <div className="h-24 relative mb-2">
                <Image src="/images/accessory-potato-plough.jpg" alt="Potato Plough" fill className="object-contain" />
              </div>
              <span className="text-sm font-medium">Potato Plough</span>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md text-center">
              <div className="h-24 relative mb-2">
                <Image
                  src="/images/accessory-antiwind-blade.jpg"
                  alt="Antiwind Blade Kit"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="text-sm font-medium">Antiwind Blade</span>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md text-center">
              <div className="h-24 relative mb-2">
                <Image src="/images/accessory-wheel.jpg" alt="Wheel Kit" fill className="object-contain" />
              </div>
              <span className="text-sm font-medium">Wheel Kit</span>
            </div>
          </div>
          <div className="text-center mt-6">
            <Button asChild className="bg-brand-secondary hover:bg-brand-secondary/90">
              <Link href="/contact">Inquire About Accessories</Link>
            </Button>
          </div>
        </div>

        <div className="bg-gray-900 text-white p-8 rounded-lg">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl font-bold mb-4">Need Expert Advice?</h2>
              <p className="text-gray-300 mb-6">
                Our team of agricultural equipment specialists is ready to help you choose the right equipment for your
                specific farming needs. Contact us today for personalized assistance.
              </p>
              <Button asChild size="lg" className="bg-brand-secondary hover:bg-brand-secondary/90">
                <Link href="/contact">Contact Our Experts</Link>
              </Button>
            </div>
            <div className="relative h-[250px] rounded-lg overflow-hidden">
              <Image src="/images/farming-scene.jpg" alt="Farming Scene" fill className="object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
