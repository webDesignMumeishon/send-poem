import Envelop from "@/components/Envelop"
import dbConnect from "@/lib/db"
import Poem from "@/models/poem"

export default async function Page({
    params,
}: {
    params: Promise<{ id: string }>
}) {
    const id = (await params).id

    await dbConnect()

    const poem = await Poem.findById(id)

    if (poem !== null) {
        const poemTextReady = poem.text.replace(/\n\n/g, '<br/><br/>').replace(/\n/g, '<br/>') || '';
        const getPoem = poemTextReady.replace(/\\n/g, "")

        return (
            <Envelop name={poem.name} content={<p className='text-slate-700' dangerouslySetInnerHTML={{ __html: getPoem }} />} />
        )
    }

    throw new Error('Envelop not found')
}