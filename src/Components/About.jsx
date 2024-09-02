import React from 'react'
import { Tilt } from 'react-tilt' //for tilting the cards
import {motion} from 'framer-motion'
import  {styles } from '../styles'

const About = () => {
  return (
    <>
       <motion.div variants={}>
        <p className={styles.sectionSubText}> Introduction</p>
        <h2 className={styles.heroHeadText}>Overview</h2>
       </motion.div>

    </>
   
  )
}

export default About