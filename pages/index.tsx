import About from '@/components/About';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Head from 'next/head';

export default function Home() {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll z-0">
      <Head>
        <title>Dawid's Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <section id="hero" className="snap-start">
        <Hero />
      </section>

      <section id="about" className="snap-center">
        <About />
      </section>
      {/* EXPERIENCE */}

      {/* SKILLS */}

      {/* PROJECT */}

      {/* CONTACT ME */}
    </div>
  );
}
