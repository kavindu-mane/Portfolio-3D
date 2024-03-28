"use client";

/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 angelfish.glb --transform --types 
Author: CGSoul (https://sketchfab.com/cgsoul)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/emperor-angelfish-3dc2d360d98c485496899121792ebcce
Title: Emperor Angelfish
*/

import * as THREE from "three";
import React, { useEffect, useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import { useFrame } from "@react-three/fiber";

type GLTFResult = GLTF & {
  nodes: {
    Object_8: THREE.SkinnedMesh;
    Object_10: THREE.SkinnedMesh;
    _rootJoint: THREE.Bone;
  };
  materials: {
    mt_EmperorAngelfish: THREE.MeshStandardMaterial;
  };
  animations: GLTFAction[];
};

type ActionName = "Take 001";
interface GLTFAction extends THREE.AnimationClip {
  name: ActionName;
}

const AngelFish = (props: JSX.IntrinsicElements["group"]) => {
  const group = useRef<THREE.Group>(null);
  const [multiplyingFactor, setMultiplyingFactor] = React.useState(1);
  const { nodes, materials, animations } = useGLTF(
    "/assets/3d/angelfish.glb",
  ) as GLTFResult;
  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    if (actions["Take 001"]) {
      actions["Take 001"].play();
    }
  }, [actions]);

  useFrame(() => {
    if (group.current) {
      if (group.current.position.x > 6) {
        setMultiplyingFactor(-1);
        group.current.rotation.y = Math.PI;
      } else if (group.current.position.x < -6) {
        setMultiplyingFactor(1);
        group.current.rotation.y = 0;
      }

      group.current.position.x += 0.01 * multiplyingFactor;
    }
  });

  return (
    <group
      ref={group}
      {...props}
      rotation={[0, 0, 0]}
      scale={[2, 2, 2]}
      position={[-5, 0.2, 2]}
      dispose={null}
    >
      <group name="Sketchfab_Scene">
        <primitive object={nodes._rootJoint} />
        <skinnedMesh
          name="Object_8"
          geometry={nodes.Object_8.geometry}
          material={materials.mt_EmperorAngelfish}
          skeleton={nodes.Object_8.skeleton}
          scale={0.01}
        />
        <skinnedMesh
          name="Object_10"
          geometry={nodes.Object_10.geometry}
          material={materials.mt_EmperorAngelfish}
          skeleton={nodes.Object_10.skeleton}
          scale={0.01}
        />
      </group>
    </group>
  );
};

export default AngelFish;
