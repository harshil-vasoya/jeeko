import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ChevronRight, Download, Phone, ShoppingCart } from "lucide-react"
import { generators } from "@/lib/products"
import { notFound } from "next/navigation"

export default function GeneratorDetailPage({ params }: { params: { slug: string } }) {
  const slug = params.slug
  const product = generators[slug as keyof typeof generators]
  console.log(product)
  // If product not found, return 404
  if (!product) {
    notFound()
  }

  // Set up angle images with fallbacks
  const angleImages = product.angleImages || [product.imageSrc, product.imageSrc, product.imageSrc, product.imageSrc]

  // Find related products
  const relatedProducts = Object.values(generators)
    .filter((gen) => gen.slug !== slug)
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
          <Link href="/products/generators" className="text-sm text-gray-500 hover:text-gray-900">
            Generators
          </Link>
          <ChevronRight className="h-4 w-4 text-gray-400" />
          <span className="text-sm text-gray-900 font-medium">{product.name}</span>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="relative h-[400px] mb-4">
              <Image
                src={product.imageSrc || "/placeholder.svg?height=400&width=400&query=generator"}
                alt={product.name}
                fill
                className="object-contain"
              />
            </div>
            <div className="grid grid-cols-4 gap-2">
              {angleImages.map((img, index) => (
                <button key={index} className="border rounded-md p-2 hover:border-green-500 transition-colors">
                  <div className="relative h-16">
                    <Image
                      src={img || "/placeholder.svg?height=100&width=100&query=generator+angle"}
                      alt={`Product angle ${index + 1}`}
                      fill
                      className="object-contain"
                    />
                  </div>
                </button>
              ))}
            </div>
          </div>

          <div>
            <h1 className="text-3xl font-bold tracking-tight mb-4">{product.name}</h1>
            <div className="flex items-center gap-2 mb-4">
              <span className="bg-[#d32029]/20 text-[#d32029] text-xs font-medium px-2 py-1 rounded">Generator</span>
              <span className="bg-[#d32029]/20 text-[#d32029] text-xs font-medium px-2 py-1 rounded">In Stock</span>
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
              <Button className="bg-brand-primary hover:bg-brand-primary/90">
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
              <Button asChild variant="link" className="p-0 text-[#d32029] hover:text-[#d32029]/80">
                <Link href="/contact">Contact Sales Team</Link>
              </Button>
            </div>
          </div>
        </div>

        <Tabs defaultValue="specifications" className="w-full mb-16">
          <TabsList className="grid w-full max-w-md grid-cols-3 mx-auto">
            <TabsTrigger value="specifications">Specifications</TabsTrigger>
            <TabsTrigger value="applications">Applications</TabsTrigger>
            <TabsTrigger value="downloads">Downloads</TabsTrigger>
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

          <TabsContent value="downloads" className="mt-6">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold mb-6">Downloads</h2>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-red-100 flex items-center justify-center">
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
                        className="h-5 w-5 text-red-600"
                      >
                        <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                        <polyline points="14 2 14 8 20 8" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-medium">Product Brochure</h3>
                      <p className="text-sm text-gray-500">PDF, 2.5 MB</p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">
                    <Download className="mr-2 h-4 w-4" />
                    Download
                  </Button>
                </div>

                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-red-100 flex items-center justify-center">
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
                        className="h-5 w-5 text-red-600"
                      >
                        <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                        <polyline points="14 2 14 8 20 8" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-medium">User Manual</h3>
                      <p className="text-sm text-gray-500">PDF, 3.8 MB</p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">
                    <Download className="mr-2 h-4 w-4" />
                    Download
                  </Button>
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
                    src={relatedProduct.imageSrc || "/placeholder.svg?height=200&width=200&query=generator"}
                    alt={relatedProduct.name}
                    fill
                    className="object-contain p-4"
                  />
                </div>
                <div className="p-4 border-t">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-bold">{relatedProduct.name}</h3>
                    <span className="bg-amber-100 text-amber-800 text-xs font-medium px-2 py-1 rounded">Generator</span>
                  </div>
                  <p className="text-sm text-gray-600 mb-3">{relatedProduct.description.substring(0, 100)}...</p>
                  <Link
                    href={`/products/generators/${relatedProduct.slug}`}
                    className="text-brand-primary hover:text-brand-primary/80 text-sm font-medium flex items-center"
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
