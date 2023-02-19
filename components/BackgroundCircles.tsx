import { motion } from 'framer-motion';
import React from 'react';

type Props = {};

const BackgroundCircles = (props: Props) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        scale: [1, 2, 2, 3, 1],
        opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1.0],
        borderRadius: ['20%', '20%', '50%', '80%', '20%'],
      }}
      transition={{
        duration: 2.5,
      }}
      className="relative flex justify-center items-center"
    >
      <div className="absolute border border-[#adadad] rounded-full h-[100px] w-[100px] sm:h-[200px] sm:w-[200px] mt-52 animate-ping" />
      <div className="absolute border border-[#333333] rounded-full h-[150px] w-[150px] sm:h-[300px] sm:w-[300px] mt-52 animate-ping" />
      <div className="absolute border border-[#333333] rounded-full h-[250px] w-[250px] sm:h-[500px] sm:w-[500px] mt-52 animate-ping" />
      <div className="absolute border border-[#8f8f8b] rounded-full h-[500px] w-[500px] sm:h-[650px] sm:w-[650px] mt-52 animate-pulse" />
    </motion.div>
  );
};

export default BackgroundCircles;
