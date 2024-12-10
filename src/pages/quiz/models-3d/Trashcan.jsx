import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";
import useQuizStore from "../../../stores/use-quiz-store";

const Trashcan = ({ onBottleInside, ...props }) => {
  const { nodes, materials } = useGLTF("/models-3d/trash_can.glb");
  const trashcanRef = useRef();
  const { incrementLevels } = useQuizStore(); 

  const handleCollisionEnter = (event) => {
    if (event.other.colliderObject.name.startsWith("bottle-")) {
      console.log(`${event.other.colliderObject.name} ha caído en el bote de basura`);
      onBottleInside(); // Log para verificar
      console.log("Se llamó a onBottleInside");
      incrementLevels(); // Log para verificar
      console.log("Se llamó a incrementLevels");
    }
  };
  

  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={1} ref={trashcanRef} position={[15, 0, 0]}>
        <RigidBody 
        name= "trashcan" 
        colliders="trimesh"
        onCollisionEnter={handleCollisionEnter} 
        type="fixed"> {/* Uso de RigidBody */}
        
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder004_0.geometry}
            material={materials["Material.002"]}
            position={[-0.035, -0.077, 2.77]}
            rotation={[-0.002, 0.004, -0.025]}
            scale={[2.022, 2.022, 2.695]}
          />
        </RigidBody>
      </group>
    </group>
  );
};

useGLTF.preload("/models-3d/trash_can.glb");
export default Trashcan;
