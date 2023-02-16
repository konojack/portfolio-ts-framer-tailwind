import { urlFor } from '@/lib/sanity';
import { Project } from '@/typings';
import { motion } from 'framer-motion';
import React from 'react';

type Props = {
  projects: Project[];
};

const Projects = ({ projects }: Props) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      transition={{
        duration: 2,
      }}
      whileInView={{ opacity: 1 }}
      className="h-[calc(100vh)] relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0"
    >
      <h3 className="absolute top-20 uppercase tracking-[20px] text-gray-500 text-2xl">
        Projects
      </h3>

      <div className="max-h-screen relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar scrollbar-thumb-[#f5ba3a]/80 scrollbar-track-gray-400/20">
        {projects?.map((project, i) => (
          <motion.div
            className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen"
            key={i}
          >
            <motion.img
              initial={{
                y: -300,
                opacity: 0,
              }}
              transition={{
                duration: 1,
              }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              src={urlFor(project?.image).url()}
              alt="project picture"
              className="h-36 w-36"
            />

            <div className="flex flex-col space-y-10 px-0 md:px-10 max-w-6xl">
              <h4 className="text-3xl font-semibold text-center">
                <span className="underline decoration-[#F7Ab0A]/50">
                  Case study {i + 1} of {projects.length}
                </span>
                {': '}
                {project?.title}
              </h4>

              <div className="flex items-center space-x-2 justify-center">
                {project?.technologies.map((technology) => (
                  <motion.img
                    className="h-10 w-10 rounded-xl"
                    key={technology._id}
                    src={urlFor(technology?.image).url()}
                    alt="technology image"
                  />
                ))}
              </div>
              <p className="text-base text-center">{project?.summary}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12"></div>
    </motion.div>
  );
};

export default Projects;
