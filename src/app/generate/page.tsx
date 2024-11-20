'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function GeneratePage() {
    const [step, setStep] = useState(1)
    const [inputs, setInputs] = useState({
        recipientName: '',
        occasion: '',
        tone: '',
        additionalInfo: ''
    })
    const [generatedPoem, setGeneratedPoem] = useState('')

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setInputs({ ...inputs, [e.target.name]: e.target.value })
    }

    const generatePoem = () => {
        // Simulating AI poem generation
        const poem = `Dear ${inputs.recipientName},\n\nOn this ${inputs.occasion} so bright,\nYour presence fills my heart with light.\n${inputs.additionalInfo}\nWith love that's ${inputs.tone} and true,\nThis poem I dedicate to you.`
        setGeneratedPoem(poem)
        setStep(2)
    }

    const handleCheckout = () => {
        // Simulating checkout process
        alert('Proceeding to checkout...')
        setStep(3)
    }

    return (
        <div className="min-h-screen ">
            <Card className="max-w-2xl mx-auto bg-inherit shadow-none border-none" style={{}}>
                <CardHeader className=" text-white">
                    <CardTitle className="text-red-500 text-2xl font-bold">Welcome to PoemPost</CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                    <Tabs value={`step${step}`} className="w-full">
                        <TabsList className="grid w-full grid-cols-3 mb-6">
                            <TabsTrigger
                                value="step1"
                                disabled={step < 1}
                                className="data-[state=active]:bg-red-500 data-[state=active]:text-white"
                            >
                                Input
                            </TabsTrigger>
                            <TabsTrigger
                                value="step2"
                                disabled={step < 2}
                                className="data-[state=active]:bg-red-500 data-[state=active]:text-white"
                            >
                                Preview
                            </TabsTrigger>
                            <TabsTrigger
                                value="step3"
                                disabled={step < 3}
                                className="data-[state=active]:bg-red-500 data-[state=active]:text-white"
                            >
                                Checkout
                            </TabsTrigger>
                        </TabsList>
                        <TabsContent value="step1">
                            <form onSubmit={(e) => { e.preventDefault(); generatePoem(); }} className="space-y-4">
                                <div>
                                    <Label htmlFor="recipientName" className="text-red-700">Recipient's Name</Label>
                                    <Input
                                        id="recipientName"
                                        name="recipientName"
                                        value={inputs.recipientName}
                                        onChange={handleInputChange}
                                        required
                                        className="border-red-200 focus:ring-red-500 focus:border-red-500"
                                    />
                                </div>
                                <div>
                                    <Label htmlFor="occasion" className="text-red-700">Occasion</Label>
                                    <Input
                                        id="occasion"
                                        name="occasion"
                                        value={inputs.occasion}
                                        onChange={handleInputChange}
                                        required
                                        className="border-red-200 focus:ring-red-500 focus:border-red-500"
                                    />
                                </div>
                                <div>
                                    <Label htmlFor="tone" className="text-red-700">Desired Tone</Label>
                                    <Input
                                        id="tone"
                                        name="tone"
                                        value={inputs.tone}
                                        onChange={handleInputChange}
                                        required
                                        className="border-red-200 focus:ring-red-500 focus:border-red-500"
                                    />
                                </div>
                                <div>
                                    <Label htmlFor="additionalInfo" className="text-red-700">Additional Information</Label>
                                    <Textarea
                                        id="additionalInfo"
                                        name="additionalInfo"
                                        value={inputs.additionalInfo}
                                        onChange={handleInputChange}
                                        className="border-red-200 focus:ring-red-500 focus:border-red-500"
                                    />
                                </div>
                                <Button type="submit" className="w-full bg-red-500 hover:bg-red-600 text-white">
                                    Generate Poem
                                </Button>
                            </form>
                        </TabsContent>
                        <TabsContent value="step2">
                            <div className="space-y-4">
                                <Textarea
                                    value={generatedPoem}
                                    readOnly
                                    className="min-h-[200px] border-red-200 focus:ring-red-500 focus:border-red-500"
                                />
                                <Button onClick={handleCheckout} className="w-full bg-red-500 hover:bg-red-600 text-white">
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
                                    className="w-full bg-red-500 hover:bg-red-600 text-white"
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
                        className="bg-red-500 hover:bg-red-600 text-white"
                    >
                        Next
                    </Button>
                </CardFooter>
            </Card>
        </div>
    )
}