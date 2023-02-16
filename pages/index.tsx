import About from '@/components/About';
import ContactMe from '@/components/ContactMe';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import WorkExperience from '@/components/WorkExperience';
import { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

const Home: NextPage = () => {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-thumb-[#f5ba3a]/80 scrollbar-track-gray-400/20">
      <Head>
        <title>Dawids Portfolio</title>
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

      <section id="experience" className="snap-center">
        <WorkExperience />
      </section>

      <section id="skills" className="snap-start">
        <Skills />
      </section>

      <section id="projects" className="snap-start">
        <Projects />
      </section>

      <section id="contact" className="snap-start">
        <ContactMe />
      </section>

      <Link href="#hero">
        <footer className="sticky bottom-5 w-full cursor-pointer">
          <div className="flex items-center justify-center">
            <Image
              src="https://media.licdn.com/dms/image/C4E03AQF8U7FGwMNPaQ/profile-displayphoto-shrink_800_800/0/1607675311873?e=1681948800&v=beta&t=sBTk0jt1huaYJbmTw8eZmUhj4OqnzlXVKhj-eyxjGvI"
              className="rounded-full filter grayscale hover:grayscale-0 cursor-pointer"
              alt="avatar"
              width="60"
              height="60"
            />
          </div>
        </footer>
      </Link>
    </div>
  );
};

export default Home;
