"use client";

import HomeInfo from "@components/HomeInfo";
import { Canvas, Euler, Vector3 } from "@react-three/fiber";
import { Suspense, useEffect, useState } from "react";
import Loader from "@components/Loader";
import Mermaid from "@models/Mermaid";
import AnimationChanger from "@components/AnimationChanger";
import Links from "@components/Links";
import Loading from "./loading";
import Dolphin from "@models/Dolphin";

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

const Home = () => {
  const [screenScale, setScreenScale] = useState<Vector3>([1.8, 1.8, 1.8]);
  const [currentAnimation, setCurrentAnimation] =
    useState<ActionName>("fight_idle");
  const [isLoading, setIsLoading] = useState(true);
  const [currentStage, setCurrentStage] = useState<number | null>(1);
  const [screenPosition, setScreenPosition] = useState<Vector3>([0, -2.8, 0]);
  const rotation: Euler = [0, 0, 0];
  const [isRotating, setIsRotating] = useState<boolean>(false);

  // adjust with screen size
  const adjustIslandForScreenSize = () => {
    if (typeof window !== "undefined") {
      if (window.innerWidth < 768) {
        setScreenScale([1.4, 1.4, 1.4]);
      } else {
        setScreenScale([1.8, 1.8, 1.8]);
      }
    }
  };

  // work with screen size changes
  useEffect(() => {
    adjustIslandForScreenSize();

    const handleResize = () => {
      adjustIslandForScreenSize();
    };

    window.addEventListener("resize", handleResize);

    // cleanup function
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // change screen position for skill3 animation
  useEffect(() => {
    if (currentAnimation === "skill3") {
      setScreenPosition([0, -4, 0]);
    } else if (window.innerWidth > 768) {
      setScreenPosition([0, -2.8, 0]);
    } else {
      setScreenPosition([0, -2.2, 0]);
    }
  }, [currentAnimation]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsLoading(false);
    }
  }, []);

  // return loading animation if page loading
  if (isLoading) return <Loading />;

  return (
    <section className="relative h-screen w-full">
      <div className="absolute left-0 right-0 top-28 z-10 flex items-center justify-center">
        {currentStage && <HomeInfo currentStage={currentStage} />}
      </div>

      <Canvas
        className={`h-screen w-full overflow-hidden bg-transparent ${
          isRotating ? "cursor-grabbing" : "cursor-grab"
        }`}
        camera={{ near: 0.1, far: 1000 }}
      >
        <Suspense fallback={<Loader />}>
          <directionalLight position={[1, 2, -1]} intensity={1.5} />
          <ambientLight intensity={0.4} />
          <hemisphereLight
            color={"#b1e1ff"}
            groundColor={"#000000"}
            intensity={1.3}
          />

          <Dolphin position={[-8, 6, -10]} />

          <Mermaid
            position={screenPosition}
            scale={screenScale}
            rotation={rotation}
            currentAnimation={currentAnimation}
            isRotating={isRotating}
            setIsRotating={setIsRotating}
            currentStage={currentStage}
            setCurrentStage={setCurrentStage}
          />
        </Suspense>
      </Canvas>

      {/* animation changer button */}
      <AnimationChanger
        currentAnimation={currentAnimation}
        setCurrentAnimation={setCurrentAnimation}
      />

      {/* links */}
      {currentAnimation === "fight_idle" && <Links />}
    </section>
  );
};

export default Home;
