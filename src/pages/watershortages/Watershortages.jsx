import { Canvas } from '@react-three/fiber';
import React from 'react';
import Staging from '../staging/Staging';
import WaterShortText from './WaterShortText';
import AmbientModel from './AmbientModel';
import Video from './video';
import Video2 from './video2';
import ControlsWS from '../../controls/ControlsWS';
import LightsWaterShort from '../../lights/LightsWaterShort';
import PlasticBottleWS from './PlasticBottleWS';
import { Physics } from '@react-three/rapier';
import PostProcessing from './PosteProcessingWaterS/postprocessingWS';






const Watershortages = () => {
  const cameraSettings = {
    position: [-18, 5, 12],
    fov: 60,
  };
  return (

    <Canvas shadows={true} camera={cameraSettings}>
      <ControlsWS />
      <WaterShortText />
      <Staging />
      <LightsWaterShort />
      <Physics>
        <AmbientModel />
        <PlasticBottleWS/>
      </Physics>
      <PostProcessing/>
      <Video name="screen" position-y={1.8} position-x={1.4} scale={0.9} />
      <Video2 name="screen2" position-y={1.8} position-x={-1.7} scale={0.9} />
    </Canvas>

  );
}

export default Watershortages;