import Link from "next/link"
import { Button } from "@/components/ui/button"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-[#FFFFF0]">
      <div className="container flex h-16 items-center">
        <div className="mr-8">
          <Link href="/" className="font-bold">
            LOGO
          </Link>
        </div>
        <nav className="flex flex-1 items-center justify-center space-x-6 text-sm font-medium">
          <Link href="/" className="hover:text-primary transition-colors">
            HOME
          </Link>
          <Link href="/features" className="hover:text-primary transition-colors">
            FEATURES
          </Link>
          <Link href="/pricing" className="hover:text-primary transition-colors">
            PRICING
          </Link>
          <Link href="/docs" className="hover:text-primary transition-colors">
            DOCS
          </Link>
        </nav>
        <div className="ml-auto">
          <Button className="bg-[#98B475] hover:bg-[#879c65] text-white">Login/Sign</Button>
        </div>
      </div>
    </header>
  )
}

