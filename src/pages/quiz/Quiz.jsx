import React, { useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import Trashcan from "./models-3d/Trashcan";
import { Physics } from "@react-three/rapier";
import LightsOcean from "../../lights/LightsOcean";
import Bottlequiz from "./models-3d/Bottlequiz";
import Bagquiz from "./models-3d/Bagquiz";
import Textq from "./TextQ";
import ControlsQuiz from "../../controls/ControlsQuiz";
import Levels from "./Levels";
import Oceanquiz from "./models-3d/Oceanquiz";

const Quiz = () => {
  const [message, setMessage] = useState(""); // Estado para el mensaje

  const handleBottleInside = (objectName) => {
    let message = "";
    
    // Definimos el mensaje dependiendo del objeto que colisione
    switch(objectName) {
      case "bottle-0":
        message = "¡Correcto! Has tirado la botella a la basura, sigue así.";
        break;
      case "bottle-1":
        message = "¡Bien hecho! La botella fue a la basura. ¡Sigue así!";
        break;
      case "bottle-2":
        message = "¡Excelente! La botella ha sido tirada a la basura. ¡Perfecto!";
        break;
      case "bag":
        message = "¡Excelente! La bolsa ha sido tirada a la basura. ¡Perfecto!";
        break;
    }

    setMessage(message); // Establece el mensaje para mostrar
    setTimeout(() => setMessage(""), 3000); // Eliminar el mensaje después de 3 segundos
  };


  // Posiciones para las botellas
  const bottlePositions = [
    [-5, 5, 0], // Primera botella
    [-3, 5, 0], // Segunda botella
    [-1, 5, 0], // Tercera botella
  ];

  // Mostramos un alert con los controles al cargar la escena
  useEffect(() => {
    alert(
      "Controles para la escena 3D:\n\n" +
        "- Doble click derecho en las basuras: Toma el modelo.\n" +
        "- Arrastrar el mouse: Mueve el modelo.\n" +
        "- Tecla espacio: suelta el modelo.\n" +
        "- Mueve la escena con click derecho.\n"
    );
  }, []);

  return (
    <>
      <Levels />
      {message && <div className="message">{message}</div>} 
      <Canvas>
        <ControlsQuiz />
        <Physics>
          <Textq />
          <Oceanquiz />
          <LightsOcean />
          <Bagquiz/>
          {bottlePositions.map((position, index) => (
            <Bottlequiz key={index} position={position} name={`bottle-${index}`} />
          ))}
          <Trashcan onBottleInside={handleBottleInside} />
        </Physics>
      </Canvas>
    </>
  );
};

export default Quiz;

