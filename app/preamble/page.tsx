import { Header } from "@/components/Header"

export default function Preamble() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary">
      <Header />
      <main className="container mx-auto px-4 py-16 flex flex-col items-center justify-center space-y-12">
        <section className="text-center w-full">
          <h1 className="text-4xl font-bold mb-4 text-primary">Our Purpose</h1>
        </section>

        <section className="prose dark:prose-invert max-w-2xl">
          <p className="text-lg mb-6">
            In a world where voices often blend into a cacophony of sameness, "Another Cis White Male Podcast" emerges not as just another echo in the chamber, but as a bold attempt to redefine the conversation.
          </p>
          <p className="text-lg mb-6">
            We acknowledge our place in a society that has historically amplified voices like ours. Yet, we believe that true progress comes not from silencing any perspective, but from engaging in honest, open dialogue that challenges assumptions and bridges divides.
          </p>
          <p className="text-lg mb-6">
            Our mission is threefold:
          </p>
          <ol className="list-decimal list-inside mb-6">
            <li className="mb-2">To explore the complexities of identity, privilege, and social dynamics with unflinching honesty.</li>
            <li className="mb-2">To provide a platform for diverse voices and viewpoints, especially those that challenge our own perspectives.</li>
            <li>To foster understanding and empathy across different experiences and backgrounds.</li>
          </ol>
          <p className="text-lg mb-6">
            We don't claim to have all the answers. In fact, we're here to ask more questions, to listen, to learn, and to grow. Our podcast is an invitation to join us on this journey of self-reflection and societal examination.
          </p>
          <p className="text-lg">
            So whether you align with our experiences or come from a completely different walk of life, we welcome you. Let's engage in the uncomfortable conversations, challenge our preconceptions, and work together towards a more understanding and inclusive world.
          </p>
        </section>
      </main>
    </div>
  )
}