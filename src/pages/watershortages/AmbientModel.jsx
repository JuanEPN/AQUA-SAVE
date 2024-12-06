import { useGLTF } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";
import React from 'react';

const AmbientModel = (props) => {
    const { nodes, materials } = useGLTF('/models-3d/Ambient.glb');
    return (
        <RigidBody type="fixed" colliders= "trimesh">
            <group {...props} dispose={null} castShadow receiveShadow>
                <group name="Scene">
                    <mesh
                        name="Sphere"
                        geometry={nodes.Sphere.geometry}
                        material={materials['Material.009']}
                        castShadow
                        receiveShadow
                    />
                    <mesh
                        name="Cube001"
                        geometry={nodes.Cube001.geometry}
                        material={materials['Material.001']}
                        position={[-0.257, 2.779, -0.272]}
                        scale={[0.046, 0.415, 0.046]}
                        castShadow
                        receiveShadow
                    />
                    <group
                        name="Cube002"
                        position={[-0.257, 2.779, -0.272]}
                        scale={[0.046, 0.415, 0.046]}
                        castShadow
                        receiveShadow
                    />
                    <mesh
                        name="Cube003"
                        geometry={nodes.Cube003.geometry}
                        material={materials['Material.002']}
                        position={[-0.257, 2.779, -0.272]}
                        scale={[0.046, 0.415, 0.046]}
                        castShadow
                        receiveShadow
                    />
                    <mesh
                        name="Plane"
                        geometry={nodes.Plane.geometry}
                        material={materials['Material.004']}
                        scale={25}
                        castShadow
                        receiveShadow
                    />
                    <mesh
                        name="Sphere005"
                        geometry={nodes.Sphere005.geometry}
                        material={materials['Material.008']}
                        castShadow
                        receiveShadow
                    />
                    <mesh
                        name="Cube"
                        geometry={nodes.Cube.geometry}
                        material={nodes.Cube.material}
                        position={[-0.575, 0.792, 0.608]}
                        scale={0.216}
                        castShadow
                        receiveShadow
                    />
                    <mesh
                        name="Cube004"
                        geometry={nodes.Cube004.geometry}
                        material={nodes.Cube004.material}
                        position={[-0.418, 0.801, 0.854]}
                        scale={[0.216, 0.297, 0.216]}
                        castShadow
                        receiveShadow
                    />
                    <mesh
                        name="Cube005"
                        geometry={nodes.Cube005.geometry}
                        material={nodes.Cube005.material}
                        position={[-0.13, 1.009, 0.174]}
                        scale={[0.146, 0.099, 0.146]}
                        castShadow
                        receiveShadow
                    />
                    <mesh
                        name="Cylinder"
                        geometry={nodes.Cylinder.geometry}
                        material={materials.Material}
                        position={[0, 3.776, 0]}
                        castShadow
                        receiveShadow
                    />
                </group>
            </group>
        </RigidBody>

    );
};

export default AmbientModel;
