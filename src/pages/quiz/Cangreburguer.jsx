import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

const Cangreburguer = (props) => {
  const { nodes, materials } = useGLTF("/models-3d/burguer_cangreburguer.glb")
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_4.geometry}
        material={materials.carne}
        position={[0, 0.3, 0]}
        scale={[1, 0.2, 1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_6.geometry}
        material={materials.lettuce}
        position={[0, 0.6, 0]}
        scale={[1.1, 1.2, 1.1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_8.geometry}
        material={materials.toomate}
        position={[-0.5, 0.6, 0.1]}
        rotation={[-Math.PI, 0, 0]}
        scale={[-0.5, 0, 0.5]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_10.geometry}
        material={materials.toomate}
        position={[0.5, 0.6, -0.1]}
        rotation={[3.1, 0, 0.1]}
        scale={[-0.5, 0, 0.5]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_12.geometry}
        material={materials.material}
        position={[0, 0.6, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_14.geometry}
        material={materials.Material}
        position={[0.4, 1, -0.6]}
        rotation={[-0.6, 0.8, 2.8]}
        scale={[-0.1, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_16.geometry}
        material={materials.material}
        scale={[1, 0.2, 1]}
      />
    </group>
  )
}

useGLTF.preload("/models-3d/burguer_cangreburguer.glb");
export default Cangreburguer; 