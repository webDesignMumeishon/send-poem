import dbConnect from "@/lib/db"
import { notFound } from 'next/navigation';
import PoemStyle from "@/models/poemStyle"

const URL = process.env.NEXT_BASE_URL

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
    await dbConnect();

    const slug = (await params).slug

    const poemStyle = await PoemStyle.findOne({ name: slug });

    if (!poemStyle) {
        return {
            title: '404 - Not Found',
            description: 'The requested poetic style could not be found.',
        };
    }

    return {
        title: `${poemStyle.name} - Explore This Poetic Style Generator`,
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
        return <div>My Post: {poemStyle.name}</div>
    }
    else {
        return notFound()
    }
}