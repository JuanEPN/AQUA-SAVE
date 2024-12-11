import { useHelper } from "@react-three/drei";
import { useRef } from "react";

const Lights = () => {
  const directionalLightRef = useRef();
  useHelper(directionalLightRef);

  return (
    <>
      <ambientLight intensity={20} />
      <directionalLight
        ref={directionalLightRef}
        castShadow
        position={[0, 5, 5]}
        intensity={4}
        shadow-mapSice={[64, 64]}
        shadow-camera-far={50}
        shadow-camera-left={-1}
        shadow-camera-right={1}
        shadow-camera-top={10}
        shadow-camera-bottom={-10}
      />
    </>
  );
};

export default Lights;
