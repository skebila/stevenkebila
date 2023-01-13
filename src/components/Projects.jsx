import { projects } from "../constants"
import styles, { layout } from "../style"
import { arrowRight } from "../assets"

const ProjectCard = ({ title, category, description, url, stack, index, bg }) => (
  <div className={`flex flex-col items-start md:p-6 sm:p-2 ss:p-10 p-6 rounded-[20px] ${index !== projects.length - 1 ? "mb-6" : "md-0"} project-card`}>
    <div 
      className={`border-0 border-[#262626] rounded-[20px] self-stretch sm:max-w-[480px] mb-5 `}>
      <img src={bg} />
    </div>
    
    <div className="flex-1 flex flex-col ml-3 px-2">
      <h4 className="font-poppins font-semibold text-white text-[1em] leading-[23px] mb-1">{title}</h4>
      <p className="font-poppins text-[#999999]  text-[0.75em] leading-[22px] mb-1">{description}</p>
      <a href={`${url}`} target='_blank' className={`flex max-w-[120px] items-center my-4 font-poppins font-semibold text-[0.85em] text-[#0081CF] outline-none`}>
      Learn more <img src={arrowRight} className='w-[25px] h-[25px] ml-2'/>
    </a>
    </div>
  </div>
)

const Projects = () => {
  return (
    <section id='projects' className={layout.section}>
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