"use client"
import Image from "next/image"
import Link from "next/link"
import { Heart, CheckCircle, X } from 'lucide-react'
import { Card, CardContent } from "@/components/ui/card"
import { useState } from "react"

const testimonials = [
  {
    quote: "The poem made my partner tear up! The envelope design was beautiful—it felt so personal and special.",
    author: "Mark D."
  },
  {
    quote: "I've never seen anything like this before. The poem and envelope made my proposal unforgettable!",
    author: "Sarah L."
  }
]

export default function HomePage() {
  const [activeTestimonial, setActiveTestimonial] = useState(0)

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-red-50">
      <header className="fixed top-0 w-full bg-white/80 backdrop-blur-sm z-50">
        <nav className="container mx-auto px-2 h-16 md:h-24 flex items-center justify-between">
          <Link href="#" className="text-2xl font-bold text-red-600">
            <Image
              src="/ai-poems-icon.png"
              alt="icon"
              className="w-[40%] md:w-[50%]"
              width={200}
              height={150}
              priority
            />
          </Link>

          <Link href="/poem-generator" className="text-2xl font-bold text-brand-2">Poem Generator</Link>
        </nav>
      </header>

      <main className="relative pt-16">
        <div className="absolute inset-0 z-0">
          <Image
            src="/girl-smiling-phone.jpg"
            alt="Background envelope"
            width={1920}
            height={1080}
            className="object-cover w-full h-full opacity-20"
            priority
          />
        </div>

        <div className="relative z-10 container mx-auto px-4 py-20 min-h-[calc(100vh-4rem)]">
          <div className="max-w-2xl mx-auto text-center space-y-8">
            <div className="inline-flex items-center gap-2 bg-red-100 text-red-600 px-4 py-2 rounded-full">
              <Heart className="w-4 h-4" />
              <span className="text-sm font-medium">Express Your Love</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold text-brand-2">
              Express Your Love with AI-Powered Poems & Beautiful Digital Envelopes
            </h1>

            <p className="text-xl text-gray-600">
              Generate personalized love poems and send them in a stunning digital envelope designed to make your message unforgettable.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/generate" className="bg-brand-2 hover:bg-hover-2 text-lg  text-white p-4 rounded-md">
                Send It Now!
              </Link>

              <Link href={'/demo'} className="hover:bg-red-50 hover:rounded-md text-brand-2 text-lg p-4 border-red inline-block">
                View Demo
              </Link>
            </div>



            <div className="mt-12 flex items-center justify-center gap-4">
              <div className="flex -space-x-2">
                {['/guy1.jpeg', '/guy2.jpeg', '/guy3.jpeg'].map((i) => (
                  <Image
                    key={i}
                    src={`${i}`}
                    alt=""
                    width={48}
                    height={48}
                    className="w-10 h-10 rounded-full bg-red-200 border-2 border-white"
                    priority
                  />
                ))}
              </div>
              <p className="-mt-0.5 text-sm font-normal text-[#474368]"><span className="hidden md:inline-flex font-bold">20,983</span> <span className="hidden md:inline-flex"> envelops created for</span> <span className="font-bold">10,245+ </span>
                happy customers
              </p>
            </div>
          </div>
        </div>
      </main>


      {/* Pain Points */}
      {/* <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-red-800 mb-12">
            Struggling to Express Your Heartfelt Emotions? Let Us Help!
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-red-50 border-red-100">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-red-700 mb-4">Words Don't Come Easy</h3>
                <p className="text-red-600">Expressing love can be challenging, especially when you want your words to be perfect.</p>
              </CardContent>
            </Card>
            <Card className="bg-red-50 border-red-100">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-red-700 mb-4">Generic Poems Lack Personal Touch</h3>
                <p className="text-red-600">Most poem generators produce generic content that doesn't capture your unique feelings.</p>
              </CardContent>
            </Card>
            <Card className="bg-red-50 border-red-100">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-red-700 mb-4">Traditional Letters Lack Wow Factor</h3>
                <p className="text-red-600">Combine AI-generated poems with digital envelopes for a truly unforgettable message.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section> */}



      {/* Key Features & Benefits */}
      {/* <section id="features" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-red-800 mb-12">
            Why Our AI Love Poem Generator & Digital Envelope Will Win Their Heart
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "AI-Generated Poems", description: "Unique, heartfelt poems tailored to your feelings." },
              { title: "Digital Envelope Creation", description: "Send your poem in a stylish, interactive CSS-designed envelope." },
              { title: "Personalization Options", description: "Adjust tone, style, and sentiment to suit your message." },
              { title: "Instant Results", description: "Craft and send a poem in minutes." },
              { title: "No Setup Needed", description: "Simply input, generate, and send. No coding skills required." }
            ].map((feature, index) => (
              <Card key={index} className="bg-white border-red-100">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-red-700 mb-4">{feature.title}</h3>
                  <p className="text-red-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section> */}

      {/* How It Works */}
      <section id="how-it-works" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-brand-2 mb-12">
            Create, Personalize, & Send Your Love Letter in 3 Simple Steps
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Create Your Poem", description: "Choose your details and let AI generate the perfect love poem." },
              { title: "Personalize the Envelope", description: "Select a beautiful digital envelope style and add a personal touch." },
              { title: "Send It Off", description: "Deliver your heartfelt message in seconds with the unique digital envelope!" }
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-brand-2 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {index + 1}
                </div>
                <h3 className="text-xl font-semibold text-brand-2 mb-4">{step.title}</h3>
                <p className="text-brand-2">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Testimonials */}
      <section id="testimonials" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-brand-2 mb-12">
            Real Love Stories, Real Testimonials
          </h2>
          <div className="max-w-2xl mx-auto">
            <Card className="bg-white border-red-100">
              <CardContent className="p-8">
                <p className="text-lg text-brand-2 mb-4 italic">&quot;{testimonials[activeTestimonial].quote}&quot;</p>
                <p className="text-brand-2 font-semibold">- {testimonials[activeTestimonial].author}</p>
              </CardContent>
            </Card>
            <div className="flex justify-center mt-4 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTestimonial(index)}
                  className={`w-3 h-3 rounded-full ${index === activeTestimonial ? 'bg-red-600' : 'bg-red-200'
                    }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>


      {/* Comparison Table */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-brand-2 mb-12">
            How We Compare
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full max-w-2xl mx-auto">
              <thead>
                <tr className="bg-red-100">
                  <th className="p-4 text-left text-brand-2">Feature</th>
                  <th className="p-4 text-center text-brand-2">Our Tool</th>
                  <th className="p-4 text-center text-brand-2">Other Generators</th>
                </tr>
              </thead>
              <tbody>
                {[
                  "AI-Powered Personalization",
                  "Digital Envelope Designs",
                  "Customizable Styles",
                  "Instant Results",
                  "Simple Interface",
                  "Unlimited Usage"
                ].map((feature, index) => (
                  <tr key={index} className={index % 2 === 0 ? 'bg-red-50' : 'bg-white'}>
                    <td className="p-4 text-brand-2">{feature}</td>
                    <td className="p-4 text-center">
                      <CheckCircle className="inline-block text-green-500" />
                    </td>
                    <td className="p-4 text-center">
                      {feature === "Instant Results" ? (
                        <CheckCircle className="inline-block text-green-500" />
                      ) : (
                        <X className="inline-block text-red-500" />
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Closing Section */}
      {/* <section className="py-20 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-2 mb-6">
            Transform Your Emotions into Words & Art with Our AI Love Poem Generator
          </h2>
          <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white text-lg px-8 py-4 mb-4">
            Create Your Poem and Send It with a Digital Envelope Today!
          </Button>
          <p className="text-red-600 max-w-2xl mx-auto">
            Make every occasion unforgettable with a personalized poem and digital envelope, crafted in minutes.
          </p>
        </div>
      </section> */}
    </div>
  )
}