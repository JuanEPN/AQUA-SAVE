import React from "react";
import { useNavigate } from "react-router-dom";
import "./Gridselection.css";
import { Image } from "@react-three/drei";


const themes = [
  {
    title: 'Contaminación del agua',
    image: '/images/pollution.jpeg',
    link: '/waterpollution',
  },
  {
    title: 'Acidificación de los océanos',
    image: '/images/acidification.jpeg',
    link: '/oceanacid',
  },
  {
    title: 'Microplásticos',
    image: '/images/microplastic.jpeg',
    link: '/microplastics',
  },
  {
    title: 'Escasez del agua',
    image: '/images/shortage.jpeg',
    link: '/watershortages',
  },
];

const Gridselection = () => {
  const navigate = useNavigate();

  const handleClick = (link) => {
    navigate(link);
  };

  return (
    <div className="grid">
      {themes.map((theme, index) => (
        <div
          key={index}
          className="card"
          onClick={() => handleClick(theme.link)}
        >
          <div className="imageContainer">
            <img src={theme.image} alt={theme.title} className="image"/>
          </div>
          <h3>{theme.title}</h3>
        </div>
      ))}
    </div>
  );
};

export default Gridselection;
