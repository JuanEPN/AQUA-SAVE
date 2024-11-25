import React, { useRef, useEffect } from 'react'
import { useGLTF } from '@react-three/drei'
import { useThree } from '@react-three/fiber';

const Pollutionscene = (props) => {
  const { nodes, materials } = useGLTF("/models-3d/pollution.glb"); 

  const { camera } = useThree();

  useEffect(() => {
    camera.position.set(0, 20, 15);
    camera.lookAt(0, 0, 0);
  }, [camera]); 

  return (
    <group {...props} dispose={null}>
      <group scale={0.02}>
        <group position={[0, -864.4, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.pCylinder203_bottle_of_water_0.geometry}
            material={materials.bottle_of_water}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.pCylinder203_radioactive_plants_0.geometry}
            material={materials.radioactive_plants}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.pCylinder203_cans_of_coke_0.geometry}
            material={materials.cans_of_coke}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.pCylinder203_crate_0.geometry}
            material={materials.crate}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.pCylinder203_open_barresls_0.geometry}
            material={materials.open_barresls}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.pCylinder203_closed_barrels_0.geometry}
            material={materials.closed_barrels}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.pCylinder203_pipes_0.geometry}
            material={materials.pipes}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.pCylinder203_lambert1_0.geometry}
            material={materials.lambert1}
          />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload("/models-3d/pollution.glb"); 

export default Pollutionscene; 