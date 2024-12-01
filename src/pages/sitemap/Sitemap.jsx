import "./Sitemap.css";
import React from "react";
import { Link } from "react-router-dom";
import Gridselection from "../../components/Gridselection";
import useAuthStore from "../../stores/use-auth-store";
import Turtlemodel from "./Turtlemodel";
import { Canvas } from "@react-three/fiber";
import { ScrollControls } from "@react-three/drei";

const Sitemap = () => {
  const { user } = useAuthStore();

  return (
    <main className="sitemap-container">
      <section className="header-3d-model">
        <Canvas>
          <ScrollControls>
            <ambientLight intensity={2} />
            <directionalLight position={[10, 10, 5]} intensity={1} />
            <Turtlemodel position={[0, 0, 2]} />
          </ScrollControls>
        </Canvas>
      </section>
      <section className="sitemap-info">
        <h1 className="title-text">¡Bienvenido a nuestra página principal!</h1>
        <p>
          Hola, {user?.displayName || "querido usuario"} Aquí podrás encontrar
          enlaces a todas las secciones importantes de nuestra aplicación.
        </p>
        <div className="text-summary">
        <p>
           Te invitamos a explorar los principales problemas ambientales relacionados con el agua.
           Hablamos de la contaminación, que afecta la calidad del agua y pone en riesgo tanto los ecosistemas como nuestra salud;
           la acidificación de los océanos, que desestabiliza la vida marina y amenaza especies clave; 
           los microplásticos, que son pequeñas partículas que contaminan el agua y afectan a la fauna y a quienes consumen productos del mar; 
           y la escasez de agua, un problema agravado por el cambio climático y el uso excesivo del agua, dejando a millones sin acceso a este recurso esencial. 
           Cuidar el agua es fundamental para proteger los ecosistemas, garantizar nuestra salud y preservar la vida en el planeta.
        </p>
        </div>

        <div className="selection-temes">
          <h2 className="subtitle-text">Seleccionar Temas Ambientales</h2>
          <Gridselection />
        </div>

        <h2 className="subtitle-text">Secciones Principales</h2>
        <ul>
          <li>
            <Link to="/">Inicio</Link>
          </li>
          <li>
            <Link to="/Welcome">Bienvenida</Link>
          </li>
          <li>
            <Link to="/Sitemap">Mapa del Sitio</Link>
          </li>
          <li>
            <Link to="/Quiz">Quiz</Link>
          </li>
        </ul>

        <h2 className="subtitle-text">Información Adicional</h2>
        <ul>
          <li>
            <Link to="/about">Sobre Nosotros</Link>
          </li>
          <li>
            <Link to="/contact">Contacto</Link>
          </li>
        </ul>

        <h2 className="subtitle-text">Recursos</h2>
        <ul>
          <li>
            <Link to="/faq">Preguntas</Link>
          </li>
        </ul>

        <footer>
          <p>
            &copy; {new Date().getFullYear()} AQUA SAVE. Todos los derechos
            reservados.
          </p>
        </footer>
      </section>
    </main>
  );
};

export default Sitemap;
