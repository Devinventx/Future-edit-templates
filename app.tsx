import { SiteHeader } from "@/components/site-header"

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#FFFFF0]">
      <SiteHeader />
      <div className="container mt-20">
        <div className="relative h-[300px]">
          <div className="absolute right-0 top-0">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-02-10%20124454-XsogoR4GJGPKCChoVXYjOcQJ9Jx6X1.png"
              alt="Decorative clouds"
              className="w-[500px] h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

