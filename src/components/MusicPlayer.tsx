"use client";

import { useEffect, useState } from "react";
import { HiSpeakerWave, HiSpeakerXMark } from "react-icons/hi2";

type propTypes = {
	isMusicPlaying: boolean;
	setIsMusicPlaying: (val: boolean) => void;
};

const MusicPlayer = ({ isMusicPlaying, setIsMusicPlaying }: propTypes) => {
	const [audio, setAudio] = useState<HTMLAudioElement | null>(null);

	useEffect(() => {
		if (typeof window !== "undefined") {
			setAudio(new Audio("/assets/audio/sakura.mp3"));
		}
	}, []);

	useEffect(() => {
		if (audio === null) return;
		audio.loop = true;
		isMusicPlaying ? audio.play() : audio.pause();
	}, [isMusicPlaying]);

	return (
		<div
			className={
				"fixed bottom-5 cursor-pointer bg-white/10 flex items-center justify-center rounded-full h-8 w-8 right-5 z-50 border border-amber-300 p-2 backdrop-blur-md shadow-lg drop-shadow-2xl shadow-black/5"
			}
			onClick={() => {
				setIsMusicPlaying(!isMusicPlaying);
			}}>
			<div className="w-4 h-4 text-white">
				{isMusicPlaying ? <HiSpeakerWave /> : <HiSpeakerXMark />}
			</div>
			{isMusicPlaying && (
				<>
					<div className="animate-ping absolute w-full h-full bg-white/15 rounded-full" />
					<div className="delay-100 animate-ping absolute w-full h-full bg-white/15 rounded-full" />
				</>
			)}
		</div>
	);
};

export default MusicPlayer;
