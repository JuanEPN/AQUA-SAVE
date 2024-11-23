import "./Sitemap.css";
import React from "react";
import { Link } from "react-router-dom";
import Gridselection from "../../components/Gridselection";
import useAuthStore from "../../stores/use-auth-store";
import Turtlemodel from "./Turtlemodel";
import { Canvas } from "@react-three/fiber";
import {  ScrollControls } from "@react-three/drei";

const Sitemap = () => {
  const { user } = useAuthStore();

  return (
    <div className="sitemap-container">
      <div className="header-3d-model">
        <Canvas>
          <ScrollControls>
            <ambientLight intensity={0.5} />
            <directionalLight position={[10, 10, 5]} intensity={1} />
            <Turtlemodel position={[0, 0, 2]} />
          </ScrollControls>
        </Canvas>
      </div>

      <h1>Sitios de interés de nuestra plataforma</h1>
      <p>
        Hola, {user?.displayName || "querido usuario"} Aquí podrás encontrar
        enlaces a todas las secciones importantes de nuestra aplicación.
      </p>

      <h2>Seleccionar temas</h2>
      <Gridselection />

      <h2>Secciones Principales de la Página</h2>
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

      <h2>Información Adicional</h2>
      <ul>
        <li>
          <Link to="/about">Sobre Nosotros</Link>
        </li>
        <li>
          <Link to="/contact">Contacto</Link>
        </li>
      </ul>

      <h2>Recursos</h2>
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
    </div>
  );
};

export default Sitemap;
