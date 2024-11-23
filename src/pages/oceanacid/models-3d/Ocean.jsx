import { useGLTF } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";

const Ocean = (props) => {
  const { nodes, materials } = useGLTF("models-3d/acidification/ocean.glb");

  return (
    <RigidBody name="rbOcean" type="fixed" colliders="cuboid">
    <group {...props} dispose={null} onClick={(e) => e.stopPropagation()}>
        <group name="Scene">
          <group name="Ocean">
            <mesh
              name="Ocean"
              receiveShadow={true}
              geometry={nodes.Ocean_1.geometry}
              material={materials.SeaBottomMaterial} 
            />
            <mesh
              name="Fish"
              castShadow
              geometry={nodes.Ocean_2.geometry}
              material={materials.FishMaterial}
              position={[-3,3,4]}
            />
            <mesh
              name="Rock"
              castShadow
              geometry={nodes.Ocean_3.geometry}
              material={materials.CoralRockMaterial}
            />
          </group>
          <mesh
            name="Coral"
            castShadow
            geometry={nodes.Coral.geometry}
            material={materials.UrchentBodyMaterial}
          />
        </group>
      </group>
      </RigidBody>
  );
};

export default Ocean;

useGLTF.preload("models-3d/acidification/ocean.glb");
