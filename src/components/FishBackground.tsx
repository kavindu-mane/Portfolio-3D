"use client";

import AngelFish from "@models/AngelFish";
import GuppyFish from "@models/GuppyFish";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";

const FishBackground = () => {
  return (
    <Canvas
      className={"pointer-events-none z-[-5]"}
      style={{ width: "100vw", height: "100vh", position: "fixed" }}
      camera={{ near: 0.1, far: 1000 }}
    >
      <Suspense fallback={null}>
        <directionalLight position={[1, 2, -1]} intensity={1.5} />
        <ambientLight intensity={0.4} />
        <hemisphereLight
          color={"#b1e1ff"}
          groundColor={"#000000"}
          intensity={1.3}
        />
        <AngelFish />
        <GuppyFish />
      </Suspense>
    </Canvas>
  );
};

export default FishBackground;
