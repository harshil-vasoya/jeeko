import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function AboutPage() {
  return (
    <section className="py-12 md:py-16 lg:py-20">
      <div className="container">
        <div className="flex flex-col items-center text-center mb-12">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-4">About Jeeko</h1>
          <p className="text-lg text-gray-600 max-w-2xl">
            Powering agriculture and beyond with reliable solutions for the modern Indian farmer
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
            <Image src="/images/about.png" alt="Jeeko Headquarters" fill className="object-cover" />
          </div>
          <div>
            <h2 className="text-3xl font-bold tracking-tight mb-6">Our Story</h2>
            <div className="space-y-4 text-gray-600">
              <p>
                Jeeko Agritech LLP was established with a vision to provide high-quality power solutions and
                agricultural equipment to Indian farmers and businesses. Based in Rajkot, Gujarat, we have grown to
                become a trusted name in the industry.
              </p>
              <p>
                Our journey began with a simple mission: to create reliable, efficient, and affordable products that
                address the unique challenges faced by Indian farmers. Today, we continue to innovate and expand our
                product range while staying true to our core values.
              </p>
              <p>
                With our main brand Jeeko focusing on power generators and our sub-brand Kishan King specializing in
                agricultural equipment, we offer comprehensive solutions to meet diverse needs.
              </p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl font-bold tracking-tight mb-6">Our Brands</h2>
            <div className="space-y-6">
              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-16">
                  <Image
                    src="/images/jeeko-logo.png"
                    alt="Jeeko Logo"
                    width={100}
                    height={50}
                    className="w-24 h-auto"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Jeeko</h3>
                  <p className="text-gray-600">
                    Our main brand specializing in high-quality generators designed for reliability and performance in
                    various settings, from homes to farms.
                  </p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-16">
                  <Image
                    src="/images/kishan-king-logo.png"
                    alt="Kishan King Logo"
                    width={64}
                    height={64}
                    className="w-16 h-auto"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Kishan King</h3>
                  <p className="text-gray-600">
                    Our sub-brand dedicated to agricultural equipment, providing specialized farming tools designed to
                    enhance productivity and efficiency for Indian farmers.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl order-1 md:order-2">
            <Image
              src="/images/brands-showcase.jpg"
              alt="Jeeko and Kishan King Products"
              fill
              className="object-cover"
            />
          </div> */}
        </div>

        <div className="bg-green-50 rounded-lg p-8 md:p-12 mb-16">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Our Values</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">The principles that guide everything we do</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
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
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Quality</h3>
              <p className="text-gray-600">
                We are committed to delivering products of the highest quality, ensuring durability and reliability in
                every unit we manufacture.
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
                  <path d="M12 2v4" />
                  <path d="m6.8 14-3.5 2" />
                  <path d="m20.7 14-3.5 2" />
                  <path d="M6.8 10 3.3 8" />
                  <path d="m20.7 10-3.5-2" />
                  <path d="m9 22 3-8 3 8" />
                  <path d="M8 14h8" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Innovation</h3>
              <p className="text-gray-600">
                We continuously strive to innovate and improve our products, incorporating the latest technologies to
                better serve our customers.
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
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Customer Focus</h3>
              <p className="text-gray-600">
                Our customers are at the heart of everything we do. We listen to their needs and strive to exceed their
                expectations.
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
                  <path d="M3 6v18h18" />
                  <path d="M7 14v4" />
                  <path d="M11 9v9" />
                  <path d="M15 4v14" />
                  <path d="M19 10v8" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Growth</h3>
              <p className="text-gray-600">
                We are committed to sustainable growth, both for our company and for the farmers and businesses we
                serve.
              </p>
            </div>
          </div>
        </div>

        {/* <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight mb-4">Our Team</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Meet the dedicated professionals behind Jeeko and Kishan King
          </p>
        </div> */}
        {/* <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="h-64 relative">
              <Image src="/images/team-member-1.jpg" alt="Team Member" fill className="object-cover" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-1">Rajesh Patel</h3>
              <p className="text-green-600 mb-4">Founder & CEO</p>
              <p className="text-gray-600 mb-4">
                With over 20 years of experience in the agricultural equipment industry, Rajesh leads our company with
                vision and expertise.
              </p>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="h-64 relative">
              <Image src="/images/team-member-2.jpg" alt="Team Member" fill className="object-cover" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-1">Priya Sharma</h3>
              <p className="text-green-600 mb-4">Head of Product Development</p>
              <p className="text-gray-600 mb-4">
                Priya brings innovation to our product line, ensuring that we stay at the cutting edge of agricultural
                technology.
              </p>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="h-64 relative">
              <Image src="/images/team-member-3.jpg" alt="Team Member" fill className="object-cover" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-1">Amit Verma</h3>
              <p className="text-green-600 mb-4">Technical Director</p>
              <p className="text-gray-600 mb-4">
                Amit oversees our manufacturing processes, ensuring that every product meets our high standards of
                quality and reliability.
              </p>
            </div>
          </div>
        </div> */}

        {/* <div className="bg-gray-900 text-white rounded-lg p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight mb-4">Join the Jeeko Family</h2>
              <p className="text-gray-300 mb-6">
                Whether you're a farmer looking for reliable equipment, a dealer interested in our products, or a
                talented professional seeking career opportunities, we'd love to hear from you.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-brand-primary hover:bg-brand-primary/90">
                  <Link href="/contact">Contact Us</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  <Link href="/careers">Explore Careers</Link>
                </Button>
              </div>
            </div>
            <div className="relative h-[300px] rounded-lg overflow-hidden">
              <Image src="/images/team-group.jpg" alt="Jeeko Team" fill className="object-cover" />
            </div>
          </div>
        </div> */}
      </div>
    </section>
  )
}
