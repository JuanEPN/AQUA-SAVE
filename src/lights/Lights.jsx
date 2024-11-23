import React from "react";
import { useRef } from "react";
const Lights = () => {

  const directionalLightRef = useRef();
  return (
    <>
      <ambientLight intensity={1} />
      <directionalLight
        ref={directionalLightRef}
        castShadow
        position={[-8, 7, 4]}
        intensity={4}
        shadow-mapSice={[64, 64]}
        shadow-camera-far={50}
        shadow-camera-left={-1}
        shadow-camera-right={1}
        shadow-camera-top={10}
        shadow-camera-bottom={-10}
        color={"red"}
      />
    </>
  );
};

export default Lights;
