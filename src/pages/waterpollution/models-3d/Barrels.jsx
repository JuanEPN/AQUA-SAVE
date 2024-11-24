import React, { useRef, useEffect } from 'react'
import { useGLTF, OrbitControls} from '@react-three/drei'
import { useFrame } from '@react-three/fiber';
import { useThree } from '@react-three/fiber';

const Barrels = (props) => {
  const barrelRef = useRef(); 
  const { nodes, materials } = useGLTF("/models-3d/barrels.glb"); 

  useFrame(()=>{
    if (barrelRef.current){
      barrelRef.current.rotation.y +=0.01; 
    }
  }); 

  const { camera } = useThree();

  useEffect(() => {
    camera.position.set(1, 1, 20);
    camera.lookAt(1, 1, 1);
  }, [camera]);


  return (
    <group {...props} dispose={null} ref={barrelRef}>
      <group scale={0.02}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder_Material_0.geometry}
          material={materials.Material}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder001_Material_0.geometry}
          material={materials.Material}
          position={[143.3, 25, -242.9]}
          rotation={[-1.3, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder002_Material_0.geometry}
          material={materials.Material}
          position={[259.5, 0, 13.2]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder003_Material_0.geometry}
          material={materials.Material}
          position={[455.8, -75.4, -169.9]}
          rotation={[0, 0.4, 0]}
          scale={100}
        />
      </group>
    </group>
  )
}

useGLTF.preload("/models-3d/barrels.glb"); 

export default Barrels; 