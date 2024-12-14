import React, { useEffect, useRef, useState } from "react";
import { useGLTF } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";
import useQuizStore from "../../../stores/use-quiz-store";

const Carafe = (props) => {
  const carafeRef = useRef();
  const { nodes, materials } = useGLTF("/models-3d/carafe.glb");
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
    if (isResetting && carafeRef.current && props.position) {
      // Solo restaura las posiciones si el reseteo está activo
      carafeRef.current.setTranslation(
        new THREE.Vector3(...props.position),
        true
      );

      // Finaliza el estado de reseteo después de la restauración
      endReset();
    }
  }, [isResetting]); // Se escucha únicamente el estado de reseteo

  useFrame(({ camera, mouse }) => {
    if (isDragging && carafeRef.current) {
      // Convertir la posición del mouse al espacio 3D
      const vector = new THREE.Vector3(mouse.x, mouse.y, 0.5);
      vector.unproject(camera);
      const dir = vector.sub(camera.position).normalize();
      const distance = -camera.position.z / dir.z;
      const pos = camera.position.clone().add(dir.multiplyScalar(distance));

      // Actualizar la posición de la bolsa
      carafeRef.current.setNextKinematicTranslation(pos);
    }
  });

  React.useEffect(() => {
    // Añadir y eliminar el evento de teclado
    window.addEventListener("keyup", handleKeyUp);
    return () => window.removeEventListener("keyup", handleKeyUp);
  }, []);

  return (
    <>
      <group {...props} dispose={null} scale={0.1}>
        <RigidBody
        name="carafe"
        ref={carafeRef}
        type={isDragging ? "kinematicPosition" : "dynamic"} // Cambia según el estado de arrastre
        rotation={[-Math.PI / 1, 9, 3]}
        onPointerDown={handlePointerDown} // Detectar clic para iniciar arrastre
        onPointerMove={handlePointerMove}
        >
          <mesh
            name="carafe"
            castShadow
            receiveShadow
            geometry={nodes["tampa;cap"].geometry}
            material={materials["Material.005"]}
            position={[0.003, 23.901, -0.014]}
            scale={0.897}
          />
          <mesh
            name="carafe"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder.geometry}
            material={materials["Material.002"]}
          />
          <mesh
            name="carafe"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder_1.geometry}
            material={materials["Material.003"]}
          />
          <mesh
            name="carafe"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder_2.geometry}
            material={materials["Material.004"]}
          />
        </RigidBody>
      </group>
    </>
  );
};

export default Carafe;
useGLTF.preload("/models-3d/carafe.glb");
