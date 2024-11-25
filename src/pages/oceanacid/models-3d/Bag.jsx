import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { RigidBody } from "@react-three/rapier";
import { useRef } from "react";

const Bag = () => {

  const rbBagRef = useRef();
  const bagRef = useRef(null);
  const { nodes, materials } = useGLTF("/models-3d/acidification/bag.glb");

  useFrame(() => {
     rbBagRef.current.addForce({x: -0.0001, y: 0, z: 0}, true);
   });

  return (
    <>
      <RigidBody ref={rbBagRef} type="dynamic" colliders="ball">
      <group ref={bagRef} dispose={null}>
          <group name="Scene">
          <mesh 
               name="Bag"
               position={[11,2,-13]} 
               scale={1.2}
               geometry={nodes.Bag.geometry} 
               material={materials.Material_0} />
          </group>
     </group>
      </RigidBody>
    </>
  );
};

export default Bag;
useGLTF.preload("models-3d/acidification/bag.glb");