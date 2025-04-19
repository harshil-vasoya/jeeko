import Link from "next/link"
import Image from "next/image"
import { ChevronRight, ArrowRight, Tractor, Zap, Phone, Mail, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div>
      <section className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-green-900/80 to-green-800/60 z-10" />
        <div className="relative h-[600px] overflow-hidden">
          <Image
            src="/images/hero-bg.jpg"
            alt="Farming field with equipment"
            fill
            className="object-cover"
            priority
            quality={90}
          />
        </div>
        <div className="container absolute inset-0 z-20 flex flex-col justify-center items-start text-white">
          <div className="max-w-2xl space-y-4">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">Powering Agriculture & Beyond</h1>
            <p className="text-lg md:text-xl text-white/90 max-w-md">
              Reliable power solutions and agricultural equipment for the modern Indian farmer
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button asChild size="lg" className="bg-brand-primary hover:bg-brand-primary/90">
                <Link href="/products/generators">
                  <Zap className="mr-2 h-5 w-5" />
                  Explore Generators
                </Link>
              </Button>
              <Button asChild size="lg" className="bg-white/10 border border-black/20 hover:bg-white/20">
                <Link href="/products/agricultural">
                  <Tractor className="mr-2 h-5 w-5" />
                  Agricultural Equipment
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container">
          <div className="flex flex-col items-center text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Our Brands</h2>
            <p className="text-lg text-gray-600 max-w-2xl">
              Delivering quality and reliability through our specialized brands
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200 transition-all hover:shadow-xl">
              <div className="h-64 relative">
                <Image src="/images/jeeko-generators.jpg" alt="Jeeko Generators" fill className="object-cover" />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <Image
                    src="/images/jeeko-logo.png"
                    alt="Jeeko Logo"
                    width={150}
                    height={50}
                    className="h-10 w-auto"
                  />
                  <span className="text-sm font-medium text-gray-500">Main Brand</span>
                </div>
                <h3 className="text-2xl font-bold mb-2">Power Generators</h3>
                <p className="text-gray-600 mb-4">
                  High-quality generators designed for reliability and performance in various settings, from homes to
                  farms.
                </p>
                <Button asChild variant="outline" className="w-full">
                  <Link href="/products/generators" className="flex items-center justify-center">
                    View Generators
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200 transition-all hover:shadow-xl">
              <div className="h-64 relative">
                <Image
                  src="https://www.hondaindiapower.com/admin/public/uploads/Products/fRlUhDzuv_Cover.jpg"
                  alt="Kishan King Agricultural Equipment"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <Image
                    src="/images/kishan-king-logo.png"
                    alt="Kishan King Logo"
                    width={120}
                    height={40}
                    className="h-10 w-auto"
                  />
                  <span className="text-sm font-medium text-gray-500">Sub Brand</span>
                </div>
                <h3 className="text-2xl font-bold mb-2">Agricultural Equipment</h3>
                <p className="text-gray-600 mb-4">
                  Specialized farming equipment designed to enhance productivity and efficiency for Indian farmers.
                </p>
                <Button asChild variant="outline" className="w-full">
                  <Link href="/products/tiller-machines" className="flex items-center justify-center">
                    View Equipment
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="flex flex-col items-center text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Featured Products</h2>
            <p className="text-lg text-gray-600 max-w-2xl">
              Discover our most popular power and agricultural solutions
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow overflow-hidden border border-gray-200 transition-all hover:shadow-lg">
              <div className="h-48 relative">
                <Image
                  src="https://www.hondaindiapower.com/admin/public/uploads/Products/Dm5VuupTuk.jpg"
                  alt="JK 4000i Generator"
                  fill
                  className="object-contain p-4"
                />
              </div>
              <div className="p-4 border-t">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-bold">JK 4000i</h3>
                  <span className="bg-amber-100 text-amber-800 text-xs font-medium px-2 py-1 rounded">Generator</span>
                </div>
                <p className="text-sm text-gray-600 mb-3">3.0 kW rated output, manual start, compact design</p>
                <Link
                  href="/products/generators/jk-4000i"
                  className="text-green-600 hover:text-green-700 text-sm font-medium flex items-center"
                >
                  View Details
                  <ArrowRight className="ml-1 h-3 w-3" />
                </Link>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow overflow-hidden border border-gray-200 transition-all hover:shadow-lg">
              <div className="h-48 relative">
                <Image
                  src="https://www.hondaindiapower.com/admin/public/uploads/Products/0gT3guCd5.jpg"
                  alt="JK 10500E Generator"
                  fill
                  className="object-contain p-4"
                />
              </div>
              <div className="p-4 border-t">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-bold">JK 10500E</h3>
                  <span className="bg-amber-100 text-amber-800 text-xs font-medium px-2 py-1 rounded">Generator</span>
                </div>
                <p className="text-sm text-gray-600 mb-3">9.0 kW rated output, electric start, high performance</p>
                <Link
                  href="/products/generators/jk-10500e"
                  className="text-green-600 hover:text-green-700 text-sm font-medium flex items-center"
                >
                  View Details
                  <ArrowRight className="ml-1 h-3 w-3" />
                </Link>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow overflow-hidden border border-gray-200 transition-all hover:shadow-lg">
              <div className="h-48 relative">
                <Image
                  src="https://www.hondaindiapower.com/admin/public/uploads/Products/0gT3guCd5.jpg"
                  alt="JK 6000Ei Generator"
                  fill
                  className="object-contain p-4"
                />
              </div>
              <div className="p-4 border-t">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-bold">JK 6000Ei</h3>
                  <span className="bg-amber-100 text-amber-800 text-xs font-medium px-2 py-1 rounded">Generator</span>
                </div>
                <p className="text-sm text-gray-600 mb-3">5.0 kW rated output, electric start, with wheels</p>
                <Link
                  href="/products/generators/jk-6000ei"
                  className="text-green-600 hover:text-green-700 text-sm font-medium flex items-center"
                >
                  View Details
                  <ArrowRight className="ml-1 h-3 w-3" />
                </Link>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow overflow-hidden border border-gray-200 transition-all hover:shadow-lg">
              <div className="h-48 relative">
                <Image
                  src="https://www.hondaindiapower.com/admin/public/uploads/Products/Isr1rIL2tl.jpg"
                  alt="HT1050D Power Weeder"
                  fill
                  className="object-contain p-4"
                />
              </div>
              <div className="p-4 border-t">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-bold">HT1050D</h3>
                  <span className="bg-green-100 text-green-800 text-xs font-medium px-2 py-1 rounded">
                    Power Weeder
                  </span>
                </div>
                <p className="text-sm text-gray-600 mb-3">6HP diesel engine, multi-function tilling capabilities</p>
                <Link
                  href="/products/tiller-machines/ht-1050d"
                  className="text-green-600 hover:text-green-700 text-sm font-medium flex items-center"
                >
                  View Details
                  <ArrowRight className="ml-1 h-3 w-3" />
                </Link>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow overflow-hidden border border-gray-200 transition-all hover:shadow-lg">
              <div className="h-48 relative">
                <Image
                  src="https://www.hondaindiapower.com/admin/public/uploads/Products/fRlUhDzuv_Cover.jpg"
                  alt="HT950D Power Weeder"
                  fill
                  className="object-contain p-4"
                />
              </div>
              <div className="p-4 border-t">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-bold">HT950D</h3>
                  <span className="bg-green-100 text-green-800 text-xs font-medium px-2 py-1 rounded">
                    Power Weeder
                  </span>
                </div>
                <p className="text-sm text-gray-600 mb-3">5.5HP diesel engine, versatile farming applications</p>
                <Link
                  href="/products/tiller-machines/ht-950d"
                  className="text-green-600 hover:text-green-700 text-sm font-medium flex items-center"
                >
                  View Details
                  <ArrowRight className="ml-1 h-3 w-3" />
                </Link>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow overflow-hidden border border-gray-200 transition-all hover:shadow-lg">
              <div className="h-48 relative">
                <Image src="https://www.hondaindiapower.com/admin/public/uploads/Products/z9w50BzamG.png" alt="WD50 Water Pump" fill className="object-contain p-4" />
              </div>
              <div className="p-4 border-t">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-bold">WD50</h3>
                  <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-1 rounded">Water Pump</span>
                </div>
                <p className="text-sm text-gray-600 mb-3">Diesel water pump, 4.8HP, self-priming design</p>
                <Link
                  href="/products/water-pumps/wd-50"
                  className="text-green-600 hover:text-green-700 text-sm font-medium flex items-center"
                >
                  View Details
                  <ArrowRight className="ml-1 h-3 w-3" />
                </Link>
              </div>
            </div>
            
          </div>
          <div className="mt-10 text-center">
            <Button asChild className="bg-brand-primary hover:bg-brand-primary/90">
              <Link href="/products">View All Products</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">Why Choose Jeeko & Kishan King?</h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 h-12 w-12 rounded-full bg-green-100 flex items-center justify-center">
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
                      className="text-green-600"
                    >
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Made in India</h3>
                    <p className="text-gray-600">
                      Proudly manufactured in India, supporting local industry and ensuring products are designed for
                      Indian conditions.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 h-12 w-12 rounded-full bg-green-100 flex items-center justify-center">
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
                      className="text-green-600"
                    >
                      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Durable & Reliable</h3>
                    <p className="text-gray-600">
                      Built to last with high-quality materials and rigorous testing to ensure reliability in demanding
                      conditions.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 h-12 w-12 rounded-full bg-green-100 flex items-center justify-center">
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
                      className="text-green-600"
                    >
                      <path d="M12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8z" />
                      <path d="M12 8v-2" />
                      <path d="M12 18v-2" />
                      <path d="M16 12h2" />
                      <path d="M6 12h2" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Fuel Efficient</h3>
                    <p className="text-gray-600">
                      Designed with optimal fuel efficiency to reduce operating costs and environmental impact.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 h-12 w-12 rounded-full bg-green-100 flex items-center justify-center">
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
                      className="text-green-600"
                    >
                      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                      <circle cx="9" cy="7" r="4" />
                      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Customer Support</h3>
                    <p className="text-gray-600">
                      Dedicated customer service and nationwide service network to ensure prompt assistance when needed.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <Image src="/images/about.png" alt="Indian farming scene" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-green-50">
        <div className="container">
          <div className="flex flex-col items-center text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Our Commitment</h2>
            <p className="text-lg text-gray-600 max-w-2xl">
              At Jeeko, we're committed to empowering Indian farmers and businesses with reliable power solutions
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center mb-4">
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
                  className="text-green-600"
                >
                  <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" />
                  <path d="m9 12 2 2 4-4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Quality Assurance</h3>
              <p className="text-gray-600">
                Every product undergoes rigorous quality testing to ensure it meets our high standards before reaching
                our customers.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center mb-4">
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
                  className="text-green-600"
                >
                  <path d="M21 12a9 9 0 0 1-9 9m9-9a9 9 0 0 0-9-9m9 9H3m9 9a9 9 0 0 1-9-9m9 9c1.66 0 3-8.37 3-9s-1.34-9-3-9m0 18c-1.66 0-3-8.37-3-9s1.34-9 3-9m0 0a9 9 0 0 0-9 9" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Nationwide Service</h3>
              <p className="text-gray-600">
                With service centers across India, we ensure that help is always within reach when you need it.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center mb-4">
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
                  className="text-green-600"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                  <path d="M12 8v4" />
                  <path d="M12 16h.01" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Warranty Protection</h3>
              <p className="text-gray-600">
                Our products come with comprehensive warranty coverage, giving you peace of mind with your purchase.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-900 text-white">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">Ready to Power Your Success?</h2>
              <p className="text-lg text-gray-300 mb-8">
                Contact our team today to find the perfect power or agricultural solution for your needs.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-green-400" />
                  <span>+91-2827 00000 | 98989 98989</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-green-400" />
                  <span>info@jeeko.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-green-400" />
                  <span>G.I.D.C. RAJKOT - 360021 (Gujarat) INDIA</span>
                </div>
              </div>
              <div className="mt-8">
                <Button asChild size="lg" className="bg-brand-primary hover:bg-brand-primary/90">
                  <Link href="/contact">Contact Us Today</Link>
                </Button>
              </div>
            </div>
            <div className="bg-gray-800 p-8 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Send Us a Message</h3>
              <form className="space-y-4">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      className="w-full px-3 py-2 border border-gray-700 rounded-md bg-gray-800 text-white"
                      placeholder="Your name"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      className="w-full px-3 py-2 border border-gray-700 rounded-md bg-gray-800 text-white"
                      placeholder="Your email"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium">
                    Subject
                  </label>
                  <input
                    id="subject"
                    type="text"
                    className="w-full px-3 py-2 border border-gray-700 rounded-md bg-gray-800 text-white"
                    placeholder="Subject"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-3 py-2 border border-gray-700 rounded-md bg-gray-800 text-white"
                    placeholder="Your message"
                  ></textarea>
                </div>
                <Button type="submit" className="w-full bg-brand-primary hover:bg-brand-primary/90">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
