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
  const [goldCoins, setGoldCoins] = useState(0);

  // Mostrar el popup cuando se llegue a 5 estrellas
  useEffect(() => {
    if (levels === 5) {
      setShowPopup(true); // Mostrar el popup
      setGoldCoins((prevCoins) => prevCoins + 1); // Aumentar las monedas de oro
    }
  }, [levels]); // Se activa cada vez que levels cambia

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

      {/* Popup cuando se lleguen a 5 estrellas */}
      {showPopup && (
        <div className="popup">
          <div className="popup-content">
            <h2>¡Felicidades!</h2>
            <p>Has alcanzado las 5 estrellas. <br/>¡Bien hecho!</p>
            <button onClick={closePopup}>Cerrar</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Levels;

