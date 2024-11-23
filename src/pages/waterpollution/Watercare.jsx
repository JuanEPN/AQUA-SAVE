import React from "react";
import "./Watercare.css";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useNavigate } from "react-router-dom";
import Dolphinmodel from "./models-3d/Dolphinmodel";
import Rivermodel from "./models-3d/Rivermodel";

const Watercare = () => {
  const navigate = useNavigate();

  const handleCLickA = () => {
    navigate("/Sitemap");
  };

  const handleClickB = () => {
    navigate("/waterpollution");
  };

  return (
    <main className="watercare-container">
      <button className="buttonBackWater" onClick={handleClickB}>Volver a la página anterior</button>
      <button className="buttonBackSite" onClick={handleCLickA}> Volver a la página principal</button>

      <h1 className="watercare-title">Cuidado del agua</h1>
      <section className="watercare-introduction">
        <h2 className="watercare-introduction-title">¿Que es?</h2>
        <p className="watercare-description">
          El cuidado del agua es el conjunto de prácticas y acciones que buscan preservar este recurso vital para garantizar su disponibilidad y calidad para las generaciones presentes y futuras. Implica evitar su desperdicio, prevenir la contaminación de fuentes hídricas, y promover el uso responsable y sostenible en actividades diarias como el consumo doméstico, la agricultura y la industria. Cada gota cuenta en la protección de este recurso esencial para la vida y el equilibrio de los ecosistemas.
        </p>
      </section>

      <section className="Scene1watercare">
        <Canvas>
          <OrbitControls />
          <ambientLight intensity={3} />
          <directionalLight position={[5, 5, 5]} />
          <Rivermodel />
        </Canvas>
      </section>

      <h2 className="Scene-title">Representación</h2>

      <section className="Scene2watercare">
        <Canvas>
          <OrbitControls />
          <ambientLight intensity={0.5} />
          <directionalLight position={[5, 5, 5]} />
          <Dolphinmodel />
        </Canvas>
      </section>
      <section className="watercare-explanation">
        <h2 className="watercare-title-explanation">
          ¿Como se cuida el agua?
        </h2>
        <p className="watercare-description">
          Cuidar el agua es fundamental para asegurar su disponibilidad a largo plazo. Algunas de las acciones clave para proteger este recurso incluyen reducir el consumo innecesario, utilizando técnicas de ahorro como cerrar el grifo mientras no se esté usando, reparar fugas en las instalaciones y optar por electrodomésticos eficientes en el uso de agua. Además, es importante evitar la contaminación de ríos, lagos y océanos, no arrojando productos químicos ni desechos al agua. Practicar el reciclaje de aguas grises y promover el uso de tecnologías sostenibles en la agricultura y la industria también son pasos cruciales. Cada pequeña acción cuenta para conservar el agua y proteger el medio ambiente.
        </p>
      </section>
    </main >
  );
};

export default Watercare;
