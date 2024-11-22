import React from "react";
import "./Pollution.css";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useNavigate } from "react-router-dom";
import Seascene from "./models-3d/Seascene";
import { Physics } from "@react-three/rapier";
import Sewage from "./models-3d/Sewage";

const Pollution = () => {
  const navigate = useNavigate();

  const handleCLickA = () => {
    navigate("/Sitemap");
  };

  const handleClickB = () => {
    navigate("/waterpollution");
  };

  return (
    <main className="pollution-container">
      <button className="buttonBackWater" onClick={handleClickB}>
        Volver a la página anterior
      </button>
      <button className="buttonBackSite" onClick={handleCLickA}>
        {" "}
        Volver a la página principal
      </button>

      <h1 className="pollution-title">Maneras de Contaminación del agua</h1>
      <section className="pollution-introduction">
        <h2 className="pollution-introduction-title">¿Como sucede?</h2>
        <p className="pollution-description">
          La contaminación del agua es la alteración de su composición natural
          debido a la introducción de sustancias dañinas, como desechos
          industriales, químicos agrícolas, plásticos y aguas residuales. Estas
          sustancias afectan la calidad del agua, haciéndola peligrosa para el
          consumo humano, la vida acuática y los ecosistemas en general. La
          contaminación puede ocurrir en ríos, lagos, océanos y fuentes
          subterráneas, y sus efectos se extienden desde problemas de salud
          pública hasta la pérdida de biodiversidad y el desequilibrio
          ecológico.
        </p>
      </section>

      <section className="Scene1pollution">
        <Canvas>
          <Physics gravity={[0, -0.3, 0]}>
            <OrbitControls />
            <ambientLight intensity={0.5} />
            <directionalLight position={[5, 5, 5]} />
            <Seascene />
          </Physics>
        </Canvas>
      </section>

      <h2 className="Scene-title">Representación</h2>

      <section className="Scene2pollution">
        <Canvas>
          <OrbitControls />
          <ambientLight intensity={0.5} />
          <directionalLight position={[5, 5, 5]} />
          <Sewage />
        </Canvas>
      </section>
      <section className="pollution-explanation">
        <h2 className="pollution-title-explanation">
          Principales factores de la contaminación del agua
        </h2>
        <p className="pollution-description">
          Los principales factores de la contaminación del agua incluyen el
          vertido de desechos industriales, que introduce sustancias químicas
          tóxicas como metales pesados y productos petroquímicos en los cuerpos
          de agua. La agricultura intensiva es otra causa significativa, debido
          al uso excesivo de fertilizantes y pesticidas que se filtran hacia los
          ríos y acuíferos. Las aguas residuales domésticas no tratadas,
          cargadas de materia orgánica y microorganismos, también contribuyen a
          la contaminación. Además, los plásticos y microplásticos que terminan
          en los océanos representan un grave problema para la vida marina.
          Otros factores incluyen derrames de petróleo, la minería y la
          deforestación, que alteran la calidad y el flujo natural del agua.
        </p>
      </section>
    </main>
  );
};

export default Pollution;
