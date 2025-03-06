'use client'

import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { 
  Sheet, 
  SheetContent, 
  SheetHeader,
  SheetTitle,
  SheetTrigger 
} from "@/components/ui/sheet"
import { Github, Menu } from "lucide-react"

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-purple-800/40 border-b bg-black/30 backdrop-blur supports-[backdrop-filter]:bg-black/20">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <span className="font-bold text-2xl ml-4">Nagent Ai</span>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex flex-1  justify-center mx-auto">
          <div className="flex items-center space-x-10 text-base font-medium  px-8 py-3">
            <Link href="/solutions" className="transition-colors hover:text-primary text-lg">
              Solutions
            </Link>
            <Link href="/industries" className="transition-colors hover:text-primary text-lg">
              Industries
            </Link>
            <Link href="/about" className="transition-colors hover:text-primary text-lg">
              About Us
            </Link>
            <Link href="/about" className="transition-colors hover:text-primary text-lg">
              About Us
            </Link>
            <Link href="/about" className="transition-colors hover:text-primary text-lg">
              About Us
            </Link>
          </div>
        </nav>
        
        {/* Desktop Action Buttons */}
        <div className="hidden md:flex items-center space-x-4 mr-2">
          <Link href="https://github.com/amanesoft" target="_blank" rel="noreferrer">
            <Button variant="ghost" size="icon">
              <Github className="h-4 w-4" />
              <span className="sr-only">GitHub</span>
            </Button>
          </Link>
          <Button variant="ghost" size="sm">
            Login
          </Button>
          <Button size="lg">Sign Up</Button>
        </div>
        
        {/* Mobile Menu Button */}
        <div className="flex flex-1 items-center justify-end md:hidden">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-72 p-0">
              <div className="h-full flex flex-col">
                <SheetHeader className="px-4 py-6 border-b">
                  <SheetTitle className="text-lg">Amane Soft</SheetTitle>
                </SheetHeader>
                
                <div className="flex-1 overflow-auto py-4">
                  <nav className="flex flex-col px-4">
                    <div className="py-4">
                      <h3 className="mb-2 text-xs font-medium text-muted-foreground">Navigation</h3>
                      <div className="space-y-2">
                        <Link 
                          href="/solutions" 
                          className="flex py-2 text-sm font-medium transition-colors hover:text-primary"
                          onClick={() => setOpen(false)}
                        >
                          Solutions
                        </Link>
                        <Link 
                          href="/industries" 
                          className="flex py-2 text-sm font-medium transition-colors hover:text-primary"
                          onClick={() => setOpen(false)}
                        >
                          Industries
                        </Link>
                        <Link 
                          href="/about" 
                          className="flex py-2 text-sm font-medium transition-colors hover:text-primary"
                          onClick={() => setOpen(false)}
                        >
                          About Us
                        </Link>
                      </div>
                    </div>
                    
                    <div className="py-4 border-t">
                      <h3 className="mb-2 text-xs font-medium text-muted-foreground">Links</h3>
                      <Link 
                        href="https://github.com/amanesoft" 
                        target="_blank" 
                        rel="noreferrer"
                        className="flex py-2 items-center space-x-2 text-sm font-medium transition-colors hover:text-primary"
                        onClick={() => setOpen(false)}
                      >
                        <Github className="h-4 w-4" />
                        <span>GitHub</span>
                      </Link>
                    </div>
                  </nav>
                </div>
                
                <div className="border-t p-4 space-y-2">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="w-full justify-center"
                    onClick={() => setOpen(false)}
                  >
                    Contact
                  </Button>
                  <Button 
                    size="sm" 
                    className="w-full justify-center"
                    onClick={() => setOpen(false)}
                  >
                    Get a Demo
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}