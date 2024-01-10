"use client";

import { skills } from "@constants";
import Image from "next/image";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import WorkTimeTine from "@components/WorkTimeTine";
import CTA from "@components/CTA";

const Page = () => {
	return (
		<section className="max-container">
			<h1 className="head-text">
				Hello I'm <span className="blue-gradient_text font-semibold drop-shadow-md">Kavindu</span>
			</h1>

			{/* about */}
			<div className="mt-8">
				<p className="indent-8 text-slate-600 dark:text-slate-400">
					I am 23 years old{" "}
					<span className="blue-gradient_text font-semibold drop-shadow-lg">
						Front-end developer
					</span>{" "}
					from Sri Lanka.I have front-end skills in JavaScript , React , Bootstrap and Tailwind CSS.
					As well as I'm currently learning PHP and Express Js as back-end technologies.These days I
					am reading for a degree in Bachelor of Computer Science and Technology degree program at
					Uva Wellassa University in Sri Lanka.
				</p>
			</div>

			{/* skills */}
			<div className="py-10 flex flex-col">
				<h2 className="subhead-text">My Skills</h2>

				<div className="mt-16 flex flex-wrap gap-12 justify-center">
					{skills.map((skill, key) => {
						return (
							<div
								key={key}
								className="block-container w-20 h-20">
								<div className="btn-back rounded-xl" />
								<TooltipProvider>
									<Tooltip>
										<TooltipTrigger>
											<div className="btn-front shadow-2xl drop-shadow-2xl shadow-black/5 rounded-xl flex justify-center items-center">
												<Image
													src={
														"https://raw.githubusercontent.com/devicons/devicon/master/icons/" +
														skill.imageUrl
													}
													alt={skill.name}
													width={0}
													height={0}
													sizes="100"
													className="w-1/2 h-1/2 object-contain"
												/>
											</div>
										</TooltipTrigger>
										<TooltipContent align="start">
											<p>{skill.name}</p>
										</TooltipContent>
									</Tooltip>
								</TooltipProvider>
							</div>
						);
					})}
				</div>
			</div>

			{/* experience */}
			<div className="py-10 flex flex-col">
				<h2 className="subhead-text mb-10">My Experience</h2>
				<WorkTimeTine />
			</div>

			{/* cta */}
			<CTA />
		</section>
	);
};

export default Page;
