import React from 'react';
import { motion } from 'framer-motion';
import { Skill } from '@/typings';
import { urlFor } from '@/lib/sanity';

type Props = {
  directionLeft?: boolean;
  skill: Skill;
};

const Skill = ({ directionLeft, skill }: Props) => {
  return (
    <div className="group relative flex cursor-pointer">
      <motion.img
        initial={{
          x: directionLeft ? -90 : 90,
          opacity: 0,
        }}
        transition={{
          duration: 0.5,
        }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        src={urlFor(skill?.image).url()}
        className="rounded-full border border-gray-500 object-cover w-12 h-12 sm:w-24 sm:h-24 xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-300 ease-in-out"
      />
      <motion.div
        initial={{
          x: directionLeft ? -90 : 90,
        }}
        transition={{
          duration: 0.5,
        }}
        whileInView={{ x: 0 }}
        viewport={{ once: true }}
        className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white w-12 h-12 sm:w-24 sm:h-24 xl:w-32 xl:h-32 rounded-full z-0"
      >
        <div className="flex items-center justify-center h-full">
          <p className="text-xl sm:text-3xl font-bold text-black opacity-100">
            {skill?.progress}%
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default Skill;
