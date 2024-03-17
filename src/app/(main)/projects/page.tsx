"use client";

import { cardVariants, headerVariants } from "@animations/variants";
import Loading from "../loading";
import CTA from "@components/CTA";
import FishBackground from "@components/FishBackground";
import { Badge } from "@components/ui/badge";
import { projects } from "@constants";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

const Projects = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsLoading(false);
    }
  }, []);

  // return loading animation if page loading
  if (isLoading) return <Loading />;

  return (
    <section>
      {/* fish models background */}
      <FishBackground />

      <section className="max-container">
        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.8 }}
        >
          <motion.div variants={headerVariants}>
            <h1 className="head-text">
              My
              <span className="yellow-gradient_text font-semibold drop-shadow-md">
                Projects
              </span>
            </h1>

            {/* about */}
            <div className="mt-8">
              <p className="indent-8 text-white">
                Welcome to my Web Developer Portfolio - a digital showcase of my
                passion for crafting compelling and innovative web experiences.
                As a dedicated web developer, I thrive on transforming ideas
                into interactive and visually appealing websites. Explore this
                page to discover a collection of my projects, each a testament
                to my skills in front-end and back-end development. From
                responsive designs to seamless user interactions, I invite you
                to delve into my work and witness the fusion of technology and
                creativity that defines my approach to web development.
              </p>
            </div>
          </motion.div>
        </motion.div>

        <div className="my-20 flex max-w-screen-xl flex-wrap justify-between gap-16">
          {projects.map((project, key) => (
            <motion.div
              className="w-full lg:max-w-md"
              key={key}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 1 }}
            >
              <motion.div variants={cardVariants}>
                <div className="block-container h-12 w-12">
                  <div className={`btn-back rounded-xl ${project.theme}`} />
                  <div className="btn-front flex items-center justify-center rounded-xl">
                    <p className="flex h-2/3 w-2/3 items-center justify-center rounded-full object-contain text-3xl font-bold text-white">
                      {project.name[0]}
                    </p>
                  </div>
                </div>
                <div className="mt-5 flex flex-col">
                  <h4 className="text-xl font-semibold text-yellow-500">
                    {project.name}
                  </h4>
                  <p className="mt-2 text-slate-100">{project.description}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.techStack.map((tech, key) => (
                      <Badge
                        key={key}
                        variant={"default"}
                        className="bg-amber-500 text-slate-900 hover:text-amber-400"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <motion.div
                    whileHover={{
                      translateX: 10,
                      transition: { duration: 0.3 },
                    }}
                    className="mt-5 flex w-fit cursor-pointer gap-x-1 font-semibold text-emerald-300"
                  >
                    <Link
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Repo Link
                    </Link>
                    <ArrowRight />
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* cta */}
        <CTA />
      </section>
    </section>
  );
};

export default Projects;
