"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FaGithub } from "react-icons/fa6";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneLight } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { MdDone } from "react-icons/md";
import { GoPaste } from "react-icons/go";
import Circular from "./components/Circular";
import Linear from "./components/Linear";
import dynamic from "next/dynamic";
import "react-percentage-bar/dist/index.css";

const LogoArea = dynamic(() => import("./components/LogoArea"), {
  ssr: true,
});

const Home = () => {
  const [copy, setCopy] = useState(false);
  const [isCircular, setIsCircular] = useState(true);

  return (
    <section className="relative flex h-auto min-h-screen w-screen flex-col items-center bg-white">
      {/* logo */}
      <LogoArea />
      {/*  download with npm */}
      <h2 className="mt-10 w-[20.5rem] text-left text-lg italic md:w-[30rem]">
        Download with npm
      </h2>
      {/* copy area */}
      <div className="mt-3 flex items-center justify-between rounded-md border-2 bg-slate-50 py-1 md:w-[30rem]">
        <SyntaxHighlighter
          language={"bash"}
          style={atomOneLight}
          customStyle={{
            marginLeft: "5px",
            width: "18rem",
          }}
          wrapLongLines={true}
        >
          {"npm i react-percentage-bar"}
        </SyntaxHighlighter>
        {copy ? (
          <span className="cursor-pointer pe-2">
            <MdDone className="relative h-5 w-5 text-slate-700" />
          </span>
        ) : (
          <span
            className="cursor-pointer pe-2"
            onClick={() => {
              setCopy(true);
              setTimeout(() => {
                setCopy(false);
              }, 3000);
            }}
          >
            <GoPaste className="relative h-5 w-5 text-slate-700" />
          </span>
        )}
      </div>

      {/* fork me */}
      <Link
        target="_blank"
        className="mt-5 flex cursor-pointer items-center gap-x-2 rounded-lg bg-gradient-to-r from-fuchsia-600 to-blue-700 px-3 py-2 
        text-white duration-300 ease-in hover:scale-95"
        href="https://github.com/kavindu-mane/react-percentage-bar/"
      >
        <FaGithub />
        Fork me on GitHub
      </Link>

      {/* button div */}
      <div className="my-10">
        <button
          className={
            (isCircular ? "bg-blue-600 text-white " : "text-blue-600 ") +
            "mx-2 scale-90 rounded-lg border border-blue-600 px-5 py-2 duration-300 ease-in hover:bg-blue-600 hover:text-white sm:mx-4 sm:scale-100"
          }
          onClick={() => setIsCircular(true)}
        >
          Circular
        </button>
        <button
          className={
            (!isCircular ? "bg-blue-600 text-white " : "text-blue-600 ") +
            "mx-2 scale-90 rounded-lg border border-blue-600 px-5 py-2 text-blue-600 duration-300 ease-in hover:bg-blue-600 hover:text-white sm:mx-4 sm:scale-100"
          }
          onClick={() => setIsCircular(false)}
        >
          Linear
        </button>
      </div>

      {/* element */}
      {isCircular ? <Circular /> : <Linear />}

      {/* developer */}
      <p className="absolute bottom-0 end-0 start-0 mt-10 w-screen bg-slate-700 py-2 text-center text-sm italic text-white">
        <span className="font-bold text-yellow-500">&lt;/&gt;</span>
        &ensp;With&ensp;&#10084;&#65039;&ensp;Kavindu Manahara
      </p>
    </section>
  );
};

export default Home;
