/*eslint-disable react/no-unknown-property */

import { useGLTF } from "@react-three/drei";
import useSlider from "../../../stores/use-slider";
import { dataMicroplastic } from "../../../Locals/dataMicroplastic";
import { dataRecomendation } from "../../../Locals/dataRecomendation";

const RainDrop = (props) => {
  const { nodes, materials } = useGLTF("models-3d/microplastic/rain-drop.glb");

  const { setSlider, slider, setData } = useSlider();

  const handleText = (data) => {
    setData(data);
    setSlider(true);
    console.log(slider);
  };

  return (
    <group {...props} dispose={null}>
      <group name="Scene">
        <mesh
          name="RainDrop1"
          geometry={nodes.high_poly.geometry}
          material={materials.Material_0}
          scale={0.9}
          castShadow
          position={[-3, 0.6, 0.2]}
          onClick={() => handleText(dataMicroplastic)}
        />
        <mesh
          name="RainDrop2"
          geometry={nodes.high_poly.geometry}
          material={materials.Material_0}
          scale={0.9}
          castShadow
          onClick={() => handleText(dataRecomendation)}
          position={[3.3, 0.6, 0.2]}
        ></mesh>
      </group>
    </group>
  );
};

export default RainDrop;

useGLTF.preload("models-3d/microplastic/rain-drop.glb");
