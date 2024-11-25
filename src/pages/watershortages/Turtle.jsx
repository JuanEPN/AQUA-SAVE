import { useEffect, useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import { RigidBody } from '@react-three/rapier'

const Turtle = (props) => {

    const turleRef = useRef()
    const { nodes, materials, animations } = useGLTF('/models-3d/turtleWS.glb')
    const { actions } = useAnimations(animations, turleRef)

    useEffect(() => {
        if (actions && actions["Swim Cycle"]) {
            console.log("Reproduciendo animación Idle");
            actions["Swim Cycle"].play();
        } else {
            console.warn("No se encontró la animación Idle");
        }
        return () => {
            if (actions && actions["Swim Cycle"]) {
                actions["Swim Cycle"].stop();
            }
        };
    }, [actions]);

    return (
        <RigidBody  >
            <group ref={turleRef} {...props} dispose={null} scale={0.2} castShadow receiveShadow>
                <group name="Sketchfab_Scene">
                    <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]} scale={0.1} castShadow receiveShadow>
                        <group name="green_016_round5changes_johnsonfbx" rotation={[Math.PI / 2, 0, 0]} castShadow receiveShadow>
                            <group name="Object_2" castShadow receiveShadow>
                                <group name="RootNode" castShadow receiveShadow>
                                    <group
                                        name="green_juvenilearmature"
                                        position={[-2.3, 3, -2.2]}
                                        rotation={[-Math.PI / 2, 0, -3.1]}
                                        scale={100}
                                        castShadow
                                        receiveShadow>
                                        <group name="Object_5" castShadow receiveShadow>
                                            <primitive object={nodes._rootJoint} castShadow receiveShadow />
                                            <skinnedMesh
                                                name="Object_40"
                                                geometry={nodes.Object_40.geometry}
                                                material={materials.greeneye}
                                                skeleton={nodes.Object_40.skeleton}
                                                castShadow
                                                receiveShadow
                                            />
                                            <skinnedMesh
                                                name="Object_41"
                                                geometry={nodes.Object_41.geometry}
                                                material={materials.greeneyeouter}
                                                skeleton={nodes.Object_41.skeleton}
                                                castShadow
                                                receiveShadow
                                            />
                                            <skinnedMesh
                                                name="Object_43"
                                                geometry={nodes.Object_43.geometry}
                                                material={materials.greenbody}
                                                skeleton={nodes.Object_43.skeleton}
                                                castShadow
                                                receiveShadow
                                            />
                                            <group name="Object_39" rotation={[-Math.PI / 2, 0, 0]} scale={100} castShadow receiveShadow />
                                            <group name="Object_42" rotation={[-Math.PI / 2, 0, 0]} scale={100} castShadow receiveShadow />
                                        </group>
                                    </group>
                                    <group name="green_juvenileeye" rotation={[-Math.PI / 2, 0, 0]} scale={100} castShadow receiveShadow />
                                    <group name="green_juvenilemesh" rotation={[-Math.PI / 2, 0, 0]} scale={100} castShadow receiveShadow />
                                </group>
                            </group>
                        </group>
                    </group>
                </group>
            </group>
        </RigidBody>


    )
}

export default Turtle
useGLTF.preload('/models-3d/turleWS.glb')