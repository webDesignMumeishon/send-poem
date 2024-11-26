import Envelop from '@/components/Envelop';


export default function DemoPage() {
    const poem = `
            In the depths of autumn's gentle sigh,<br />
            There’s a sparkle woven in your brown eyes,<br />
            With each glance, my worries softly fly,<br />
            In your laughter, the sun forever lies.<br />
            <br />
            Azul, your name is a sweet, tender song,<br />
            Like whispers of wind through the branches sway,<br />
            In your presence, I feel where I belong,<br />
            You fill my heart with joy in every way.<br />
            <br />
            When shadows creep and the night starts to fall,<br />
            Your warmth is a light that guides me back home,<br />
            In the garden of dreams, you’re the bloom that stands tall,<br />
            With you by my side, I never must roam.<br />
            <br />
            So here’s to the magic in every exchanged glance,<br />
            To the love that blooms brighter with each passing day,<br />
            Azul, you’re my heart’s most serene, sweet romance,<br />
            In your presence, my soul finds a place to play.<br />
    `;
    return (
        <Envelop name={'Maria'} content={<p className='text-slate-700' dangerouslySetInnerHTML={{ __html: poem }} />} />
    );
}
