import React, { useRef, useEffect, useState } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { useThree } from "@react-three/fiber";

const Tapmodel = (props) => {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/models-3d/tapwater.glb");
  const { actions } = useAnimations(animations, group);
  const [isPlaying, setIsPlaying] = useState(true); // Estado para rastrear la animación

  const handlePointerOver = () => {
    document.body.style.cursor = "pointer";
  };

  const handlePointerOut = () => {
    document.body.style.cursor = "auto";
  };

  useEffect(() => {
    const action = actions?.["Take 001"]; // Nombre de la animación
    if (action) {
      action.play(); // Inicializa la animación
    }
    return () => {
      if (action) {
        action.stop(); // Limpia la animación al desmontar el componente
      }
    };
  }, [actions]);

  const handleClick = () => {
    const action = actions?.["Take 001"];
    if (action) {
      if (isPlaying) {
        action.pause(); // Pausa la animación
      } else {
        action.play(); // Reanuda la animación
      }
      setIsPlaying(!isPlaying); // Cambia el estado
    }
  };

  const { camera } = useThree();

  useEffect(() => {
    camera.position.set(0.8, 1, 1);
    camera.lookAt(0, 0, 0);
  }, [camera]);

  return (
    <group
      ref={group}
      {...props}
      dispose={null}
      onPointerOver={handlePointerOver}
      onPointerOut={handlePointerOut}
      onClick={handleClick} // Llama a la función para alternar animación
    >
      <group name="Sketchfab_Scene">
        <group
          name="Sketchfab_model"
          rotation={[-Math.PI / 2, 0, 0]}
          scale={0.02}
        >
          <group
            name="0c3334ba211a435c8ca3f7f86dfa527afbx"
            rotation={[Math.PI / 2, 0, 0]}
          >
            <group name="Object_2">
              <group name="RootNode">
                <group
                  name="bottom"
                  position={[0, -100.1, 0]}
                  rotation={[Math.PI / 2, Math.PI / 2, 0]}
                >
                  <group name="Object_5" />
                </group>
                <group
                  name="back"
                  position={[-7.3, 14.8, -100.1]}
                  rotation={[0, -Math.PI / 2, 0]}
                >
                  <group name="Object_7" />
                </group>
                <group name="left" position={[-100.1, 18.5, 6]}>
                  <group name="Object_9" />
                </group>
                <group name="pPipe3">
                  <mesh
                    name="pPipe3_Tap_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.pPipe3_Tap_0.geometry}
                    material={materials.material}
                  />
                </group>
                <group
                  name="pPlane1"
                  position={[0, 14.6, -0.2]}
                  rotation={[0, 0, Math.PI]}
                  scale={1.2}
                >
                  <mesh
                    name="pPlane1_water_cover_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.pPlane1_water_cover_0.geometry}
                    material={materials.water_cover}
                  />
                </group>
                <group
                  name="pSphere1"
                  position={[0, 0.8, 0.1]}
                  scale={[0.6, 0, 0.6]}
                >
                  <mesh
                    name="pSphere1_water_in_tap_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.pSphere1_water_in_tap_0.geometry}
                    material={materials.water_in_tap}
                  />
                </group>
                <group
                  name="pPipe4"
                  position={[0, 1.5, 0]}
                  scale={[8.2, 0.1, 8.2]}
                >
                  <mesh
                    name="pPipe4_water_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.pPipe4_water_0.geometry}
                    material={materials.water}
                  />
                </group>
                <group name="pCylinder1" position={[0, -16, 0]} scale={17.5}>
                  <mesh
                    name="pCylinder1_water_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.pCylinder1_water_0.geometry}
                    material={materials.water}
                  />
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
};

useGLTF.preload("/models-3d/tapwater.glb");
export default Tapmodel;
