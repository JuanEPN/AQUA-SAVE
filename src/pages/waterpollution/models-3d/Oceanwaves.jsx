import React, { useEffect, useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { RigidBody, TrimeshCollider } from "@react-three/rapier";

const Oceanwaves = (props) => {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/models-3d/animated_ocean_scene_tutorial_example_1.glb");
  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    const action = actions?.["Key.001Action.003"];

    if (action) {
      action.play();
      return () => {
        if (action) {
          action.stop();
        }
      };
    } else {
      console.error("La animación no está definida.");
    }
  }, [actions]);

  return (
    <RigidBody type="fixed" colliders="trimesh">
      <group ref={group} {...props} dispose={null} position={[0, 0, 0]}>
        <group name="Sketchfab_Scene">
          <group
            name="Sketchfab_model"
            rotation={[-Math.PI / 2, 0, -1.5]}
            scale={0.159}
          >
            <group name="Root">
              <group name="Plane021" position={[0, 0, 0]}>
                <mesh
                  name="Plane021_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.Plane021_0.geometry}
                  material={materials["Scene_-_Root"]}
                  morphTargetDictionary={nodes.Plane021_0.morphTargetDictionary}
                  morphTargetInfluences={nodes.Plane021_0.morphTargetInfluences}
                />
              </group>
            </group>
          </group>
        </group>
      </group>
    </RigidBody>
  );
};

useGLTF.preload("/models-3d/animated_ocean_scene_tutorial_example_1.glb");

export default Oceanwaves;
