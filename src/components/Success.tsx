'use client'

import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Check, CheckCircle, Copy, Share2 } from 'lucide-react'
import Link from 'next/link'
import confetti from 'canvas-confetti'
import { useRouter, useSearchParams } from 'next/navigation'
import { useToast } from '@/hooks/use-toast'
import { Input } from '@/components/ui/input'
import dotenv from 'dotenv'

dotenv.config()

let DOMAIN_URL: string = '';

if (typeof window !== 'undefined') {
    DOMAIN_URL = window.location.origin
}


export default function Success() {
    const router = useRouter(); // Router for navigation
    const searchParams = useSearchParams()
    const poemId = searchParams.get('poemId');

    const link = `${DOMAIN_URL}/p/${poemId}`

    const [isCopied, setIsCopied] = useState(false)
    const { toast } = useToast()

    const copyToClipboard = async () => {
        try {
            await navigator.clipboard.writeText(link)
            setIsCopied(true)
            toast({
                title: "Link copied!",
                description: "The link has been copied to your clipboard.",
                duration: 3000,
            })
            setTimeout(() => setIsCopied(false), 3000)
        } catch (err) {
            console.error('Failed to copy text: ', err)
            toast({
                title: "Copy failed",
                description: "Please try copying the link manually.",
                variant: "destructive",
                duration: 3000,
            })
        }
    }
    useEffect(() => {
        if (!poemId) {
            router.push('/');
        }
    }, [poemId, router]);

    useEffect(() => {
        const duration = 3 * 1000
        const animationEnd = Date.now() + duration
        const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 }

        function randomInRange(min: number, max: number) {
            return Math.random() * (max - min) + min
        }

        const interval: NodeJS.Timeout = setInterval(function () {
            const timeLeft = animationEnd - Date.now()

            if (timeLeft <= 0) {
                return clearInterval(interval)
            }

            const particleCount = 50 * (timeLeft / duration)
            confetti(Object.assign({}, defaults, {
                particleCount,
                origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
                colors: ['#FFC0CB', '#FF69B4', '#FF1493', '#C71585']
            }))
            confetti(Object.assign({}, defaults, {
                particleCount,
                origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
                colors: ['#FFC0CB', '#FF69B4', '#FF1493', '#C71585']
            }))
        }, 250)

        return () => clearInterval(interval)
    }, [])

    const shareLink = () => {
        let url = ''
        if (typeof window !== 'undefined') {
            url = `${DOMAIN_URL}/p/${poemId}`;
        }
        const title = "This is for you... ";
        // const text = `Here's something interesting I want to share with you: ${url}`;

        if (navigator.share) {
            navigator.share({
                title,
                url,
            })
                .then(() => console.log("Link shared successfully!"))
                .catch((error) => console.error("Error sharing the link:", error));
        } else {
            alert("Sharing not supported. Copy the link manually.");
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-pink-50 to-red-50 flex items-center justify-center p-4">
            <Card className="w-full max-w-md bg-white border-red-200 shadow-xl">
                <CardContent className="p-6 text-center">
                    <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                    <h1 className="text-3xl font-bold text-red-800 mb-4">Purchase Successful!</h1>
                    <p className="text-xl text-brand-2 mb-6">
                        Your AI-generated love poem and digital envelope are ready to be sent!
                    </p>
                    <div className="space-y-4">
                        <Link href={`/p/${poemId}`} >
                            <Button className="w-full bg-brand-2 hover:bg-hover-2 text-white" >
                                View Your Poem
                            </Button>
                        </Link>

                        <Button
                            variant="outline"
                            className="w-full border-red-200 text-brand-2 hover:bg-red-50 border-brand-2"
                            onClick={shareLink}
                        >
                            Send Your Poem Now
                        </Button>
                    </div>
                    <div className="mt-8 pt-6 border-t border-red-100">
                        <div className="w-full max-w-md mx-auto space-y-4">
                            <h2 className="text-xl font-semibold text-brand-2">Share Your Poem</h2>
                            <div className="flex space-x-2">
                                <Input
                                    value={link}
                                    readOnly
                                    className="flex-grow border-red-200 focus:ring-red-500 focus:border-red-500"
                                />
                                <Button
                                    onClick={copyToClipboard}
                                    className={`${isCopied
                                        ? 'bg-green-500 hover:bg-green-600'
                                        : 'bg-red-600 hover:bg-red-700'
                                        } text-white transition-colors duration-300`}
                                    aria-label={isCopied ? "Copied" : "Copy link"}
                                >
                                    {isCopied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                                </Button>
                            </div>
                            <p className="text-sm text-brand-2">
                                Click the button to copy the link to your clipboard and share your poem with others!
                            </p>
                        </div>
                        <div className="flex justify-center space-x-4 mt-2">
                            <Button
                                variant="outline"
                                size="icon"
                                className="rounded-full border-brand-2 text-brand-2 hover:bg-red-50"
                                onClick={shareLink}
                            >
                                <Share2 className="h-4 w-4" />
                            </Button>
                        </div>
                    </div>
                    <div className="mt-8">
                        <Link
                            href="/"
                            className="text-brand-2 hover:text-red-800 underline"
                        >
                            Return to Homepage
                        </Link>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}