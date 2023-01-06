import styles from "../style"
import { avatar } from '../assets'

const Hero = () =>  (
  <section id='home' className={`flex md:flex-row flex-col border-t border-[#262626] h-[80vh] ${styles.paddingY}`}>
    <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
      <div className="flex flex-col justify-between items-center w-full">
        
        <h1 className="flex-1 font-poppins mb-4 font-semibold text-center ss:text-[4em] text-[2em] text-white ss:leading-[80px] leading-[50px]">
          Hello, I'm <span className=" text-[#1042A3]">Steven.</span>
        </h1>
        
        <p className="font-poppins font-normal mb-20 ss:leading-[30px] ss:text-[3em] text-[1.5em] leading-[30px] text-white text-center">
          I'm a Front-End Engineer.<br/>
        </p>

        <button className="bg-[#1042A3] font-poppins cursor-pointer text-[16px] font-semibold py-4 px-10 rounded-full inline-flex items-center text-white">View My Work</button>
      </div>
      
    </div>
    
    
    </section>
  )


export default Hero