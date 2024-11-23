import { useGLTF, useKeyboardControls} from "@react-three/drei";
import { useEffect, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { RigidBody } from "@react-three/rapier";

const PlasticBottleWS = (props) => {
    const {nodes, materials} = useGLTF("models-3d/plastic-bottle.glb");

  return (
    <RigidBody type="dynamic" restitution={2}>
        <group {...props} dispose={null}>
      <group name="Scene">
        <mesh 
          name="high_poly"
          geometry={nodes.high_poly.geometry}
          material={materials.Material_0}
          scale={0.8}
          castShadow
          receiveShadow
          position={[3, 2, 0.2]}          
        /> 
      </group>
    </group>
    </RigidBody>
    
    );
  };
export default PlasticBottleWS;

useGLTF.preload("models-3d/plastic-bottle.glb");