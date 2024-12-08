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

    const poemDocument = await Poem.create({ name: fields.name, text: poem, email: user.emailAddresses[0].emailAddress })

    if (poem !== null) {
        const poemText = poem.replace(/\\n/g, "")
        return { poemDocument: poemDocument.toObject(), poemText }
    }
    else {
        throw new Error('Cannot generate poem')
    }
}
