'use client'

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Loader2 } from 'lucide-react'
import { generatePoemByStyle } from "@/app/actions/poem"
import Spinner from "./Spinner"

interface Props {
    style: string
}

interface FormData {
    topic: string
    mood: string
    keywords: string
    audience: string
    perspective: string
    length: string
    rhyme: string
    languageStyle: string
    timeSetting: string
    personalization: string
}

export function PoemGenerator({ style }: Props) {
    const [formData, setFormData] = useState<FormData>({
        topic: "",
        mood: "",
        keywords: "",
        audience: "",
        perspective: "",
        length: "",
        rhyme: "",
        languageStyle: "",
        timeSetting: "",
        personalization: ""
    })
    const [poem, setPoem] = useState("")
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState("")

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setFormData(prev => ({ ...prev, [name]: value }))
    }

    const handleSelectChange = (name: string, value: string) => {
        setFormData(prev => ({ ...prev, [name]: value }))
    }

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault()
        setIsLoading(true)
        setError("")

        try {
            const result = await generatePoemByStyle({ ...formData, style })
            setPoem(result!)
        } catch (err) {
            setError(`Failed to generate ${style}. Please try again.`)
        } finally {
            setIsLoading(false)
        }
    }

    if (isLoading) {
        return (
            <div className="min-h-[600px] flex justify-center items-center">
                <div className="">
                    <Spinner />
                </div>
            </div>

        )
    }

    if (poem) {
        return (
            <div className="space-y-2">
                <Label className="text-brand-2">Your {style}</Label>
                <Textarea
                    value={poem}
                    readOnly
                    className="min-h-[600px] border-[#632C2C]/20 font-serif text-lg"
                />
                ok
            </div>
        )
    }

    return (
        <div className="space-y-6">
            <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                    <Label htmlFor="topic" className="text-brand-2">Theme/Subject</Label>
                    <Input
                        id="topic"
                        name="topic"
                        placeholder={`Enter a topic for your ${style} (e.g. cherry blossoms, autumn leaves, ocean waves...)`}
                        value={formData.topic}
                        onChange={handleInputChange}
                        className="border-[#632C2C]/20"
                        required
                    />
                </div>

                <div className="space-y-2">
                    <Label htmlFor="mood" className="text-brand-2">Mood/Tone</Label>
                    <Input
                        id="mood"
                        name="mood"
                        placeholder="Should the poem be happy, sad, reflective, humorous, romantic, etc.?"
                        value={formData.mood}
                        onChange={handleInputChange}
                        className="border-[#632C2C]/20"
                    />
                </div>

                <div className="space-y-2">
                    <Label htmlFor="keywords" className="text-brand-2">Keywords or Imagery</Label>
                    <Input
                        id="keywords"
                        name="keywords"
                        placeholder="Include key words, images, or ideas you'd like in the poem."
                        value={formData.keywords}
                        onChange={handleInputChange}
                        className="border-[#632C2C]/20"
                    />
                </div>

                <div className="space-y-2">
                    <Label htmlFor="audience" className="text-brand-2">Audience/Recipient</Label>
                    <Input
                        id="audience"
                        name="audience"
                        placeholder="Is this poem for someone specific? If yes, describe briefly."
                        value={formData.audience}
                        onChange={handleInputChange}
                        className="border-[#632C2C]/20"
                    />
                </div>

                <div className="space-y-2">
                    <Label htmlFor="perspective" className="text-brand-2">Perspective</Label>
                    <Select name="perspective" onValueChange={(value) => handleSelectChange("perspective", value)}>
                        <SelectTrigger className="border-[#632C2C]/20">
                            <SelectValue placeholder="Choose the point of view" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="first">First-person</SelectItem>
                            <SelectItem value="second">Second-person</SelectItem>
                            <SelectItem value="third">Third-person</SelectItem>
                        </SelectContent>
                    </Select>
                </div>

                <div className="space-y-2">
                    <Label htmlFor="length" className="text-brand-2">Length</Label>
                    <Select name="length" onValueChange={(value) => handleSelectChange("length", value)}>
                        <SelectTrigger className="border-[#632C2C]/20">
                            <SelectValue placeholder="Choose the poem length" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="short">Short</SelectItem>
                            <SelectItem value="medium">Medium</SelectItem>
                            <SelectItem value="long">Long</SelectItem>
                        </SelectContent>
                    </Select>
                </div>

                <div className="space-y-2">
                    <Label htmlFor="rhyme" className="text-brand-2">Rhyme Preference</Label>
                    <Select name="rhyme" onValueChange={(value) => handleSelectChange("rhyme", value)}>
                        <SelectTrigger className="border-[#632C2C]/20">
                            <SelectValue placeholder="Choose rhyme preference" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="yes">Yes</SelectItem>
                            <SelectItem value="no">No</SelectItem>
                            <SelectItem value="optional">Optional</SelectItem>
                        </SelectContent>
                    </Select>
                </div>

                <div className="space-y-2">
                    <Label htmlFor="languageStyle" className="text-brand-2">Language Style</Label>
                    <Select name="languageStyle" onValueChange={(value) => handleSelectChange("languageStyle", value)}>
                        <SelectTrigger className="border-[#632C2C]/20">
                            <SelectValue placeholder="Choose language style" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="formal">Formal</SelectItem>
                            <SelectItem value="casual">Casual</SelectItem>
                        </SelectContent>
                    </Select>
                </div>

                <div className="space-y-2">
                    <Label htmlFor="timeSetting" className="text-brand-2">Time or Setting</Label>
                    <Input
                        id="timeSetting"
                        name="timeSetting"
                        placeholder="Do you want the poem to evoke a certain setting or time?"
                        value={formData.timeSetting}
                        onChange={handleInputChange}
                        className="border-[#632C2C]/20"
                    />
                </div>

                <div className="space-y-2">
                    <Label htmlFor="personalization" className="text-brand-2">Personalization</Label>
                    <Input
                        id="personalization"
                        name="personalization"
                        placeholder="Include any personal details like names or places you'd like mentioned."
                        value={formData.personalization}
                        onChange={handleInputChange}
                        className="border-[#632C2C]/20"
                    />
                </div>

                <Button
                    type="submit"
                    disabled={isLoading || !formData.topic}
                    className="w-full bg-[#632C2C] hover:bg-[#632C2C]/90"
                >
                    {isLoading ? (
                        <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            Generating...
                        </>
                    ) : (
                        `Generate ${style}`
                    )}
                </Button>
            </form>

            {error && (
                <p className="text-red-500 text-sm">{error}</p>
            )}


        </div>
    )
}

export default PoemGenerator

