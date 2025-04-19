import Link from "next/link"
import Image from "next/image"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { getAllProducts } from "@/lib/products"

export default function ProductsPage() {
  const products = getAllProducts()

  // Group products by category
  const generators = products.filter((product) => product.category === "Generator")
  const waterPumps = products.filter((product) => product.category === "Water Pump")
  const tillerMachines = products.filter((product) => product.category === "Tiller Machine")

  const ProductCard = ({ product }: { product: any }) => {
    const categoryColors: { [key: string]: string } = {
      Generator: "bg-amber-100 text-amber-800",
      "Water Pump": "bg-blue-100 text-blue-800",
      "Tiller Machine": "bg-green-100 text-green-800",
    }

    const categoryBadgeColor = categoryColors[product.category] || "bg-gray-100 text-gray-800"

    // Determine the product URL based on category
    let productUrl = ""
    if (product.category === "Generator") {
      productUrl = `/products/generators/${product.slug}`
    } else if (product.category === "Water Pump") {
      productUrl = `/products/water-pumps/${product.slug}`
    } else if (product.category === "Tiller Machine") {
      productUrl = `/products/tiller-machines/${product.slug}`
    }

    return (
      <div className="bg-white rounded-lg shadow overflow-hidden border border-gray-200 transition-all hover:shadow-lg">
        <div className="h-48 relative">
          <Image
            src={product.imageSrc || "/placeholder.svg?height=200&width=200&query=product"}
            alt={product.name}
            fill
            className="object-contain p-4"
          />
        </div>
        <div className="p-4 border-t">
          <div className="flex items-center justify-between mb-2">
            <h3 className="font-bold">{product.name}</h3>
            <span className={`${categoryBadgeColor} text-xs font-medium px-2 py-1 rounded`}>{product.category}</span>
          </div>
          <p className="text-sm text-gray-600 mb-3">{product.description.substring(0, 100)}...</p>
          <Link
            href={productUrl}
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
    )
  }

  return (
    <section className="py-12 md:py-16 lg:py-20">
      <div className="container">
        <div className="flex flex-col items-center text-center mb-12">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-4">Our Products</h1>
          <p className="text-lg text-gray-600 max-w-2xl">
            Explore our range of high-quality generators, water pumps, and tiller machines
          </p>
        </div>

        <Tabs defaultValue="all" className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList className="grid w-full max-w-md grid-cols-4">
              <TabsTrigger value="all">All Products</TabsTrigger>
              <TabsTrigger value="generators">Generators</TabsTrigger>
              <TabsTrigger value="water-pumps">Water Pumps</TabsTrigger>
              <TabsTrigger value="tiller-machines">Tiller Machines</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="all" className="space-y-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {products.map((product) => (
                <ProductCard key={product.slug} product={product} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="generators" className="space-y-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {generators.map((product) => (
                <ProductCard key={product.slug} product={product} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="water-pumps" className="space-y-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {waterPumps.map((product) => (
                <ProductCard key={product.slug} product={product} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="tiller-machines" className="space-y-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {tillerMachines.map((product) => (
                <ProductCard key={product.slug} product={product} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}
