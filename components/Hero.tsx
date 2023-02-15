import Image from 'next/image';
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import BackgroundCircles from './BackgroundCircles';

type Props = {};

const Hero = (props: Props) => {
  const [text, helper] = useTypewriter({
    words: [
      'Hello!',
      'My-name-is-Dawid-Konojacki.tsx',
      'And I am a <FrontEndDev />',
    ],
    loop: 0,
    deleteSpeed: 20,
    typeSpeed: 40,
    delaySpeed: 2000,
  });

  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircles />
      <Image
        src="https://media.licdn.com/dms/image/C4E03AQF8U7FGwMNPaQ/profile-displayphoto-shrink_800_800/0/1607675311873?e=1681948800&v=beta&t=sBTk0jt1huaYJbmTw8eZmUhj4OqnzlXVKhj-eyxjGvI"
        alt="avatar"
        width="128"
        height="128"
        className="relative rounded-full mx-auto object-cover"
      />
      <div>
        <h2 className="text-sm uppercase text-gray-500 tracking-[10px]">
          Frontend Engineer
        </h2>
        <h1 className="text-5xl lg:text-6xl text-white font-semibold px-10">
          <span className="mr-3">{text}</span>
          <Cursor cursorStyle="_" cursorColor="gray" />
        </h1>
      </div>
    </div>
  );
};

export default Hero;
