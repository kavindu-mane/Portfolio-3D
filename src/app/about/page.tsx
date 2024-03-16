"use client";

import { skills, btnThemes } from "@constants";
import Image from "next/image";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import WorkTimeline from "@components/WorkTimeline";
import CTA from "@components/CTA";
import { useEffect, useState } from "react";
import Loading from "@app/loading";
import { Variants, motion } from "framer-motion";
import { cardVariants, headerVariants } from "@app/animations/variants";
import FishBackground from "@components/FishBackground";

const Page = () => {
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
              Hello I'm {""}
              <span className="yellow-gradient_text font-semibold drop-shadow-md">
                Kavindu
              </span>
            </h1>

            {/* about */}
            <div className="mt-8">
              <p className="indent-8 text-slate-100">
                I am 23 years old
                <span className="px-2 text-lg font-semibold italic drop-shadow-lg">
                  Front-end developer
                </span>
                from Sri Lanka.I have front-end skills in JavaScript , React ,
                Bootstrap and Tailwind CSS. As well as I'm currently learning
                PHP and Express Js as back-end technologies.These days I am
                reading for a degree in Bachelor of Computer Science and
                Technology degree program at Uva Wellassa University in Sri
                Lanka.
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* skills */}
        <div className="flex flex-col py-10">
          <h2 className="subhead-text">My Skills</h2>

          <div className="mt-16 flex flex-wrap justify-center gap-12">
            {skills.map((skill, key) => {
              return (
                <motion.div
                  key={key}
                  initial="offscreen"
                  whileInView="onscreen"
                  viewport={{ once: true, amount: 1 }}
                >
                  <motion.div variants={cardVariants}>
                    <div key={key} className="block-container h-20 w-20">
                      <div
                        className={`btn-back ${btnThemes[Math.floor(Math.random() * 6)]} rounded-xl`}
                      />
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger>
                            <div className="btn-front flex items-center justify-center rounded-xl !bg-white shadow-2xl shadow-black/5 drop-shadow-2xl">
                              <Image
                                src={
                                  "https://raw.githubusercontent.com/devicons/devicon/master/icons/" +
                                  skill.imageUrl
                                }
                                alt={skill.name}
                                width={0}
                                height={0}
                                sizes="100"
                                className="h-1/2 w-1/2 object-contain"
                              />
                            </div>
                          </TooltipTrigger>
                          <TooltipContent align="start">
                            <p>{skill.name}</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* experience */}
        <div className="flex flex-col py-10">
          <h2 className="subhead-text mb-10">My Experience</h2>
          <WorkTimeline />
        </div>

        {/* cta */}
        <CTA />
      </section>
    </section>
  );
};

export default Page;
