import "./Levels.css";
import React, { useState, useEffect } from "react";
import useQuizStore from "../../stores/use-quiz-store";
import GoldCoin from "./GoldCoin"; // Importamos el componente GoldCoin

const Levels = () => {
  // Suscripción al estado global
  const levels = useQuizStore((state) => state.levels);

  // Estado para mostrar el popup
  const [showPopup, setShowPopup] = useState(false);

  // Estado para las monedas de oro
  const [goldCoins, setGoldCoins] = useState(() => {
    const storedCoins = localStorage.getItem("goldCoin");
    return storedCoins !== null && !isNaN(parseInt(storedCoins)) ? parseInt(storedCoins) : 0;
  });

  // Mostrar el popup cuando se llegue a ciertos niveles
  useEffect(() => {
    const popupKey = `popupShown_level_${levels}`; // Genera una clave única por nivel

    if ((levels === 2 || levels === 4 || levels === 6 || levels === 8 || levels === 10) && !localStorage.getItem(popupKey)) {
      setGoldCoins((prevCoins) => prevCoins + 10); // Actualiza las monedas
      setShowPopup(true); // Muestra el popup
      localStorage.setItem(popupKey, "true"); // Guarda en localStorage que ya se mostró el popup para este nivel
    }
    if (levels === 0) {
      // Limpiar los popups de los niveles previos en localStorage
      for (let i = 1; i <= 10; i++) {
        const key = `popupShown_level_${i}`;
        localStorage.removeItem(key); // Borra la clave del popup correspondiente
      }
    }
  }, [levels]);

  // Sincroniza el estado de goldCoins con localStorage
  useEffect(() => {
    localStorage.setItem("goldCoin", goldCoins); // Guarda el nuevo valor en localStorage
    console.log("Monedas guardadas en localStorage:", goldCoins);
  }, [goldCoins]);

  // Función para cerrar el popup
  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <div>
      {/* Mostrar la moneda de oro en la parte superior derecha */}
      <GoldCoin goldCoins={goldCoins} /> {/* Llamamos al componente de la moneda de oro */}

      {/* Resto del código para las estrellas */}
      <div className="rating">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((star) => (
          <React.Fragment key={star}>
            <input
              checked={
                levels === 0 ? star <= 0 :
                levels === 1 ? star <= 10 :
                levels === 2 ? star <= 9 :
                levels === 3 ? star <= 8 :
                levels === 4 ? star <= 7 :
                levels === 5 ? star <= 6 :
                levels === 6 ? star <= 5 :
                levels === 7 ? star <= 4 :
                levels === 8 ? star <= 3 :
                levels === 9 ? star <= 2 :
                levels === 10 ? star <= 1 : false
              }
              className="radio"
              type="radio"
              id={`star-${star}`}
              name="star-radio"
              value={`star-${star}`}
              readOnly
            />
            <label className="radio-label" htmlFor={`star-${star}`}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path
                  pathLength="360"
                  d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"
                />
              </svg>
            </label>
          </React.Fragment>
        ))}
      </div>

      {/* Popup cuando se lleguen a niveles especiales */}
      {showPopup && (
        <div className="popup">
          <div className="popup-content">
            <h2>¡Felicidades!</h2>
            <p>Has alcanzado un nivel {levels}. <br />¡Bien hecho!</p>
            <button onClick={closePopup}>Cerrar</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Levels;

