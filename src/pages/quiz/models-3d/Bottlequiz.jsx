import React, { useRef, useState, useEffect} from "react";
import { useGLTF } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";

const Bottlequiz = (props) => {
  const { nodes, materials } = useGLTF("/models-3d/plastic_water_bottle.glb");
  const bottleRef = useRef();
  const [isDragging, setIsDragging] = useState(false);
  const [mousePosition, setMousePosition] = useState(new THREE.Vector3());

  // Manejo de arrastre con clic  
  const handlePointerDown = (e) => {
    e.stopPropagation();
    if (!isDragging) {
      setIsDragging(true);
      setMousePosition(e.point); // Guardar la posición inicial del mouse
    } else {
      setIsDragging(false); // Soltar la botella si se está arrastrando
    }
  };

  const handlePointerMove = (e) => {
    if (isDragging) {
      setMousePosition(e.point); // Actualizar la posición del mouse mientras arrastra
    }
  };

  // Maneja la tecla Espacio para soltar la botella
  const handleKeyUp = (e) => {
    if (e.code === "Space") {
      setIsDragging(false);
    }
  };

  // Restaurar la posicion inicial 
  useEffect(()=>{
    if (bottleRef.current && props.position){ 
      bottleRef.current.setTranslation(new THREE.Vector3(...props.position), true); //Restaura posicion
      setIsDragging(false); // Asegura que no esta en modo de arrastre
    }
  }, [props.position]); 

  useFrame(({ camera, mouse }) => {
    if (isDragging && bottleRef.current) {
      // Convertir la posición del mouse al espacio 3D
      const vector = new THREE.Vector3(mouse.x, mouse.y, 0.5);
      vector.unproject(camera);
      const dir = vector.sub(camera.position).normalize();
      const distance = -camera.position.z / dir.z;
      const pos = camera.position.clone().add(dir.multiplyScalar(distance));

      // Actualizar la posición de la botella
      bottleRef.current.setNextKinematicTranslation(pos);
    }
  });

  React.useEffect(() => {
    // Añadir y eliminar el evento de teclado
    window.addEventListener("keyup", handleKeyUp);
    return () => window.removeEventListener("keyup", handleKeyUp);
  }, []);

  return (
  
    <group {...props} dispose={null}>
      <RigidBody
        name={props.name}
        ref={bottleRef}
        type={isDragging ? "kinematicPosition" : "dynamic"} // Cambia según el estado de arrastre
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[0.1, 0.1, 0.1]}
        onPointerDown={handlePointerDown} // Detectar clic para iniciar arrastre
        onPointerMove={handlePointerMove}
           
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_2.geometry}
          material={materials["Material.023"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_3.geometry}
          material={materials["Material.024"]}
        />
      </RigidBody>
    </group>
  );
};

useGLTF.preload("/models-3d/plastic_water_bottle.glb");
export default Bottlequiz;
