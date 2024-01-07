"use client";

import { Html } from "@react-three/drei";

const Loader = () => {
	return (
		<Html>
			<div className="flex justify-center items-center">
				<p className="text-2xl md:text-4xl blue-gradient_text font-medium animate-ping">KM</p>
			</div>
		</Html>
	);
};

export default Loader;
