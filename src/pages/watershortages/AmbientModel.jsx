import { useGLTF } from "@react-three/drei";
import React, {} from 'react'

const AmbientModel = (props) => {
    const { nodes, materials } = useGLTF('/models-3d/Ambient.glb')
    return (
        <group {...props} dispose={null}>
            <group name="Scene">
                <mesh name="Sphere" geometry={nodes.Sphere.geometry} material={materials['Material.009']} />
                <mesh
                    name="Cube001"
                    geometry={nodes.Cube001.geometry}
                    material={materials['Material.001']}
                    position={[-0.257, 2.779, -0.272]}
                    scale={[0.046, 0.415, 0.046]}
                />
                <group name="Cube002" position={[-0.257, 2.779, -0.272]} scale={[0.046, 0.415, 0.046]} />
                <mesh
                    name="Cube003"
                    geometry={nodes.Cube003.geometry}
                    material={materials['Material.002']}
                    position={[-0.257, 2.779, -0.272]}
                    scale={[0.046, 0.415, 0.046]}
                />
                <mesh
                    name="Plane"
                    geometry={nodes.Plane.geometry}
                    material={materials['Material.004']}
                    scale={8.778}
                />
                <mesh
                    name="Sphere005"
                    geometry={nodes.Sphere005.geometry}
                    material={materials['Material.008']}
                />
                <mesh
                    name="Cube"
                    geometry={nodes.Cube.geometry}
                    material={nodes.Cube.material}
                    position={[-0.575, 0.792, 0.608]}
                    scale={0.216}
                />
                <mesh
                    name="Cube004"
                    geometry={nodes.Cube004.geometry}
                    material={nodes.Cube004.material}
                    position={[-0.418, 0.801, 0.854]}
                    scale={[0.216, 0.297, 0.216]}
                />
                <mesh
                    name="Cube005"
                    geometry={nodes.Cube005.geometry}
                    material={nodes.Cube005.material}
                    position={[-0.13, 1.009, 0.174]}
                    scale={[0.146, 0.099, 0.146]}
                />
                <mesh
                    name="Cylinder"
                    geometry={nodes.Cylinder.geometry}
                    material={materials.Material}
                    position={[0, 3.776, 0]}
                />
            </group>
        </group>
    )
}

export default AmbientModel;