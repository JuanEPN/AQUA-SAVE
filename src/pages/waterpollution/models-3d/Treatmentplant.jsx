
import React, { useRef, useEffect } from 'react'
import { useGLTF } from '@react-three/drei'
import { useThree } from '@react-three/fiber';

const Treatmentplant = (props) => {
  const { nodes, materials } = useGLTF("/models-3d/water_treatment_plant.glb"); 

  const { camera } = useThree();

  useEffect(() => {
    camera.position.set(0, 20, 15);
    camera.lookAt(0, 0, 0);
  }, [camera]); 

  
  return (
    <group {...props} dispose={null}>
      <group position={[3.3, 0.3, -3.8]} rotation={[0, -Math.PI / 2, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_4.geometry}
          material={materials.Water_Basin_Round}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_6.geometry}
          material={materials.Steel}
          position={[0.9, 0, 0.2]}
          rotation={[Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_8.geometry}
          material={materials.Steel}
          position={[-0.2, 0.1, 0]}
          rotation={[0, 0, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_10.geometry}
          material={materials.Water_Semi_filtered}
          position={[0, -1.4, 0]}
        />
      </group>
      <group position={[-0.9, -1.9, -6.3]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_12.geometry}
          material={materials.Water_Filtration_Square}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_14.geometry}
          material={materials.Water_Unfiltered}
          position={[0.9, 1.9, -1]}
        />
      </group>
      <group position={[8.7, 1.5, 4.7]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_16.geometry}
          material={materials.Silo_Paint}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_17.geometry}
          material={materials.Silo_Steel}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_19.geometry}
          material={materials.Steel}
          position={[-8.6, -1.5, -4.7]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_21.geometry}
          material={materials.Pipe}
          position={[-1.3, -1.2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_23.geometry}
          material={materials.Pipe}
          position={[-1.3, 1.8, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_25.geometry}
          material={materials.Pipe}
          position={[-0.9, 1.9, 0]}
          rotation={[0, 0, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_27.geometry}
          material={materials.Pipe}
          position={[0, 1.9, 0]}
          rotation={[0, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_29.geometry}
          material={materials.Pipe}
          position={[0, 1.8, 0]}
          rotation={[-Math.PI, 0, -Math.PI]}
        />
      </group>
      <group position={[-0.5, 0, -0.1]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_34.geometry}
          material={materials.Building_Exterior}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_35.geometry}
          material={materials.Building_Windows}
        />
      </group>
      <group position={[3.7, -1.9, 1.1]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_37.geometry}
          material={materials.Water_Filtration_Square}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_39.geometry}
          material={materials.Water_Semi_2_filtered}
          position={[0.9, 1.9, -1]}
        />
      </group>
      <group position={[-6.6, 0.3, 3.7]} rotation={[0, Math.PI / 2, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_41.geometry}
          material={materials.Water_Basin_Round}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_43.geometry}
          material={materials.Steel}
          position={[0.9, 0, 0.2]}
          rotation={[Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_45.geometry}
          material={materials.Steel}
          position={[-0.2, 0.1, 0]}
          rotation={[0, 0, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_47.geometry}
          material={materials.Water_filtered}
          position={[0, -1.4, 0]}
        />
      </group>
      <group position={[-11.2, 0.3, 3.7]} rotation={[0, Math.PI / 2, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_49.geometry}
          material={materials.Water_Basin_Round}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_51.geometry}
          material={materials.Steel}
          position={[0.9, 0, 0.2]}
          rotation={[Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_53.geometry}
          material={materials.Steel}
          position={[-0.2, 0.1, 0]}
          rotation={[0, 0, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_55.geometry}
          material={materials.Water_filtered}
          position={[0, -1.4, 0]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_31.geometry}
        material={materials.Grass}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_32.geometry}
        material={materials.Road}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_57.geometry}
        material={materials.Steel}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_58.geometry}
        material={materials.Fence}
      />
    </group>
  )
}

useGLTF.preload("/models-3d/water_treatment_plant.glb"); 

export default Treatmentplant; 