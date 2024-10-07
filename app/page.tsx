import Image from 'next/image'
import { Header } from "@/components/Header"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Mic, Mail } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary">
      <Header />
      <main className="container mx-auto px-4 flex flex-col items-center justify-center space-y-12">
        <section className="relative w-full h-[50vh] flex items-center justify-center mb-16">
          <Image
            src="https://images.unsplash.com/photo-1478737270239-2f02b77fc618?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            alt="Podcast microphone"
            fill
            style={{objectFit: "cover"}}
            className="brightness-50"
          />
          <div className="relative z-10 text-center">
            <h1 className="text-5xl font-bold mb-4 text-white">Another Cis White Male Podcast</h1>
            <p className="text-2xl text-white/80">Unique perspectives, unfiltered conversations.</p>
          </div>
        </section>

        <section className="w-full max-w-2xl text-center">
          <h2 className="text-2xl font-semibold mb-4 text-primary">What to Expect</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {["Honest Discussions", "Diverse Topics", "Engaging Guests", "Unfiltered Opinions"].map((item, index) => (
              <li key={index} className="bg-card rounded-lg p-4 shadow-md border border-primary/20">
                <Mic className="mx-auto mb-2 h-6 w-6 text-primary" />
                <p>{item}</p>
              </li>
            ))}
          </ul>
        </section>

        <section className="w-full max-w-md">
          <div className="bg-card rounded-lg shadow-lg p-8 space-y-6 border border-primary/20">
            <h2 className="text-2xl font-semibold text-center text-primary">Interested in our podcast?</h2>
            <p className="text-center text-muted-foreground">Sign up to get notified when we launch!</p>
            <div className="flex space-x-2">
              <Input type="email" placeholder="Enter your email" className="border-primary/20" />
              <Button type="submit" className="bg-primary text-primary-foreground hover:bg-primary/90">
                <Mail className="mr-2 h-4 w-4" /> Subscribe
              </Button>
            </div>
          </div>
        </section>

        <footer className="text-center text-sm text-muted-foreground pb-8">
          © 2023 Another Cis White Male Podcast. All rights reserved.
        </footer>
      </main>
    </div>
  )
}