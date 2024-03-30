import { ArrowRight } from "lucide-react";
import Link from "next/link";
import React from "react";

const InfoBox = ({ text, link, btnText }: { text: String; link: URL; btnText: String }) => (
	<div className="max-w-md mx-2 text-white w-full flex flex-col items-end border border-amber-300 rounded-md p-3 bg-white/10 backdrop-blur-sm shadow-lg drop-shadow-2xl shadow-black/5">
		<p className="font-medium sm:text-lg text-center mb-2">{text}</p>
		<Link
			href={link}
			className="flex text-amber-300 justify-center w-fit gap-x-1 hover:text-sky-200 duration-200">
			{btnText} <ArrowRight />
		</Link>
	</div>
);

type objectType = {
	[key: number]: React.JSX.Element;
};

const content: objectType = {
	1: (
		<h1 className="sm:text-lg backdrop-blur-sm shadow-lg drop-shadow-2xl shadow-black/5 border border-amber-300 rounded-md p-3 bg-white/10 leading-snug text-center text-white py-4 px-8 mx-5">
			Hi, I&apos;m <span className="font-semibold">Kavindu Manahara.</span> 👋
			<br /> A front-end developer.
		</h1>
	),
	2: (
		<InfoBox
			text="I am 23 years old web developer and computer science undergraduate from Sri Lanka."
			link={new URL("/about", "http://localhost:3000")}
			btnText="Learn More"
		/>
	),
	3: (
		<InfoBox
			text="Curious about my projects? Check out my projects page to see my work."
			link={new URL("/project", "http://localhost:3000")}
			btnText="Visit Project"
		/>
	),
	4: (
		<InfoBox
			text="Looking for a developer to build your website? Lets talk."
			link={new URL("/contact", "http://localhost:3000")}
			btnText="Lets Talk"
		/>
	),
};

const HomeInfo = ({ currentStage }: { currentStage: number | null }) => {
	return currentStage !== null ? content[currentStage] : null;
};

export default HomeInfo;
