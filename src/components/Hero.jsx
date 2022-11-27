import styles from "../style"

const Hero = () =>  (
  <section id='home' className={`flex md:flex-row flex-col border-t border-[#262626] ${styles.paddingY}`}>
    <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
      <div className="flex flex-col justify-between items-start w-full space-y-[40px]">
        <h1 className="flex-1 font-poppins font-semibold ss:text-[58px] text-[30px] text-white ss:leading-[80px] leading-[50px]">
          Hi, I'm <span className=" border-b-4 border-[#1042A3]">Steven</span> {/*<span className=" border-b-2 border-[#1042A3]">I'm a Front-End Engineer</span>*/}
        </h1>
        <p className="font-poppins font-normal ss:text-[18px] ss:leading-[30px] text-[16px] leading-[30px] text-white">
          {/*I'm a <span className=" border-b-2 border-[#1042A3]">Front-End Developer.</span> <br/>*/} I have serious passion for creating intuitive, <br/>dynamic user experiences.
        </p>
        {/*<p className="font-poppins font-normal ss:text-[18px] ss:leading-[30px] text-[16px] leading-[30px] text-white">
          Developing <span className="text-[#1042A3]">highy-interactive</span> & <span className="text-[#1042A3]">responsive</span> user interfaces <br /> or <span className="text-[#1042A3]">scalable</span> & <span className="text-[#1042A3]">reliable</span> back-end solutions.
        </p>*/}

        <button className="bg-[#1042A3] font-poppins cursor-pointer text-[16px] font-semibold py-4 px-10 rounded-full inline-flex items-center text-white">View My Work</button>
      </div>
      
    </div>
    
    

    </section>
  )


export default Hero