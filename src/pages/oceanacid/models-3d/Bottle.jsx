import { useGLTF } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";
import { useCallback, useRef } from "react";


const Bottle = (props) => {
  const bottleRef = useRef(null);
  const rbBottleRef = useRef();
  const { nodes, materials } = useGLTF("/models-3d/acidification/bottle.glb");


  const handleBottle = useCallback(() => {
    rbBottleRef.current.applyImpulse({ x: 0.5, y: -0.2, z: -1}, true);
  }, []);


  return (
    <RigidBody 
    gravityScale={0.3} 
    ref={rbBottleRef} 
    name="rbbottle" 
    type="dynamic" 
    colliders="cuboid"
    onCollisionEnter={({ manifold, target, other }) => {
      console.log(
        "Bottle collided at world position",
        manifold.solverContactPoint(0)
      );

      if(other.rigidBodyObject) {
        console.log(
          target.rigidBodyObject.name,
          "Bottle collided with Ocean",
          other.rigidBodyObject.name
        );
      }
    }}
    
    >
     <group ref={bottleRef} {...props} dispose={null}>
          <mesh
          onClick={handleBottle}
          castShadow
          receiveShadow
          position={[16,15,2]}
          geometry={nodes.high_poly.geometry}
          material={materials.Material_0}
          />
     </group>
    </RigidBody>
  );
};

export default Bottle;

useGLTF.preload("models-3d/acidification/bottle.glb");