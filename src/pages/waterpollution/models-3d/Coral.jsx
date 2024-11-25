
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

const Coral = (props) => {
  const { nodes, materials } = useGLTF("/models-3d/coral_in_salt.glb")
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_2.geometry}
          material={materials['152k_uv']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_3.geometry}
          material={materials['152k_uv']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_4.geometry}
          material={materials['152k_uv']}
        />
      </group>
    </group>
  )
}

useGLTF.preload("/models-3d/coral_in_salt.glb"); 

export default Coral; 
