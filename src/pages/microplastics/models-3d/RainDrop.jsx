/*eslint-disable react/no-unknown-property */

import { useGLTF } from "@react-three/drei";
import useSlider from "../../../stores/use-slider";
import { dataMicroplastic } from "../../../Locals/dataMicroplastic";



const RainDrop = (props) =>{
    const{nodes,materials} = useGLTF("models-3d/microplastic/rain-drop.glb");

    const { setSlider, slider, setData } = useSlider();

    const handleText = (data) => {
      setData(data);
      setSlider(true);
      console.log("click", slider);
    };

    return(
        <group {...props} dispose={null}>
      <group name="Scene">
        <mesh
          name="RainDrop1"
          geometry={nodes.high_poly.geometry}
          material={materials.Material_0}
          scale={0.30}
          castShadow
          position={[-0.9, 0.24, 0.2]}
          onClick={() => handleText(dataMicroplastic)}
        />
        <mesh
          name="RainDrop2"
          geometry={nodes.high_poly.geometry}
          material={materials.Material_0}
          scale={0.30}
          castShadow
          onClick={() => handleText(dataMicroplastic)}
          position={[1, 0.3, 0.2]}>
        </mesh>            
      </group>
    </group>
    );
};

export default RainDrop;

useGLTF.preload("models-3d/microplastic/rain-drop.glb");