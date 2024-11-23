import { useGLTF, Text } from '@react-three/drei';  // Importamos Text
import useSlider from '../../../stores/use-slider';
import { dataImplication } from '../../../Locals/dataImplication';
import { dataPollution } from '../../../Locals/dataPollution';
import { dataTreatment } from '../../../Locals/dataTreatment';
import { dataWatercare } from '../../../Locals/dataWatercare';

const Boardmodel = (props) => {
  const { nodes, materials } = useGLTF('models-3d/WoodenSigns.glb');
  const {setSlider, slider, setData} = useSlider(); 

  const handleText = (data) => {
    setData(data);
    setSlider(true);
  };

  const handlePointerOver = () => {
    document.body.style.cursor = 'pointer';
  };
  
  const handlePointerOut = () => {
    document.body.style.cursor = 'auto';
  };

  return (
    <group {...props} dispose={null}>
      {/* Primer cartel */}
      <group 
        position={[-5.1, 1.5, 4.7]} rotation={[0, 4.7, 0]} scale={[0.5, 0.5, 0.5]} 
        onPointerOver={handlePointerOver}
        onPointerOut={handlePointerOut}
        onClick={() => handleText(dataPollution)}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sign12_1.geometry}
          material={materials['Dark Wood']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sign12_2.geometry}
          material={materials['Light Wood']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sign12_3.geometry}
          material={materials.Herbs}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sign12_4.geometry}
          material={materials.Rocks}
        />
        {/* Añadir texto en el cartel */}
        <Text
          position={[0.1, 1.6, 0]} 
          rotation={[0, 1.6, 0]}
          fontSize={0.2}           
          color="purple"           
        >
          Contaminación
        </Text>
      </group>

      {/* Segundo cartel */}
      <group 
        position={[5.3, 1.5, 6.7]} rotation={[0, 4.7, 0]} scale={[0.5, 0.5, 0.5]} 
        onPointerOver={handlePointerOver}
        onPointerOut={handlePointerOut}
        onClick={() => handleText(dataTreatment)}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sign12_1.geometry}
          material={materials['Dark Wood']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sign12_2.geometry}
          material={materials['Light Wood']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sign12_3.geometry}
          material={materials.Herbs}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sign12_4.geometry}
          material={materials.Rocks}
        />
        {/* Añadir texto en el cartel */}
        <Text
          position={[0.1, 1.6, 0]}
          fontSize={0.2}
          rotation={[0, 1.6, 0]}
          color="purple"
        >
          Tratamiento del agua
        </Text>
      </group>

      {/* Tercer cartel */}
      <group 
        position={[3, 1.5, 6.7]} rotation={[0, 4.7, 0]} scale={[0.5, 0.5, 0.5]} 
        onPointerOver={handlePointerOver}
        onPointerOut={handlePointerOut}
        onClick={() => handleText(dataWatercare)}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sign12_1.geometry}
          material={materials['Dark Wood']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sign12_2.geometry}
          material={materials['Light Wood']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sign12_3.geometry}
          material={materials.Herbs}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sign12_4.geometry}
          material={materials.Rocks}
        />
        {/* Añadir texto en el cartel */}
        <Text
          position={[0.1, 1.6, 0]}
          fontSize={0.2}
          color="purple"
          rotation={[0, 1.6, 0]}
        >
          Cuidados del agua
        </Text>
      </group>

      {/* Cuarto cartel */}
      <group 
        position={[-5.8, 0.7, 6.9]} rotation={[0, 4.7, 0]} scale={[0.5, 0.5, 0.5]} 
        onPointerOver={handlePointerOver}
        onPointerOut={handlePointerOut}
        onClick={() => handleText(dataImplication)}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sign12_1.geometry}
          material={materials['Dark Wood']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sign12_2.geometry}
          material={materials['Light Wood']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sign12_3.geometry}
          material={materials.Herbs}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sign12_4.geometry}
          material={materials.Rocks}
        />
        {/* Añadir texto en el cartel */}
        <Text
          position={[0.1, 1.6, 0]}
          rotation={[0, 1.6, 0]}
          fontSize={0.2}
          color="purple"
        >
          Implicaciones empresas y personas
        </Text>
      </group>
    </group>
  );
};

useGLTF.preload('/Lowpoly Wooden Signs.glb');
export default Boardmodel;
