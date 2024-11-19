
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import Image from "next/image"
import Link from "next/link"
import { Heart, Mail, Link as LinkIcon } from 'lucide-react'


export default function Component() {

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
              The Ultimate AI Love Poem Generator
            </h1>

            <p className="text-xl text-gray-600">
              Instantly create heartfelt, personalized love poems that capture the essence of your feelings in just seconds.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-red-600 hover:bg-red-700 text-lg px-8 py-6">
                <Link href={'/generate'}>
                  Start Crafting Your Poem Now!
                </Link>
              </Button>
              <Button
                variant="outline"
                className="border-red-200 hover:bg-red-50 text-red-600 text-lg px-8 py-6"
              >
                View Collection
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
    </div>
  )
}