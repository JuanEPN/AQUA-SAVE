import { useGLTF } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";
import useSlider from "../../../stores/use-slider";
import { dataMeasurement } from "../../../Locals/dataMeasurement";
import { dataCauses } from "../../../Locals/dataCauses";
import { dataProblem } from "../../../Locals/dataProblem";
import { dataSolution } from "../../../Locals/dataSolution";

const Star = (props) => {
  const { nodes, materials } = useGLTF("models-3d/acidification/star.glb");

  const { setSlider, slider, setData } = useSlider();

  const handleText = (data) => {
    setData(data);
    setSlider(true);
    console.log("click", slider);
  };

  return (
    <RigidBody name="rbOcean" type="fixed" colliders="cuboid">
      <group {...props} dispose={null}>
        <group name="Scene">
          <mesh
            name="Star1"
            geometry={nodes.Star.geometry}
            material={materials["Material_0.001"]}
            rotation={[-Math.PI / 1, 1.5, 3]}
            castShadow
            scale={1.5}
            position={[-8.5, 12, 2]}
            onClick={() => handleText(dataCauses)}
          />

          <mesh
            name="Star2"
            geometry={nodes.Star.geometry}
            material={materials["Material_0.001"]}
            rotation={[-Math.PI / 1, 1.5, 3]}
            castShadow
            scale={1.5}
            position={[-1.5, 12, 2]}
            onClick={() => handleText(dataMeasurement)}
          />

          <mesh
            name="Star3"
            geometry={nodes.Star.geometry}
            material={materials["Material_0.001"]}
            rotation={[-Math.PI / 1, 1.5, 3]}
            castShadow
            scale={1.5}
            position={[5.5, 12, 2]}
            onClick={() => handleText(dataProblem)}
          />

          <mesh
            name="Star4"
            geometry={nodes.Star.geometry}
            material={materials["Material_0.001"]}
            rotation={[-Math.PI / 1, 1.5, 3]}
            castShadow
            scale={1.5}
            position={[12, 12, 2]}
            onClick={() => handleText(dataSolution)}
          />
        </group>
      </group>
    </RigidBody>
  );
};

export default Star;

useGLTF.preload("models-3d/acidification/star.glb");
