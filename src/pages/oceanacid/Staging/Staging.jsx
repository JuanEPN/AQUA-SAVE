import { Environment, Sparkles } from "@react-three/drei"

const Staging  = () =>{
     return(
          <>
          <Environment 
          ground ={{
               height: 20,
               radius: 60,
               scale: 100,
          }}
          //files={"/hdris/ocean/ocean_2k.hdr"}
          files={[
               "px.png",
               "nx.png",
               "py.png",
               "ny.png",
               "pz.png",
               "nz.png",          
          ]}
          path="/cubemap/ocean/"
          background={true}/>

     <Sparkles
        position={[-1, 0, -10]} // Sets the position of the sparkles
        color="blue" // Sets the color of the sparkles
        count={500} // Number of sparkles
        size={10} // Size of each sparkle
        speed={1.5} // Speed of the sparkles' movement
        scale={25} // Scale of the sparkles' spread in the scene
      />
     </>
     )
};

export default Staging;

