import { Experience } from '@/typings';
import { motion } from 'framer-motion';
import React from 'react';
import ExperienceCard from './ExperienceCard';

type Props = {
  experiences: Experience[];
};

const WorkExperience = ({ experiences }: Props) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      transition={{
        duration: 2,
      }}
      whileInView={{ opacity: 1 }}
      className="h-screen relative flex flex-col md:flex-row max-w-full px-10 justify-evenly mx-auto items-center overflow-hidden text-left"
    >
      <h3 className="absolute top-20 uppercase tracking-[10px] sm:tracking-[20px] text-gray-500 text-xl sm:text-2xl">
        Experience
      </h3>
      <div className="w-full flex space-x-5 overflow-x-scroll p-5 mt-5 sm:p-10 sm:mt-10 snap-x snap-mandatory scrollbar scrollbar-thumb-[#f5ba3a]/80 scrollbar-track-gray-400/20">
        {experiences?.map((experience) => {
          return (
            <ExperienceCard key={experience._id} experience={experience} />
          );
        })}
      </div>
    </motion.div>
  );
};

export default WorkExperience;
