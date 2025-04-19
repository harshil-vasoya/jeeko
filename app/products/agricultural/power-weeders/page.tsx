import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"

// Power weeder products data
const powerWeeders = [
  {
    name: "HT950D",
    description: "5.5HP diesel engine, versatile farming applications",
    image: "/images/power-weeder-ht950d.jpg",
    slug: "ht-950d",
    features: [
      "Engine: 175F Diesel (5.5HP)",
      "Tilling Width: 800-950mm",
      "Gear Shifting: (-1, 0, 1, 2)",
      "Versatile for multiple applications",
    ],
  },
  {
    name: "HT1050D",
    description: "6HP diesel engine, multi-function tilling capabilities",
    image: "/images/power-weeder-ht1050d.jpg",
    slug: "ht-1050d",
    features: [
      "Engine: 178F Diesel (6HP)",
      "Tilling Width: 900-1050mm",
      "Gear Shifting: (-1, 0, 1, 2)",
      "Multiple attachments available",
    ],
  },
  {
    name: "HT1350D",
    description: "10HP diesel engine, heavy-duty performance",
    image: "/images/power-weeder-ht1350d.jpg",
    slug: "ht-1350d",
    features: [
      "Engine: 186F Diesel (10HP)",
      "Tilling Width: 1200-1350mm",
      "Electric/Manual Start",
      "Heavy-duty construction",
    ],
  },
]

export default function PowerWeedersPage() {
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
          <Link href="/products/agricultural" className="text-sm text-gray-500 hover:text-gray-900">
            Agricultural Equipment
          </Link>
          <ChevronRight className="h-4 w-4 text-gray-400" />
          <span className="text-sm text-gray-900 font-medium">Power Weeders</span>
        </div>

        <div className="flex flex-col items-center text-center mb-12">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-4">Kishan King Power Weeders</h1>
          <p className="text-lg text-gray-600 max-w-2xl">
            Advanced tilling solutions for modern farmers, designed for efficiency and versatility
          </p>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-md mb-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="relative h-[300px] rounded-lg overflow-hidden">
              <Image
                src="/images/kishan-king-equipment.jpg"
                alt="Kishan King Power Weeders"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-4">Why Choose Kishan King Power Weeders?</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mt-0.5">
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
                      className="h-3 w-3 text-green-600"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Multi-functional Design</h3>
                    <p className="text-gray-600">
                      Versatile equipment that can handle various farming operations with interchangeable attachments
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mt-0.5">
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
                      className="h-3 w-3 text-green-600"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Powerful Engines</h3>
                    <p className="text-gray-600">
                      Equipped with robust diesel engines that deliver consistent power for demanding tasks
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mt-0.5">
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
                      className="h-3 w-3 text-green-600"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Ergonomic Design</h3>
                    <p className="text-gray-600">
                      Designed with operator comfort in mind, reducing fatigue during extended use
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mt-0.5">
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
                      className="h-3 w-3 text-green-600"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Durable Construction</h3>
                    <p className="text-gray-600">
                      Built to withstand the rigors of daily agricultural use in various soil conditions
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <h2 className="text-2xl font-bold mb-8">Our Power Weeder Range</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {powerWeeders.map((weeder, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
              <div className="h-56 relative">
                <Image src={weeder.image || "/placeholder.svg"} alt={weeder.name} fill className="object-contain p-4" />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-bold">{weeder.name}</h3>
                  <span className="bg-[#8dc63f]/20 text-[#8dc63f] text-xs font-medium px-2 py-1 rounded">
                    Power Weeder
                  </span>
                </div>
                <p className="text-gray-600 mb-4">{weeder.description}</p>
                <div className="mb-4">
                  <h4 className="font-medium mb-2">Key Features:</h4>
                  <ul className="space-y-1">
                    {weeder.features.map((feature, idx) => (
                      <li key={idx} className="text-sm text-gray-600 flex items-start gap-2">
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
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button asChild className="bg-brand-secondary hover:bg-brand-secondary/90">
                    <Link href={`/products/agricultural/power-weeders/${weeder.slug}`}>View Details</Link>
                  </Button>
                  <Button asChild variant="outline">
                    <Link href="/contact">Request Quote</Link>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-green-50 p-8 rounded-lg">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl font-bold mb-4">Available Accessories</h2>
              <p className="text-gray-600 mb-4">
                Enhance the versatility of your power weeder with our range of specialized attachments:
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
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
                    className="h-5 w-5 text-green-600"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span>Deep Hoe Kit</span>
                </li>
                <li className="flex items-center gap-2">
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
                    className="h-5 w-5 text-green-600"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span>Ditching Blade</span>
                </li>
                <li className="flex items-center gap-2">
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
                    className="h-5 w-5 text-green-600"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span>Plough</span>
                </li>
                <li className="flex items-center gap-2">
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
                    className="h-5 w-5 text-green-600"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span>Potato Plough</span>
                </li>
                <li className="flex items-center gap-2">
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
                    className="h-5 w-5 text-green-600"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span>Antiwind Blade Kit</span>
                </li>
                <li className="flex items-center gap-2">
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
                    className="h-5 w-5 text-green-600"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span>Wheel Kit</span>
                </li>
              </ul>
              <Button asChild className="mt-6 bg-brand-secondary hover:bg-brand-secondary/90">
                <Link href="/contact">Inquire About Accessories</Link>
              </Button>
            </div>
            <div className="grid grid-cols-3 gap-4">
              <div className="relative h-24 rounded-lg overflow-hidden">
                <Image src="/images/accessory-deep-hoe.jpg" alt="Deep Hoe Kit" fill className="object-cover" />
              </div>
              <div className="relative h-24 rounded-lg overflow-hidden">
                <Image src="/images/accessory-ditching-blade.jpg" alt="Ditching Blade" fill className="object-cover" />
              </div>
              <div className="relative h-24 rounded-lg overflow-hidden">
                <Image src="/images/accessory-plough.jpg" alt="Plough" fill className="object-cover" />
              </div>
              <div className="relative h-24 rounded-lg overflow-hidden">
                <Image src="/images/accessory-potato-plough.jpg" alt="Potato Plough" fill className="object-cover" />
              </div>
              <div className="relative h-24 rounded-lg overflow-hidden">
                <Image
                  src="/images/accessory-antiwind-blade.jpg"
                  alt="Antiwind Blade Kit"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-24 rounded-lg overflow-hidden">
                <Image src="/images/accessory-wheel.jpg" alt="Wheel Kit" fill className="object-cover" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
