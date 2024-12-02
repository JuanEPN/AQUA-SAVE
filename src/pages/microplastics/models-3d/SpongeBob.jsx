import { useGLTF} from "@react-three/drei";
import { useRef } from "react";


const SpongeBob = (props) => {
  const bobRef = useRef();
  const { nodes, materials} = useGLTF("models-3d/microplastic/sponge-bob.glb");

  return(
    <group {...props} ref={bobRef} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group name="SpongeBob_No_Wayobjcleanermaterialmergergles">
            <mesh
              name="Object_2"
              geometry={nodes.Object_2.geometry}
              material={materials.SpongeBob_Mat}
            />
            <mesh
              name="Object_3"
              geometry={nodes.Object_3.geometry}
              material={materials.SpongeBob_Expressions_Mat}
            />
          </group>
        </group>
      </group>
    </group>
  );
};

export default SpongeBob;
useGLTF.preload("models-3d/microplastic/sponge-bob.glb");