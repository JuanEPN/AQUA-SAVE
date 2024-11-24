import React, { useRef, useEffect } from "react";
import { useGLTF, useAnimations, useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

const Turtlemodel = (props) => {
  const group = useRef();
  const { nodes, materials, animations, scene } = useGLTF("/models-3d/turtle.glb");
  const { actions, clips } = useAnimations(animations, group, scene);
  const scroll = useScroll();

  useEffect(() => {
    if (actions && actions["Swim Cycle"]) {
      actions["Swim Cycle"].play().paused = true;
    }
  }, [actions]);
  
  

  useFrame(() => {
    const swimAction = actions["Swim Cycle"];
    if (swimAction && scroll) {
      swimAction.time = (swimAction.getClip().duration * scroll.offset) / 4;
    }
  });
  

  return (
    <group ref={group} {...props} dispose={null} >
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]} scale={0.075}>
          <group name="green_016_round5changes_johnsonfbx" rotation={[Math.PI / 2, 0, 0]}>
            <group name="Object_2">
              <group name="RootNode">
                <group name="green_juvenilearmature" position={[-2.266, 2.989, -2.188]} rotation={[-Math.PI / 2, 0, -3.117]} scale={100}>
                  <group name="Object_5">
                    <primitive object={nodes._rootJoint} />
                    <skinnedMesh name="Object_40" geometry={nodes.Object_40.geometry} material={materials.greeneye} skeleton={nodes.Object_40.skeleton} />
                    <skinnedMesh name="Object_41" geometry={nodes.Object_41.geometry} material={materials.greeneyeouter} skeleton={nodes.Object_41.skeleton} />
                    <skinnedMesh name="Object_43" geometry={nodes.Object_43.geometry} material={materials.greenbody} skeleton={nodes.Object_43.skeleton} />
                    <group name="Object_39" rotation={[-Math.PI / 2, 0, 0]} scale={100} />
                    <group name="Object_42" rotation={[-Math.PI / 2, 0, 0]} scale={100} />
                  </group>
                </group>
                <group name="green_juvenileeye" rotation={[-Math.PI / 2, 0, 0]} scale={100} />
                <group name="green_juvenilemesh" rotation={[-Math.PI / 2, 0, 0]} scale={100} />
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
};

useGLTF.preload("/models-3d/turtle.glb");

export default Turtlemodel;
