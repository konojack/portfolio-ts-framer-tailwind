import { motion } from 'framer-motion';
import Link from 'next/link';
import React from 'react';
import { SocialIcon } from 'react-social-icons';

type Props = {};

const Header = (props: Props) => {
  return (
    <header className="sticky top-0 max-w-7xl mx-auto p-5 flex flex-wrap items-start justify-between xl:items-center z-20">
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.2,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1,
        }}
        className="flex flex-row items-center"
      >
        <SocialIcon
          url="https://facebook.com"
          fgColor="gray"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://twitter.com"
          fgColor="gray"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://linkedin.com"
          fgColor="gray"
          bgColor="transparent"
        />
      </motion.div>
      <Link href="#contact">
        <motion.div
          initial={{
            x: 500,
            opacity: 0,
            scale: 0.2,
          }}
          animate={{
            x: 0,
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 1.5,
          }}
          className="flex flex-row items-center text-gray-300 cursor-pointer"
        >
          <SocialIcon
            className="cursor-pointer"
            network="email"
            fgColor="gray"
            bgColor="transparent"
          />
          <p className="uppercase hidden md:inline-flex text-sm text-gray-400">
            Get in touch
          </p>
        </motion.div>
      </Link>
    </header>
  );
};

export default Header;
