import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"
import { getDieselWaterPumps, getPetrolWaterPumps } from "@/lib/products"

export default function WaterPumpsPage() {
  const dieselPumps = getDieselWaterPumps()
  const petrolPumps = getPetrolWaterPumps()

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
          <span className="text-sm text-gray-900 font-medium">Water Pumps</span>
        </div>

        <div className="flex flex-col items-center text-center mb-12">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-4">Kishan King Water Pumps</h1>
          <p className="text-lg text-gray-600 max-w-2xl">
            Efficient water management solutions for agriculture, construction, and emergency applications
          </p>
        </div>
{/* 
        <div className="bg-white p-8 rounded-lg shadow-md mb-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="relative h-[300px] rounded-lg overflow-hidden">
              <Image src="/images/water-pump-wd50.jpg" alt="Kishan King Water Pumps" fill className="object-cover" />
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-4">Why Choose Kishan King Water Pumps?</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center mt-0.5">
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
                      className="h-3 w-3 text-blue-600"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">High Performance</h3>
                    <p className="text-gray-600">
                      Powerful engines and efficient pump designs deliver exceptional water flow rates
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center mt-0.5">
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
                      className="h-3 w-3 text-blue-600"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Fuel Efficiency</h3>
                    <p className="text-gray-600">Optimized for maximum runtime with minimal fuel consumption</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center mt-0.5">
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
                      className="h-3 w-3 text-blue-600"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Durable Construction</h3>
                    <p className="text-gray-600">
                      Built with high-quality materials to ensure longevity and withstand demanding conditions
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center mt-0.5">
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
                      className="h-3 w-3 text-blue-600"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Versatile Applications</h3>
                    <p className="text-gray-600">
                      Suitable for a wide range of water transfer needs, from irrigation to flood control
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}

        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-6">Diesel Water Pumps</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {dieselPumps.map((pump, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
                <div className="h-56 relative">
                  <Image
                    src={pump.imageSrc || "/placeholder.svg?height=200&width=200&query=water+pump"}
                    alt={pump.name}
                    fill
                    className="object-contain p-4"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-bold">{pump.name}</h3>
                    <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-1 rounded">Diesel</span>
                  </div>
                  <p className="text-gray-600 mb-4">{pump.description}</p>
                  <div className="mb-4">
                    <h4 className="font-medium mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {pump.features.slice(0, 4).map((feature, idx) => (
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
                            className="h-4 w-4 text-blue-600 flex-shrink-0 mt-0.5"
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
                      <Link href={`/products/water-pumps/${pump.slug}`}>View Details</Link>
                    </Button>
                    <Button asChild variant="outline">
                      <Link href="/contact">Request Quote</Link>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-6">Petrol Water Pumps</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {petrolPumps.map((pump, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
                <div className="h-56 relative">
                  <Image
                    src={pump.imageSrc || "/placeholder.svg?height=200&width=200&query=water+pump"}
                    alt={pump.name}
                    fill
                    className="object-contain p-4"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-bold">{pump.name}</h3>
                    <span className="bg-amber-100 text-amber-800 text-xs font-medium px-2 py-1 rounded">Petrol</span>
                  </div>
                  <p className="text-gray-600 mb-4">{pump.description}</p>
                  <div className="mb-4">
                    <h4 className="font-medium mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {pump.features.slice(0, 4).map((feature, idx) => (
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
                            className="h-4 w-4 text-amber-600 flex-shrink-0 mt-0.5"
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
                      <Link href={`/products/water-pumps/${pump.slug}`}>View Details</Link>
                    </Button>
                    <Button asChild variant="outline">
                      <Link href="/contact">Request Quote</Link>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-blue-50 p-8 rounded-lg">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl font-bold mb-4">Need Help Choosing the Right Water Pump?</h2>
              <p className="text-gray-600 mb-6">
                Our team of experts is ready to assist you in finding the perfect water pump solution for your specific
                needs. Contact us today for personalized assistance.
              </p>
              <Button asChild className="bg-brand-secondary hover:bg-brand-secondary/90">
                <Link href="/contact">Contact Our Experts</Link>
              </Button>
            </div>
            <div className="relative h-[250px] rounded-lg overflow-hidden">
              <Image src="/images/customer-support.jpg" alt="Customer Support" fill className="object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
