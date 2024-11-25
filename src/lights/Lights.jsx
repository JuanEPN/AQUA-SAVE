import { useHelper } from "@react-three/drei";
import { useRef } from "react";

const Lights = () => {
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
        intensity={5}
        shadow-mapSize={[1024, 1024]}
        shadow-camera-far={20}
        shadow-camera-left={-10}
        shadow-camera-right={10}
        shadow-camera-top={10}
        shadow-camera-bottom={-10}
        shadow-normalBias={0.05}
        castShadow
        color={"red"}
      />
      <pointLight
        ref={pointLightRef}
        position={[0, 5, 0]}
        intensity={5}
        shadow-camera-far={8}
        shadow-camera-left={-10}
        shadow-camera-right={10}
        shadow-camera-top={8}
        shadow-camera-bottom={-8}
        castShadow
        color={"red"}
      />
      <spotLight
        ref={spotLightRef}
        position={[5, 5, 5]}
        intensity={5}
        castShadow     
        color={"red"}   
      />
    </>
  );
};

export default Lights;