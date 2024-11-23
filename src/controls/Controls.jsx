import React, { useEffect } from 'react';
import { OrbitControls } from '@react-three/drei';
import { useThree } from '@react-three/fiber';



const Controls = () => {
  const { camera } = useThree(); 

  useEffect(()=>{
    camera.position.set(0, 1,30)
    camera.lookAt(10, 10, 10)
  }, [camera]); 

  return (
    <OrbitControls
      minAzimuthAngle={-Math.PI / 5} 
      maxAzimuthAngle={Math.PI / 5}  

     
      minPolarAngle={1}        
      maxPolarAngle={Math.PI / 2.5} 

      enableZoom={true} 
      minDistance={10}  
      maxDistance={15} 
    />
  );
};

export default Controls;
