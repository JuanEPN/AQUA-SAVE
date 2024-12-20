import { Html, Text, Text3D } from "@react-three/drei";
import { useNavigate } from "react-router-dom";


const TextM = () => {

  const handleBottle =() => {
    alert("Para mover la botella\nArriba: W \nAbajo: D\nDerecha: -> flecha derecha\nIzquierda: <- flecha izquierda\nAdelante: flecha en dirección hacia abajo\nAtrás: flecha en dirección hacia arriba"
    );
  };

  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/Sitemap');
  };

  return (
    <>
        <Text
        position={[-0.01, 2.3 , 0]}
        fontSize={0.3}
        color={"purple"}
        font="/fonts/Blue-Ocean.ttf"
      >
        {" "}
        Conoce sobre los 
      </Text>
      <Text3D
        position={[-1.5, 1.8, 0]}
        anchorX="center"
        anchorY="middle"
        font={"/fonts/Blue Ocean_Regular.json"}
        bevelEnabled
        bevelSize={0.01}
        bevelThickness={0.01}
        height={0.1}
        lineHeight={0.8}
        letterSpacing={0.05}
        size={0.3}
      >
        {'MICROPLÁSTICOS\n   EN EL AGUA'}
        <meshNormalMaterial/>
      </Text3D>
      <Html 
      occlude
      center
      distanceFactor={3}
      transform
      position={[-1.2, 2.5 , 0]}>
        <button className="ButtonA" onClick={handleClick}> 
          volver al menú
        </button>
      </Html>
      <Html
      occlude
      center
      distanceFactor={3}
      transform
      position={[1.2,2.5,0]}>
        <button className="BM" onClick={handleBottle}>Tips para mover botella</button>
      </Html>
      <Html
        occlude
        center
        distanceFactor={3}
        transform
        position={[0.2, 1.2, 0]}
      >
        <p className="tittle-text"> Haz clic en la botella para ver las soluciones </p>
        
      </Html>
      <Text3D
        position={[-3.5, 1.3, 0]} font={"/fonts/Blue Ocean_Regular.json"}
        bevelThickness={0.1}
        height={0.1}
        size={0.2}
        
        >
        {'¿Qué son los\nmicroplásticos?'}
        <meshStandardMaterial color={"purple"} />
      </Text3D>
      <Text3D
        position={[2.3, 1.2, 0]} font={"/fonts/Blue Ocean_Regular.json"}
        bevelThickness={0.1}
        height={0.1}
        size={0.2}
        
        >
        {'Recomendaciones'}
        <meshStandardMaterial color={"purple"} />
      </Text3D>
    </>
  );
};
export default TextM;
