"use client";

import HomeInfo from "@components/HomeInfo";
import Bird from "@models/Bird";
import Island from "@models/Island";
import Plane from "@models/Plane";
import Sky from "@models/Sky";
import { Canvas, Euler, Vector3 } from "@react-three/fiber";
import { Suspense, useEffect, useState } from "react";
import Loader from "@components/Loader";

const Home = () => {
	const [screenScale, setScreenScale] = useState<Vector3>([1, 1, 1]);
	const [planeScale, setPlaneScale] = useState<Vector3>([1, 1, 1]);
	const [planePosition, setPlanePosition] = useState<Vector3>([1, 1, 1]);
	const [currentStage, setCurrentStage] = useState<number | null>(1);
	const screenPosition: Vector3 = [0, -6.5, -43];
	const rotation: Euler = [0.1, 4.7, 0];
	const [isRotating, setIsRotating] = useState<boolean>(false);

	// adjest with screen size
	const adjestIslandForScreenSize = () => {
		if (typeof window !== "undefined") {
			if (window.innerWidth < 768) {
				setScreenScale([0.9, 0.9, 0.9]);
				setPlaneScale([1.5, 1.5, 1.5]);
				setPlanePosition([0, -1.5, 0]);
			} else {
				setPlaneScale([3, 3, 3]);
				setPlanePosition([0, -4, 4]);
			}
		}
	};

	useEffect(() => {
		adjestIslandForScreenSize();
	}, []);

	return (
		<section className="w-full h-screen relative">
			<div className="absolute top-28 left-0 right-0 z-10 flex items-center justify-center">
				{currentStage && <HomeInfo currentStage={currentStage} />}
			</div>

			<Canvas
				className={`w-full h-screen bg-transparent ${
					isRotating ? "cursor-grabbing" : "cursor-grab"
				}`}
				camera={{ near: 0.1, far: 1000 }}>
				<Suspense fallback={<Loader />}>
					<directionalLight
						position={[1, 1, 1]}
						intensity={2}
					/>
					<ambientLight intensity={0.5} />
					<hemisphereLight
						color={"#b1e1ff"}
						groundColor={"#000000"}
						intensity={1}
					/>
					<Sky isRotating={isRotating} />
					<Bird />
					<Island
						position={screenPosition}
						scale={screenScale}
						rotation={rotation}
						isRotating={isRotating}
						setIsRotating={setIsRotating}
						currentStage={currentStage}
						setCurrentStage={setCurrentStage}
					/>
					<Plane
						planeScale={planeScale}
						planePosition={planePosition}
						isRotating={isRotating}
						rotation={[0, 20, 0]}
					/>
				</Suspense>
			</Canvas>
		</section>
	);
};

export default Home;
