import React from 'react';
import { RigidBody } from '@react-three/rapier';
import { MeshReflectorMaterial } from '@react-three/drei';

export function Oceanquiz() {
  return (
    <RigidBody type="fixed" colliders="trimesh" position={[-15,0, -15]}>
      <mesh receiveShadow rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[50, 50, 50, 50]} />
        <MeshReflectorMaterial
          blur={[300, 100]}
          resolution={1024}
          mixStrength={1}
          mirror={0.5}
          depthScale={1}
          minDepthThreshold={0.8}
          maxDepthThreshold={1.2}
          color="#1e90ff"
          metalness={0.6}
          roughness={0.8}
        />
      </mesh>
    </RigidBody>
  );
}