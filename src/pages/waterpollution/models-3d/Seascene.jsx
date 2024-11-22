import React, { useRef, useEffect } from "react";
import { useGLTF } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import { RigidBody } from "@react-three/rapier";

const Seascene = (props) => {
  const { nodes, materials } = useGLTF("/models-3d/parasitic_plastic.glb");
  const { camera } = useThree();

  useEffect(() => {
    camera.position.set(0, 20, 15);
    camera.lookAt(0, 0, 0);
  }, [camera]);

  return (
    <group {...props} dispose={null}>
      <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
        <mesh
          name="Plantas"
          castShadow
          receiveShadow
          geometry={nodes.Object_3.geometry}
          material={materials.lambert10SG}
        />
        <mesh
          name="Caparazon"
          castShadow
          receiveShadow
          geometry={nodes.Object_4.geometry}
          material={materials.lambert11SG}
        />
        <mesh
          name="Cuerpo"
          castShadow
          receiveShadow
          geometry={nodes.Object_5.geometry}
          material={materials.lambert12SG}
        />
        <mesh
          name="Cosa 1"
          castShadow
          receiveShadow
          geometry={nodes.Object_6.geometry}
          material={materials.lambert13SG}
        />
        <RigidBody type="fixed">
          <mesh
            name="Piso"
            castShadow
            receiveShadow
            geometry={nodes.Object_7.geometry}
            material={materials.lambert2SG}
          />
        </RigidBody>
        <mesh
          name="Brazos"
          castShadow
          receiveShadow
          geometry={nodes.Object_8.geometry}
          material={materials.lambert3SG}
        />
        <mesh
          name="Peces"
          castShadow
          receiveShadow
          geometry={nodes.Object_9.geometry}
          material={materials.lambert4SG}
        />
        <mesh
          name="Peces 2"
          castShadow
          receiveShadow
          geometry={nodes.Object_10.geometry}
          material={materials.lambert5SG}
        />
        <mesh
          name="Coral"
          castShadow
          receiveShadow
          geometry={nodes.Object_11.geometry}
          material={materials.lambert6SG}
        />
        <mesh
          name="Coral 2"
          castShadow
          receiveShadow
          geometry={nodes.Object_12.geometry}
          material={materials.lambert7SG}
        />
        <mesh
          name="Tuberia"
          castShadow
          receiveShadow
          geometry={nodes.Object_13.geometry}
          material={materials.lambert8SG}
        />
        <mesh
          name="Rocas"
          castShadow
          receiveShadow
          geometry={nodes.Object_14.geometry}
          material={materials.lambert9SG}
        />
        <mesh
          name="Liquido verde"
          castShadow
          receiveShadow
          geometry={nodes.Object_15.geometry}
          material={materials.phong1SG}
        />
        <RigidBody type="dynamic" colliders="hull">
          <mesh
            name="Plasticos 1"
            castShadow
            receiveShadow
            geometry={nodes.Object_2.geometry}
            material={materials.anisotropic1SG}
          />
          <mesh
            name="Plasticos 2"
            castShadow
            receiveShadow
            geometry={nodes.Object_16.geometry}
            material={materials.phong2SG}
          />
        </RigidBody>
        <mesh
          name="Plantas 2"
          castShadow
          receiveShadow
          geometry={nodes.Object_17.geometry}
          material={materials.phong3SG}
        />
        <mesh
          name="Object_18"
          castShadow
          receiveShadow
          geometry={nodes.Object_18.geometry}
          material={materials.anisotropic2SG}
        />
        <mesh
          name="Object_19"
          castShadow
          receiveShadow
          geometry={nodes.Object_19.geometry}
          material={materials.initialShadingGroup}
        />
      </group>
    </group>
  );
};

useGLTF.preload("/models-3d/parasitic_plastic.glb");

export default Seascene;
