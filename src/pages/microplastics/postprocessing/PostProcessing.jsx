import { EffectComposer, Vignette } from "@react-three/postprocessing";
import { BlendFunction } from "postprocessing";


const PostProcessing = () => {
  return <EffectComposer>
    <Vignette
        offset={0.3}
        darkness={1.5}
        eskil={false}
        blendFunction={BlendFunction.NORMAL}
    />
    </EffectComposer>;

  
};

export default PostProcessing;
