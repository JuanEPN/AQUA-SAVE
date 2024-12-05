import { useAnimations, useGLTF } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";
import { useRef } from "react";

const Ocean = (props) => {
  const octopusRef = useRef();
  const { nodes, materials, animations } = useGLTF(
    "models-3d/acidification/octopus.glb"
  );
  const { actions } = useAnimations(animations, octopusRef);

  console.log(actions);

  return (
    <RigidBody name="rbOctopus" type="fixed" colliders="cuboid">
      <group ref={octopusRef} {...props} dispose={null} position={[8, 1, 8]}>
        <group name="Scene">
          <group name="Octopus">
            <mesh
              name="Octopus_Body"
              geometry={nodes.Octopus_Cube002.geometry}
              material={materials.Body}
              rotation={[-Math.PI / 1, 7, 3]}
              castShadow
            />

            <mesh
              name="Octopus_Eyes"
              geometry={nodes.Octopus_Cube002_1.geometry}
              material={materials.Eyes}
              rotation={[-Math.PI / 1, 7, 3]}
            />

            <mesh
              name="Octopus_Cube002_2"
              geometry={nodes.Octopus_Cube002_2.geometry}
              material={materials["Material.001"]}
              rotation={[-Math.PI / 1, 7, 3]}
            />
          </group>
        </group>
      </group>
    </RigidBody>
  );
};

export default Ocean;

useGLTF.preload("models-3d/acidification/octopus.glb");
