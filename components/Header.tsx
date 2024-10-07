import Link from 'next/link'
import { Mic } from "lucide-react"

export function Header() {
  return (
    <header className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 w-full border-b border-primary/20">
      <div className="container mx-auto px-4 flex h-16 items-center justify-between">
        <div className="flex items-center space-x-3">
          <Mic className="h-6 w-6 text-primary" />
          <span className="font-bold text-lg text-primary">Another Cis White Male Podcast</span>
        </div>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <Link href="/" className="text-foreground/60 hover:text-primary transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link href="/preamble" className="text-foreground/60 hover:text-primary transition-colors">
                Our Purpose
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}