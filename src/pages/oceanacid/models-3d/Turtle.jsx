import { useGLTF, useKeyboardControls } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { RigidBody } from "@react-three/rapier";
import { useEffect, useRef } from "react";

const Turtle = (props) => {
  const { nodes, materials } = useGLTF("models-3d/acidification/turtle.glb");
  const [sub, get] = useKeyboardControls();
  const turtleRef = useRef(null);

  useEffect(() => {
    return sub(
      (state) => state.below.above, 
      (pressed) => {
        console.log("forward", pressed);
        console.log("back", pressed);
        console.log("left", pressed);
        console.log("above", pressed);
        console.log("below", pressed);
      }
    );
  });

  useFrame((state, delta) => {

    const { forward } = get();
    const { back } = get();
    const { left } = get();
    const { right } = get();
    const { above } = get();
    const { below } = get();
   
  
    if (forward) {
      //turtleRef.current.position.x = Math.cos(state.clock.elapsedTime * 2);
      turtleRef.current.position.z += -1 * delta;
    }
    else if (back) {
      turtleRef.current.position.z += 1 * delta;
    }
    else if (left) {
      turtleRef.current.position.x += -1 * delta;
    }
    else if (right) {
      turtleRef.current.position.x += 1 * delta;
    }
    else if (above) {
      turtleRef.current.position.y += 1 * delta;
    }
    else if (below) {
      turtleRef.current.position.y += -1 * delta;
    }
 
   
    const pressed = get().back;
    
    
  });

  return (
    <RigidBody name="rbturtle" type="fixed" colliders="cuboid">
      <group {...props} dispose={null} position={[-3, 2, 11]}>
        <group name="Scene">
            <mesh
              name="Turtle"
              ref={turtleRef}
              geometry={nodes.Turtle.geometry}
              material={materials.Material_0}
              rotation={[-Math.PI / 1, 6, 3]}
              castShadow
              scale={2}
            />
        
        </group>
      </group>
    </RigidBody>
  );
};

export default Turtle;

useGLTF.preload("models-3d/acidification/turtle.glb");
