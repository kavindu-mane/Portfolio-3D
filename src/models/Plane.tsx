"use client";

import { useAnimations, useGLTF } from "@react-three/drei";
import { Euler, Vector3 } from "@react-three/fiber";
import { useEffect, useRef } from "react";

type propType = {
	isRotating: boolean;
	planeScale: Vector3;
	planePosition: Vector3;
	rotation: Euler;
};

const Plane = ({ isRotating, ...props }: propType) => {
	const ref = useRef<THREE.Mesh>(null);
	const { scene, animations } = useGLTF("/assets/3d/plane.glb");
	const { actions } = useAnimations(animations, ref);

	useEffect(() => {
		if (actions["Take 001"]) {
			actions["Take 001"].play();
			if (isRotating) {
				actions["Take 001"].setDuration(2);
			} else {
				actions["Take 001"].setDuration(4);
			}
		}
	}, [actions, isRotating]);

	return (
		<mesh
			{...props}
			ref={ref}>
			<primitive object={scene} />
		</mesh>
	);
};

export default Plane;
