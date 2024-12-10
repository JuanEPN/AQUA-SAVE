import React from "react";
import { useGLTF } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";

const Oceanquiz = (props) => {
  const { nodes, materials } = useGLTF("/models-3d/oceanq.glb");
  return (
    <RigidBody type="fixed" colliders="trimesh">
      <group {...props} dispose={null}>
        <group scale={0.5} position={[-10, 0, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.ocean3_m_ocean_0.geometry}
            material={materials.m_ocean}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.sand3_m_sand_0.geometry}
            material={materials.m_sand}
          />
        </group>
      </group>
    </RigidBody>
  );
};

useGLTF.preload("/models-3d/oceanq.glb");
export default Oceanquiz;
