import { urlFor } from '@/lib/sanity';
import { PageInfo } from '@/typings';
import { motion } from 'framer-motion';
import React from 'react';

type Props = {
  pageInfo: PageInfo;
};

const About = ({ pageInfo }: Props) => {
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
      <h3 className="absolute top-20 uppercase tracking-[10px] sm:tracking-[20px] text-gray-500 text-xl sm:text-2xl">
        About
      </h3>
      <motion.img
        src={urlFor(pageInfo?.profilePic).url()}
        initial={{
          x: -200,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        className="mb-8 sm:mb-20 md:mb-0 flex-shrink-0 w-40 h-40 sm:w-56 sm:h-56 rounded-full md:rounded-lg md:w-64 md:h-96 xl:w-[500px] xl:h-[600px] object-cover"
      />
      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-2xl sm:text-4xl font-semibold">
          Here is a{' '}
          <span className="underline decoration-yellow-300/50">little</span>{' '}
          background
        </h4>
        <p className="text-sm sm:text-base">
          {pageInfo?.backgroundInformation}
        </p>
      </div>
    </motion.div>
  );
};

export default About;
