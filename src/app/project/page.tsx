import CTA from "@components/CTA";
import { Badge } from "@components/ui/badge";
import { projects } from "@constants";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const Projects = () => {
	return (
		<section className="max-container">
			<h1 className="head-text">
				My <span className="blue-gradient_text font-semibold drop-shadow-md">Projects</span>
			</h1>

			{/* about */}
			<div className="mt-8">
				<p className="indent-8 text-slate-600 dark:text-slate-400">
					Welcome to my Web Developer Portfolio - a digital showcase of my passion for crafting
					compelling and innovative web experiences. As a dedicated web developer, I thrive on
					transforming ideas into interactive and visually appealing websites. Explore this page to
					discover a collection of my projects, each a testament to my skills in front-end and
					back-end development. From responsive designs to seamless user interactions, I invite you
					to delve into my work and witness the fusion of technology and creativity that defines my
					approach to web development.
				</p>
			</div>

			<div className="flex flex-wrap my-20 justify-between gap-16 max-w-screen-xl">
				{projects.map((project, key) => (
					<div
						className="w-full lg:max-w-md"
						key={key}>
						<div className="block-container w-12 h-12">
							<div className={`btn-back rounded-xl ${project.theme}`} />
							<div className="btn-front rounded-xl flex justify-center items-center">
								<p className="w-2/3 rounded-full h-2/3 object-contain text-white font-bold text-3xl flex items-center justify-center">
									{project.name[0]}
								</p>
							</div>
						</div>
						<div className="mt-5 flex flex-col">
							<h4 className="text-xl font-semibold">{project.name}</h4>
							<p className="mt-2 text-slate-600 dark:text-slate-400">{project.description}</p>
							<div className="flex flex-wrap gap-2 mt-5">
								{project.techStack.map((tech, key) => (
									<Badge
										key={key}
										variant={"default"}
										className="bg-slate-700 dark:bg-slate-400">
										{tech}
									</Badge>
								))}
							</div>
							<div className="mt-5 flex gap-x-1 font-semibold text-blue-600 dark:text-blue-400">
								<Link
									href={project.link}
									target="_blank"
									rel="noopener noreferrer">
									Live Link
								</Link>
								<ArrowRight />
							</div>
						</div>
					</div>
				))}
			</div>

			{/* cta */}
			<CTA />
		</section>
	);
};

export default Projects;
