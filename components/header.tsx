"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Phone, X, Menu, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  // Check if the current path matches or starts with the given path
  const isActive = (path: string) => {
    if (path === "/") {
      return pathname === "/"
    }
    return pathname === path || pathname.startsWith(`${path}/`)
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white shadow-sm">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center gap-2">
            <Image src={"/images/jeeko-logo.png"} alt="Jeeko Logo" width={150} height={50} className="h-10 w-auto" />
          </Link>
        </div>
        <nav
          className={cn(
            "absolute left-0 right-0 top-16 z-50 bg-white border-b border-gray-200 md:border-0 p-4 md:p-0 md:static md:flex gap-6",
            isMenuOpen ? "flex flex-col" : "hidden",
          )}
        >
          <Link
            href="/"
            className={cn(
              "text-sm font-medium transition-colors py-2 md:py-0 relative group",
              isActive("/") ? "text-red-600 font-semibold" : "text-gray-600 hover:text-red-600",
            )}
            onClick={() => setIsMenuOpen(false)}
          >
            Home
            {isActive("/") && (
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-red-600 md:block hidden"></span>
            )}
          </Link>
          <Link
            href="/about"
            className={cn(
              "text-sm font-medium transition-colors py-2 md:py-0 relative group",
              isActive("/about") ? "text-red-600 font-semibold" : "text-gray-600 hover:text-red-600",
            )}
            onClick={() => setIsMenuOpen(false)}
          >
            About
            {isActive("/about") && (
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-red-600 md:block hidden"></span>
            )}
          </Link>

          {/* Products Dropdown */}
          <div className="relative group">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button
                  className={cn(
                    "text-sm font-medium transition-colors py-2 md:py-0 flex items-center gap-1 relative",
                    isActive("/products") ? "text-red-600 font-semibold" : "text-gray-600 hover:text-red-600",
                  )}
                >
                  Products <ChevronDown className="h-4 w-4" />
                  {isActive("/products") && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-red-600 md:block hidden"></span>
                  )}
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-56">
                <DropdownMenuItem asChild>
                  <Link href="/products" className={cn(
                    "w-full",
                    isActive("/products") && "bg-red-50 text-red-600"
                  )}>
                    All Products
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/products/generators" className={cn(
                    "w-full flex items-center justify-between",
                    isActive("/products/generators") && "bg-red-50 text-red-600"
                  )}>
                    <span>Generators</span>
                    <span className="bg-red-100 text-red-600 text-xs px-2 py-0.5 rounded">Jeeko</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/products/water-pumps" className={cn(
                    "w-full flex items-center justify-between",
                    isActive("/products/water-pumps") && "bg-red-50 text-red-600"
                  )}>
                    <span>Water Pumps</span>
                    <span className="bg-red-100 text-red-600 text-xs px-2 py-0.5 rounded">
                      Kishan King
                    </span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/products/tiller-machines" className={cn(
                    "w-full flex items-center justify-between",
                    isActive("/products/tiller-machines") && "bg-red-50 text-red-600"
                  )}>
                    <span>Tiller Machines</span>
                    <span className="bg-red-100 text-red-600 text-xs px-2 py-0.5 rounded">
                      Kishan King
                    </span>
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          <Link
            href="/contact"
            className={cn(
              "text-sm font-medium transition-colors py-2 md:py-0 relative group",
              isActive("/contact") ? "text-red-600 font-semibold" : "text-gray-600 hover:text-red-600",
            )}
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
            {isActive("/contact") && (
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-red-600 md:block hidden"></span>
            )}
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <Button asChild variant="outline" className="hidden md:flex border-red-600 text-red-600 hover:bg-red-50">
            <Link href="/contact">
              <Phone className="mr-2 h-4 w-4" />
              Contact Us
            </Link>
          </Button>
          <Button asChild className="hidden md:flex bg-red-600 hover:bg-red-700">
            <Link href="/products">Explore Products</Link>
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="md:hidden border-red-600 text-red-600 hover:bg-red-50"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>
    </header>
  )
}
