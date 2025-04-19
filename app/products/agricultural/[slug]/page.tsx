import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ChevronRight, Download, Phone, ShoppingCart } from "lucide-react"

export default function ProductDetailPage({ params }: { params: { slug: string } }) {
  // This would normally come from a database or API
  const product = {
    name: "HT1050D Power Weeder",
    description: "Premium series power weeder with 6HP diesel engine, perfect for various tilling operations.",
    features: [
      "Engine Model: 178F Diesel",
      "Max. Power: 6HP / 3600RPM",
      "Displacement: 296 cc",
      "Fuel Tank: 3.5 L",
      "Starting Method: Manual (Electric Optional)",
      "Gear Shifting: (-1, 0, 1, 2)",
      "Tilling Width: 900 - 1050 mm",
      "Tilling Depth: 150 - 300 mm",
    ],
    specifications: {
      "Engine Model": "178F Diesel",
      "Max. Power": "6HP / 3600RPM",
      Displacement: "296 cc",
      "Fuel Tank": "3.5 L",
      "Starting Method": "Manual (Electric Optional)",
      "Gear Shifting": "(-1, 0, 1, 2)",
      Transmission: "Gear",
      "Tilling Width": "900 - 1050 mm",
      "Tilling Depth": "150 - 300 mm",
      "Blade Type": "2 + 1 + 1 Group (32 Nos)",
      Tyre: "4.00-8",
      "N.W / G.W": "135 / 145 KGS",
      "Packing Mode": "Wooden Box",
      "Packing Size": "980 x 560 x 840",
    },
    applications: ["Weeding", "Wasteland Tilling", "Rotary Tilling", "Paddy Fields Tilling", "Ditching", "Irrigating"],
    accessories: [
      {
        name: "Deep Hoe Kit",
        image: "/images/accessory-deep-hoe.jpg",
      },
      {
        name: "Ditching Blade",
        image: "/images/accessory-ditching-blade.jpg",
      },
      {
        name: "Plough",
        image: "/images/accessory-plough.jpg",
      },
      {
        name: "Potato Plough",
        image: "/images/accessory-potato-plough.jpg",
      },
      {
        name: "Antiwind Blade Kit",
        image: "/images/accessory-antiwind-blade.jpg",
      },
      {
        name: "Wheel",
        image: "/images/accessory-wheel.jpg",
      },
    ],
    relatedProducts: [
      {
        name: "HT950D",
        description: "5.5HP diesel engine, versatile farming applications",
        image: "/images/power-weeder-ht950d.jpg",
        slug: "ht-950d",
      },
      {
        name: "HT1350D",
        description: "10HP diesel engine, heavy-duty performance",
        image: "/images/power-weeder-ht1350d.jpg",
        slug: "ht-1350d",
      },
    ],
  }

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
          <span className="text-sm text-gray-900 font-medium">{product.name}</span>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="relative h-[400px] mb-4">
              <Image src="/images/power-weeder-ht1050d.jpg" alt={product.name} fill className="object-contain" />
            </div>
            <div className="grid grid-cols-4 gap-2">
              <button className="border rounded-md p-2 hover:border-green-500 transition-colors">
                <div className="relative h-16">
                  <Image
                    src="/images/power-weeder-ht1050d-angle1.jpg"
                    alt="Product angle 1"
                    fill
                    className="object-contain"
                  />
                </div>
              </button>
              <button className="border rounded-md p-2 hover:border-green-500 transition-colors">
                <div className="relative h-16">
                  <Image
                    src="/images/power-weeder-ht1050d-angle2.jpg"
                    alt="Product angle 2"
                    fill
                    className="object-contain"
                  />
                </div>
              </button>
              <button className="border rounded-md p-2 hover:border-green-500 transition-colors">
                <div className="relative h-16">
                  <Image
                    src="/images/power-weeder-ht1050d-angle3.jpg"
                    alt="Product angle 3"
                    fill
                    className="object-contain"
                  />
                </div>
              </button>
              <button className="border rounded-md p-2 hover:border-green-500 transition-colors">
                <div className="relative h-16">
                  <Image
                    src="/images/power-weeder-ht1050d-angle4.jpg"
                    alt="Product angle 4"
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
              <span className="bg-[#8dc63f]/20 text-[#8dc63f] text-xs font-medium px-2 py-1 rounded">Power Weeder</span>
              <span className="bg-[#8dc63f]/20 text-[#8dc63f] text-xs font-medium px-2 py-1 rounded">In Stock</span>
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
              <Button asChild variant="link" className="p-0 text-brand-primary hover:text-brand-primary/80">
                <Link href="/contact">Contact Sales Team</Link>
              </Button>
            </div>
          </div>
        </div>

        <Tabs defaultValue="specifications" className="w-full mb-16">
          <TabsList className="grid w-full max-w-md grid-cols-3 mx-auto">
            <TabsTrigger value="specifications">Specifications</TabsTrigger>
            <TabsTrigger value="applications">Applications</TabsTrigger>
            <TabsTrigger value="accessories">Accessories</TabsTrigger>
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

          <TabsContent value="accessories" className="mt-6">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold mb-6">Optional Accessories</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {product.accessories.map((accessory, index) => (
                  <div key={index} className="flex flex-col items-center text-center">
                    <div className="h-24 w-24 relative mb-2">
                      <Image
                        src={
                          accessory.image ||
                          `/placeholder.svg?height=100&width=100&query=${encodeURIComponent(accessory.name || "accessory")}`
                        }
                        alt={accessory.name || "Accessory"}
                        fill
                        className="object-contain"
                      />
                    </div>
                    <span className="text-sm font-medium">{accessory.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>
        </Tabs>

        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-8 text-center">Related Products</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {product.relatedProducts.map((relatedProduct, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow overflow-hidden border border-gray-200 transition-all hover:shadow-lg"
              >
                <div className="h-48 relative">
                  <Image
                    src={
                      relatedProduct.image ||
                      `/placeholder.svg?height=200&width=200&query=${encodeURIComponent(relatedProduct.name || "related product")}`
                    }
                    alt={relatedProduct.name || "Related Product"}
                    fill
                    className="object-contain p-4"
                  />
                </div>
                <div className="p-4 border-t">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-bold">{relatedProduct.name}</h3>
                    <span className="bg-green-100 text-green-800 text-xs font-medium px-2 py-1 rounded">
                      Power Weeder
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 mb-3">{relatedProduct.description}</p>
                  <Link
                    href={`/products/agricultural/${relatedProduct.slug}`}
                    className="text-green-600 hover:text-green-700 text-sm font-medium flex items-center"
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

        <div className="bg-green-50 p-8 rounded-lg">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl font-bold mb-4">Need More Information?</h2>
              <p className="text-gray-600 mb-6">
                Our team is ready to answer any questions you may have about our products and help you find the perfect
                solution for your needs.
              </p>
              <Button asChild className="bg-brand-primary hover:bg-brand-primary/90">
                <Link href="/contact">Contact Us Today</Link>
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
