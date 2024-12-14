import Link from 'next/link'
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import PoemStyle from '@/models/poemStyle'

export default async function Home() {

    const poemStyles = await PoemStyle.find()

    return (
        <div className="min-h-screen bg-[#FDF7F7] px-4 py-8 md:py-12">
            <div className="mx-auto max-w-6xl">
                <h1 className="mb-8 text-center text-4xl font-bold tracking-tight text-[#632C2C] md:text-5xl">
                    AI Poem Generator
                </h1>
                <p className="mb-12 text-center text-lg text-[#632C2C]/80">
                    Explore various styles of poetry and create your own masterpiece with AI assistance.
                </p>
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {poemStyles.map((style) => (
                        <Link key={style.name} href={`/poem-generator/${style.name}`} className="transition-transform hover:scale-105">
                            <Card className="h-full border-[#632C2C]/20 bg-white/50 backdrop-blur-sm">
                                <CardHeader>
                                    <CardTitle className="text-[#632C2C] capitalize">{style.name}</CardTitle>
                                    <CardDescription>{style.description}</CardDescription>
                                </CardHeader>
                            </Card>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}

