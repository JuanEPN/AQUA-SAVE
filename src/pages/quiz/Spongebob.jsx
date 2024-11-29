import React, { useEffect, useRef } from 'react';
import { useGLTF, useAnimations, useKeyboardControls } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';


const Spongebob = (props) => {
  const group = useRef(); 
  const { nodes, materials, animations } = useGLTF("/models-3d/spongebobmodel.glb")
  const { actions } = useAnimations(animations, group);
  const [sub, get] = useKeyboardControls(); 

  useEffect(()=>{
    const unsubscribe = sub ((state)=>{
        console.log(state);
    });
    return unsubscribe;
  }, [sub]);

  const speed = {
    forward: 1,
    back: 0.5,
    left: 0.5,
    right: 0.5,
  };

  useFrame((state, delta) => {
    const { forward, back, left, right } = get(); 

    if (forward){
        group.current.position.x -= speed.forward * delta;
    }
    if (back){
        group.current.position.x -= speed.back * delta;
    }
    if (left){
        group.current.position.x -= speed.left * delta;
    }
    if (right){
        group.current.position.x -= speed.right * delta;
    }
  });


  useEffect(() =>{
    const action = actions?.["Scene"];

    if (action){
        action.play();
        return () => {
            if (action){
                action.stop();
            }
        };
    } else {
        console.error("La animación no esta definida."); 
    }
  })
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]} scale={0.3}>
          <group
            name="afadcb9d4a2f4ed38f8baf363da59d85fbx"
            rotation={[Math.PI / 2, 0, 0]}
            scale={0}>
            <group name="Object_2">
              <group name="RootNode">
                <group name="Armature" rotation={[-Math.PI / 2, 0, 0]} scale={100}>
                  <group name="Object_5">
                    <primitive object={nodes._rootJoint} />
                    <skinnedMesh
                      name="Object_36"
                      geometry={nodes.Object_36.geometry}
                      material={materials.White}
                      skeleton={nodes.Object_36.skeleton}
                    />
                    <skinnedMesh
                      name="Object_37"
                      geometry={nodes.Object_37.geometry}
                      material={materials.Pants}
                      skeleton={nodes.Object_37.skeleton}
                    />
                    <skinnedMesh
                      name="Object_38"
                      geometry={nodes.Object_38.geometry}
                      material={materials.Black}
                      skeleton={nodes.Object_38.skeleton}
                    />
                    <skinnedMesh
                      name="Object_39"
                      geometry={nodes.Object_39.geometry}
                      material={materials.material}
                      skeleton={nodes.Object_39.skeleton}
                    />
                    <skinnedMesh
                      name="Object_40"
                      geometry={nodes.Object_40.geometry}
                      material={materials.Sponge_Yellow}
                      skeleton={nodes.Object_40.skeleton}
                    />
                    <skinnedMesh
                      name="Object_41"
                      geometry={nodes.Object_41.geometry}
                      material={materials.Blue}
                      skeleton={nodes.Object_41.skeleton}
                    />
                    <group
                      name="Object_35"
                      position={[0, 115.3, 0]}
                      rotation={[-Math.PI / 2, 0, 0]}
                      scale={41.4}
                    />
                  </group>
                </group>
                <group
                  name="Spongebob_"
                  position={[0, 115.3, 0]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={41.4}
                />
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload("/models-3d/spongebobmodel.glb"); 

export default Spongebob; 