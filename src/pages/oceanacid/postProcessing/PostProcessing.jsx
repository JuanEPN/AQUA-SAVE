import { Bloom, BrightnessContrast, EffectComposer } from "@react-three/postprocessing"
import { KernelSize, Resolution } from 'postprocessing'

const PostProcessing = () => {
     return (
          <EffectComposer>
              <Bloom
                    intensity={2} // The bloom intensity.
                    kernelSize={KernelSize.LARGE} // blur kernel size
                    luminanceThreshold={0.9} // luminance threshold. Raise this value to mask out darker elements in the scene.
                    luminanceSmoothing={0.025} // smoothness of the luminance threshold. Range is [0, 1]
                    mipmapBlur={false} // Enables or disables mipmap blur.
                    resolutionX={Resolution.AUTO_SIZE} // The horizontal resolution.
                    resolutionY={Resolution.AUTO_SIZE} // The vertical resolution.
               />
               <BrightnessContrast
                    brightness={0} // brightness. min: -1, max: 1
                    contrast={0.2} // contrast: min -1, max: 1
               />
          </EffectComposer>
     );
};

export default PostProcessing;