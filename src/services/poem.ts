import openai from "@/lib/openai";

async function generateAiPoem(name: string): Promise<string> {

    const completion = await openai.chat.completions.create({
        messages: [
            {
                role: "system",
                content: "You are a poet assistant. Generate poems where each line ends with a newline character (`\\n`) and follows a poetic format. Ensure the poem has a clear rhyme scheme or structure."
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
        return poem
    }
    else {
        throw new Error('Cannot generate poem')
    }

}

export default generateAiPoem