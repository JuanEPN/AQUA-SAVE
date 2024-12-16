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
import Staging from "../staging/Staging";
import Videoquiz from "./Videoquiz";
import Hook from "./models-3d/Hook";
import PlasticBag from "./models-3d/PlasticBag";
import ClothBag from "./models-3d/ClothBag";
import Bottle2 from "./models-3d/Bottle2";
import Shoe from "./models-3d/Shoe";
import Carafe from "./models-3d/Carafe";
import useAuthStore from "../../stores/use-auth-store";
import UserDAO from "../../daos/UserDAO";
import useQuizStore from "../../stores/use-quiz-store";

const Quiz =  () => {

  const resetQuiz = useQuizStore((state) => state.resetQuiz);
  
  useEffect(() => {
    // Llamamos a resetQuiz cuando el componente se monta
    resetQuiz();
  }, [resetQuiz]); // La dependencia es 'resetQuiz' para que se ejecute solo una vez

  const [message, setMessage] = useState(""); // Estado para el mensaje

  const handleBottleInside = (objectName) => {
    let message = "";

    // Definimos el mensaje dependiendo del objeto que colisione
    switch (objectName) {
      case "bottle-0":
        message = (
          <>
            ¡Correcto! Has tirado la botella a la basura, sigue así.<br />
            ¿Sabías que el plástico tarda cientos de años en descomponerse? Mientras tanto, contamina nuestros océanos y afecta a los animales marinos.
          </>
        );
        break;
      case "bottle-1":
        message = (
          <>
            ¡Bien hecho! La botella fue a la basura. ¡Sigue así!"<br />
            ¿Sabías que las botellas plásticas flotan durante años en el océano? Pueden ser ingeridas por animales marinos, provocando lesiones graves o incluso su muerte.
          </>
        );
        break;
      case "bottle-2":
        message = (
          <>
            ¡Excelente! La botella ha sido tirada a la basura. ¡Perfecto!<br />
            Cada pedazo de basura que tiras al mar, ya sea plástico, vidrio o tela, tiene el potencial de acabar con una vida marina. ¡Haz tu parte para protegerlos!
          </>
        );
        break;
      case "bag":
        message = (
          <>
            ¡Excelente! La bolsa ha sido tirada a la basura. ¡Perfecto! <br />
            Las bolsas plásticas que tiramos al mar pueden ser confundidas con medusas por las tortugas marinas. ¡Evitemos que se las traguen! <br/>
          </>
        );
        break;
      case "bottle2":
        message = (
          <>
          ¡Bien hecho! La Botella de vino fue a la basura. ¡Sigue así!.<br />
          El vidrio, aunque se cree inofensivo, puede romperse en el mar y convertirse en afilados fragmentos que dañan a los animales marinos.
          </>
        );
        break;
      case "carafe":
        message = (
          <>
           ¡Correcto! Has tirado la botella a la basura, sigue así.<br />
           La basura marina no solo destruye el hábitat de los animales, también interfiere con los ecosistemas y pone en riesgo las especies que dependen del mar para sobrevivir.
          </>
        );
        break;
      case "hook":
        message = (
          <>
            ¡Excelente! El gancho ha sido tirada a la basura. ¡Perfecto!.<br />
            Los ganchos de ropa que caen al mar pueden engancharse en las aletas de los peces y tortugas, limitando su movilidad y poniendo en peligro su vida.
          </>
        );
        break;
      case "plasticbag":
        message = (
          <>
            ¡Excelente! La bolsa ha sido tirada a la basura. ¡Perfecto!"<br />
            Recuerda: lo que tiras al mar, no desaparece. Se convierte en una amenaza para la biodiversidad marina, afectando tanto a los animales como a la salud de los océanos.
          </>
        );
        break;
      case "clothbag":
        message = (
          <>
            ¡Excelente! La bolsa de tela ha sido tirada a la basura. ¡Perfecto!<br />
            "Cada año, millones de toneladas de ropa y textiles terminan en el océano, donde los peces pueden ingerirlos accidentalmente, afectando su salud."
          </>
        );
        break;
      case "shoe":
        message = (
          <>
            ¡Excelente! El zapato ha sido tirado a la basura ¡Perfecto! <br />
            Los zapatos que tiramos en la playa o el mar no solo dañan el paisaje, también representan un riesgo de asfixia para las aves marinas y los mamíferos.
          </>
        );
        break;
    }

    setMessage(message); // Establece el mensaje para mostrar
    setTimeout(() => setMessage(""), 10000); // Eliminar el mensaje después de 3 segundos
  };

  // Posiciones para las botellas
  const bottlePositions = [
    [-4, 2, 3], // Primera botella
    [-8, 2, 0], // Segunda botella
    [-2, 2, 0], // Tercera botella
  ];

  // Mostramos un alert con los controles al cargar la escena
  useEffect(() => {
    alert(
      "Controles para la escena 3D:\n\n" +
        "- Doble click derecho en las basuras: Toma el modelo.\n" +
        "- Arrastrar el mouse: Mueve el modelo.\n" +
        "- Tecla espacio: suelta el modelo.\n" +
        "- Mueve la escena con click derecho.\n" +
        "- Acumulas monedas cada par de niveles superados.\n" 
    );
  }, []);

  return (
    <>
      <Levels />
      {message && <div className="message">{message}</div>}
      <Canvas>
        <Videoquiz
          name="Screen"
          position-y={6}
          position-x={-5}
          position-z={-8}
          scale={5}
        />
        <ControlsQuiz />
        <Staging />
        <Physics>
          <Textq />
          <Oceanquiz />
          <LightsOcean />
         <Carafe position={[1, -1, -8]} />
          <Shoe position={[-10, 0.2, 7]} />
          <Bottle2 position={[-10, 0, -8]} />
          <ClothBag position={[6, 0, 0]} />
          <Bagquiz position={[0, 0, 5]} />
          <Hook position={[-6, 0.6, 7]} />
          <PlasticBag position={[-9, 0, 2]} />
          {bottlePositions.map((position,  index) => (
            <Bottlequiz
              key={index}
              position={position}
              name={`bottle-${index}`}
            />
          ))}
          <Trashcan onBottleInside={handleBottleInside} />
        </Physics>
      </Canvas>
    </>
  );
};

export default Quiz;
