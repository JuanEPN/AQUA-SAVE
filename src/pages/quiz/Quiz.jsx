import React from "react";
import useQuizStore from "../../stores/use-quiz-store";
import "./Quiz.css"; 


// Componente que muestra si la respuesta es correcta o incorrecta 
const FeedbackModal = ({ feedbackData, onNext }) => {
  return (
    <div className="feedback-modal">
      <h3 className="text-question">{feedbackData.isCorrect ? "¡Respuesta Correcta!" : "Respuesta Incorrecta"}</h3>
      <p className="text-explanation">{feedbackData.explanation}</p>
      <img src={feedbackData.image} alt="feedback" className="feedback-image" />
      <button className="button-following" onClick={onNext}>Siguiente</button>
    </div>
  );
};

const Quiz = () => {
  //  Llamamos lo que necesitamos del estado quiz
  const {
    quiz,
    setQuiz,
    incrementQuizProgress,
    clearQuiz,
  } = useQuizStore();

  // Array de las preguntas
  const questions = [
    {
      question: "¿Cuál es la causa más común de la contaminación del agua?",
      options: ["Lluvia", "Desechos químicos", "La fotosíntesis", "La luz solar"],
      answer: "Desechos químicos",
      feedback: "Los desechos quimicos contaminan el agua porque pueden contener sustancias toxicas que dañan la vida acuatica y los ecosistemas.",
    },
    {
      question: "¿Cuál es la principal causa de la acidificación de los océanos?",
      options: [
        "Exceso de nutrientes en el agua",
        "Aumento de dióxido de carbono en la atmósfera",
        "Disminución de dióxido de carbono",
        "Exceso de plantas marinas como algas",
      ],
      answer: "Aumento de dióxido de carbono en la atmósfera",
      feedback: "El aumento de CO2 en la admosfera se disuelve en el agua del oceano formando acido carbonico, lo que disminuye el PH del agua y causa la acidificacion.",
    },
    {
      question: "¿Qué son los micro plásticos?",
      options: [
        "Plásticos grandes que se descomponen lentamente",
        "Pequeñas partículas de plástico de menos de 5mm",
        "Plásticos biodegradables",
        "Plásticos bacterianos",
      ],
      answer: "Pequeñas partículas de plástico de menos de 5mm",
      feedback: "Los microplasticos son particulas de plastico muy pequeñas, generalmente de 5 milimetros que provienen de la descomposicion de plasticos mas grandes o de procuctos que contienen plastico.",
    },
    {
      question: "¿Cuál de las siguientes es una estrategia efectiva para conservar el agua?",
      options: [
        "Implementar sistemas de riego por goteo en la agricultura",
        "Aumentar el uso de piscinas privadas",
        "Incrementar la producción industrial sin mejoras de ahorro",
        "Fomentar el desperdicio de agua reciclada o de agua lluvia",
      ],
      answer: "Implementar sistemas de riego por goteo en la agricultura",
      feedback: "Implementar sistemas de riego por goteo en la agricultura es una estrategia altamente efectiva para conservar el agua, ya que este metodo entrega agua directamente a las raices de las plantas, minimizando la evaporacion y el desperdicio de agua.",
    },
  ];

  // Estado de respuestas 
  const [currentQuestion, setCurrentQuestion] = React.useState(0);
  const [isQuizFinished, setIsQuizFinished] = React.useState(false);
  const [showFeedback, setShowFeedback] = React.useState(false);
  // Información requerida para la alerta (feedback)
  const [feedbackData, setFeedbackData] = React.useState({ 
    isCorrect: false, 
    explanation: "", 
    image: "", 
  });

  // Manejar respuesta seleccionada
  const handleAnswer = (selectedOption) => {
    //Comparacion si la respuesta seleccionada es correcta
    const isCorrect = selectedOption === questions[currentQuestion].answer;
    //Si la respueta es correcta muestra la advertencia
    if (isCorrect) {
      // Va sumando +1 a las respuesta correctas
      setQuiz({ correctAnswers: quiz.correctAnswers + 1 });
      // Estado que cambia y se muestra cuando es correcta
      setFeedbackData({
        isCorrect: true,
        explanation: `¡Correcto!. La respuesta correcta es: "${questions[currentQuestion].answer}"`,
        image: "/images/gato1.png", 
      });
      // Si no muestra porque no es la correcta 
    } else {
      // Va sumando +1 a las respuestas incorrectas
      setQuiz({ incorrectAnswers: quiz.incorrectAnswers + 1 });
      // Estado que cambia y muestra cuando es incorrecta 
      setFeedbackData({
        isCorrect: false,
        explanation: `Incorrecto. La respuesta correcta es: "${questions[currentQuestion].answer}".  ${questions[currentQuestion].feedback}`,
        image: "/images/gato2.png", 
      });
    }

    setShowFeedback(true); // Mostrar la ventana emergente
  };

  // Manejar el botón siguiente
  const handleNextQuestion = () => {
    setShowFeedback(false); // Ocultar la ventana emergente
    // Variable que es igual a la pregunta actual +1 que es igual a la siguiente
    const nextQuestion = currentQuestion + 1;
    // Si hay más preguntas continua
    if (nextQuestion < questions.length) {
      incrementQuizProgress();
      setCurrentQuestion(nextQuestion);
      // Si ya se acabaron da por terminado el quiz
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
      {showFeedback ? (
        <FeedbackModal feedbackData={feedbackData} onNext={handleNextQuestion} />
      ) : isQuizFinished ? (
        <div className="quiz-results">
          <h2>¡Quiz terminado!</h2>
          <p>Respuestas correctas: {quiz.correctAnswers}</p>
          <p>Respuestas incorrectas: {quiz.incorrectAnswers}</p>
          <p>Progreso: {quiz.percentageQuizCompleted}%</p>
          <button className="button-reboot" onClick={restartQuiz}>Reiniciar</button>
        </div>
      ) : (
        <div className="quiz-question">
          <h3>Pregunta {currentQuestion + 1}:</h3>
          <p>{questions[currentQuestion].question}</p>
          <div className="quiz-options">
            {questions[currentQuestion].options.map((option, index) => (
              <button className="button-quiz" key={index} onClick={() => handleAnswer(option)}>
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
