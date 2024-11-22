import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";

const Beachtown = (props) => {
  const { nodes, materials } = useGLTF("/models-3d/fishing_town.glb");
  return (
    <RigidBody type="fixed" colliders="cuboid">
      <group {...props} dispose={null} position={[0, 0, 0]}>
        <group>
          <group rotation={[-Math.PI / 2, 0, 0]}>
            <group>
              <group rotation={[Math.PI / 2, 0, 0]}>
                <group position={[1.9, 1.5, 4]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_4.geometry}
                    material={materials.lpb_gradient}
                  />
                  <group position={[0, 1.5, 0]}>
                    <mesh
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_6.geometry}
                      material={materials.lpb_gradient}
                    />
                  </group>
                  <group position={[0, 0.3, 0.7]}>
                    <mesh
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_8.geometry}
                      material={materials.lpb_gradient}
                    />
                  </group>
                  <group
                    position={[0, 0.9, 0.8]}
                    rotation={[0, -Math.PI / 2, 0]}
                    scale={[0.6, 0.5, 0.6]}
                  >
                    <mesh
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_10.geometry}
                      material={materials.lpb_gradient}
                    />
                  </group>
                  <group rotation={[0, Math.PI / 2, 0]}>
                    <mesh
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_12.geometry}
                      material={materials.lpb_gradient}
                    />
                  </group>
                  <group position={[0.8, 0.9, 0]} scale={[0.6, 0.5, 0.6]}>
                    <mesh
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_14.geometry}
                      material={materials.lpb_gradient}
                    />
                  </group>
                  <group
                    position={[-0.8, 0.9, 0]}
                    rotation={[-Math.PI, 0, -Math.PI]}
                    scale={[0.6, 0.5, 0.6]}
                  >
                    <mesh
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_16.geometry}
                      material={materials.lpb_gradient}
                    />
                  </group>
                  <group rotation={[0, -Math.PI / 2, 0]}>
                    <mesh
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_18.geometry}
                      material={materials.lpb_gradient}
                    />
                  </group>
                  <group position={[0, 2.4, 0.3]} scale={0.5}>
                    <mesh
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_20.geometry}
                      material={materials.lpb_gradient_metal}
                    />
                  </group>
                  <group
                    position={[-0.5, 1.2, 0.7]}
                    rotation={[Math.PI / 2, 0, 0]}
                    scale={0.5}
                  >
                    <mesh
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_22.geometry}
                      material={materials.lpb_gradient}
                    />
                  </group>
                </group>
                <group position={[4, 1.5, -1.3]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_24.geometry}
                    material={materials.lpb_gradient}
                  />
                  <group
                    position={[1, 0.9, 0]}
                    rotation={[0, -Math.PI / 2, 0]}
                    scale={[0.6, 0.5, 0.6]}
                  >
                    <mesh
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_26.geometry}
                      material={materials.lpb_gradient}
                    />
                  </group>
                  <group position={[1, 0, -0.8]}>
                    <mesh
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_28.geometry}
                      material={materials.lpb_gradient}
                    />
                  </group>
                  <group position={[0, 1.5, 0]}>
                    <mesh
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_30.geometry}
                      material={materials.lpb_gradient}
                    />
                  </group>
                  <group position={[0, 0.3, 0.7]}>
                    <mesh
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_32.geometry}
                      material={materials.lpb_gradient}
                    />
                  </group>
                  <group
                    position={[0, 0.9, 0.8]}
                    rotation={[0, -Math.PI / 2, 0]}
                    scale={[0.6, 0.5, 0.6]}
                  >
                    <mesh
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_34.geometry}
                      material={materials.lpb_gradient}
                    />
                  </group>
                  <group
                    position={[0.7, 0, -0.8]}
                    rotation={[0, Math.PI / 2, 0]}
                  >
                    <mesh
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_36.geometry}
                      material={materials.lpb_gradient}
                    />
                    <group position={[0, 1.5, 0]}>
                      <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_38.geometry}
                        material={materials.lpb_gradient}
                      />
                    </group>
                  </group>
                  <group
                    position={[-0.8, 0.9, 0]}
                    rotation={[-Math.PI, 0, -Math.PI]}
                    scale={[0.6, 0.5, 0.6]}
                  >
                    <mesh
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_40.geometry}
                      material={materials.lpb_gradient}
                    />
                  </group>
                  <group rotation={[0, -Math.PI / 2, 0]}>
                    <mesh
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_42.geometry}
                      material={materials.lpb_gradient}
                    />
                  </group>
                  <group position={[1.5, 0.9, -0.8]} scale={[0.6, 0.5, 0.6]}>
                    <mesh
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_44.geometry}
                      material={materials.lpb_gradient}
                    />
                  </group>
                  <group
                    position={[0.7, 0, -0.8]}
                    rotation={[0, Math.PI / 2, 0]}
                  >
                    <mesh
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_46.geometry}
                      material={materials.lpb_gradient}
                    />
                  </group>
                  <group
                    position={[0.7, 0.9, -1.6]}
                    rotation={[0, Math.PI / 2, 0]}
                    scale={[0.6, 0.5, 0.6]}
                  >
                    <mesh
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_48.geometry}
                      material={materials.lpb_gradient}
                    />
                  </group>
                  <group
                    position={[0.7, 0, -0.8]}
                    rotation={[-Math.PI, 0, -Math.PI]}
                  >
                    <mesh
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_50.geometry}
                      material={materials.lpb_gradient}
                    />
                  </group>
                  <group
                    position={[0.7, 1.9, -0.2]}
                    rotation={[0, -0.7, 0.2]}
                    scale={0.8}
                  >
                    <mesh
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_52.geometry}
                      material={materials.lpb_gradient_metal}
                    />
                    <mesh
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_53.geometry}
                      material={materials.lpb_gradient}
                    />
                  </group>
                  <group
                    position={[-0.4, 1.2, 0.7]}
                    rotation={[Math.PI / 2, 0, 0]}
                  >
                    <mesh
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_55.geometry}
                      material={materials.lpb_gradient}
                    />
                  </group>
                </group>
                <group position={[0.3, 0, 0.4]} scale={13}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_57.geometry}
                    material={materials.material}
                  />
                </group>
                <group position={[0.3, -1.9, 0.4]} scale={13}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_59.geometry}
                    material={materials.lpb_gradient}
                  />
                </group>
                <group position={[-1.3, 1.5, -1.1]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_61.geometry}
                    material={materials.lpb_gradient}
                  />
                  <group position={[0, 1.5, 0]}>
                    <mesh
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_63.geometry}
                      material={materials.lpb_gradient}
                    />
                  </group>
                  <group position={[0, 0.3, 0.7]}>
                    <mesh
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_65.geometry}
                      material={materials.lpb_gradient}
                    />
                  </group>
                  <group
                    position={[0, 0.9, 0.8]}
                    rotation={[0, -Math.PI / 2, 0]}
                    scale={[0.6, 0.5, 0.6]}
                  >
                    <mesh
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_67.geometry}
                      material={materials.lpb_gradient}
                    />
                  </group>
                  <group
                    position={[-0.8, 0.9, 0]}
                    rotation={[-Math.PI, 0, -Math.PI]}
                    scale={[0.6, 0.5, 0.6]}
                  >
                    <mesh
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_69.geometry}
                      material={materials.lpb_gradient}
                    />
                  </group>
                  <group rotation={[0, -Math.PI / 2, 0]}>
                    <mesh
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_71.geometry}
                      material={materials.lpb_gradient}
                    />
                  </group>
                  <group
                    position={[0.7, 0, -0.8]}
                    rotation={[0, Math.PI / 2, 0]}
                  >
                    <mesh
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_73.geometry}
                      material={materials.lpb_gradient}
                    />
                    <group position={[0, 1.5, 0]}>
                      <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_75.geometry}
                        material={materials.lpb_gradient}
                      />
                    </group>
                  </group>
                  <group position={[1.5, 0.9, -0.8]} scale={[0.6, 0.5, 0.6]}>
                    <mesh
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_77.geometry}
                      material={materials.lpb_gradient}
                    />
                  </group>
                  <group
                    position={[0.7, 0, -0.8]}
                    rotation={[0, Math.PI / 2, 0]}
                  >
                    <mesh
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_79.geometry}
                      material={materials.lpb_gradient}
                    />
                  </group>
                  <group
                    position={[0.7, 0.9, -1.6]}
                    rotation={[0, Math.PI / 2, 0]}
                    scale={[0.6, 0.5, 0.6]}
                  >
                    <mesh
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_81.geometry}
                      material={materials.lpb_gradient}
                    />
                  </group>
                  <group
                    position={[0.7, 0, -0.8]}
                    rotation={[-Math.PI, 0, -Math.PI]}
                  >
                    <mesh
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_83.geometry}
                      material={materials.lpb_gradient}
                    />
                  </group>
                  <group
                    position={[1, 0.9, 0]}
                    rotation={[0, -Math.PI / 2, 0]}
                    scale={[0.6, 0.5, 0.6]}
                  >
                    <mesh
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_85.geometry}
                      material={materials.lpb_gradient}
                    />
                  </group>
                  <group position={[1, 0, -0.8]}>
                    <mesh
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_87.geometry}
                      material={materials.lpb_gradient}
                    />
                  </group>
                  <group
                    position={[-1.1, 1.9, -1]}
                    rotation={[-Math.PI, 0, -Math.PI]}
                    scale={[0.6, 0.5, 0.6]}
                  >
                    <mesh
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_89.geometry}
                      material={materials.lpb_gradient}
                    />
                  </group>
                  <group
                    position={[-0.3, 1, -1]}
                    rotation={[0, -Math.PI / 2, 0]}
                  >
                    <mesh
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_91.geometry}
                      material={materials.lpb_gradient}
                    />
                  </group>
                  <group
                    position={[-0.3, 1.5, -1.9]}
                    rotation={[0, Math.PI / 2, 0]}
                    scale={[0.6, 0.5, 0.6]}
                  >
                    <mesh
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_93.geometry}
                      material={materials.lpb_gradient}
                    />
                  </group>
                  <group
                    position={[-0.3, 0.6, -1]}
                    rotation={[-Math.PI, 0, -Math.PI]}
                  >
                    <mesh
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_95.geometry}
                      material={materials.lpb_gradient}
                    />
                  </group>
                  <group
                    position={[0, 2.1, 0.1]}
                    rotation={[0, 0, -0.8]}
                    scale={[0, 0.1, 0]}
                  >
                    <mesh
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_97.geometry}
                      material={materials.lpb_gradient}
                    />
                  </group>
                  <group
                    position={[0, 2.1, 0.3]}
                    rotation={[-3.1, 0, 2.4]}
                    scale={[0, 0.1, 0]}
                  >
                    <mesh
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_99.geometry}
                      material={materials.lpb_gradient}
                    />
                  </group>
                  <group position={[-0.3, 1.2, -1]}>
                    <mesh
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_101.geometry}
                      material={materials.lpb_gradient}
                    />
                    <group position={[0, 1.5, 0]}>
                      <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Object_103.geometry}
                        material={materials.lpb_gradient}
                      />
                    </group>
                  </group>
                  <group
                    position={[-0.5, 1.2, 0.7]}
                    rotation={[Math.PI / 2, 0, 0]}
                  >
                    <mesh
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_105.geometry}
                      material={materials.lpb_gradient}
                    />
                  </group>
                </group>
                <group position={[-4.1, 1.5, 1.9]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_107.geometry}
                    material={materials.lpb_gradient}
                  />
                  <group rotation={[0, -Math.PI / 2, 0]}>
                    <mesh
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_109.geometry}
                      material={materials.lpb_gradient}
                    />
                  </group>
                  <group position={[0, 1.5, 0]}>
                    <mesh
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_111.geometry}
                      material={materials.lpb_gradient}
                    />
                  </group>
                  <group position={[0, 0.3, 0.7]}>
                    <mesh
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_113.geometry}
                      material={materials.lpb_gradient}
                    />
                  </group>
                  <group
                    position={[0, 0.9, 0.8]}
                    rotation={[0, -Math.PI / 2, 0]}
                    scale={[0.6, 0.5, 0.6]}
                  >
                    <mesh
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_115.geometry}
                      material={materials.lpb_gradient}
                    />
                  </group>
                  <group rotation={[0, Math.PI / 2, 0]}>
                    <mesh
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_117.geometry}
                      material={materials.lpb_gradient}
                    />
                  </group>
                  <group position={[0.8, 0.9, 0]} scale={[0.6, 0.5, 0.6]}>
                    <mesh
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_119.geometry}
                      material={materials.lpb_gradient}
                    />
                  </group>
                  <group
                    position={[-0.8, 0.9, 0]}
                    rotation={[-Math.PI, 0, -Math.PI]}
                    scale={[0.6, 0.5, 0.6]}
                  >
                    <mesh
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_121.geometry}
                      material={materials.lpb_gradient}
                    />
                  </group>
                </group>
                <group
                  position={[-9.1, 1.5, -1.7]}
                  rotation={[0, Math.PI / 2, 0]}
                >
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_123.geometry}
                    material={materials.lpb_gradient}
                  />
                  <group position={[0, 1.5, 0]}>
                    <mesh
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_125.geometry}
                      material={materials.lpb_gradient}
                    />
                  </group>
                  <group position={[0, 0.3, 0.7]}>
                    <mesh
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_127.geometry}
                      material={materials.lpb_gradient}
                    />
                  </group>
                  <group
                    position={[0, 0.9, 0.8]}
                    rotation={[0, -Math.PI / 2, 0]}
                    scale={[0.6, 0.5, 0.6]}
                  >
                    <mesh
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_129.geometry}
                      material={materials.lpb_gradient}
                    />
                  </group>
                  <group rotation={[0, Math.PI / 2, 0]}>
                    <mesh
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_131.geometry}
                      material={materials.lpb_gradient}
                    />
                  </group>
                  <group position={[0.8, 0.9, 0]} scale={[0.6, 0.5, 0.6]}>
                    <mesh
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_133.geometry}
                      material={materials.lpb_gradient}
                    />
                  </group>
                  <group
                    position={[-0.8, 0.9, 0]}
                    rotation={[-Math.PI, 0, -Math.PI]}
                    scale={[0.6, 0.5, 0.6]}
                  >
                    <mesh
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_135.geometry}
                      material={materials.lpb_gradient}
                    />
                  </group>
                  <group rotation={[0, -Math.PI / 2, 0]}>
                    <mesh
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_137.geometry}
                      material={materials.lpb_gradient}
                    />
                  </group>
                </group>
                <group
                  position={[-9.3, 1.5, 3.2]}
                  rotation={[0, Math.PI / 2, 0]}
                >
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_139.geometry}
                    material={materials.lpb_gradient}
                  />
                  <group position={[0, 1.5, 0]}>
                    <mesh
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_141.geometry}
                      material={materials.lpb_gradient}
                    />
                  </group>
                  <group position={[0, 0.3, 0.7]}>
                    <mesh
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_143.geometry}
                      material={materials.lpb_gradient}
                    />
                  </group>
                  <group
                    position={[0, 0.9, 0.8]}
                    rotation={[0, -Math.PI / 2, 0]}
                    scale={[0.6, 0.5, 0.6]}
                  >
                    <mesh
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_145.geometry}
                      material={materials.lpb_gradient}
                    />
                  </group>
                  <group rotation={[0, Math.PI / 2, 0]}>
                    <mesh
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_147.geometry}
                      material={materials.lpb_gradient}
                    />
                  </group>
                  <group position={[0.8, 0.9, 0]} scale={[0.6, 0.5, 0.6]}>
                    <mesh
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_149.geometry}
                      material={materials.lpb_gradient}
                    />
                  </group>
                  <group
                    position={[-0.8, 0.9, 0]}
                    rotation={[-Math.PI, 0, -Math.PI]}
                    scale={[0.6, 0.5, 0.6]}
                  >
                    <mesh
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_151.geometry}
                      material={materials.lpb_gradient}
                    />
                  </group>
                  <group rotation={[0, -Math.PI / 2, 0]}>
                    <mesh
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_153.geometry}
                      material={materials.lpb_gradient}
                    />
                  </group>
                </group>
                <group position={[2, 1.5, -6.2]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_155.geometry}
                    material={materials.lpb_gradient}
                  />
                  <group position={[0, 1.5, 0]}>
                    <mesh
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_157.geometry}
                      material={materials.lpb_gradient}
                    />
                  </group>
                  <group position={[0, 0.3, 0.7]}>
                    <mesh
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_159.geometry}
                      material={materials.lpb_gradient}
                    />
                  </group>
                  <group
                    position={[0, 0.9, 0.8]}
                    rotation={[0, -Math.PI / 2, 0]}
                    scale={[0.6, 0.5, 0.6]}
                  >
                    <mesh
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_161.geometry}
                      material={materials.lpb_gradient}
                    />
                  </group>
                  <group rotation={[0, Math.PI / 2, 0]}>
                    <mesh
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_163.geometry}
                      material={materials.lpb_gradient}
                    />
                  </group>
                  <group position={[0.8, 0.9, 0]} scale={[0.6, 0.5, 0.6]}>
                    <mesh
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_165.geometry}
                      material={materials.lpb_gradient}
                    />
                  </group>
                  <group
                    position={[-0.8, 0.9, 0]}
                    rotation={[-Math.PI, 0, -Math.PI]}
                    scale={[0.6, 0.5, 0.6]}
                  >
                    <mesh
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_167.geometry}
                      material={materials.lpb_gradient}
                    />
                  </group>
                  <group rotation={[0, -Math.PI / 2, 0]}>
                    <mesh
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_169.geometry}
                      material={materials.lpb_gradient}
                    />
                  </group>
                </group>
                <group position={[-4.1, 0.5, 1.9]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_171.geometry}
                    material={materials.lpb_gradient}
                  />
                  <group position={[0, 1, 0]}>
                    <mesh
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_173.geometry}
                      material={materials.lpb_gradient}
                    />
                  </group>
                  <group
                    position={[0, 1, 0]}
                    rotation={[-Math.PI / 4, 0, 0.3]}
                    scale={[0.1, 0.2, 0.1]}
                  >
                    <mesh
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_175.geometry}
                      material={materials.lpb_gradient}
                    />
                  </group>
                  <group
                    position={[0, 1, 0]}
                    rotation={[-2.4, 0, -2.8]}
                    scale={[0.1, 0.2, 0.1]}
                  >
                    <mesh
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_177.geometry}
                      material={materials.lpb_gradient}
                    />
                  </group>
                  <group
                    position={[0, 1, 0]}
                    rotation={[-Math.PI / 2, Math.PI / 4, 1.9]}
                    scale={[0.1, 0.2, 0.1]}
                  >
                    <mesh
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_179.geometry}
                      material={materials.lpb_gradient}
                    />
                  </group>
                  <group
                    position={[0, 1, 0]}
                    rotation={[-Math.PI / 2, -Math.PI / 4, -1.2]}
                    scale={[0.1, 0.2, 0.1]}
                  >
                    <mesh
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_181.geometry}
                      material={materials.lpb_gradient}
                    />
                  </group>
                  <group position={[0, -0.5, 0]} scale={[1, 0.7, 1]}>
                    <mesh
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_183.geometry}
                      material={materials.lpb_gradient}
                    />
                  </group>
                </group>
                <group position={[1.9, 0.5, 4]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_185.geometry}
                    material={materials.lpb_gradient}
                  />
                  <group position={[0, 1, 0]}>
                    <mesh
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_187.geometry}
                      material={materials.lpb_gradient}
                    />
                  </group>
                  <group position={[0, -0.5, 0]} scale={[1, 0.7, 1]}>
                    <mesh
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_189.geometry}
                      material={materials.lpb_gradient}
                    />
                  </group>
                  <group
                    position={[0, 1, 0]}
                    rotation={[-Math.PI / 4, 0, 0.3]}
                    scale={[0.1, 0.2, 0.1]}
                  >
                    <mesh
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_191.geometry}
                      material={materials.lpb_gradient}
                    />
                  </group>
                  <group
                    position={[0, 1, 0]}
                    rotation={[-2.4, 0, -2.8]}
                    scale={[0.1, 0.2, 0.1]}
                  >
                    <mesh
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_193.geometry}
                      material={materials.lpb_gradient}
                    />
                  </group>
                  <group
                    position={[0, 1, 0]}
                    rotation={[-Math.PI / 2, Math.PI / 4, 1.9]}
                    scale={[0.1, 0.2, 0.1]}
                  >
                    <mesh
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_195.geometry}
                      material={materials.lpb_gradient}
                    />
                  </group>
                  <group
                    position={[0, 1, 0]}
                    rotation={[-Math.PI / 2, -Math.PI / 4, -1.2]}
                    scale={[0.1, 0.2, 0.1]}
                  >
                    <mesh
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_197.geometry}
                      material={materials.lpb_gradient}
                    />
                  </group>
                </group>
                <group position={[8.9, 0.5, -1.1]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_199.geometry}
                    material={materials.lpb_gradient}
                  />
                  <group position={[0, 1, 0]}>
                    <mesh
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_201.geometry}
                      material={materials.lpb_gradient}
                    />
                  </group>
                  <group position={[0, -0.5, 0]} scale={[1, 0.7, 1]}>
                    <mesh
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_203.geometry}
                      material={materials.lpb_gradient}
                    />
                  </group>
                  <group
                    position={[0, 1, -0.9]}
                    rotation={[-Math.PI / 4, 0, 0.3]}
                    scale={[0.1, 0.2, 0.1]}
                  >
                    <mesh
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_205.geometry}
                      material={materials.lpb_gradient}
                    />
                  </group>
                  <group
                    position={[0, 1, 0]}
                    rotation={[-2.4, 0, -2.8]}
                    scale={[0.1, 0.2, 0.1]}
                  >
                    <mesh
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_207.geometry}
                      material={materials.lpb_gradient}
                    />
                  </group>
                  <group
                    position={[0, 1, 0]}
                    rotation={[-Math.PI / 2, Math.PI / 4, 1.9]}
                    scale={[0.1, 0.2, 0.1]}
                  >
                    <mesh
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_209.geometry}
                      material={materials.lpb_gradient}
                    />
                  </group>
                  <group
                    position={[1, 1, 0]}
                    rotation={[-Math.PI / 2, -Math.PI / 4, -1.2]}
                    scale={[0.1, 0.2, 0.1]}
                  >
                    <mesh
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_211.geometry}
                      material={materials.lpb_gradient}
                    />
                  </group>
                </group>
                <group position={[-1.5, 0.5, -1.1]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_213.geometry}
                    material={materials.lpb_gradient}
                  />
                  <group position={[0, 1, 0]}>
                    <mesh
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_215.geometry}
                      material={materials.lpb_gradient}
                    />
                  </group>
                  <group position={[0, -0.5, 0]} scale={[1, 0.7, 1]}>
                    <mesh
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_217.geometry}
                      material={materials.lpb_gradient}
                    />
                  </group>
                  <group
                    position={[0, 1, -0.9]}
                    rotation={[-Math.PI / 4, 0, 0.3]}
                    scale={[0.1, 0.2, 0.1]}
                  >
                    <mesh
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_219.geometry}
                      material={materials.lpb_gradient}
                    />
                  </group>
                  <group
                    position={[0, 1, 0]}
                    rotation={[-2.4, 0, -2.8]}
                    scale={[0.1, 0.2, 0.1]}
                  >
                    <mesh
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_221.geometry}
                      material={materials.lpb_gradient}
                    />
                  </group>
                  <group
                    position={[0, 1, 0]}
                    rotation={[-Math.PI / 2, Math.PI / 4, 1.9]}
                    scale={[0.1, 0.2, 0.1]}
                  >
                    <mesh
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_223.geometry}
                      material={materials.lpb_gradient}
                    />
                  </group>
                  <group
                    position={[1, 1, 0]}
                    rotation={[-Math.PI / 2, -Math.PI / 4, -1.2]}
                    scale={[0.1, 0.2, 0.1]}
                  >
                    <mesh
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_225.geometry}
                      material={materials.lpb_gradient}
                    />
                  </group>
                </group>
                <group position={[-9, 0.5, -1]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_227.geometry}
                    material={materials.lpb_gradient}
                  />
                  <group position={[0, 1, 0]}>
                    <mesh
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_229.geometry}
                      material={materials.lpb_gradient}
                    />
                  </group>
                  <group position={[0, -0.5, 0]} scale={[1, 0.7, 1]}>
                    <mesh
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_231.geometry}
                      material={materials.lpb_gradient}
                    />
                  </group>
                  <group
                    position={[0, 1, -0.9]}
                    rotation={[-Math.PI / 4, 0, 0.3]}
                    scale={[0.1, 0.2, 0.1]}
                  >
                    <mesh
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_233.geometry}
                      material={materials.lpb_gradient}
                    />
                  </group>
                  <group
                    position={[0, 1, 0]}
                    rotation={[-2.4, 0, -2.8]}
                    scale={[0.1, 0.2, 0.1]}
                  >
                    <mesh
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_235.geometry}
                      material={materials.lpb_gradient}
                    />
                  </group>
                  <group
                    position={[0, 1, 0]}
                    rotation={[-Math.PI / 2, Math.PI / 4, 1.9]}
                    scale={[0.1, 0.2, 0.1]}
                  >
                    <mesh
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_237.geometry}
                      material={materials.lpb_gradient}
                    />
                  </group>
                  <group
                    position={[1, 1, 0]}
                    rotation={[-Math.PI / 2, -Math.PI / 4, -1.2]}
                    scale={[0.1, 0.2, 0.1]}
                  >
                    <mesh
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_239.geometry}
                      material={materials.lpb_gradient}
                    />
                  </group>
                </group>
                <group position={[-9.1, 0.5, 4]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_241.geometry}
                    material={materials.lpb_gradient}
                  />
                  <group position={[0, 1, 0]}>
                    <mesh
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_243.geometry}
                      material={materials.lpb_gradient}
                    />
                  </group>
                  <group position={[0, -0.5, 0]} scale={[1, 0.7, 1]}>
                    <mesh
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_245.geometry}
                      material={materials.lpb_gradient}
                    />
                  </group>
                  <group
                    position={[0, 1, -0.9]}
                    rotation={[-Math.PI / 4, 0, 0.3]}
                    scale={[0.1, 0.2, 0.1]}
                  >
                    <mesh
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_247.geometry}
                      material={materials.lpb_gradient}
                    />
                  </group>
                  <group
                    position={[0, 1, 0]}
                    rotation={[-2.4, 0, -2.8]}
                    scale={[0.1, 0.2, 0.1]}
                  >
                    <mesh
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_249.geometry}
                      material={materials.lpb_gradient}
                    />
                  </group>
                  <group
                    position={[0, 1, 0]}
                    rotation={[-Math.PI / 2, Math.PI / 4, 1.9]}
                    scale={[0.1, 0.2, 0.1]}
                  >
                    <mesh
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_251.geometry}
                      material={materials.lpb_gradient}
                    />
                  </group>
                  <group
                    position={[1, 1, 0]}
                    rotation={[-Math.PI / 2, -Math.PI / 4, -1.2]}
                    scale={[0.1, 0.2, 0.1]}
                  >
                    <mesh
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_253.geometry}
                      material={materials.lpb_gradient}
                    />
                  </group>
                </group>
                <group position={[2, 0.5, -6.1]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_255.geometry}
                    material={materials.lpb_gradient}
                  />
                  <group position={[0, 1, 0]}>
                    <mesh
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_257.geometry}
                      material={materials.lpb_gradient}
                    />
                  </group>
                  <group position={[0, -0.5, 0]} scale={[1, 0.7, 1]}>
                    <mesh
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_259.geometry}
                      material={materials.lpb_gradient}
                    />
                  </group>
                  <group
                    position={[0, 1, 0]}
                    rotation={[-Math.PI / 4, 0, 0.3]}
                    scale={[0.1, 0.2, 0.1]}
                  >
                    <mesh
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_261.geometry}
                      material={materials.lpb_gradient}
                    />
                  </group>
                  <group
                    position={[0, 1, 0]}
                    rotation={[-2.4, 0, -2.8]}
                    scale={[0.1, 0.2, 0.1]}
                  >
                    <mesh
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_263.geometry}
                      material={materials.lpb_gradient}
                    />
                  </group>
                  <group
                    position={[0, 1, 0]}
                    rotation={[-Math.PI / 2, Math.PI / 4, 1.9]}
                    scale={[0.1, 0.2, 0.1]}
                  >
                    <mesh
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_265.geometry}
                      material={materials.lpb_gradient}
                    />
                  </group>
                  <group
                    position={[0, 1, 0]}
                    rotation={[-Math.PI / 2, -Math.PI / 4, -1.2]}
                    scale={[0.1, 0.2, 0.1]}
                  >
                    <mesh
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_267.geometry}
                      material={materials.lpb_gradient}
                    />
                  </group>
                </group>
                <group position={[-4.1, 0.5, -5]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_269.geometry}
                    material={materials.lpb_gradient}
                  />
                  <group position={[0, 1, 0]}>
                    <mesh
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_271.geometry}
                      material={materials.lpb_gradient}
                    />
                  </group>
                  <group position={[0, -0.5, 0]} scale={[1, 0.7, 1]}>
                    <mesh
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_273.geometry}
                      material={materials.lpb_gradient}
                    />
                  </group>
                  <group
                    position={[0, 1, 0]}
                    rotation={[-Math.PI / 4, 0, 0.3]}
                    scale={[0.1, 0.2, 0.1]}
                  >
                    <mesh
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_275.geometry}
                      material={materials.lpb_gradient}
                    />
                  </group>
                  <group
                    position={[0, 1, 0]}
                    rotation={[-2.4, 0, -2.8]}
                    scale={[0.1, 0.2, 0.1]}
                  >
                    <mesh
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_277.geometry}
                      material={materials.lpb_gradient}
                    />
                  </group>
                  <group
                    position={[0, 1, 0]}
                    rotation={[-Math.PI / 2, Math.PI / 4, 1.9]}
                    scale={[0.1, 0.2, 0.1]}
                  >
                    <mesh
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_279.geometry}
                      material={materials.lpb_gradient}
                    />
                  </group>
                  <group
                    position={[0, 1, 0]}
                    rotation={[-Math.PI / 2, -Math.PI / 4, -1.2]}
                    scale={[0.1, 0.2, 0.1]}
                  >
                    <mesh
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_281.geometry}
                      material={materials.lpb_gradient}
                    />
                  </group>
                </group>
                <group position={[4, 0.5, -1.1]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_283.geometry}
                    material={materials.lpb_gradient}
                  />
                  <group position={[0, 1, 0]}>
                    <mesh
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_285.geometry}
                      material={materials.lpb_gradient}
                    />
                  </group>
                  <group position={[0, -0.5, 0]} scale={[1, 0.7, 1]}>
                    <mesh
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_287.geometry}
                      material={materials.lpb_gradient}
                    />
                  </group>
                  <group
                    position={[0, 1, -0.9]}
                    rotation={[-Math.PI / 4, 0, 0.3]}
                    scale={[0.1, 0.2, 0.1]}
                  >
                    <mesh
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_289.geometry}
                      material={materials.lpb_gradient}
                    />
                  </group>
                  <group
                    position={[0, 1, 0]}
                    rotation={[-2.4, 0, -2.8]}
                    scale={[0.1, 0.2, 0.1]}
                  >
                    <mesh
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_291.geometry}
                      material={materials.lpb_gradient}
                    />
                  </group>
                  <group
                    position={[0, 1, 0]}
                    rotation={[-Math.PI / 2, Math.PI / 4, 1.9]}
                    scale={[0.1, 0.2, 0.1]}
                  >
                    <mesh
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_293.geometry}
                      material={materials.lpb_gradient}
                    />
                  </group>
                  <group
                    position={[1, 1, 0]}
                    rotation={[-Math.PI / 2, -Math.PI / 4, -1.2]}
                    scale={[0.1, 0.2, 0.1]}
                  >
                    <mesh
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_295.geometry}
                      material={materials.lpb_gradient}
                    />
                  </group>
                </group>
                <group position={[7.9, 0.5, 3]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_297.geometry}
                    material={materials.lpb_gradient}
                  />
                  <group position={[0, 1, 0]}>
                    <mesh
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_299.geometry}
                      material={materials.lpb_gradient}
                    />
                  </group>
                  <group position={[0, -0.5, 0]} scale={[1, 0.7, 1]}>
                    <mesh
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_301.geometry}
                      material={materials.lpb_gradient}
                    />
                  </group>
                  <group
                    position={[0, 1, 0]}
                    rotation={[-Math.PI / 4, 0, 0.3]}
                    scale={[0.1, 0.2, 0.1]}
                  >
                    <mesh
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_303.geometry}
                      material={materials.lpb_gradient}
                    />
                  </group>
                  <group
                    position={[0, 1, 0]}
                    rotation={[-2.4, 0, -2.8]}
                    scale={[0.1, 0.2, 0.1]}
                  >
                    <mesh
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_305.geometry}
                      material={materials.lpb_gradient}
                    />
                  </group>
                  <group
                    position={[0, 1, 0]}
                    rotation={[-Math.PI / 2, Math.PI / 4, 1.9]}
                    scale={[0.1, 0.2, 0.1]}
                  >
                    <mesh
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_307.geometry}
                      material={materials.lpb_gradient}
                    />
                  </group>
                  <group
                    position={[0, 1, 0]}
                    rotation={[-Math.PI / 2, -Math.PI / 4, -1.2]}
                    scale={[0.1, 0.2, 0.1]}
                  >
                    <mesh
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_309.geometry}
                      material={materials.lpb_gradient}
                    />
                  </group>
                </group>
                <group position={[9.1, 1.5, -1.6]} scale={0.9}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_311.geometry}
                    material={materials.lpb_gradient}
                  />
                </group>
                <group
                  position={[8.4, 1.5, -2.5]}
                  rotation={[0, 0.6, 0]}
                  scale={1.3}
                >
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_313.geometry}
                    material={materials.lpb_gradient}
                  />
                </group>
                <group
                  position={[10.4, 1.5, -2.5]}
                  rotation={[0, 0.6, 0]}
                  scale={1.1}
                >
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_315.geometry}
                    material={materials.lpb_gradient}
                  />
                </group>
                <group
                  position={[-4.4, 1.5, -5.3]}
                  rotation={[0, 0.6, 0]}
                  scale={1.5}
                >
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_317.geometry}
                    material={materials.lpb_gradient}
                  />
                </group>
                <group
                  position={[-3.4, 1.5, -5.1]}
                  rotation={[0, 1.5, 0]}
                  scale={0.9}
                >
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_319.geometry}
                    material={materials.lpb_gradient}
                  />
                </group>
                <group position={[8.2, 1.5, 2.3]} scale={0.9}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_321.geometry}
                    material={materials.lpb_gradient}
                  />
                </group>
                <group position={[8.6, 1.5, 3]} scale={0.7}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_323.geometry}
                    material={materials.lpb_gradient}
                  />
                </group>
                <group position={[-9.7, 1.5, 4.6]} scale={1.1}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_325.geometry}
                    material={materials.lpb_gradient}
                  />
                </group>
                <group
                  position={[-7.9, 1.5, -2.6]}
                  rotation={[0, 0.3, 0]}
                  scale={1.2}
                >
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_327.geometry}
                    material={materials.lpb_gradient}
                  />
                </group>
                <group
                  position={[-8.3, 1.5, -0.5]}
                  rotation={[0, 0.3, 0]}
                  scale={0.5}
                >
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_329.geometry}
                    material={materials.lpb_gradient}
                  />
                </group>
                <group
                  position={[-9.7, 1.5, -0.3]}
                  rotation={[0, 0.3, 0]}
                  scale={1.1}
                >
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_331.geometry}
                    material={materials.lpb_gradient}
                  />
                </group>
                <group position={[0.1, 1.5, -0.5]} rotation={[0, 0.3, 0]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_333.geometry}
                    material={materials.lpb_gradient}
                  />
                </group>
                <group
                  position={[3.5, 1.5, -2.6]}
                  rotation={[0, 0.3, 0]}
                  scale={1.1}
                >
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_335.geometry}
                    material={materials.lpb_gradient}
                  />
                </group>
                <group
                  position={[5.5, 1.5, -0.9]}
                  rotation={[0, 0.3, 0]}
                  scale={0.8}
                >
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_337.geometry}
                    material={materials.lpb_gradient}
                  />
                </group>
                <group
                  position={[7.5, -0.3, 4.5]}
                  rotation={[-Math.PI, 0, -Math.PI]}
                  scale={[0.1, 1.7, 0.1]}
                >
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_339.geometry}
                    material={materials.lpb_gradient}
                  />
                </group>
                <group
                  position={[2.5, -0.3, 6.5]}
                  rotation={[0, -Math.PI / 2, 0]}
                  scale={[0.1, 1.7, 0.1]}
                >
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_341.geometry}
                    material={materials.lpb_gradient}
                  />
                </group>
                <group
                  position={[6.5, -0.3, 0.4]}
                  rotation={[0, -Math.PI / 2, 0]}
                  scale={[0.1, 1.7, 0.1]}
                >
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_343.geometry}
                    material={materials.lpb_gradient}
                  />
                </group>
                <group position={[7.5, -0.3, 1.5]} scale={[0.1, 1.7, 0.1]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_345.geometry}
                    material={materials.lpb_gradient}
                  />
                </group>
                <group
                  position={[-0.5, -0.3, 1.4]}
                  rotation={[0, -Math.PI / 2, 0]}
                  scale={[0.1, 1.7, 0.1]}
                >
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_347.geometry}
                    material={materials.lpb_gradient}
                  />
                </group>
                <group
                  position={[-6.6, -0.3, 4.5]}
                  rotation={[0, -Math.PI / 2, 0]}
                  scale={[0.1, 1.7, 0.1]}
                >
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_349.geometry}
                    material={materials.lpb_gradient}
                  />
                </group>
                <group
                  position={[-6.5, -0.3, -2.5]}
                  rotation={[0, -Math.PI / 2, 0]}
                  scale={[0.1, 1.7, 0.1]}
                >
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_351.geometry}
                    material={materials.lpb_gradient}
                  />
                </group>
                <group position={[-4.5, -0.3, -3.5]} scale={[0.1, 1.7, 0.1]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_353.geometry}
                    material={materials.lpb_gradient}
                  />
                </group>
                <group
                  position={[-2.5, -0.3, -4.5]}
                  rotation={[0, -Math.PI / 2, 0]}
                  scale={[0.1, 1.7, 0.1]}
                >
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_355.geometry}
                    material={materials.lpb_gradient}
                  />
                </group>
                <group position={[-0.5, -0.3, -3.5]} scale={[0.1, 1.7, 0.1]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_357.geometry}
                    material={materials.lpb_gradient}
                  />
                </group>
                <group position={[-0.5, -0.3, -5.5]} scale={[0.1, 1.7, 0.1]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_359.geometry}
                    material={materials.lpb_gradient}
                  />
                </group>
                <group
                  position={[0.5, -0.3, -6.5]}
                  rotation={[0, -Math.PI / 2, 0]}
                  scale={[0.1, 1.7, 0.1]}
                >
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_361.geometry}
                    material={materials.lpb_gradient}
                  />
                </group>
                <group position={[2.5, -0.3, 5.5]} scale={[0.1, 1.7, 0.1]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_363.geometry}
                    material={materials.lpb_gradient}
                  />
                </group>
                <group position={[-0.5, -0.3, 0.4]} scale={[0.1, 1.7, 0.1]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_365.geometry}
                    material={materials.lpb_gradient}
                  />
                </group>
                <group position={[3.5, -0.3, 0.4]} scale={[0.1, 1.7, 0.1]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_367.geometry}
                    material={materials.lpb_gradient}
                  />
                </group>
                <group position={[5.5, -0.3, 0.4]} scale={[0.1, 1.7, 0.1]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_369.geometry}
                    material={materials.lpb_gradient}
                  />
                </group>
                <group position={[8.5, -0.3, 0.4]} scale={[0.1, 1.7, 0.1]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_371.geometry}
                    material={materials.lpb_gradient}
                  />
                </group>
                <group position={[-4.6, -0.3, 3.4]} scale={[0.1, 1.7, 0.1]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_373.geometry}
                    material={materials.lpb_gradient}
                  />
                </group>
                <group
                  position={[-0.5, -0.6, 2.4]}
                  rotation={[0, -Math.PI / 2, 0]}
                  scale={[0.1, 1.9, 0.1]}
                >
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_375.geometry}
                    material={materials.lpb_gradient}
                  />
                </group>
                <group
                  position={[-0.5, -1.3, 3.5]}
                  rotation={[-Math.PI, 0, -Math.PI]}
                  scale={[0.1, 1.7, 0.1]}
                >
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_377.geometry}
                    material={materials.lpb_gradient}
                  />
                </group>
                <group
                  position={[-4.6, -0.6, 5.5]}
                  rotation={[0, -Math.PI / 2, 0]}
                  scale={[0.1, 1.9, 0.1]}
                >
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_379.geometry}
                    material={materials.lpb_gradient}
                  />
                </group>
                <group
                  position={[-4.6, -1.3, 6.5]}
                  rotation={[0, Math.PI / 2, 0]}
                  scale={[0.1, 1.7, 0.1]}
                >
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_381.geometry}
                    material={materials.lpb_gradient}
                  />
                </group>
                <group position={[3.5, -0.6, -5.6]} scale={[0.1, 1.9, 0.1]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_383.geometry}
                    material={materials.lpb_gradient}
                  />
                </group>
                <group
                  position={[4.5, -1.3, -5.6]}
                  rotation={[0, -Math.PI / 2, 0]}
                  scale={[0.1, 1.7, 0.1]}
                >
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_385.geometry}
                    material={materials.lpb_gradient}
                  />
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </RigidBody>
  );
};

useGLTF.preload("/models-3d/fishing_town.glb");

export default Beachtown;
