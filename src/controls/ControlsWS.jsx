import React, { useEffect } from 'react';
import { OrbitControls } from '@react-three/drei';
import { useThree } from '@react-three/fiber';

const ControlsWS = () => {
  const { camera } = useThree(); 

  useEffect(()=>{
    camera.position.set(-1,2,20)
    camera.lookAt(500, 500, 500)
  }, [camera]); 

  return (
    <OrbitControls
  
      minAzimuthAngle={-Math.PI / 5} 
      maxAzimuthAngle={Math.PI / 5}  

     
      minPolarAngle={0}        
      maxPolarAngle={Math.PI / 2.5} 

      enableZoom={true} 
      minDistance={6.5}  
      maxDistance={0.5}
      
      
    />
  );
};

export default ControlsWS;