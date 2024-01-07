import { ArrowRight } from "lucide-react";
import Link from "next/link";
import React from "react";

const InfoBox = ({ text, link, btnText }: { text: String; link: URL; btnText: String }) => (
	<div className="info-box max-w-md w-full">
		<p className="font-medium sm:text-lg text-center">{text}</p>
		<Link
			href={link}
			className="neo-brutalism-white neo-btn">
			{btnText} <ArrowRight />
		</Link>
	</div>
);

type objectType = {
	[key: number]: React.JSX.Element;
};

const content: objectType = {
	1: (
		<h1 className="sm:text-lg font-poppins leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5">
			Hi, I'm <span className="font-semibold">Kavindu Manahara.</span> 👋
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
			text="Cureous about my projects? Check out my projects page to see my work."
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
