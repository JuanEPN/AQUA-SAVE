import { useMemo } from "react";
import { Canvas } from "@react-three/fiber";
import { KeyboardControls } from "@react-three/drei";
import Spongebob from "./Spongebob";

const Scenequiz = () => {
  const map = useMemo(() => [
    { name: "forward", keys: ["KeyW"] },
    { name: "back", keys: ["KeyS"] },
    { name: "left", keys: ["KeyD"] },
    { name: "right", keys: ["KeyA"] },
  ]);

  return (
    <Canvas shadows={false} >
      <KeyboardControls map={map}>
        <Spongebob />
      </KeyboardControls>
    </Canvas>
  );
};

export default Scenequiz;
