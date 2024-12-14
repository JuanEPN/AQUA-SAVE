import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";
import useQuizStore from "../../../stores/use-quiz-store";

const Trashcan = ({ onBottleInside, ...props }) => {
  const { nodes, materials } = useGLTF("/models-3d/trash_can.glb");
  const trashcanRef = useRef();
  const { incrementLevels } = useQuizStore(); 

  
  const handleCollisionEnter = (event) => {
    const objectName = event.other.colliderObject.name;
  
    // Obtener el estado del store para ver si este objeto ya ha colisionado
    const collidedObjects = useQuizStore.getState().collidedObjects;
  
    if (!collidedObjects.has(objectName)) {
      // Si el objeto no ha colisionado antes
      console.log(`${objectName} ha tocado la bote de basura`);
      onBottleInside(objectName); // Llamamos a la función para mostrar el mensaje personalizado según el objeto
  
      // Incrementamos el nivel
      useQuizStore.getState().incrementLevels();
      console.log("Nivel incrementado");
  
      // Añadimos el objeto al Set de colisiones para evitar futuras colisiones
      useQuizStore.getState().addCollidedObject(objectName);
    } else {
      console.log(`${objectName} ya ha colisionado previamente`);
    }
  };
  

  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={1} ref={trashcanRef} position={[17, -3, 0]}>
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
