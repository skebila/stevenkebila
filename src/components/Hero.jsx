import styles from "../style"
import { motion } from "framer-motion"
import { headerVariant, subHeaderVariant, headerCTAVariant } from "../animations"

const Hero = () =>  (
  <section id='home' className={`flex md:flex-row flex-col h-[100vh] ${styles.paddingY}`}>
    <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
      <div className="flex flex-col justify-between items-center w-full">
        <motion.h1
          variants={headerVariant}
          initial='initial'
          animate='animate'
          className="flex-1 font-poppins mb-2 font-semibold text-center ss:text-[4em] text-[2em] text-white ss:leading-[80px] leading-[20px]">
          Hello, I'm <span className=" text-[#0081CF]">Steven.</span>
        </motion.h1>

        <motion.p
          variants={subHeaderVariant}
          initial='initial'
          animate='animate'
          className="font-poppins font-normal mb-20 ss:leading-[30px] ss:text-[3em] text-[1.5em] leading-[30px] text-white text-center">
          I'm a Software Engineer.<br />
        </motion.p>

        <motion.a
          href={'#projects'}
          variants={headerCTAVariant}
          initial='initial'
          animate='animate'
          className={`${styles.filledButton}`}>
          View My Work
        </motion.a>
      </div>
      
    </div>
    
    
    </section>
  )


export default Hero