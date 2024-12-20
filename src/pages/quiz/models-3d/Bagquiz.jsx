import React, { useEffect, useRef, useState } from "react";
import { useGLTF } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";
import useQuizStore from "../../../stores/use-quiz-store";

const Bag = (props) => {
  const bagRef = useRef();
  const { nodes, materials } = useGLTF("/models-3d/acidification/bag.glb");
  const [isDragging, setIsDragging] = useState(false);
  const [mousePosition, setMousePosition] = useState(new THREE.Vector3());
  const { isResetting, endReset } = useQuizStore();

  const handlePointerDown = (e) => {
    e.stopPropagation();
    if (!isDragging) {
      setIsDragging(true);
      setMousePosition(e.point); // Guardar la posición inicial del mouse
    } else {
      setIsDragging(false); // Soltar la bolsa si se está arrastrando
    }
  };

  const handlePointerMove = (e) => {
    if (isDragging) {
      setMousePosition(e.point); // Actualizar la posición del mouse mientras arrastra
    }
  };

  // Maneja la tecla Espacio para soltar la bolsa
  const handleKeyUp = (e) => {
    if (e.code === "Space") {
      setIsDragging(false);
    }
  };

    // Restaurar la posicion inicial 
    useEffect(() => {
      if (isResetting && bagRef.current && props.position) {
        // Solo restaura las posiciones si el reseteo está activo
        bagRef.current.setTranslation(new THREE.Vector3(...props.position), true);
        
        // Finaliza el estado de reseteo después de la restauración
        endReset();
      }
    }, [isResetting]); // Se escucha únicamente el estado de reseteo

  useFrame(({ camera, mouse }) => {
    if (isDragging && bagRef.current) {
      // Convertir la posición del mouse al espacio 3D
      const vector = new THREE.Vector3(mouse.x, mouse.y, 0.5);
      vector.unproject(camera);
      const dir = vector.sub(camera.position).normalize();
      const distance = -camera.position.z / dir.z;
      const pos = camera.position.clone().add(dir.multiplyScalar(distance));

      // Actualizar la posición de la bolsa
      bagRef.current.setNextKinematicTranslation(pos);
    }
  });

  React.useEffect(() => {
    // Añadir y eliminar el evento de teclado
    window.addEventListener("keyup", handleKeyUp);
    return () => window.removeEventListener("keyup", handleKeyUp);
  }, []);

  return (
    <>
    <group {...props} dispose={null} >
          <group name="Scene">
               <RigidBody
               name="bag"
               ref={bagRef}
               type={isDragging ? "kinematicPosition" : "dynamic"} // Cambia según el estado de arrastre
               rotation={[-Math.PI / 1, 9, 3]}
               onPointerDown={handlePointerDown} // Detectar clic para iniciar arrastre
               onPointerMove={handlePointerMove}
               >
               <mesh
               castShadow
               receiveShadow
               geometry={nodes.Bag.geometry}
               material={materials.Material_0}
               scale={2}
               />
               </RigidBody>
          </group>
     </group> 
    </>
  );
};

export default Bag;
useGLTF.preload("models-3d/acidification/bag.glb");