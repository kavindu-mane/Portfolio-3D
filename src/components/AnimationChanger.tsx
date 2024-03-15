"use client";

import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "./ui/button";
import { CgArrowsExchangeAltV, CgCheck } from "react-icons/cg";

// mermaid animations
type ActionName =
	| "fight_idle"
	| "attack1"
	| "attack2"
	| "attack3"
	| "attack4"
	| "dead"
	| "run"
	| "skill1"
	| "skill2"
	| "skill3"
	| "vertigo";

const animations = {
	fight_idle: "Fight Idle",
	attack1: "Attack 1",
	attack2: "Attack 2",
	attack3: "Attack 3",
	attack4: "Attack 4",
	skill1: "Attack 5",
	skill2: "Attack 6",
	skill3: "Attack 7",
};

type propType = {
	currentAnimation: string;
	setCurrentAnimation: React.Dispatch<React.SetStateAction<ActionName>>;
};

const AnimationChanger = ({ currentAnimation, setCurrentAnimation }: propType) => {
	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button
					variant="outline"
					className="fixed text-white hover:text-white hover:bg-white/10 focus-visible:ring-0 focus-visible:ring-offset-0 start-5 bottom-5 cursor-pointer bg-white/10 flex items-center justify-center rounded-full h-8 w-8 right-5 z-50 border border-amber-300 p-2 backdrop-blur-md shadow-lg drop-shadow-2xl shadow-black/5">
					<CgArrowsExchangeAltV className="w-4 h-4 scale-150" />
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent className="ms-3 bg-white/20 min-w-40 text-white backdrop-blur-sm border-amber-400 shadow-lg drop-shadow-2xl shadow-black/5">
				{Object.keys(animations).map((key) => (
					<DropdownMenuItem
						key={key}
						onClick={() => setCurrentAnimation(key as ActionName)}
						className={`${
							currentAnimation === key ? "text-amber-400" : "text-white"
						} cursor-pointer`}>
						{animations[key as keyof typeof animations]}
						{currentAnimation === key && <CgCheck className="w-5 h-5" />}
					</DropdownMenuItem>
				))}
			</DropdownMenuContent>
		</DropdownMenu>
	);
};

export default AnimationChanger;
