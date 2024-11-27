"use server";

import OpenAI from "openai";
import { PoemFields } from "../generate/page";
import { ChatCompletionMessageParam } from "openai/resources/chat/index.mjs";

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY, // Ensure your .env is properly configured
});

const POEM_LIMIT = process.env.POEM_LIMIT || 790

type PoemReturn = {
    poemRaw: string;
    poemBreakLine: string;
}

export async function generateAiPoem(fields: PoemFields): Promise<string> {

    const messagesConfigs: OpenAI.Chat.Completions.ChatCompletionMessageParam[] = [
        {
            role: "system",
            content: "You are a poet assistant. Generate poems where each line ends with a newline character (`\\n`) and follows a poetic format. Ensure the poem has a clear rhyme scheme or structure."
        },
        {
            role: "system",
            content: `Never include more than ${POEM_LIMIT}, it is extremely important that you follow this`
        },
        {
            role: "user",
            content: `Write a personalized poem for ${fields.name}, mentioning her brown eyes and how she fills my heart with joy.`
        }
    ]

    if (fields.style.length > 0) {
        const style: ChatCompletionMessageParam = {
            role: "user",
            content: `Write a poem in the "${fields.style}" style. The poem should reflect the characteristics of this style, adhering to its tone, vocabulary, and format. Ensure the poem is engaging and captures the essence of the chosen style.`
        }
        messagesConfigs.push(style)
    }


    const completion = await openai.chat.completions.create({
        messages: messagesConfigs,
        model: "gpt-4o-mini",
    });

    const poem = completion.choices[0].message.content;

    if (poem !== null) {
        return poem.replace(/\\n/g, "")
    }
    else {
        throw new Error('Cannot generate poem')
    }
}
