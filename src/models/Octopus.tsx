"use client";
/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Author: rkuhlf (https://sketchfab.com/rkuhlf)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/octopus-f9c0186d5ac54bcfada2b6113de40ede
Title: Octopus
*/

import * as THREE from "three";
import React, { useEffect, useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import { Euler, Vector3 } from "@react-three/fiber";

type GLTFResult = GLTF & {
  nodes: {
    Object_7: THREE.SkinnedMesh;
    Object_8: THREE.SkinnedMesh;
    GLTF_created_0_rootJoint: THREE.Bone;
  };
  materials: {
    Octopus: THREE.MeshStandardMaterial;
    OctopusSuckers: THREE.MeshStandardMaterial;
  };
};

type propType = {
  currentAnimation: ActionName;
  position: Vector3;
  rotation: Euler;
  scale: Vector3;
};

type ActionName = "Idle" | "Walk" | "Dart" | "Walk.001";

const Octopus = ({ currentAnimation, ...props }: propType) => {
  const group = useRef<THREE.Group>(null);
  const { nodes, materials, animations } = useGLTF(
    "/assets/3d/octopus.glb",
  ) as GLTFResult;
  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    Object.values(actions).forEach((action) => {
      action?.stop();
    });

    if (actions[currentAnimation]) actions[currentAnimation]?.play();
  }, [actions, currentAnimation]);

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group
          name="Sketchfab_model"
          position={[-0.169, 0.454, -0.019]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
          scale={0.479}
        >
          <group name="root">
            <group name="GLTF_SceneRootNode" rotation={[Math.PI / 2, 0, 0]}>
              <group name="OctopusArmature_21">
                <group name="GLTF_created_0">
                  <primitive object={nodes.GLTF_created_0_rootJoint} />
                  <skinnedMesh
                    name="Object_7"
                    geometry={nodes.Object_7.geometry}
                    material={materials.Octopus}
                    skeleton={nodes.Object_7.skeleton}
                  />
                  <skinnedMesh
                    name="Object_8"
                    geometry={nodes.Object_8.geometry}
                    material={materials.OctopusSuckers}
                    skeleton={nodes.Object_8.skeleton}
                  />
                  <group name="Octopus_20" />
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
};

export default Octopus;
