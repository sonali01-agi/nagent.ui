import Navbar from "../app/components/Navbar"
import Hero from "../app/components/Hero"
import Features from "../app/components/Features"
import CTA from "../app/components/CTA"
import Footer from "../app/components/Footer"
import Features2 from "./components/Features2"
import Seeker from "./components/seekers"

export default function Home() {
  return (
    <div className="relative min-h-screen">
      {/* Background gradients */}
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-950/90 to-black" />
        <div className="absolute right-0 top-0 h-[500px] w-[500px] bg-purple-600/20 blur-[100px]" />
        <div className="absolute bottom-0 left-0 h-[500px] w-[500px] bg-indigo-600/20 blur-[100px]" />
      </div>

      <div className="relative z-10">
        <Navbar />
        <Hero />
        <Features />
        <CTA />
        <Features2 />
        <Seeker />
        <Footer />
      </div>
    </div>
  )
}

