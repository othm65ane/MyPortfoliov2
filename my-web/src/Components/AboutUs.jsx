import { motion } from 'framer-motion'
import ocharfao1 from '../assets/ocharfao1.jpg'
import ocharfao2 from '../assets/ocharfao2.jpeg'
import ocharfao3 from '../assets/ocharfao3.jpeg'

import React from "react";


function AboutUs() {
    return (
    <div className='mt-[160px]'>
      <div className=' flex flex-col lg:flex-row justify-center items-center lg:px-32 px-5 '>
        <img src={ocharfao1}
        width={350}
        className=
        'rounded-[20px]  '
        />
        
        <p className='my-5 max-w-xl py-10 lg:ml-[30px]'><span className='font-semibold text-3xl'>About Me</span><br/>
        I am a dedicated and versatile  with a passion <motion.span
        className='text-white bg-black'
        initial = {{opacity : 0}}
        whileInView={{opacity : 1}}
        transition={{duration : 0.9}}
        viewport={{once : true}}
        >Front-End Develper </motion.span>for creating efficient and user-friendly web applications. With 2 years of professional experience, I have worked with a variety of technologies, <motion.span
        className='text-white bg-black'
        initial = {{opacity : 0}}
        whileInView={{opacity : 1}}
        transition={{duration : 0.9}}
         
        >including React</motion.span> ,. My journey in <motion.span 
        initial = {{opacity : 0}}
        whileInView={{opacity : 1}}
        transition={{duration : 0.9}}
        className='border-solid border-b-2 border-black'>web devlopment</motion.span> began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.</p>
      </div>
      <div className='flex flex-col lg:flex-row justify-center items-center lg:px-32 px-5 lg:mt-[300px]'>
        <p className='my-5 max-w-xl py-10'><span className='font-semibold text-3xl'>Education</span><br/>
          This Years is my last in high to claime the bachlor Certificat , <motion.span
        className='text-white bg-black'
        initial = {{opacity : 0}}
        whileInView={{opacity : 1}}
        transition={{duration : 0.9}}
      
        >Physics Science and Technologies</motion.span> , Exploring advanced concepts in physics and scientific principles through hands-on experiments and theoretical studies, culminating in a strong foundation for future scientific endeavors , Pooler in 1337 Coding School</p>
        <img src={ocharfao2}
        width={450}
        className='rounded-[20px] lg:ml-[30px]'
        />
      </div>
      <div className='flex flex-col lg:flex-row justify-center items-center lg:px-32 px-5 my-[250px]'>
      <img src={ocharfao3}
        width={500}
        className='rounded-[20px]'
        />
        <p className='my-5 max-w-xl py-10 lg:ml-[30px]'><span className='font-semibold text-3xl'>Experience</span><br/>
        Developed and optimized <motion.span 
        className='border-solid border-b-2 border-[#e99b00]'
        initial = {{opacity : 0}}
        whileInView={{opacity : 1}}
        transition={{duration : 0.9}}
        >dynamic web applications </motion.span> with a focus on user experience, scalability, and performance, utilizing a range of modern technologies and frameworks. :  <br />
        <motion.span
        className='text-white bg-black'
        initial = {{opacity : 0}}
        whileInView={{opacity : 1}}
        transition={{duration : 0.9}}
        
        >Freelancing </motion.span> <br />
      <motion.span
        className='text-white bg-black'
        initial = {{opacity : 0}}
        whileInView={{opacity : 1}}
        transition={{duration : 0.9}}
        
        >Front-End Developer and UI deseigner in Moroccan Company <a href="https://web.facebook.com/profile.php?id=100035393063355"
      className='border-solid border-b-2 border-[#e99b00]' > AutomatorDev.Soft    </a></motion.span> <br />
        Demonstrated expertise in developing and optimizing web applications, with a strong focus on user experience, scalability, and performance using modern technologies and frameworks
      </p>

        
      </div>
    </div>
    )
  }
  
  export default AboutUs