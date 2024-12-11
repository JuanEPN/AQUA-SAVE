import { Text3D, Html } from "@react-three/drei";
import { useNavigate } from "react-router-dom";
import useQuizStore from "../../stores/use-quiz-store";

const Textq = () => {
  const navigate = useNavigate();

  const {resetQuiz} =  useQuizStore(); 
  
  const handleCLick = () => {
    navigate("/Sitemap");
  };


  const handleReset = () =>{
    resetQuiz(); 
  };

  return (
    <>
      <Html
        center
        occlude
        distanceFactor={6}
        transform
        position={[18, 7.6, -10]}
        rotation={[Math.PI / 20, 6, 0]}
        style={{
          fontFamily: "Georgia, serif",
          color: "black",
          fontSize: "5pt",
          textAlign: "center",
        }}
      >
        <h1>
          Busca un cesto y bota la basura.<br /> Si no espera a llegar a tu casa a botarla, <br />eso hace la diferencia!
        </h1>
      </Html>
      <Text3D
        position={[-15, 12, -5]}
        font={"/fonts/Blue Ocean_Regular.json"}
        bevelEnabled
        bevelSize={0.02}
        bevelThickness={0.1}
        height={0.5}
        lineHeight={0.5}
        letterSpacing={0.05}
        size={0.9}
      >
        Recojamos la basura del agua!
        <meshStandardMaterial color="#1681e6" />
      </Text3D>

      <Html transform position={[-15, 10, 0]}>
        <button className="ButtonA" onClick={handleCLick}>
          Volver a la página anterior
        </button>
      </Html>

      <Html transform position={[-20, 10, 0]}>
        <button className="ButtonA" onClick={handleReset}>
          Reiniciar puzzle
        </button>
      </Html>
    </>
  );
};

export default Textq;
