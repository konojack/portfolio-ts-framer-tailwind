import { motion } from 'framer-motion';
import React from 'react';

type Props = {};

const ExperienceCard = (props: Props) => {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 transition-opacity duration-200 overflow-hidden">
      <motion.img
        initial={{
          y: -100,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
        src="https://scontent-waw1-1.xx.fbcdn.net/v/t39.30808-6/276169698_5170710446326680_4681203622561755058_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeEkL_VpfzUlGojl50usxwK12aVrOGZoaqHZpWs4ZmhqoWAzymdYL378C6kWhICx0CAbHgPyGusm_VpteSpS_O6V&_nc_ohc=HB7JvjrTbhEAX-oOP5g&tn=jEsBOF4DOfQkXyc4&_nc_ht=scontent-waw1-1.xx&oh=00_AfAxzsDY3Ut8M_ifFQ-fTieFU5zx-HqL8kIJh1I_Mb2seQ&oe=63F2C2F6"
        alt=""
      />
      <div className="px-0 md:px-10">
        <h4 className="text-4xl font-light">Junior Front End Developer</h4>
        <p className="font-bold text-2xl mt-1">SQUIZ</p>
        <div className="flex space-x-2 my-2">
          <motion.img
            className="h-10 w-10 rounded-xl"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/240px-Unofficial_JavaScript_logo_2.svg.png"
            alt=""
          />
          <motion.img
            className="h-10 w-10 rounded-xl"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/240px-Unofficial_JavaScript_logo_2.svg.png"
            alt=""
          />
          <motion.img
            className="h-10 w-10 rounded-xl"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/240px-Unofficial_JavaScript_logo_2.svg.png"
            alt=""
          />
        </div>
        <p className="uppercase py-5 text-gray-300">Started work... - ended</p>
        <ul className="list-disc space-y-4 ml-5 text-lg">
          <li>Summary points</li>
          <li>Summary points</li>
          <li>Summary points</li>
          <li>Summary points</li>
          <li>Summary points</li>
        </ul>
      </div>
    </article>
  );
};

export default ExperienceCard;
