import React, { useRef, useEffect } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import { useThree } from '@react-three/fiber'


const Dolphinmodel = (props) => {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF("/models-3d/dolphin.glb")
  const { actions } = useAnimations(animations, group); 

  const { camera } = useThree();

  useEffect(() => {
    camera.position.set(300, 10, 700);
    camera.lookAt(10, 50, 50);
  }, [camera]);

  useEffect(() => {
    const action = actions?.["Armature|ArmatureAction"];

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
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group name="96664880a6984f03b38ff850373e2ae2fbx" rotation={[Math.PI / 2, 0, 0]}>
            <group name="Object_2">
              <group name="RootNode">
                <group
                  name="Armature"
                  position={[0.094, -20.45, 201.6]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}>
                  <group name="Object_5">
                    <primitive object={nodes._rootJoint} />
                    <skinnedMesh
                      name="Object_32"
                      geometry={nodes.Object_32.geometry}
                      material={materials.HumpbackDolphin}
                      skeleton={nodes.Object_32.skeleton}
                    />
                    <group
                      name="Object_31"
                      position={[0, 32.253, -265.179]}
                      rotation={[-Math.PI / 2, 0, 0]}
                      scale={105.031}
                    />
                  </group>
                </group>
                <group
                  name="Vert002"
                  position={[0, 32.253, -265.179]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={105.031}
                />
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload("/models-3d/dolphin.glb"); 

export default Dolphinmodel; 