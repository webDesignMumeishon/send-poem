import dbConnect from "@/lib/db";
import PoemStyle from "@/models/poemStyle";

const baseUrl = process.env.NEXT_BASE_URL

export default async function sitemap() {
    await dbConnect()
    const poemStyles = await PoemStyle.find()

    // Build static URLs
    const staticRoutes = [
        { url: `${baseUrl}/`, lastModified: new Date().toISOString() },
        { url: `${baseUrl}/poem-generator`, lastModified: new Date().toISOString() },
    ];

    // Build dynamic URLs
    const dynamicUrls = poemStyles.map((route) => ({
        url: `${baseUrl}/poem-generator/${route.name}`,
        lastModified: new Date().toISOString(),
    }));

    return [...staticRoutes, ...dynamicUrls];
}
