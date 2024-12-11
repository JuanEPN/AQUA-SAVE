import "./Levels.css";
import React from "react";
import useQuizStore from "../../stores/use-quiz-store";

const Levels = () => {
  // Suscripción al estado global
  const levels = useQuizStore((state) => state.levels);

  return (
    <div className="rating">
      {[1, 2, 3, 4, 5].map((star) => (
        <React.Fragment key={star}>
          <input
            checked={levels === 1 ? star <= 5 : levels === 2 ? star <= 4 : levels === 3 ? star <= 3 : levels === 4 ? star <= 2 : levels === 5 ? star <= 1 : false}
            className="radio"
            type="radio"
            id={`star-${star}`}
            name="star-radio"
            value={`star-${star}`}
            readOnly
          />
          <label className="radio-label" htmlFor={`star-${star}`}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path pathLength="360" d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z" />
            </svg>
          </label>
        </React.Fragment>
      ))}
    </div>
  );
};

export default Levels;
