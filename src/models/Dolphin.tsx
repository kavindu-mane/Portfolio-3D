import { useAnimations, useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    Object_7: THREE.SkinnedMesh;
    _rootJoint: THREE.Bone;
    FlipperL_05: THREE.Bone;
    FlipperR_07: THREE.Bone;
  };
  materials: {
    aiStandardSurface2: THREE.MeshStandardMaterial;
  };
};

const Dolphin = (props: JSX.IntrinsicElements["group"]) => {
  const dolphinRef = useRef<THREE.Group>(null);
  const { nodes, materials, animations } = useGLTF(
    "/assets/3d/dolphin_swimming.glb",
  ) as GLTFResult;
  const { actions } = useAnimations(animations, dolphinRef);

  useEffect(() => {
    if (actions["Take 001"]) {
      actions["Take 001"].play();
    }
  }, [actions]);

  useFrame(({ camera }) => {
    if (dolphinRef.current) {
      if (dolphinRef.current.position.x > camera.position.x + 25) {
        dolphinRef.current.rotation.y = -3.5 + Math.PI;
      } else if (dolphinRef.current.position.x < camera.position.x - 16) {
        dolphinRef.current.rotation.y = -3.5;
      }

      if (dolphinRef.current.rotation.y !== -3.5) {
        dolphinRef.current.position.x -= 0.05;
        dolphinRef.current.position.z += 0.1;
      } else {
        dolphinRef.current.position.x += 0.05;
        dolphinRef.current.position.z -= 0.1;
      }
    }
  });


  return (
    <group
      ref={dolphinRef}
      {...props}
      rotation={[0, -3.5, 0]}
      scale={[0.3, 0.3, 0.3]}
      dispose={null}
    >
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group name="DolphinanimTest_02fbx" rotation={[Math.PI / 2, 0, 0]}>
            <group name="Object_2">
              <group name="RootNode">
                <group name="Object_4">
                  <primitive object={nodes._rootJoint} />
                  <skinnedMesh
                    name="Object_7"
                    geometry={nodes.Object_7.geometry}
                    material={materials.aiStandardSurface2}
                    skeleton={nodes.Object_7.skeleton}
                  />
                  <group
                    name="Object_6"
                    position={[-0.031, 3.999, 0]}
                    rotation={[-1.571, 0, 0]}
                    scale={0.028}
                  />
                  <group
                    name="dolphin"
                    position={[-0.031, 3.999, 0]}
                    rotation={[-1.571, 0, 0]}
                    scale={0.028}
                  />
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
};

export default Dolphin;
