import {
    Dialog,
    DialogContent,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import Envelop from '@/components/Envelop'
import { Button } from "./ui/button";

type Props = {
    poemPreview: string
}

export function Preview({ poemPreview }: Props) {

    const POEM = poemPreview.replace(/\n/g, "<br />")

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="outline" className="w-full border-brand-2 text-brand-2 hover:bg-red-50">Preview</Button>
            </DialogTrigger>
            <DialogContent className="w-full h-full p-0">
                <DialogTitle>
                    Preview
                </DialogTitle>
                <Envelop name={'Maria'} content={<p className='text-slate-700' dangerouslySetInnerHTML={{ __html: POEM }} />} />
            </DialogContent>
        </Dialog>
    )
}