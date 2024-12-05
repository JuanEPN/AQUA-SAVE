import React, { useRef, useState } from "react";
import { useGLTF } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";
import * as THREE from 'three'; // Asegúrate de importar three.js
import { useFrame } from "@react-three/fiber";

const Bottlequiz = (props) => {
  const { nodes, materials } = useGLTF("/models-3d/plastic_water_bottle.glb");
  const bottleRef = useRef();
  const [isDragging, setIsDragging] = useState(false);
  const [mousePosition, setMousePosition] = useState(new THREE.Vector3());

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

  const handlePointerUp = () => {
    // No hacer nada aquí ya que el estado se maneja en handlePointerDown
  };

  useFrame(({ camera, mouse }) => {
    if (isDragging && bottleRef.current) {
      const vector = new THREE.Vector3(mouse.x, mouse.y, 0.5);
      vector.unproject(camera);
      const dir = vector.sub(camera.position).normalize();
      const distance = -camera.position.z / dir.z;
      const pos = camera.position.clone().add(dir.multiplyScalar(distance));
      bottleRef.current.position.lerp(pos, 0.1); // Mover suavemente la botella hacia la posición del mouse
    }
  });

  return (
    <group {...props} dispose={null}>
      <group
        ref={bottleRef}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[0.1, 0.1, 0.1]}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
      >
        <RigidBody type={isDragging ? "kinematicPosition" : "dynamic"}> {/* Cambiar tipo según el estado de arrastre */}
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
    </group>
  );
};

useGLTF.preload("/models-3d/plastic_water_bottle.glb");
export default Bottlequiz;
