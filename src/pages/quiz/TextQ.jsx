import { Text3D } from "@react-three/drei";

const Textq = () => {

  return (
    <>
      <Text3D
        position={[-15, 12, -5]}
        font={"/fonts/Blue Ocean_Regular.json"}
        bevelEnabled
        bevelSize={0.02}
        bevelThickness={0.1}
        height={0.5}
        lineHeight={0.5}
        letterSpacing={0.05}
        size={0.9}
      >
        Recojamos la basura del agua!
        <meshStandardMaterial color="#1681e6" />
      </Text3D>

    </>
  );
};

export default Textq;