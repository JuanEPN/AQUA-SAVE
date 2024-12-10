import "./Levels.css";
import React from "react";
import useQuizStore from "../../stores/use-quiz-store";

const Levels = () => {
  // Suscripción directa al estado levels
  const levels = useQuizStore((state) => state.levels);

  return (
    <div className="rating">
      {/* Estrella 1 */}
      <input
        checked={levels >= 1}
        className="radio"
        type="radio"
        id="star-1"
        name="star-radio"
        value="star-1"
        readOnly
      />
      <label className="radio-label" htmlFor="star-1">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path pathLength="360" d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"></path>
        </svg>
      </label>

      {/* Estrella 2 */}
      <input
        checked={levels >= 2}
        className="radio"
        type="radio"
        id="star-2"
        name="star-radio"
        value="star-2"
        readOnly
      />
      <label className="radio-label" htmlFor="star-2">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path pathLength="360" d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"></path>
        </svg>
      </label>

      {/* Estrella 3 */}
      <input
        checked={levels >= 3}
        className="radio"
        type="radio"
        id="star-3"
        name="star-radio"
        value="star-3"
        readOnly
      />
      <label className="radio-label" htmlFor="star-3">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path pathLength="360" d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"></path>
        </svg>
      </label>
    </div>
  );
};

export default Levels;
