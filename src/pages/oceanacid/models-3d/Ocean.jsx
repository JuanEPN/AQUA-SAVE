import { useGLTF } from "@react-three/drei";
import { CuboidCollider, RigidBody } from "@react-three/rapier";
import { useRef } from "react";

const Ocean = (props) => {
  const { nodes, materials } = useGLTF("models-3d/acidification/ocean.glb");
  const rbOceanRef = useRef(null);

  return (
    
    <group {...props} dispose={null} onClick={(e) => e.stopPropagation()}>
        <group name="Scene">
          <group name="Ocean">
            <RigidBody name="rbBase" ref={rbOceanRef} type="fixed" colliders={false} friction={2} mass={75} >
            <mesh
              name="Ocean"
              receiveShadow={true}
              geometry={nodes.Ocean_1.geometry}
              material={materials.SeaBottomMaterial} 
            />
            <CuboidCollider args={[25,1,20]} position={[0,0.5,0]} />
            </RigidBody>
            <RigidBody name="rbBase" ref={rbOceanRef} type="fixed" colliders={false} mass={75} >
            <mesh
              name="Fish"
              castShadow
              geometry={nodes.Ocean_2.geometry}
              material={materials.FishMaterial}
              position={[-3,3,4]}
            />
            <CuboidCollider args={[1.5,1,1]} position={[-8,5.7,3]} />
            </RigidBody>
            <RigidBody name="rbBase" ref={rbOceanRef} type="fixed" colliders={false} mass={10} >
            <mesh
              name="Rock"
              castShadow
              geometry={nodes.Ocean_3.geometry}
              material={materials.CoralRockMaterial}
            />
             <CuboidCollider args={[10,2,7]} position={[1.8,1,-2]} />
             </RigidBody>
          </group>
          <RigidBody name="rbBase" ref={rbOceanRef} type="fixed" colliders={false} mass={75} >
          <mesh
            name="Coral"
            castShadow
            geometry={nodes.Coral.geometry}
            material={materials.UrchentBodyMaterial}
          />
          <CuboidCollider args={[3.5,2,4]} position={[1,0,-0.5]} />
          </RigidBody>
        </group>
      </group>
      
  );
};

export default Ocean;

useGLTF.preload("models-3d/acidification/ocean.glb");