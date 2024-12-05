import React, { useState } from "react";
import { Canvas } from "@react-three/fiber";
import Trashcan from "./models-3d/Trashcan";
import { Physics } from "@react-three/rapier";
import LightsOcean from "../../lights/LightsOcean";
import Bottlequiz from "./models-3d/Bottlequiz";
import { OrbitControls } from "@react-three/drei";
import { Oceanquiz } from "./models-3d/Oceanquiz";
import React from 'react';
import './Quiz.css';


const Quiz = () => {
  const [message, setMessage] = useState(""); // Estado para el mensaje

  const handleBottleInside = () => {
    setMessage("¡Correcto! Has tirado la botella a la basura, sigue así.");
    setTimeout(() => setMessage(""), 3000); // Eliminar el mensaje después de 3 segundos
  };

  return (
    <>
      {message && <div className="message">{message}</div>} {/* Mostrar mensaje */}
      <Canvas>
        <OrbitControls/>
        <Physics>
        <Oceanquiz />
          <LightsOcean />
          <Bottlequiz />
          <Trashcan onBottleInside={handleBottleInside} />
        </Physics>
      </Canvas>
    </>
  );
};

export default Quiz;