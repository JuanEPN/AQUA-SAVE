import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { RigidBody } from "@react-three/rapier";
import { useCallback, useRef } from "react";

const BeachBall = (props) => {
  const { nodes, materials } = useGLTF("models-3d/microplastic/beach-ball.glb");
  const ballRef = useRef();
  const handleBall = useCallback(() => {
    ballRef.current.addForce({ x: 0, y: 0, z: -0.1 }, true);
  
  }, []);

  useFrame((state, delta) => {
    ballRef.current.setAngvel({ x: 1, y: 2, z: 0 }, true);
  });

  return (
    <RigidBody
      name="ballRb"
      ref={ballRef}
      colliders="ball"
      gravityScale={0.1}
      restitution={1.5}
      
    >
      <group {...props} dispose={null}>
        <group name="Scene">
          <mesh
            name="high_poly"
            geometry={nodes.high_poly.geometry}
            material={materials.Material_0}
            scale={1}
            castShadow
            receiveShadow
            position={[0.1, 0.3, 0]}
            onClick={handleBall}
                       
          />
        </group>
      </group>
    </RigidBody>
  );
};

export default BeachBall;
useGLTF.preload("models-3d/microplastic/beach-ball.glb");
