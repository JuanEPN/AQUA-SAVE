import {
  ContactShadows,
  KeyboardControls,
  Loader,
  OrbitControls,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { Suspense, useMemo } from "react";
import WelcomeText from "./WelcomeText";
import Ocean from "./models-3d/Ocean";
import LightsOcean from "../../lights/LightsOcean";
import Slider from "../../components/slider/Slider";
import Octopus from "./models-3d/Octopus";
import Turtle from "./models-3d/Turtle";
import { Physics } from "@react-three/rapier";
import Staging from "./Staging/Staging";
import Star from "./models-3d/Star";


const acidification = () => {
  const cameraSettings = {
    position: [0, 15, 30],
    fov: 60,
  };


  const map = useMemo(
    () => [
      { name: "forward", keys: ["ArrowUp", "KeyW"] },
      { name: "back", keys: ["ArrowDown", "KeyS"] },
      { name: "left", keys: ["ArrowLeft", "KeyA"] },
      { name: "right", keys: ["ArrowRight", "KeyD"] },
      { name: "above", keys: ["ArrowUp", "KeyQ"] },
      { name: "below", keys: ["ArrowAbove", "KeyE"] },
    ],

    []
  );

  return (
    <>
      <Slider />
      <Canvas className="ocean" shadows={true} camera={cameraSettings}>
        <LightsOcean />
        <OrbitControls />
        <Staging/>
        <ContactShadows />
        <Suspense>
          <Physics debug={false}>
            <Ocean />
            <Octopus />
            <Star/>
          <KeyboardControls map={map}>
            <Turtle />
          </KeyboardControls>
          <WelcomeText />
          </Physics>
        </Suspense>
      </Canvas>
      <Loader />
    </>
  );
};

export default acidification;
