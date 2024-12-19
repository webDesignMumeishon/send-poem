"use server";

import OpenAI from "openai";
import { PoemFields } from "../generate/page";
import { ChatCompletionMessageParam } from "openai/resources/chat/index.mjs";
import dbConnect from "@/lib/db";
import Poem, { IPoem } from "@/models/poem";
import { currentUser } from "@clerk/nextjs/server";

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

interface PoemFormData {
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
    style: string
}

const POEM_LIMIT = process.env.POEM_LIMIT || 700

export async function generateAiPoem(fields: PoemFields): Promise<{ poemDocument: IPoem, poemText: string }> {
    await dbConnect()
    const user = await currentUser()

    if (user === null) {
        throw new Error('please log in')
    }


    const messagesConfigs: OpenAI.Chat.Completions.ChatCompletionMessageParam[] = [
        {
            role: "system",
            content: `You are a poet assistant. Generate poems where each line ends with a newline character ('\\n') and follows a poetic format. Ensure the poem has a clear rhyme scheme or structure.The entire poem, including spaces and punctuation, must not exceed ${POEM_LIMIT} characters.`
        },
        {
            role: "user",
            content: `Write a personalized poem for ${fields.name}`
        }
    ]

    if (fields.style.length > 0) {
        const style: ChatCompletionMessageParam = {
            role: "user",
            content: `Write a poem in the "${fields.style}" style. The poem should reflect the characteristics of this style, adhering to its tone, vocabulary, and format. Ensure the poem is engaging and captures the essence of the chosen style.`
        }
        messagesConfigs.push(style)
    }

    if (fields.tone.length > 0) {
        const style: ChatCompletionMessageParam = {
            role: "user",
            content: `Write a poem using the "${fields.tone}" tone.`
        }
        messagesConfigs.push(style)
    }

    if (fields.audience.length > 0) {
        const style: ChatCompletionMessageParam = {
            role: "user",
            content: `Write a poem for this audience ${fields.audience}`
        }
        messagesConfigs.push(style)
    }

    if (fields.additional.length > 0) {
        const style: ChatCompletionMessageParam = {
            role: "user",
            content: `Write a poem considering the additional information. ${fields.additional}`
        }
        messagesConfigs.push(style)
    }

    const completion = await openai.chat.completions.create({
        messages: messagesConfigs,
        model: "gpt-4o-mini",
    });

    const poem = completion.choices[0].message.content;

    const poemDocument = await Poem.create({ name: fields.name, text: poem, email: user.emailAddresses[0].emailAddress })

    if (poem !== null) {

        const plainPoemDocument = {
            ...poemDocument.toObject(),
            _id: poemDocument._id.toString(), // Convert _id to a string
        };

        const poemText = poem.replace(/\\n/g, "")
        return { poemDocument: plainPoemDocument, poemText }
    }
    else {
        throw new Error('Cannot generate poem')
    }
}

export async function updatePoem(id: string, poemText: string) {
    await Poem.findByIdAndUpdate(
        id,
        { text: poemText },
        { new: true }
    );
}

export async function generatePoemByStyle(formData: PoemFormData) {
    try {
        const prompt = `
          Write a ${formData.style} with the following characteristics:
          - Theme/Subject: ${formData.topic}
          - Mood/Tone: ${formData.mood}
          - Keywords or Imagery: ${formData.keywords}
          - Audience/Recipient: ${formData.audience}
          - Perspective: ${formData.perspective}
          - Length: ${formData.length}
          - Rhyme Preference: ${formData.rhyme}
          - Language Style: ${formData.languageStyle}
          - Time or Setting: ${formData.timeSetting}
          - Personalization: ${formData.personalization}
    
          Please create a ${formData.style} that incorporates all these elements. The poem should be creative, engaging, and tailored to the specified requirements. Only return the poem text, without any additional commentary.
        `
        const messagesConfigs: OpenAI.Chat.Completions.ChatCompletionMessageParam[] = [
            {
                role: "system",
                content: `You are a poet assistant.`
            },
            {
                role: "user",
                content: prompt
            }
        ]

        const completion = await openai.chat.completions.create({
            messages: messagesConfigs,
            model: "gpt-4o-mini",
        });

        const poem = completion.choices[0].message.content;

        return poem
    } catch (error) {
        console.error('Error generating poem:', error)
        throw new Error('Failed to generate poem')
    }
}
