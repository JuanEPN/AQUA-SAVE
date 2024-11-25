import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

const Sewage = (props) => {
  const { nodes, materials } = useGLTF("/models-3d/construction_site_dig_hole_repair_for_sewage.glb")
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_4.geometry}
        material={materials['Material_0.034']}
        position={[-9.5, 0.7, 10.4]}
      />
    </group>
  )
}

useGLTF.preload("/models-3d/construction_site_dig_hole_repair_for_sewage.glb"); 
export default Sewage; 