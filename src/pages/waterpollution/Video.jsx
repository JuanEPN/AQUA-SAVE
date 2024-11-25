import { useVideoTexture } from "@react-three/drei";
import { useCallback, useState } from "react";
import { DoubleSide } from "three";

const Video = (props) =>{
    const [pause, setPause] = useState(false); 
    const texture = useVideoTexture("/videos/video_potabili.mp4", {
        muted: false, 
        loop: true, 
        start: false
    });

    const handleVideo = useCallback((e)=>{
        e.stopPropagation(); 
        pause ? texture.image.play() : texture.image.pause(); 
        setPause(!pause);
    }, [pause, texture, setPause])

    return(
        <mesh {...props} onClick={handleVideo}>
            <planeGeometry args={[2, 1]}/>
            <meshBasicMaterial map={texture} toneMapped={false} side={DoubleSide}/>
        </mesh>
    );
}; 

export default Video; 

