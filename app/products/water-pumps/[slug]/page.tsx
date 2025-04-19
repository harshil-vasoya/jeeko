import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ChevronRight, Download, Phone, ShoppingCart } from "lucide-react"
import { waterPumps } from "@/lib/products"
import { notFound } from "next/navigation"

export default function WaterPumpDetailPage({ params }: { params: { slug: string } }) {
  const slug = params.slug
  const product = waterPumps[slug as keyof typeof waterPumps]

  // If product not found, return 404
  if (!product) {
    notFound()
  }

  // Find related products
  const relatedProducts = Object.values(waterPumps)
    .filter((pump) => pump.slug !== slug && pump.subCategory === product.subCategory)
    .slice(0, 2)

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
          <Link href="/products/water-pumps" className="text-sm text-gray-500 hover:text-gray-900">
            Water Pumps
          </Link>
          <ChevronRight className="h-4 w-4 text-gray-400" />
          <span className="text-sm text-gray-900 font-medium">{product.name}</span>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="relative h-[400px] mb-4">
              <Image
                src={product.imageSrc || "/placeholder.svg?height=400&width=400&query=water+pump"}
                alt={product.name}
                fill
                className="object-contain"
              />
            </div>
            <div className="grid grid-cols-4 gap-2">
              <button className="border rounded-md p-2 hover:border-green-500 transition-colors">
                <div className="relative h-16">
                  <Image
                    src={product.imageSrc || "/placeholder.svg?height=100&width=100&query=water+pump+angle"}
                    alt="Front view"
                    fill
                    className="object-contain"
                  />
                </div>
              </button>
              <button className="border rounded-md p-2 hover:border-green-500 transition-colors">
                <div className="relative h-16">
                  <Image
                    src={product.imageSrc || "/placeholder.svg?height=100&width=100&query=water+pump+side"}
                    alt="Side view"
                    fill
                    className="object-contain"
                  />
                </div>
              </button>
              <button className="border rounded-md p-2 hover:border-green-500 transition-colors">
                <div className="relative h-16">
                  <Image
                    src={product.imageSrc || "/placeholder.svg?height=100&width=100&query=water+pump+top"}
                    alt="Top view"
                    fill
                    className="object-contain"
                  />
                </div>
              </button>
              <button className="border rounded-md p-2 hover:border-green-500 transition-colors">
                <div className="relative h-16">
                  <Image
                    src={product.imageSrc || "/placeholder.svg?height=100&width=100&query=water+pump+in+use"}
                    alt="In use"
                    fill
                    className="object-contain"
                  />
                </div>
              </button>
            </div>
          </div>

          <div>
            <h1 className="text-3xl font-bold tracking-tight mb-4">{product.name}</h1>
            <div className="flex items-center gap-2 mb-4">
              <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-1 rounded">
                {product.subCategory?.replace(" Water Pump", "") || "Water Pump"}
              </span>
              <span className="bg-green-100 text-green-800 text-xs font-medium px-2 py-1 rounded">In Stock</span>
            </div>
            <p className="text-gray-600 mb-6">{product.description}</p>

            <div className="mb-6">
              <h2 className="text-lg font-bold mb-3">Key Features</h2>
              <ul className="space-y-2">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-2">
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
                      className="h-5 w-5 text-green-600 flex-shrink-0"
                    >
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                      <path d="m9 11 3 3L22 4" />
                    </svg>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button className="bg-brand-secondary hover:bg-brand-secondary/90">
                <ShoppingCart className="mr-2 h-4 w-4" />
                Request Quote
              </Button>
              <Button variant="outline">
                <Download className="mr-2 h-4 w-4" />
                Download Brochure
              </Button>
            </div>

            <div className="bg-green-50 p-6 rounded-lg">
              <h2 className="text-lg font-bold mb-3">Need Help?</h2>
              <p className="text-gray-600 mb-4">
                Contact our sales team for more information about this product or to request a quote.
              </p>
              <div className="flex items-center gap-3 mb-2">
                <Phone className="h-5 w-5 text-green-600" />
                <span>+91-2827 00000 | 98989 98989</span>
              </div>
              <Button asChild variant="link" className="p-0 text-brand-secondary hover:text-brand-secondary/80">
                <Link href="/contact">Contact Sales Team</Link>
              </Button>
            </div>
          </div>
        </div>

        <Tabs defaultValue="specifications" className="w-full mb-16">
          <TabsList className="grid w-full max-w-md grid-cols-3 mx-auto">
            <TabsTrigger value="specifications">Specifications</TabsTrigger>
            <TabsTrigger value="applications">Applications</TabsTrigger>
            <TabsTrigger value="maintenance">Maintenance</TabsTrigger>
          </TabsList>

          <TabsContent value="specifications" className="mt-6">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold mb-6">Technical Specifications</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {Object.entries(product.specifications).map(([key, value], index) => (
                  <div key={index} className="flex border-b pb-2">
                    <span className="font-medium w-1/2">{key}</span>
                    <span className="text-gray-600 w-1/2">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="applications" className="mt-6">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold mb-6">Applications</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {product.applications.map((application, index) => (
                  <div key={index} className="flex items-center gap-3 p-4 border rounded-lg">
                    <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center">
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
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                        <path d="m9 11 3 3L22 4" />
                      </svg>
                    </div>
                    <span className="font-medium">{application}</span>
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="maintenance" className="mt-6">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold mb-6">Maintenance Tips</h2>
              <div className="space-y-6">
                <div className="border-b pb-4">
                  <h3 className="font-semibold text-lg mb-2">Regular Maintenance</h3>
                  <p className="text-gray-600 mb-2">
                    For optimal performance and extended lifespan of your water pump, follow these maintenance tips:
                  </p>
                  <ul className="list-disc pl-5 space-y-1 text-gray-600">
                    <li>Check oil level before each use</li>
                    <li>Replace engine oil after first 20 hours, then every 100 hours</li>
                    <li>Clean air filter every 50 hours (more often in dusty conditions)</li>
                    <li>Inspect fuel lines and connections monthly</li>
                    <li>Check and clean the pump housing after each use</li>
                  </ul>
                </div>

                <div className="border-b pb-4">
                  <h3 className="font-semibold text-lg mb-2">Troubleshooting</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium">Engine won't start</h4>
                      <ul className="list-disc pl-5 text-gray-600">
                        <li>Check fuel level and quality</li>
                        <li>Verify ignition switch is ON</li>
                        <li>Inspect spark plug</li>
                        <li>Clean air filter</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium">Pump doesn't prime</h4>
                      <ul className="list-disc pl-5 text-gray-600">
                        <li>Ensure pump housing is fully filled with water</li>
                        <li>Check for air leaks in suction line</li>
                        <li>Verify suction strainer is not clogged</li>
                        <li>Confirm suction height is not excessive</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold text-lg mb-2">Storage</h3>
                  <p className="text-gray-600 mb-2">When storing the pump for an extended period:</p>
                  <ul className="list-disc pl-5 space-y-1 text-gray-600">
                    <li>Drain fuel tank and carburetor</li>
                    <li>Remove spark plug and add a tablespoon of engine oil</li>
                    <li>Drain all water from pump housing</li>
                    <li>Store in a dry, clean place</li>
                    <li>Cover to protect from dust</li>
                  </ul>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>

        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-8 text-center">Related Products</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {relatedProducts.map((relatedProduct, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow overflow-hidden border border-gray-200 transition-all hover:shadow-lg"
              >
                <div className="h-48 relative">
                  <Image
                    src={relatedProduct.imageSrc || "/placeholder.svg?height=200&width=200&query=water+pump"}
                    alt={relatedProduct.name}
                    fill
                    className="object-contain p-4"
                  />
                </div>
                <div className="p-4 border-t">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-bold">{relatedProduct.name}</h3>
                    <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-1 rounded">
                      {relatedProduct.subCategory?.replace(" Water Pump", "") || "Water Pump"}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 mb-3">{relatedProduct.description.substring(0, 100)}...</p>
                  <Link
                    href={`/products/water-pumps/${relatedProduct.slug}`}
                    className="text-brand-secondary hover:text-brand-secondary/80 text-sm font-medium flex items-center"
                  >
                    View Details
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
                      className="ml-1 h-3 w-3"
                    >
                      <path d="M5 12h14" />
                      <path d="m12 5 7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
