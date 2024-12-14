import React, { useEffect, useRef, useState } from "react";
import { useGLTF } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";
import useQuizStore from "../../../stores/use-quiz-store";


const Shoe = (props) => {
     const shoeRef = useRef();
     const { nodes, materials } = useGLTF("/models-3d/shoe.glb");
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
         if (isResetting && shoeRef.current && props.position) {
           // Solo restaura las posiciones si el reseteo está activo
           shoeRef.current.setTranslation(new THREE.Vector3(...props.position), true);
           
           // Finaliza el estado de reseteo después de la restauración
           endReset();
         }
       }, [isResetting]); // Se escucha únicamente el estado de reseteo
   
     useFrame(({ camera, mouse }) => {
       if (isDragging && shoeRef.current) {
         // Convertir la posición del mouse al espacio 3D
         const vector = new THREE.Vector3(mouse.x, mouse.y, 0.5);
         vector.unproject(camera);
         const dir = vector.sub(camera.position).normalize();
         const distance = -camera.position.z / dir.z;
         const pos = camera.position.clone().add(dir.multiplyScalar(distance));
   
         // Actualizar la posición de la bolsa
         shoeRef.current.setNextKinematicTranslation(pos);
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
      <group name="Scene">
          <RigidBody
          name="shoe"
          ref={shoeRef}
          type={isDragging ? "kinematicPosition" : "dynamic"} // Cambia según el estado de arrastre
          rotation={[-Math.PI / 1, 9, 3]}
          onPointerDown={handlePointerDown} // Detectar clic para iniciar arrastre
          onPointerMove={handlePointerMove}
          >         
        <mesh
          name="shoe"
          castShadow
          receiveShadow
          geometry={nodes.Base.geometry}
          material={materials['Rubber Dull Procedural']}
        />
        <mesh
          name="shoe"
          castShadow
          receiveShadow
          geometry={nodes.Body.geometry}
          material={materials['Copper Polished Procedural']}
        />
        <mesh
          name="shoe"
          castShadow
          receiveShadow
          geometry={nodes.Cylinder.geometry}
          material={materials['Rubber Dull Procedural']}
        />
        <mesh
          name="shoe"
          castShadow
          receiveShadow
          geometry={nodes.Cylinder1.geometry}
          material={materials['Rubber Dull Procedural']}
        />
        <mesh
          name="shoe"
          castShadow
          receiveShadow
          geometry={nodes.Cylinder2.geometry}
          material={materials['Rubber Dull Procedural']}
        />
        <mesh
          name="shoe"
          castShadow
          receiveShadow
          geometry={nodes.Inner_part_Whole.geometry}
          material={materials.Coarse_leather_brn}
        />
        <mesh
          name="shoe"
          castShadow
          receiveShadow
          geometry={nodes.Lower_part.geometry}
          material={materials['Black surface']}
        />
        <mesh
          name="shoe"
          castShadow
          receiveShadow
          geometry={nodes.Lower_part_1.geometry}
          material={materials['Black surface']}
        />
        <mesh
          name="shoe"
          castShadow
          receiveShadow
          geometry={nodes.Middle_part.geometry}
          material={materials['Copper Polished Procedural']}
        />
        <mesh
          name="shoe"
          castShadow
          receiveShadow
          geometry={nodes.Outer_part.geometry}
          material={materials['Black surface']}
        />
        <mesh
          name="shoe"
          castShadow
          receiveShadow
          geometry={nodes.Outer_part_1.geometry}
          material={materials['Black surface']}
        />
        <mesh
          name="shoe"
          castShadow
          receiveShadow
          geometry={nodes.Upper_part.geometry}
          material={materials['Rubber Dull Procedural']}
        />
        <mesh
          name="shoe"
          castShadow
          receiveShadow
          geometry={nodes.Upper_part_1.geometry}
          material={materials.Coarse_leather_brn}
        />
        </RigidBody> 
      </group>
    </group>
    </>
  )
}

export default Shoe;
useGLTF.preload('/shoe1.glb')
