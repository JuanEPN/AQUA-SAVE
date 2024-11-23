import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

const Boatmodel = (props) => {
  const { nodes, materials } = useGLTF('/models-3d/boatwood.glb'); 

  const handleCLick = (path) =>{
    navigate(path); 
  }

  const handlePointerOver = () => {
    document.body.style.cursor = 'pointer';
  };
  
  const handlePointerOut = () => {
    document.body.style.cursor = 'auto';
  };

  return (
    <group {...props} dispose={null} position={[0, 1, 9]}>
      <group scale={0.01}>
        <group rotation={[-Math.PI / 2, 0, 1.5]} scale={70}
        onPointerOver={handlePointerOver}
        onPointerOut={handlePointerOut}
        onClick={() => handleCLick("/Sitemap")}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.SM_Wooden_Boat_1_JFG_M_Boat_Base_1_JFG_0.geometry}
            material={materials.M_Boat_Base_1_JFG}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.SM_Wooden_Boat_1_JFG_M_Boat_Supports_Vertical_JFG_0.geometry}
            material={materials.M_Boat_Supports_Vertical_JFG}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.SM_Wooden_Boat_1_JFG_M_Boat_Supports_Horizontal_JFG_0.geometry}
            material={materials.M_Boat_Supports_Horizontal_JFG}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.SM_Wooden_Boat_1_JFG_M_Boat_Planks_JFG_0.geometry}
            material={materials.M_Boat_Planks_JFG}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.SM_Wooden_Boat_1_JFG_M_Boat_MiddlePlank_1_JFG_0.geometry}
            material={materials.M_Boat_MiddlePlank_1_JFG}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.SM_Wooden_Boat_1_JFG_M_Boat_MiddlePlank_2_JFG_0.geometry}
            material={materials.M_Boat_MiddlePlank_2_JFG}
          />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/models-3d/boatwood.glb'); 

export default Boatmodel; 