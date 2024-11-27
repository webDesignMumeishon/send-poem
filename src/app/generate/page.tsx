'use client'
import Image from "next/image"
import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { generateAiPoem } from '../actions/poem'
import { Preview } from '@/components/Preview'
import PoemAudienceSelect from '@/components/poem-inputs/PoemAudienceSelect'
import LanguageStyleSelect from '@/components/poem-inputs/LanguageStyleSelect'
import ToneMoodSelect from '@/components/poem-inputs/ToneMoodSelect'
import AdditionalInfoTextarea from '@/components/poem-inputs/AdditionalInfoTextarea'
import NameInput from '@/components/poem-inputs/NameInput'
import Link from "next/link"

export interface PoemFields {
    name: string;       // Name or title of the content
    style: string;      // Style of the content (e.g., formal, casual, artistic, etc.)
    audience: string;   // Target audience for the content
    tone: string;       // Tone of the content (e.g., humorous, serious, persuasive, etc.)
    additional: string; // Any additional details or context
}

export default function GeneratePage() {
    const [step, setStep] = useState(1)
    const [loading, setLoading] = useState(false)
    const [inputs, setInputs] = useState<PoemFields>({
        name: '',
        style: '',
        audience: '',
        tone: '',
        additional: ''
    })
    const [generatedPoem, setGeneratedPoem] = useState('')

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setInputs({ ...inputs, [e.target.name]: e.target.value })
    }

    const handleSelectChange = (field: string, value: string) => {
        setInputs({ ...inputs, [field]: value })
    }

    const generatePoem = async () => {
        setLoading(true)
        try {
            const poemRaw= await generateAiPoem(inputs)
            setGeneratedPoem(`${poemRaw}`)
            setLoading(false)
            setStep(2)
        } catch (error) {
            setLoading(false)
            alert(JSON.stringify(error))
        }

    }

    const handleCheckout = () => {
        alert('Proceeding to checkout...')
        setStep(3)
    }

    console.log(inputs)

    return (
        <div className="min-h-screen ">
            <Card className="max-w-2xl mx-auto bg-inherit shadow-none border-none">
                <CardHeader className=" text-white flex items-center">
                    <Link href={'/'}>
                        <Image
                            src="/poempost-icon.png"
                            alt="icon"
                            className="w-[100%]"
                            width={200}
                            height={150}
                            priority
                        />
                    </Link>

                </CardHeader>
                <CardContent className="pt-6">
                    <Tabs value={`step${step}`} className="w-full">
                        <TabsList className="grid w-full grid-cols-3 mb-6">
                            <TabsTrigger
                                value="step1"
                                disabled={step < 1}
                                className="data-[state=active]:bg-brand-2 data-[state=active]:text-white"
                            >
                                Input
                            </TabsTrigger>
                            <TabsTrigger
                                value="step2"
                                disabled={step < 2}
                                className="data-[state=active]:bg-brand-2 data-[state=active]:text-white"
                            >
                                Preview
                            </TabsTrigger>
                            <TabsTrigger
                                value="step3"
                                disabled={step < 3}
                                className="data-[state=active]:bg-brand-2 data-[state=active]:text-white"
                            >
                                Checkout
                            </TabsTrigger>
                        </TabsList>
                        <TabsContent value="step1">
                            <form onSubmit={(e) => { e.preventDefault(); generatePoem(); }} className="space-y-4">
                                <NameInput value={inputs.name} handleInputChange={handleInputChange} />
                                <LanguageStyleSelect id="style" handleSelectChange={handleSelectChange} />
                                <PoemAudienceSelect id="audience" handleSelectChange={handleSelectChange} />
                                <ToneMoodSelect id="tone" handleSelectChange={handleSelectChange} />
                                <AdditionalInfoTextarea id={'additional'} value={inputs.additional} handleInputChange={handleInputChange} />
                                <Button type="submit" className="w-full bg-brand-2 hover:bg-hover-2 text-white">
                                    Generate Poem
                                </Button>
                            </form>
                        </TabsContent>
                        <TabsContent value="step2">
                            <div className="space-y-4">
                                <Textarea
                                    value={generatedPoem}
                                    className="min-h-[200px] border-red-200 focus:ring-red-500 focus:border-red-500"
                                    onChange={(e) => setGeneratedPoem(e.target.value)}
                                />
                                <Preview poemPreview={generatedPoem} />
                                <Button onClick={handleCheckout} className="w-full bg-brand-2 hover:bg-hover-2 text-white">
                                    Proceed to Checkout
                                </Button>
                            </div>
                        </TabsContent>
                        <TabsContent value="step3">
                            <div className="space-y-4">
                                <h3 className="text-lg font-semibold text-red-700">Checkout</h3>
                                <p className="text-red-600">Your personalized poem is ready for purchase!</p>
                                <div>
                                    <Label htmlFor="email" className="text-red-700">Email</Label>
                                    <Input
                                        id="email"
                                        type="email"
                                        placeholder="Enter your email"
                                        required
                                        className="border-red-200 focus:ring-red-500 focus:border-red-500"
                                    />
                                </div>
                                <Button
                                    onClick={() => alert('Thank you for your purchase!')}
                                    className="w-full bg-brand-2 hover:bg-hover-2 text-white"
                                >
                                    Complete Purchase
                                </Button>
                            </div>
                        </TabsContent>
                    </Tabs>
                </CardContent>
                <CardFooter className="flex justify-between">
                    <Button
                        variant="outline"
                        onClick={() => setStep(Math.max(1, step - 1))}
                        disabled={step === 1}
                        className="border-red-200 text-red-600 hover:bg-red-50"
                    >
                        Previous
                    </Button>
                    <Button
                        onClick={() => setStep(Math.min(3, step + 1))}
                        disabled={step === 3}
                        className="bg-brand-2 hover:bg-hover-2 text-white"
                    >
                        Next
                    </Button>
                </CardFooter>
            </Card>
        </div>
    )
}