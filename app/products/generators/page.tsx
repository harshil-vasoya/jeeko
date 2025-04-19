import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"
import { getProductsByCategory } from "@/lib/products"

export default function GeneratorsPage() {
  const generators = getProductsByCategory("generator")

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
          <span className="text-sm text-gray-900 font-medium">Generators</span>
        </div>

        <div className="flex flex-col items-center text-center mb-12">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-4">Jeeko Generators</h1>
          <p className="text-lg text-gray-600 max-w-2xl">
            Reliable power solutions for homes, businesses, and agricultural applications
          </p>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-md mb-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl font-bold mb-4">Why Choose Jeeko Generators?</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-red-100 flex items-center justify-center mt-0.5">
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
                      className="h-3 w-3 text-red-600"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Reliable Performance</h3>
                    <p className="text-gray-600">
                      Engineered to provide consistent power output even in challenging conditions
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-red-100 flex items-center justify-center mt-0.5">
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
                      className="h-3 w-3 text-red-600"
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
                  <div className="h-6 w-6 rounded-full bg-red-100 flex items-center justify-center mt-0.5">
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
                      className="h-3 w-3 text-red-600"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Durable Construction</h3>
                    <p className="text-gray-600">
                      Built with high-quality materials to ensure longevity and withstand daily use
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-red-100 flex items-center justify-center mt-0.5">
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
                      className="h-3 w-3 text-red-600"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Comprehensive Warranty</h3>
                    <p className="text-gray-600">
                      Backed by our commitment to quality with excellent after-sales support
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative h-[300px] rounded-lg overflow-hidden">
              <Image src="/images/jeeko-generators.jpg" alt="Jeeko Generators" fill className="object-cover" />
            </div>
          </div>
        </div>

        <h2 className="text-2xl font-bold mb-8">Our Generator Range</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {generators.map((generator, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
              <div className="h-56 relative">
                <Image
                  src={generator.imageSrc || "/placeholder.svg?height=200&width=200&query=generator"}
                  alt={generator.name}
                  fill
                  className="object-contain"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-bold">{generator.name}</h3>
                  <span className="bg-[#d32029]/20 text-[#d32029] text-xs font-medium px-2 py-1 rounded">
                    Generator
                  </span>
                </div>
                <p className="text-gray-600 mb-4">{generator.description}</p>
                <div className="mb-4">
                  <h4 className="font-medium mb-2">Key Features:</h4>
                  <ul className="space-y-1">
                    {generator.features.slice(0, 4).map((feature, idx) => (
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
                  <Button asChild className="bg-brand-primary hover:bg-brand-primary/90">
                    <Link href={`/products/generators/${generator.slug}`}>View Details</Link>
                  </Button>
                  <Button asChild variant="outline">
                    <Link href="/contact">Request Quote</Link>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gray-50 p-8 rounded-lg">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold mb-2">Need Help Choosing the Right Generator?</h2>
            <p className="text-gray-600">
              Our team of experts is ready to assist you in finding the perfect power solution for your needs.
            </p>
          </div>
          <div className="flex justify-center">
            <Button asChild size="lg" className="bg-brand-primary hover:bg-brand-primary/90">
              <Link href="/contact">Contact Our Sales Team</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
