"use server";

import OpenAI from "openai";

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY, // Ensure your .env is properly configured
});

const POEM_LIMIT = process.env.POEM_LIMIT || 790

type PoemReturn = {
    poemRaw: string;
    poemBreakLine: string;
}

export async function generateAiPoem(name: string): Promise<PoemReturn> {
    const completion = await openai.chat.completions.create({
        messages: [
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
                content: `Write a personalized poem for ${name}, mentioning her brown eyes and how she fills my heart with joy.`
            }
        ],
        model: "gpt-4o-mini",
    });

    const poem = completion.choices[0].message.content;

    if (poem !== null) {
        const result = { poemRaw: poem.replace(/\\n/g, ""), poemBreakLine: poem }
        return result
    }
    else {
        throw new Error('Cannot generate poem')
    }
}
