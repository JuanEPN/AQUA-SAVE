import React, { useRef, useState } from "react";
import { useGLTF } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";

const Bag = () => {
  const bagRef = useRef();
  const { nodes, materials } = useGLTF("/models-3d/acidification/bag.glb");
  const [isDragging, setIsDragging] = useState(false);
  const [mousePosition, setMousePosition] = useState(new THREE.Vector3());

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
    <group dispose={null} position={[0,2,5]}>
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
               scale={1.2}
               geometry={nodes.Bag.geometry}
               material={materials.Material_0}
               />
               </RigidBody>
          </group>
     </group> 
    </>
  );
};

export default Bag;
useGLTF.preload("models-3d/acidification/bag.glb");