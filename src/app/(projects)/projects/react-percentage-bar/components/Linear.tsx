import React, { useState, useEffect } from "react";
import { BiPlus } from "react-icons/bi";
import { Skeleton } from "@components/ui/skeleton";
import dynamic from "next/dynamic";
import reactElementToJSXString from "react-element-to-jsx-string";
import { linearCodes } from "../constant/codes";
import MultipleObserver from "./MultipleObserver";
const Card = dynamic(() => import("./Card"), {
  ssr: true,
  loading: () => (
    <Skeleton className="h-[250px] w-full max-w-sm rounded-xl bg-slate-300" />
  ),
});

const Linear = () => {
  const [length, setLength] = useState(1);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <React.Fragment>
      <h2 className="mb-10 text-3xl">Examples</h2>
      <div className="flex w-full max-w-[110rem] flex-wrap justify-center gap-4 gap-y-10 pb-20">
        {linearCodes.slice(0, Math.min(19, 10 * length)).map((code, index) => {
          return (
            <Card
              key={index}
              text={reactElementToJSXString(code.element, {
                displayName: () => "LinearProgressBar",
                maxInlineAttributesLineLength: 1,
              })}
              title={code.title}
            >
              <MultipleObserver>
                <div className="scale-x-[0.85]">{code.element} </div>
              </MultipleObserver>
            </Card>
          );
        })}
      </div>

      {/* loading  */}
      {!isMounted && (
        <p className="text-md flex h-[20rem] min-w-[25rem] items-center justify-center italic">
          Loading...
        </p>
      )}

      {/* add button */}
      {length < 2 && (
        <button
          className={
            "mb-16 ms-2 mt-5 flex h-[2.2rem] cursor-pointer items-center rounded-md bg-gradient-to-r from-fuchsia-600 to-blue-700 px-4 text-white duration-300 ease-in hover:scale-90"
          }
          onClick={() => setLength((prev) => ++prev)}
        >
          <BiPlus className="relative" />
        </button>
      )}
    </React.Fragment>
  );
};

export default Linear;
