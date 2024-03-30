"use client";

import { useEffect, useState } from "react";
import MusicPlayer from "./MusicPlayer";

const MusicPreference = () => {
  const [isCheckboxClicked, setIsCheckboxClicked] = useState<boolean>(false);
  const [isSavePreference, setIsSavePreference] = useState<boolean>(false);
  const [isMusicPlaying, setIsMusicPlaying] = useState<boolean>(false);

  useEffect(() => {
    const preference =
      typeof window !== "undefined" &&
      window.localStorage.getItem("dontAskAgain");
    setIsSavePreference(preference === null || false);
  }, [setIsSavePreference, setIsMusicPlaying]);

  const buttonsClick = (val: string) => {
    setIsSavePreference(false);
    setIsMusicPlaying(val === "true");
    if (isCheckboxClicked) window.localStorage.setItem("dontAskAgain", "true");
  };

  return (
    <div className="">
      <div
        className={`max-w-md ${
          isSavePreference ? "fixed" : "hidden"
        } start-1/2 top-1/2 z-50 w-full -translate-x-1/2 -translate-y-1/2 px-2`}
      >
        <div className="flex flex-col items-end rounded-md border border-amber-300 bg-black/20 p-3 text-emerald-100 shadow-lg shadow-black/5 drop-shadow-2xl backdrop-blur-md">
          <p className="w-full text-start">Start playing music ? </p>
          <div className="mt-5 flex w-full justify-between gap-x-2">
            <div className="flex items-center gap-x-3">
              <input
                type="checkbox"
                name="save"
                id="save"
                className="cursor-pointer"
                onChange={() => setIsCheckboxClicked(!isCheckboxClicked)}
              />
              <label
                htmlFor="save"
                className="cursor-pointer text-sm text-amber-400"
              >
                don&apos;t ask again
              </label>
            </div>
            <div className="flex gap-x-3">
              <button
                className="rounded-md border border-amber-400 bg-transparent px-4 py-1 text-white"
                onClick={() => {
                  buttonsClick("false");
                }}
              >
                No
              </button>
              <button
                className="rounded-md bg-amber-400 px-4 py-1 text-slate-700"
                onClick={() => {
                  buttonsClick("true");
                }}
              >
                Yes
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* music play icon */}
      <MusicPlayer
        isMusicPlaying={isMusicPlaying}
        setIsMusicPlaying={setIsMusicPlaying}
      />
    </div>
  );
};

export default MusicPreference;
