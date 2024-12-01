import { useGLTF, useAnimations} from "@react-three/drei";
import { useEffect, useRef } from "react";


const HermitCrab = (props) => {
  const crabRef = useRef();
  const { nodes, materials, animations } = useGLTF("models-3d/microplastic/hermit_crab.glb");
  const { actions } = useAnimations(animations, crabRef);
  
  console.log(actions);

  useEffect(() => {
    actions["Animation"]?.play();
    return () => actions["Animation"]?.stop();
  },[actions]);
   
  return (
    <group ref={crabRef} {...props} dispose={null} >
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group name="root">
            <group name="GLTF_SceneRootNode" rotation={[Math.PI / 2, 0, 0]}>
              <group name="Armature_29">
                <group name="GLTF_created_0">
                  <primitive object={nodes.GLTF_created_0_rootJoint} />
                  <skinnedMesh
                    name="Object_7"
                    geometry={nodes.Object_7.geometry}
                    material={materials.Checker}
                    skeleton={nodes.Object_7.skeleton}
                    castShadow
                    receiveShadow
                  />
                  <group name="Shell_LP_Checker_0_28" />
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
};

export default HermitCrab;
useGLTF.preload("models-3d/microplastic/hermit_crab.glb");
