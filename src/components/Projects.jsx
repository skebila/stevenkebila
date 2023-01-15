import { projects } from "../constants"
import styles, { layout } from "../style"
import { arrowRight, link } from "../assets"

const ProjectCard = ({ title, category, description, url, stack, index, bg, github }) => (
  <div className={`flex flex-col items-start md:p-6 sm:p-2 ss:p-10 p-6 rounded-[20px] ${index !== projects.length - 1 ? "mb-6" : "md-0"} project-card`}>
    <div 
      className={`border-0 border-[#262626] rounded-[20px] self-stretch w-auto sm:max-w-[480px] mb-5 `}>
      <img src={bg} />
    </div>
    
    <div className="flex-1 flex flex-col ml-3 px-2">
      <h4 className="font-poppins font-semibold text-white text-[1em] leading-[23px] mb-1 ">{title}</h4>

      <div className="flex flex-row items-top font-poppins pb-[10px] pt-[4px]">
        <ul className="flex flex-row flex-wrap">
        {stack.map((stackName, i) => (
          <li
            key={i}
            className='text-[#0080cf] text-[12px] font-semibold'
          >
            <p className="flex flex-row">{stackName} <span className="text-white pr-[4px] pl-[2px] font-bold">{i < stack.length - 1 ? ',' : null}</span></p>
        </li>
        ))}
        
      </ul>
      </div>
      
      <p className="font-poppins text-[#999999]  text-[0.75em] leading-[22px] mb-1">{description}</p>
      <a href={`${url}`} target='_blank' className={`${url!=null ? 'underline flex self-start items-center my-4 font-poppins font-semibold text-[0.85em] text-[#0080cf] outline-none' : 'hidden'} `}>
        Visit website<img src={link} className='w-[10px] h-[10px] ml-[4px]'/>
      </a>
      <a href={`${github}`} target='_blank' className={`${github!=null ? 'underline flex self-start items-center my-4 font-poppins font-semibold text-[0.85em] text-[#0080cf] outline-none' : 'hidden'} `}>
        Github repo<img src={link} className='w-[10px] h-[10px] ml-[4px]'/>
      </a>
    </div>
  </div>
)

const Projects = () => {
  return (
    <section id='projects' className={`mb-[60px] ${layout.section}`}>
      <h2 className={`${styles.heading2} self-center`}>My Projects<span className='text-[#0081CF]'>.</span></h2>
      <div className={`${layout.sectionImg} items-stretch`}>
        {projects.map((projects, index) => (
          <ProjectCard key={projects.id} {...projects} index={index} />
        ))}
      </div>

    </section>  
  )
}

export default Projects