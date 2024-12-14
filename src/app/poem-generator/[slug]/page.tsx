import dbConnect from "@/lib/db"
import { notFound } from 'next/navigation';
import PoemStyle from "@/models/poemStyle"
import { Card } from "@/components/ui/card";
import PoemGenerator from "@/components/PoemGenerator";
import Word from "@/utils/word";

const URL = process.env.NEXT_BASE_URL

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
    await dbConnect();

    const slug = (await params).slug

    const poemStyle = await PoemStyle.findOne({ name: decodeURIComponent(slug) });

    if (!poemStyle) {
        return {
            title: '404 - Not Found',
            description: 'The requested poetic style could not be found.',
        };
    }

    return {
        title: `${Word.upperCaseFirstLetter(poemStyle.name)} - Explore This Poetic Style Generator`,
        description: poemStyle.seoDescription,
        alternates: {
            canonical: `${URL}/poem-generator/${slug}`,
        },
    };
}

export default async function Page({
    params,
}: {
    params: Promise<{ slug: string }>
}) {
    await dbConnect()

    const slug = (await params).slug

    const poemStyle = await PoemStyle.findOne({ name: decodeURIComponent(slug) })


    if (poemStyle !== null) {
        const poemStyleName = Word.upperCaseFirstLetter(poemStyle.name) // This is to generate upper cases
        return (
            <div className="min-h-screen bg-[#FDF7F7] px-4 py-8 md:py-12">
                <div className="mx-auto max-w-2xl text-center">
                    <h1 className="mb-8 text-4xl font-bold tracking-tight text-brand-2 md:text-5xl">
                        {poemStyleName} Poem Generator
                    </h1>
                    <h2 className="text-brand-2">
                        {poemStyle.description}
                    </h2>
                    <Card className="border-[#632C2C]/20 bg-white/50 p-6 backdrop-blur-sm">
                        <PoemGenerator style={poemStyle.name} />
                    </Card>
                </div>
            </div>
        )
    }
    else {
        return notFound()
    }
}