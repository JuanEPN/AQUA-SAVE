import { useEffect } from 'react';
import { useThree } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

const ControlsQuiz = () => {
  const { camera } = useThree(); 

  useEffect(()=>{
    camera.position.set(10, 10, 20)
    camera.lookAt(10, 10, 10)
  }, [camera]); 

  return(
    <OrbitControls/>
  )
};

export default ControlsQuiz;
