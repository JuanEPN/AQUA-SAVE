import { Center, Html, Text, Text3D } from "@react-three/drei";



const WelcomeText = () => {

  return (
    <>
      <Center top position={[2,6,1]}>
        
        <Text 
        position={[4,-10,10]}
        color={"white"}
        anchorX={"right"}
        anchorY={"bottom"}
        font="/fonts/Blue-Ocean.ttf"
        > {'.'} </Text>

        <Html 
          center
          occlude
          distanceFactor={6}
          transform
          position={[8,-2,0]}
          style={{
            color: "black",
            fontSize: "14pt",
            textAlign: "center",
          }}
        >
          <h1> La acidificación de los océanos es el proceso por el cual el agua  del mar se vuelve más ácida debido al exceso de dióxido  de carbono (CO2) absorbido de la atmósfera </h1>          
        </Html>


        <Text3D
          font={"/fonts/Blue Ocean_Regular.json"}
          bevelEnabled
          bevelSize={0.02}
          bevelThickness={0.1}
          height={0.5}
          lineHeight={0.75}
          letterSpacing={0.05}
          size={0.9}
        >
          ACIDIFICACION DEL OCEANO
          <meshNormalMaterial/>
        </Text3D>

      <Text3D
        position={[-3.5, -3, 6]} font={"/fonts/Blue Ocean_Regular.json"}
        bevelThickness={0.1}
        height={0.1}
        size={0.5}
        
        >
        {'Causas'}
        <meshStandardMaterial color="purple"  />
      </Text3D>

      <Text3D
        position={[3, -3, 6]} font={"/fonts/Blue Ocean_Regular.json"}
        bevelThickness={0.1}
        height={0.1}
        size={0.5}
     
        >
        {'Medicion'}
        <meshStandardMaterial color="purple"  />
      </Text3D>

      <Text3D
        position={[9.5, -3, 6]} font={"/fonts/Blue Ocean_Regular.json"}
        bevelThickness={0.1}
        height={0.1}
        size={0.5}
    
        >
        {'Problemas'}
        <meshStandardMaterial color="purple"  />
      </Text3D>

      <Text3D
        position={[16, -3, 6]} font={"/fonts/Blue Ocean_Regular.json"}
        bevelThickness={0.1}
        height={0.1}
        size={0.5}
        
        >
        {'Soluciones'}
        <meshStandardMaterial color="purple"  />
      </Text3D>
      
    </Center>
    </>
  );
};

export default WelcomeText;
