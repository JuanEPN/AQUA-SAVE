import { Html } from "@react-three/drei";
import { Text3D, Text } from "@react-three/drei";


const WaterShortText = () => {
        return(
            <>
            <Text3D
                position={[-2.3,3,-2]}
                font={"/fonts/DRAGON HUNTER_Regular.json"}
                bevelEnabled
                bevelSize={0.02}
                bevelThickness={0.1}
                height={0.5}
                lineHeight={0.5}
                letterSpacing={0.05}
                size={0.3}>
                    ESCASEZ DEL AGUA
                    <meshStandardMaterial color="#1681e6" />
            </Text3D>
            <Html transform  distanceFactor={2.3} position={[-2.1,2.7,-2]}style={{color: "purple"}}>
                <h2>PREVENCION DE LA ESCASEZ DEL AGUA</h2>
            </Html>
            <Html transform  distanceFactor={2.3} position={[1.93,2.7,-2]}style={{color: "purple"}}>
                <h2>CAUSAS Y CONSECUENCIAS</h2>
            </Html>
            </>
        );
};

export default WaterShortText;