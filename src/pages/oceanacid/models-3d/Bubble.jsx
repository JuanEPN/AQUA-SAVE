import { RigidBody } from "@react-three/rapier";

const Bubble = () => {
  return (
    <>
      <RigidBody>
        <mesh name="bubble1" position={[-12, 2, 11]} castShadow scale={1}>
          <sphereGeometry args={[1, 16, 32]} />
          <meshBasicMaterial color="#f8f9f9" />
        </mesh>

        <mesh name="bubble2" position={[-12, 5, 8]} castShadow>
          <sphereGeometry args={[1, 16, 32]} />
          <meshBasicMaterial color="#f8f9f9" />
        </mesh>

        <mesh name="bubble3" position={[-14, 8, 8]} castShadow>
          <sphereGeometry args={[1, 16, 32]} />
          <meshBasicMaterial color="#f8f9f9" />
        </mesh>

        <mesh name="bubble4" position={[-15, 11, 7]} castShadow>
          <sphereGeometry args={[1, 16, 32]} />
          <meshBasicMaterial color="#f8f9f9" />
        </mesh>
      </RigidBody>
    </>
  );
};

export default Bubble;
