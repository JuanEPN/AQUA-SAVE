import { useVideoTexture } from "@react-three/drei"
import { useCallback, useState } from "react";

const MicroVideo = (props) => {

    const [pause, setPause] = useState(false);

    const texture = useVideoTexture("/videos/video_microplastic.mp4",{
        muted: true,
        loop: true,
        start: true,

    });

    const handleVideo = useCallback((e) =>{
        e.stopPropagation();
        pause ? texture.image.play() : texture.image.pause();
        setPause(!pause);
    },[pause, texture, setPause]);
    return(
        <mesh {...props} onClick={handleVideo}>
            <planeGeometry args={[2,1]}/>
            <meshBasicMaterial map={texture} toneMapped={false}/>
        </mesh>
    );
};

export default MicroVideo;