import { redirect } from "next/navigation"

export default function ProductPage() {
  // Redirect to the dynamic route handler
  redirect("/products/generators/jk-4000i")
}
