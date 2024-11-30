import { useHelper } from "@react-three/drei";
import { useRef } from "react";

const LightsAcuaticSystem = () => {
  const directionalLightRef = useRef();
  useHelper(directionalLightRef);

  const pointLightRef = useRef();
  useHelper(pointLightRef);

  const spotLightRef = useRef();
  useHelper(spotLightRef);

  return (
    <>
      <ambientLight intensity={1} />
      <directionalLight
        ref={directionalLightRef}
        position={[5, 5, 5]}
        intensity={3}
        shadow-mapSize={[1024, 1024]}
        shadow-camera-far={20}
        shadow-camera-left={-10}
        shadow-camera-right={10}
        shadow-camera-top={10}
        shadow-camera-bottom={-10}
        shadow-normalBias={0.05}
        castShadow
      />
      <pointLight
        ref={pointLightRef}
        position={[0, 5, 0]}
        intensity={7}
        shadow-camera-far={15}
        shadow-camera-left={-12}
        shadow-camera-right={12}
        shadow-camera-top={10}
        shadow-camera-bottom={-10}
        castShadow
      />
      <spotLight
        ref={spotLightRef}
        position={[5, 5, 5]}
        intensity={5}
        castShadow        
      />
    </>
  );
};

export default LightsAcuaticSystem;
