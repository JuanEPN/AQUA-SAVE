import { useRef } from "react";
import { Color  } from "three";

const LightsOcean = () => {
  const directionalLightRef = useRef();
  const pointLightRef = useRef();

  return (
     <>
     <hemisphereLight
        position={[0, 5, 0]}
        intensity={0}
        skycColor={new Color("blue")}
        groundColor={new Color("white")}
      />

    <pointLight
       ref={pointLightRef}
       castShadow
       color={"white"}
       position={[1,1,0]}
       intensity={10}
     />

      <ambientLight intensity={1} />
      <directionalLight
        ref={directionalLightRef}
        castShadow
        position={[0, 7, 20]}
        intensity={4}
        shadow-camera-left={-50}
        shadow-camera-right={50}
        shadow-camera-top={50}
        shadow-camera-bottom={-50}
        shadow-camera-far={50}
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
        shadow-normalBias={0.5}
      />
    </>
  );
};

export default LightsOcean;
