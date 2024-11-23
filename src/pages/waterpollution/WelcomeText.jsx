import { Text3D, Text, Html } from "@react-three/drei";
import { useNavigate } from "react-router-dom";

const WelcomeText = () => {
  const navigate = useNavigate();

  const handleCLick = () => {
    navigate("/Sitemap");
  };

  return (
    <>
      <Html
        center
        occlude
        distanceFactor={6}
        transform
        position={[-1, 7.6, -5]}
        style={{
          color: "black",
          fontSize: "5pt",
          textAlign: "center",
        }}
      >
        <h1> La contaminación del agua es el principal problema actualmente, <br />
          debido a que es uno de nuestros soportes vitales,<br /> a continuación te presentare sus causas y cuidados
          </h1>
      </Html>
      <Text3D
        position={[-8, 9, -5]}
        font={"/fonts/Blue Ocean_Regular.json"}
        bevelEnabled
        bevelSize={0.02}
        bevelThickness={0.1}
        height={0.5}
        lineHeight={0.5}
        letterSpacing={0.05}
        size={0.9}
      >
        Contaminacion del agua
        <meshStandardMaterial color="#1681e6" />
      </Text3D>

      <Html transform position={[-13, 7, 0]}>
        <button className="ButtonA" onClick={handleCLick}>
          Volver al menú
        </button>
      </Html>
    </>
  );
};

export default WelcomeText;
