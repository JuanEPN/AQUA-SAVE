import React, { useEffect, useRef, useState } from "react";
import { useGLTF } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";
import useQuizStore from "../../../stores/use-quiz-store";

const Hook = (props) => {
  const hookRef = useRef();
  const { nodes, materials } = useGLTF("/models-3d/hook.glb");
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
     if (isResetting && hookRef.current && props.position) {
       // Solo restaura las posiciones si el reseteo está activo
       hookRef.current.setTranslation(new THREE.Vector3(...props.position), true);
       
       // Finaliza el estado de reseteo después de la restauración
       endReset();
     }
   }, [isResetting]); // Se escucha únicamente el estado de reseteo

  useFrame(({ camera, mouse }) => {
    if (isDragging && hookRef.current) {
      // Convertir la posición del mouse al espacio 3D
      const vector = new THREE.Vector3(mouse.x, mouse.y, 0.5);
      vector.unproject(camera);
      const dir = vector.sub(camera.position).normalize();
      const distance = -camera.position.z / dir.z;
      const pos = camera.position.clone().add(dir.multiplyScalar(distance));

      // Actualizar la posición de la bolsa
      hookRef.current.setNextKinematicTranslation(pos);
    }
  });

  React.useEffect(() => {
    // Añadir y eliminar el evento de teclado
    window.addEventListener("keyup", handleKeyUp);
    return () => window.removeEventListener("keyup", handleKeyUp);
  }, []);

  return (
    <group {...props} dispose={null}  scale={0.6}>
      <RigidBody
        name="hook"
        ref={hookRef}
        type={isDragging ? "kinematicPosition" : "dynamic"} // Cambia según el estado de arrastre
        rotation={[-Math.PI / 1, 9, 3]}
        onPointerDown={handlePointerDown} // Detectar clic para iniciar arrastre
        onPointerMove={handlePointerMove}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_2.geometry}
          material={materials.lambert2SG}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_3.geometry}
          material={materials.lambert3SG}
        />
      </RigidBody>
    </group>
  );
}

export default Hook;
useGLTF.preload("/models-3d/hook.glb");
