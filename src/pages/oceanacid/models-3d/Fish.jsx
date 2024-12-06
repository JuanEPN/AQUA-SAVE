import { useAnimations, useGLTF } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";
import { useEffect, useRef } from "react";

const Fish = (props) => {
  const fishRef = useRef();
  const rbFishRef = useRef(null);
  const { nodes, materials, animations } = useGLTF("/models-3d/acidification/nemo.glb"
);
  const { actions } = useAnimations(animations, fishRef);

  console.log(actions);

  useEffect(() => {
     actions["Fish_001_animate_preview"].play();
     return () => actions["Fish_001_animate_preview"].stop();
   }, [actions]);

  return (
    <RigidBody ref={rbFishRef} name="rbFish" type="fixed" colliders="cuboid">
   <group ref={fishRef} {...props} dispose={null}>
      <group name="Scene">
        <group name="Sketchfab_model">
          <group name="02776064e1a24534bc6ee56fa5869c70fbx">
            <group name="Object_2">
              <group name="RootNode">
                <group name="Object_4">
                  <group name="Object_6" />
                  <skinnedMesh
                    name="Object_7"
                    castShadow
                    geometry={nodes.Object_7.geometry}
                    material={materials.Fish_001}
                    skeleton={nodes.Object_7.skeleton}
                  />
                  <primitive object={nodes._rootJoint} />
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
    </RigidBody>
  );
};

export default Fish;

useGLTF.preload("models-3d/acidification/nemo.glb");