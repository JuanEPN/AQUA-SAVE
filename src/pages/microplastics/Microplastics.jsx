import { Canvas } from "@react-three/fiber";
import "./Microplastics.css";
import React, { useCallback, useMemo, useRef } from "react";
import PlasticBottle from "./models-3d/PlasticBottle";
import {
  KeyboardControls,
  OrbitControls,
  PositionalAudio,
} from "@react-three/drei";
import AquaticSystem from "./models-3d/AquaticSystem";
import LightsAcuaticSystem from "../../lights/LightsAcuaticSystem";
import TextM from "./TextM.jsx";
import Staging from "../staging/Staging.jsx";
import RainDrop from "./models-3d/RainDrop.jsx";
import Slider from "../../components/slider/Slider.jsx";
import { Physics } from "@react-three/rapier";
import BeachBall from "./models-3d/BeachBall.jsx";
import HermitCrab from "./models-3d/HermitCrab.jsx";
import PostProcessing from "./postprocessing/PostProcessing";
import MicroVideo from "./MicroVideo.jsx";
import SpongeBob from "./models-3d/SpongeBob.jsx";

const Microplastics = () => {
  const map = useMemo(
    () => [
      { name: "forward", keys: ["ArrowUp"] },
      { name: "back", keys: ["ArrowDown"] },
      { name: "left", keys: ["ArrowLeft"] },
      { name: "right", keys: ["ArrowRight"] },
      { name: "jump", keys: ["KeyW"] },
      { name: "down", keys: ["KeyD"] },
    ],
    []
  );

  const audioRef = useRef(null);
  const handleSound = useCallback(() => {
    audioRef.current.play();
    audioRef.current.setVolume(10);
  }, []);

  return (
    <>
      <Slider />
      <Canvas
        shadows={true}
        camera={{ position: [0, 0.9, 2], fov: 100 }}
        onClick={handleSound}
      >
        <OrbitControls makeDefault />
        <SpongeBob position={[-4.5, -0.7, 1.3]} scale={0.7} />
        <LightsAcuaticSystem />
        <KeyboardControls map={map}>
          <PlasticBottle />
        </KeyboardControls>
        <Physics debug={false}>
          <BeachBall />
          <AquaticSystem scale={6} />
        </Physics>
        <HermitCrab position={[1.7, -0.5, 1.8]} scale={0.4} />
        <TextM />
        <Staging />
        <PostProcessing />
        <MicroVideo name="S" position={[-5, 0.1, 0.1]} scale={1} />
        <group>
          <PositionalAudio
            ref={audioRef}
            url="/sounds/diver.mp3"
            distance={1}
          />
        </group>
        <RainDrop />
      </Canvas>
      <A11yAnnouncer/>
    </>
  );
}

export default Microplastics;
