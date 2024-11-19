// app/page.tsx
import { Metadata } from 'next';

// export const metadata: Metadata = {
//     title: 'Home Page',
//     description: 'Welcome to our Next.js application, built with modern best practices.',
//     keywords: ['Next.js', 'TypeScript', 'SEO'],
//     openGraph: {
//         title: 'Home Page',
//         description: 'Explore our amazing Next.js application.',
//         url: 'https://your-site.com',
//         images: [
//             {
//                 url: 'https://your-site.com/og-image.jpg',
//                 width: 1200,
//                 height: 630,
//                 alt: 'Open Graph Image Alt Text',
//             },
//         ],
//     },
// };

export default function DemoPage() {
    return (
        <main className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold text-center">Welcome to Next.js</h1>
            <p className="text-lg text-gray-600 text-center mt-4">
                Build powerful applications with Next.js and TypeScript.
            </p>
        </main>
    );
}
