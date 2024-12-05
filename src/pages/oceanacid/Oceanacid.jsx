import "./Oceanacid.css"; 
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
import Fish from "./models-3d/Fish";
import ControlsOcean from "../../controls/ControlsOcean";
import Bottle from "./models-3d/Bottle";
import Bag from "./models-3d/Bag";
import Video from "./Video";
import PostProcessing from "./postProcessing/PostProcessing";



const acidification = () => {
  const cameraSettings = {
    position: [0, 15, 30],
    fov: 48,
  };


  const map = useMemo(
    () => [
      { name: "forward", keys: ["ArrowAbove", "KeyW"] },
      { name: "back", keys: ["ArrowAbove", "KeyS"] },
      { name: "left", keys: ["ArrowLeft", "KeyA"] },
      { name: "right", keys: ["ArrowRight", "KeyD"] },
      { name: "above", keys: ["ArrowUp", "KeyQ"] },
      { name: "below", keys: ["ArrowDown", "KeyE"] },
    ],

    []
  );

  return (
    <>
      <Slider />
      <Canvas className="ocean" shadows={true} camera={cameraSettings}>
        <LightsOcean />
        <Staging/>
        <ContactShadows />
        <OrbitControls/>
        <ControlsOcean/>
        <Suspense>
          <Physics debug={false} gravity={[0,-1,0]}>
            <Ocean />
            <Octopus />
            <Star/>
            <Bottle/>
            <Bag/>
            <Fish position={[-15, 3, 5]} scale={0.040} />
          <KeyboardControls map={map}>
            <Turtle/>
          </KeyboardControls>
          <WelcomeText />
          </Physics>
          <Video name="screen" position-z={-12} position-y={4} position-x={0} scale={5} />
          <PostProcessing/>
        </Suspense>
      </Canvas>
      <Loader />
    </>
  );
};

export default acidification;