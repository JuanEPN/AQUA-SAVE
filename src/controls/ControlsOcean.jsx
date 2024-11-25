import React, { useEffect } from 'react';
import { OrbitControls } from '@react-three/drei';
import { useThree } from '@react-three/fiber';



const ControlsOcean = () => {
  const { camera } = useThree(); 

  useEffect(()=>{
    camera.position.set(0, 10,30)
    camera.lookAt(30, 30, 30)
  }, [camera]); 

  return (
    <OrbitControls
      minAzimuthAngle={-Math.PI / 1} 
      maxAzimuthAngle={Math.PI / 1}  

     
      minPolarAngle={1}        
      maxPolarAngle={Math.PI / 3} 

      enableZoom={true} 
      minDistance={35}  
      maxDistance={50} 
    />
  );
};

export default ControlsOcean;