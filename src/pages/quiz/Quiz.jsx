import React from "react";
import useQuizStore from "../../stores/use-quiz-store";

const Quiz = () => {
  const {
    quiz,
    setQuiz,
    incrementQuizProgress,
    clearQuiz,
  } = useQuizStore();

  // Array de preguntas
  const questions = [
    {
      question: "¿Cuál es el recurso más importante para la vida en la Tierra?",
      options: ["Agua", "Aire", "Luz solar", "Minerales"],
      answer: "Agua",
    },
    {
      question: "¿Qué porcentaje del agua en la Tierra es potable?",
      options: ["97%", "50%", "3%", "10%"],
      answer: "3%",
    },
  ];

  const [currentQuestion, setCurrentQuestion] = React.useState(0);
  const [isQuizFinished, setIsQuizFinished] = React.useState(false);

  // Manejar respuesta seleccionada
  const handleAnswer = (selectedOption) => {
    if (selectedOption === questions[currentQuestion].answer) {
      setQuiz({ correctAnswers: quiz.correctAnswers + 1 });
    } else {
      setQuiz({ incorrectAnswers: quiz.incorrectAnswers + 1 });
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      incrementQuizProgress();
      setCurrentQuestion(nextQuestion);
    } else {
      incrementQuizProgress();
      setIsQuizFinished(true);
    }
  };

  // Reiniciar el quiz
  const restartQuiz = () => {
    setCurrentQuestion(0);
    clearQuiz();
    setIsQuizFinished(false);
  };

  return (
    <div className="quiz-container">
      {isQuizFinished ? (
        <div className="quiz-results">
          <h2>¡Quiz terminado!</h2>
          <p>Respuestas correctas: {quiz.correctAnswers}</p>
          <p>Respuestas incorrectas: {quiz.incorrectAnswers}</p>
          <p>Progreso: {quiz.percentageQuizCompleted}%</p>
          <button onClick={restartQuiz}>Reiniciar</button>
        </div>
      ) : (
        <div className="quiz-question">
          <h3>Pregunta {currentQuestion + 1}:</h3>
          <p>{questions[currentQuestion].question}</p>
          <div className="quiz-options">
            {questions[currentQuestion].options.map((option, index) => (
              <button key={index} onClick={() => handleAnswer(option)}>
                {option}
              </button>
            ))}
          </div>
          <p>Progreso: {quiz.percentageQuizCompleted}%</p>
        </div>
      )}
    </div>
  );
};

export default Quiz;
