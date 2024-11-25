import { Center, Html, Text, Text3D } from "@react-three/drei";
import { useNavigate } from "react-router-dom";



const WelcomeText = () => {

  const handleBottle =() => {
    alert("DA CLICK sobre las estrellas para ver el contenido de la pagina\n----------------------------------------------------------------------\nCONTROLES PARA MOVER LA TORTUGA\nArriba: W \nAbajo: S\nDerecha: -> flecha derecha\nIzquierda: <- flecha izquierda\nAdelante: flecha en dirección hacia abajo\nAtrás: flecha en dirección hacia arriba\n----------------------------------------------------------------------\nBOTELLA\nPuedes darle click a la botella para poder sacarla del oceano"
    );
  };

  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/Sitemap');
  };

  return (
    <>
      <Center position={[1,6,0]}>
        
        <Text 
          position={[0,0,0]}
          color={"white"}
          anchorX={"right"}
          anchorY={"bottom"}
          font="/fonts/Blue-Ocean.ttf"
          > {'.'} 
        </Text>

        <Text3D
          font={"/fonts/Blue Ocean_Regular.json"}
          bevelEnabled
          position={[-2,13,0]}
          bevelSize={0.02}
          bevelThickness={0.1}
          height={0.5}
          lineHeight={0.75}
          letterSpacing={0.05}
          size={0.9}
        >
          ACIDIFICACION DEL OCEANO
          <meshStandardMaterial color="blue"  />
        </Text3D>

        <Html 
          center
          position={[6,11,0]}
          occlude
          distanceFactor={6}
          transform
          style={{
            color: "black",
            fontSize: "14pt",
            textAlign: "center",
          }}
        >
          <h1> La acidificación de los océanos es el proceso por el cual el agua  del mar se vuelve más ácida debido al exceso de dióxido  de carbono (CO2) absorbido de la atmósfera </h1>          
        </Html>

        

      <Text3D
        position={[-5.5, 11.1, 8]} font={"/fonts/Blue Ocean_Regular.json"}
        bevelThickness={0.1}
        height={0.1}
        size={0.5}
        
        >
        {'Causas'}
        <meshStandardMaterial color="#8a78cc"/>
      </Text3D>

      <Text3D
        position={[1, 11.1, 8]} font={"/fonts/Blue Ocean_Regular.json"}
        bevelThickness={0.1}
        height={0.1}
        size={0.5}
     
        >
        {'Medicion'}
        <meshStandardMaterial  color="#8a78cc"/>
      </Text3D>

      <Text3D
        position={[8, 11.1, 8]} font={"/fonts/Blue Ocean_Regular.json"}
        bevelThickness={0.1}
        height={0.1}
        size={0.5}
    
        >
        {'Problemas'}
        <meshStandardMaterial  color="#8a78cc"/>
      </Text3D>

      <Text3D
        position={[15, 11.1, 8]} font={"/fonts/Blue Ocean_Regular.json"}
        bevelThickness={0.1}
        height={0.1}
        size={0.5}
        
        >
        {'Soluciones'}
        <meshStandardMaterial  color="#8a78cc"/>
      </Text3D>

      <Html
          occlude
          center
          distanceFactor={13}
          transform
          position={[3, 3, 20]}>
            <button className="instructions" onClick={handleBottle}>Instrucciones</button>
        </Html>

        <Html 
          occlude
          center
          distanceFactor={13}
          transform
          position={[10, 3, 20]}>
          
            <button className="ButtonA" onClick={handleClick}> 
              volver al menú
            </button>
        </Html>
      
    </Center>
    </>
  );
};

export default WelcomeText;