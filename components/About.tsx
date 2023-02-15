import { motion } from 'framer-motion';
import React from 'react';

type Props = {};

const About = (props: Props) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      transition={{
        duration: 2,
      }}
      whileInView={{ opacity: 1 }}
      className="h-screen flex flex-col relative text-center md:text-left md:flex-row max-w-7xl px-10 justify-center mx-auto items-center"
    >
      <h3 className="absolute top-20 uppercase tracking-[20px] text-gray-500 text-2xl">
        About
      </h3>
      <motion.img
        src="https://i.ibb.co/XSFSmdz/dawdel.png"
        initial={{
          x: -200,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        className="mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full md:rounded-lg md:w-64 md:h-96 xl:w-[500px] xl:h-[600px] object-cover"
      />
      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-4xl font-semibold">
          Here is a{' '}
          <span className="underline decoration-yellow-300/50">little</span>{' '}
          background
        </h4>
        <p className="text-base">
          I am a Front End Developer with 6 years of experience. The last years
          of my work was an adventure related to the creation of the frontend
          layer of large commercial betting websites used by hundreds of
          thousands of people. I really like to develop and learn new
          technologies, especially in this industry where development and
          learning should come first.
        </p>
      </div>
    </motion.div>
  );
};

export default About;
