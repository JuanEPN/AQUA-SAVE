import React from "react";
import "./GoldCoin.css"; // Asegúrate de agregar los estilos correspondientes

const GoldCoin = ({ goldCoins }) => {
  return (
    <div className="gold-coin-container">
      <div className="coin-icon">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="24"
          height="24"
        >
          <circle cx="12" cy="12" r="10" fill="gold" />
          <text x="12" y="16" fontSize="12" textAnchor="middle" fill="black">
            $
          </text>
        </svg>
      </div>
      <div className="coin-count">
        <span>{goldCoins}</span>
      </div>
    </div>
  );
};

export default GoldCoin;