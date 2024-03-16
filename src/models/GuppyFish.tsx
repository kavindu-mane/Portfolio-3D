"use client";

/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 guppy_fish.glb --transform --types 
Author: BlueMesh (https://sketchfab.com/VapTor)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/guppy-fish-21e14e4b961e406385539f79eacdb1dc
Title: Guppy Fish
*/

import * as THREE from "three";
import React, { useEffect, useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import { useFrame } from "@react-three/fiber";

type GLTFResult = GLTF & {
  nodes: {
    Circle_0: THREE.SkinnedMesh;
    Circle001_0: THREE.SkinnedMesh;
    Circle002_0: THREE.SkinnedMesh;
    Circle003_0: THREE.SkinnedMesh;
    Armature_rootJoint: THREE.Bone;
  };
  materials: {
    ["Material.001"]: THREE.MeshPhysicalMaterial;
  };
  animations: GLTFAction[];
};

type ActionName = "ArmatureAction.001";
interface GLTFAction extends THREE.AnimationClip {
  name: ActionName;
}
type ContextType = Record<
  string,
  React.ForwardRefExoticComponent<
    JSX.IntrinsicElements["skinnedMesh"] | JSX.IntrinsicElements["bone"]
  >
>;

const GuppyFish = (props: JSX.IntrinsicElements["group"]) => {
  const group = useRef<THREE.Group>(null);
  const [multiplyingFactor, setMultiplyingFactor] = React.useState(-1);
  const { nodes, materials, animations } = useGLTF(
    "/assets/3d/guppy_fish.glb",
  ) as GLTFResult;
  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    if (actions["ArmatureAction.001"]) {
      actions["ArmatureAction.001"].play();
    }
  }, []);

  useFrame(() => {
    if (group.current) {
      if (group.current.position.x > 11) {
        setMultiplyingFactor(-1);
        group.current.rotation.y = 0;
      } else if (group.current.position.x < -11) {
        setMultiplyingFactor(1);
        group.current.rotation.y = 0;
      }

      group.current.position.x += 0.01 * multiplyingFactor;
      group.current.rotation.y -= 0.002 * multiplyingFactor;
    }
  });

  return (
    <group
      ref={group}
      {...props}
      rotation={[0, 0, 0]}
      scale={[0.3, 0.4, 0.4]}
      position={[10, -1.2, 0]}
      dispose={null}
    >
      <group name="Sketchfab_Scene">
        <primitive object={nodes.Armature_rootJoint} />
        <skinnedMesh
          name="Circle_0"
          geometry={nodes.Circle_0.geometry}
          material={materials["Material.001"]}
          skeleton={nodes.Circle_0.skeleton}
          position={[0, 0.624, -3.196]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <skinnedMesh
          name="Circle002_0"
          geometry={nodes.Circle002_0.geometry}
          material={materials["Material.001"]}
          skeleton={nodes.Circle002_0.skeleton}
          position={[0, 0.624, -3.196]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <skinnedMesh
          name="Circle003_0"
          geometry={nodes.Circle003_0.geometry}
          material={materials["Material.001"]}
          skeleton={nodes.Circle003_0.skeleton}
          position={[0, 0.624, -3.196]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
      </group>
    </group>
  );
};

export default GuppyFish;
