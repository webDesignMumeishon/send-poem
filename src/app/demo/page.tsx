// app/page.tsx
import Envelop from '@/components/Envelop';
// import { Metadata } from 'next';

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
    const poem = `
        In every dawn, your name I hear, <br />
        A whispered song, so pure, so clear. <br />
        Your eyes, a glow like stars above, <br />
        Illuminate the world with love. <br />

        The wind that whispers through the trees, <br />
        Carries your voice, a gentle breeze. <br />
        In every step, in every smile, <br />
        You make the journey so worthwhile. <br />

        Maria, in your heart I find, <br />
        A peace that soothes, a love that binds. <br />
        With you, my world is ever bright, <br />
        For you are my day, my moon, my night.
    `;
    return (
        <Envelop name={'Maria'} content={<p className='text-slate-700' dangerouslySetInnerHTML={{ __html: poem }} />} />
    );
}
