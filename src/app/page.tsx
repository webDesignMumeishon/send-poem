"use client"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import Image from "next/image"
import Link from "next/link"
import { Heart, Mail, Link as LinkIcon, CheckCircle, X } from 'lucide-react'
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
        <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="#" className="text-2xl font-bold text-red-600">LoveLetter</Link>
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

            <h1 className="text-4xl md:text-6xl font-bold text-gray-900">
              Express Your Love with AI-Powered Poems & Beautiful Digital Envelopes
            </h1>

            <p className="text-xl text-gray-600">
              Generate personalized love poems and send them in a stunning digital envelope designed to make your message unforgettable.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-red-600 hover:bg-red-700 text-lg px-8 py-6">
                <Link href={'/generate'}>
                  Create Your Poem & Send It Now!
                </Link>
              </Button>
              <Button
                variant="outline"
                className="border-red-200 hover:bg-red-50 text-red-600 text-lg px-8 py-6"
              >
                <Link href={'/demo'}>
                  View Demo
                </Link>
              </Button>
            </div>

            <div className="mt-12 flex items-center justify-center gap-2">
              <div className="flex -space-x-2">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full bg-red-200 border-2 border-white"
                  />
                ))}
              </div>
              <p className="text-sm text-gray-600">
                Loved by thousands of customers worldwide
              </p>
            </div>
          </div>
        </div>
      </main>


      {/* Pain Points */}
      <section className="py-16 bg-white">
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
      </section>



      {/* Key Features & Benefits */}
      <section id="features" className="py-16">
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
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-red-800 mb-12">
            Create, Personalize, & Send Your Love Letter in 3 Simple Steps
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Create Your Poem", description: "Choose your details and let AI generate the perfect love poem." },
              { title: "Personalize the Envelope", description: "Select a beautiful digital envelope style and add a personal touch." },
              { title: "Send It Off", description: "Deliver your heartfelt message in seconds with the unique digital envelope!" }
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-red-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {index + 1}
                </div>
                <h3 className="text-xl font-semibold text-red-700 mb-4">{step.title}</h3>
                <p className="text-red-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Testimonials */}
      <section id="testimonials" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-red-800 mb-12">
            Real Love Stories, Real Testimonials
          </h2>
          <div className="max-w-2xl mx-auto">
            <Card className="bg-white border-red-100">
              <CardContent className="p-8">
                <p className="text-lg text-red-600 mb-4 italic">"{testimonials[activeTestimonial].quote}"</p>
                <p className="text-red-700 font-semibold">- {testimonials[activeTestimonial].author}</p>
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
          <h2 className="text-3xl font-bold text-center text-red-800 mb-12">
            How We Compare
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full max-w-2xl mx-auto">
              <thead>
                <tr className="bg-red-100">
                  <th className="p-4 text-left text-red-800">Feature</th>
                  <th className="p-4 text-center text-red-800">Our Tool</th>
                  <th className="p-4 text-center text-red-800">Other Generators</th>
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
                    <td className="p-4 text-red-700">{feature}</td>
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
      <section className="py-20 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-red-800 mb-6">
            Transform Your Emotions into Words & Art with Our AI Love Poem Generator
          </h2>
          <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white text-lg px-8 py-4 mb-4">
            Create Your Poem and Send It with a Digital Envelope Today!
          </Button>
          <p className="text-red-600 max-w-2xl mx-auto">
            Make every occasion unforgettable with a personalized poem and digital envelope, crafted in minutes.
          </p>
        </div>
      </section>
    </div>
  )
}