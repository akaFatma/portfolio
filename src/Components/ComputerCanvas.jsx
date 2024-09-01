import React from 'react'
import { Suspense , useEffect,useState } from 'react'
import {Canvas} from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Preload } from '@react-three/drei';
import { useGLTF } from '@react-three/drei';
const ComputerCanvas = () => {
    const computer = useGLTF('../../desktop_pc/scene.gltf');
  return (
    <mesh> 
         <hemisphereLight intensity={0.15} groundColor={"black"}/>
         <pointLight intensity={1} />
         <primitive>
           object={computer.scene}
         </primitive>
    </mesh>
  )
}

export default ComputerCanvas