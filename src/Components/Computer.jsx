import React from 'react'
import { Suspense , useEffect,useState } from 'react'
import {Canvas} from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Preload } from '@react-three/drei';
import { useGLTF } from '@react-three/drei';
import CanvasLoader from "./Loader";

const Computer = ({IsMobile}) => {
    const computer = useGLTF('../../desktop_pc/scene.gltf');
    const position = IsMobile ? [0, -3.3, -2.1] : [0, -3.2, -3];
  return (
    <mesh> 
         <hemisphereLight intensity={1} groundColor={"black"}/>
         <pointLight intensity={5} />
         <spotLight intensity={5}  position={[-20, 50, 10]} castShadow  angle={0.3} />
         
         <primitive object={computer.scene} 
         scale={IsMobile ? 0.7 : 0.8}
         position={position}
         rotation={[-0.01, -0.2, -0.1]}
         />

    </mesh>
  )
}
const ComputerCanvas = ()=>{

   const [IsMobile , setIsMobile] = useState(false);

   useEffect(()=>{
      // Add a listener for changes to the screen size
      const mediaQuery=window.matchMedia('(max-width : 500px)');
      setIsMobile(mediaQuery.matches);

      const handleMediaQueryChange = (event)=>{
        setIsMobile(event.matches);
      }
      mediaQuery.addEventListener('change',handleMediaQueryChange);
      // Remove the listener when the component is unmounted
      return()=>{
        mediaQuery.removeEventListener('change',handleMediaQueryChange);
      }
   },[])

  return(
    <Canvas frameloop='demand'
    shadows
    camera={{position : [20 , 3 , 5],fov : 25}}
    gl={{preserveDrawingBuffer:true}}
     >
      <Suspense  fallback ={<CanvasLoader />} >
      <OrbitControls 
       enableZoom={false}
       maxPolarAngle={Math.PI/2}
       minPolarAngle={Math.PI/2}
       />
       <Computer IsMobile={IsMobile}/>
        </Suspense>  
        <Preload all/>
    </Canvas>
  );
}

export default Computer
export  {ComputerCanvas};