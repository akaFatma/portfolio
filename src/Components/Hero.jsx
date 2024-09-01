import React from 'react';
import {motion} from 'framer-motion';
import {styles} from '../styles';
import {ComputerCanvas} from './ComputerCanvas'



const Hero = () => {
  return (
    <section className='relative w-full h-screen mx-auto'>


 <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
    <div className="flex flex-col justify-center items-center mt-5 ">
        <div className="w-5 h-5 rounded-full bg-[#915eff] ">   
        </div>
        <div className='w-1 sm:h-80 h-45 violet-gradient '></div>
     </div>
     <div>
        <h1 className={`${styles.heroHeadText} text-white`}>Hi , I am <span className='text-[#915eff]'>Fatma</span></h1>
         <p className= {`${styles.heroSubText} mt-2 text-white-100`}>minouchet el minouchat ff <br /> merci 3likom </p>
     </div>
 </div>
    <ComputerCanvas/>
    </section>
  )
}

export default Hero