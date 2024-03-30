import { ArrowRight } from "lucide-react";
import Link from "next/link";
import React from "react";

const InfoBox = ({
  text,
  link,
  btnText,
}: {
  text: String;
  link: string;
  btnText: String;
}) => (
  <div className="mx-2 flex w-full max-w-md flex-col items-end rounded-md border border-amber-300 bg-white/10 p-3 text-white shadow-lg shadow-black/5 drop-shadow-2xl backdrop-blur-sm">
    <p className="mb-2 text-center font-medium sm:text-lg">{text}</p>
    <Link
      href={link}
      className="flex w-fit justify-center gap-x-1 text-amber-300 duration-200 hover:text-sky-200"
    >
      {btnText} <ArrowRight />
    </Link>
  </div>
);

type objectType = {
  [key: number]: React.JSX.Element;
};

const content: objectType = {
  1: (
    <h1 className="mx-5 rounded-md border border-amber-300 bg-white/10 p-3 px-8 py-4 text-center leading-snug text-white shadow-lg shadow-black/5 drop-shadow-2xl backdrop-blur-sm sm:text-lg">
      Hi, I&apos;m <span className="font-semibold">Kavindu Manahara.</span> 👋
      <br /> A front-end developer.
    </h1>
  ),
  2: (
    <InfoBox
      text="I am 23 years old web developer and computer science undergraduate from Sri Lanka."
      link={"/about"}
      btnText="Learn More"
    />
  ),
  3: (
    <InfoBox
      text="Curious about my projects? Check out my projects page to see my work."
      link={"/projects"}
      btnText="Visit Project"
    />
  ),
  4: (
    <InfoBox
      text="Looking for a developer to build your website? Lets talk."
      link={"/contacts"}
      btnText="Lets Talk"
    />
  ),
};

const HomeInfo = ({ currentStage }: { currentStage: number | null }) => {
  return currentStage !== null ? content[currentStage] : null;
};

export default HomeInfo;
