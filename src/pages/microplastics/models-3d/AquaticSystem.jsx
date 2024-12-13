/*eslint-disable react/no-unknown-property */
import { useGLTF, useTexture } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";
import { useMemo, useRef } from "react";

const AquaticSystem = (props) => {
  const systemRef = useRef(null);
  const { nodes, materials } = useGLTF("models-3d/acuatic-system.glb");
  const PATH = useMemo(() => "materials/floor/plaster_grey_04_", []);
  const collisionPlaneSize = 1.6;

  const floorTexture = useTexture({
    map: PATH + "diff_1k.jpg",
    displacementMap: PATH + "disp_1k.png",
    normalMap: PATH + "nor_gl_1k.jpg",
    roughnessMap: PATH + "rough_1k.jpg",
    aoMap: PATH + "ao_1k.jpg",
  });
  console.log(floorTexture);

  return (
    <group {...props} dispose={null}>
      <group name="Scene">
        <mesh
          name="high_poly"
          geometry={nodes.high_poly.geometry}
          material={materials.Material_0}
          castShadow
          receiveShadow
          scale={1.57}
        />
        <RigidBody type="fixed" ref={systemRef}>
          <mesh
            name="System"
            rotation-x={-Math.PI / 2}
            position-y={-0.12}
            receiveShadow
          >
            <circleGeometry args={[5, 16]} />
            <meshStandardMaterial
              map={floorTexture.map}
              normalMap={floorTexture.normalMap}
              aoMap={floorTexture.aoMap}
              roughnessMap={floorTexture.roughnessMap}
            />
          </mesh>
        </RigidBody>
      </group>
    </group>
  );
};
export default AquaticSystem;
useGLTF.preload("models-3d/acuatic-system.glb");
