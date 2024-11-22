import React from "react";
import "./Treatment.css";
import { Canvas } from "@react-three/fiber";
import Coral from "./models-3d/Coral";
import { OrbitControls } from "@react-three/drei";
import { useNavigate } from "react-router-dom";
import Treatmentplant from "./models-3d/Treatmentplant";
import Video from "./Video";

const Treatment = () => {
  const navigate = useNavigate(); 

  const handleCLickA = () =>{
    navigate("/Sitemap");
  };
  
  const handleClickB = () =>{
    navigate("/waterpollution"); 
  }; 

  return (
    <main className="treatment-container">
      <button className="buttonBackWater" onClick={handleClickB}>Volver a la página anterior</button>
      <button className="buttonBackSite" onClick={handleCLickA}> Volver a la página principal</button>

      <h1 className="treatment-title">Tratamiento del agua</h1>
      <section className="treatment-introduction">
        <h2 className="treatment-introduction-title">¿Que es?</h2>
        <p className="treatment-description">
          El tratamiento del agua es un conjunto de procesos físicos, químicos y biológicos destinados a mejorar la calidad del agua,
          haciéndola apta para su consumo, uso industrial, agrícola o para su reincorporación al medio ambiente.
          Este proceso es esencial para garantizar la disponibilidad de agua potable,
          prevenir enfermedades relacionadas
          con el agua contaminada y proteger los ecosistemas acuáticos.
          En un mundo donde la contaminación, la escasez de agua dulce y el cambio climático están en aumento,
          el tratamiento del agua juega un papel crucial en la gestión sostenible de este recurso vital. Desde el tratamiento de aguas residuales hasta la desalinización del agua de mar, las tecnologías modernas y tradicionales se combinan para abordar desafíos como la eliminación de contaminantes,
          la reducción de la acidez en el agua y el control de microorganismos patógenos.
          Además, el tratamiento del agua no solo se centra en la purificación para el consumo humano,
          sino también en la recuperación y reutilización del agua en procesos industriales y agrícolas.
          Esto permite una gestión más eficiente y sostenible,
          contribuyendo a la conservación de los recursos hídricos y a la mejora de la calidad de vida.
        </p>
      </section>

      <section className="Scene1treatment">
        <Canvas>
          <OrbitControls />
          <ambientLight intensity={0.5} />
          <directionalLight position={[5, 5, 5]} />
          <Treatmentplant />
          <Video name="screen" position-y={9} scale={8} />
        </Canvas>
      </section>
      <h2 className="Scene-title">Representación</h2>
      <section className="treatment-explanation">
        <h2 className="treatment-title-explanation">
          ¿Cómo se trata el agua?
        </h2>
        <p className="treatment-description">
          El tratamiento del agua se realiza mediante una serie de etapas diseñadas para eliminar impurezas físicas, químicas y biológicas, dependiendo del tipo de agua y del uso final. Estas son las principales fases en el tratamiento del agua:
        </p>
        <p className="treatment-description">
          <strong>1. Captación</strong><br />
          El proceso comienza con la recolección del agua desde su fuente, como ríos, lagos, embalses o pozos subterráneos.
          En esta etapa, se asegura que el agua bruta sea transportada de manera segura hacia la planta de tratamiento.
        </p>
        <p className="treatment-description">
          <strong>2. Pretratamiento</strong><br />
          Antes de ingresar al sistema principal, se eliminan los sólidos más grandes como ramas, hojas, plásticos y piedras mediante rejillas y tamices.
          En ocasiones, se realiza una sedimentación inicial para eliminar partículas más densas.
        </p>
        <p className="treatment-description">
          <strong>3. Coagulación y Floculación</strong><br />
          Se añaden productos químicos como alumbre o cloruro férrico que actúan como coagulantes.
          Estos químicos forman partículas más grandes llamadas flóculos al unirse con las impurezas suspendidas en el agua.
        </p>
        <p className="treatment-description">
          <strong>4. Sedimentación</strong><br />
          El agua pasa a grandes tanques donde los flóculos, debido a su peso, se hunden al fondo.
          Este proceso permite separar gran parte de los contaminantes sólidos del agua.
        </p>
        <p className="treatment-description">
          <strong>5. Filtración</strong><br />
          El agua clarificada fluye a través de capas de materiales como arena, grava y carbón activado.
          Este paso elimina partículas más finas, incluidos algunos microorganismos y contaminantes químicos.
        </p>
        <p className="treatment-description">
          <strong>6. Desinfección</strong><br />
          Se añaden desinfectantes, como cloro, ozono o luz ultravioleta, para eliminar bacterias, virus y otros patógenos que puedan causar enfermedades.
          Este es un paso esencial para asegurar la calidad microbiológica del agua potable.
        </p>
        <p className="treatment-description">
          <strong>7. Ajuste de pH y Enriquecimiento</strong><br />
          Para garantizar que el agua sea segura para el consumo, se ajusta el pH utilizando productos químicos como cal o dióxido de carbono.
          Además, en algunos casos, se añade flúor o minerales para beneficios específicos de salud pública.
        </p>
        <p className="treatment-description">
          <strong>8. Almacenamiento y Distribución</strong><br />
          El agua tratada se almacena en tanques o depósitos antes de ser distribuida a los hogares, industrias y otros usuarios.
          En esta etapa, se mantiene un nivel de desinfectante residual para prevenir la contaminación en el transporte.
        </p>
      </section>
    </main >
  );
};

export default Treatment;
