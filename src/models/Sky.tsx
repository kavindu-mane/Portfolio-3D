import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

const Sky = ({ isRotating }: { isRotating: boolean }) => {
	const sky = useGLTF("/assets/3d/sky.glb");
	const skyRef = useRef<THREE.Mesh>(null);

	useFrame((_, delta) => {
		if (skyRef.current) {
			if (isRotating) {
				skyRef.current.rotation.y += 0.15 * delta;
			} else {
				skyRef.current.rotation.y += 0.05 * delta;
			}
		}
	});

	return (
		<mesh ref={skyRef}>
			<primitive object={sky.scene} />
		</mesh>
	);
};

export default Sky;
