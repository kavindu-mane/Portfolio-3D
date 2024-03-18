"use client";

import { useEffect, useState } from "react";
import MusicPlayer from "./MusicPlayer";

const MusicPreference = () => {
	const [isCheckboxClicked, setIsCheckboxClicked] = useState<boolean>(false);
	const [isSavePreference, setIsSavePreference] = useState<boolean>(false);
	const [isMusicPlaying, setIsMusicPlaying] = useState<boolean>(false);

	useEffect(() => {
		const preference = typeof window !== "undefined" && window.localStorage.getItem("dontAskAgain");
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
				} top-1/2 start-1/2 -translate-x-1/2 -translate-y-1/2 text-emerald-100 w-full flex flex-col items-end border border-amber-300 rounded-md p-3 bg-black/20 backdrop-blur-md shadow-lg drop-shadow-2xl shadow-black/5`}>
				<p className="text-start w-full">Start playing music ? </p>
				<div className="gap-x-2 flex mt-5 justify-between w-full">
					<div className="flex gap-x-3 items-center">
						<input
							type="checkbox"
							name="save"
							id="save"
							className="cursor-pointer"
							onChange={() => setIsCheckboxClicked(!isCheckboxClicked)}
						/>
						<label
							htmlFor="save"
							className="text-amber-400 text-sm cursor-pointer">
							don't ask again
						</label>
					</div>
					<div className="flex gap-x-3">
						<button
							className="bg-transparent border-amber-400 border text-white px-4 py-1 rounded-md"
							onClick={() => {
								buttonsClick("false");
							}}>
							No
						</button>
						<button
							className="bg-amber-400 text-slate-700 px-4 py-1 rounded-md"
							onClick={() => {
								buttonsClick("true");
							}}>
							Yes
						</button>
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
