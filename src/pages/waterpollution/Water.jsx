import React, { useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { Physics } from "@react-three/rapier";
import Beachtown from "./models-3d/Beachtown";
import Staging from "../staging/Staging";
import Controls from "../../controls/Controls";
import Lights from "../../lights/Lights";
import WelcomeText from "./WelcomeText";
import Oceanwaves from "./models-3d/Oceanwaves";
import Boardmodel from "./models-3d/Boardmodel";
import Boatmodel from "./models-3d/Boat";
import Slider2 from "../../components/sliderwater/Slider2";
import { KeyboardControls, Loader } from "@react-three/drei";
import { useMemo } from 'react';


const Water = () => {
  const map = useMemo(
    () => [
      { name: "forward", keys: ["KeyW"] },
      { name: "back", keys: ["KeyS"] },
      { name: "left", keys: ["KeyD"] },
      { name: "right", keys: ["KeyA"] },
    ],
    []
  );

  useEffect(() => {
    alert(
      "Controles para interactuar con los modelos 3D:\n\n" +
        "- Click derecho en los carteles: Ir a la explicación del tema.\n" +
        "- Click derecho en el boton para volver a la página anterior.\n" +
        "- Rueda: Hacer zoom.\n" +
        "- Arrastra el mouse con click izquierdo para mover la vista del modelo.\n" +
        "- Presiona W para mover el barco hacia adelante, S atrás, D a la derecha y A a la izquierda."
    );
  }, []);

  return (
    <>
      <Slider2 />
      <Canvas shadows={true}>
        <Controls />
        <Lights />
        <Physics>
          <WelcomeText castShadow receiveShadow/>
          <Staging />
          <Beachtown />
          <Oceanwaves />
          <Boardmodel />
          <KeyboardControls map={map}>
            <Boatmodel />
          </KeyboardControls>
        </Physics>
      </Canvas>
      <Loader/>
    </>
  );
};

export default Water;
