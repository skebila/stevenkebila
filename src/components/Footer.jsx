import styles from "../style"
import { logoIcon } from "../assets"
import { footerLinks } from "../constants"

const footer = () => (

  <section className={`${styles.flexCenter} ${styles.paddingY} bg-[#303798] flex-col`}>
    <div className={`${styles.flexCenter}  flex-col mb-8 w-full`}>
      <a href='#'>
        <img
          src={logoIcon}
          alt='Steven Kebila'
          className='w-[60px] h-[60px] mb-5 object-contain'
        />
      </a>
      <div className={`${styles.flexCenter}`}>
        {footerLinks.map((footerLink) => (
          <div key={footerLink.key} className={`${styles.flexCenter} flex-col`}>
            <p className={`${styles.paragraph} text-center mt-4 max-w-[290px]`}>
              {footerLink.title}
            </p>

            <div className={`${styles.flexCenter} flex-1 flex flex-row my-12 w-full `}>
              {footerLink.links.map((link, index) => (
                <a href={`${link.url}`} alt={`${link.id}`} target='_blank' className='border-2 border-[#dbdbdb9b] hover:bg-[#8a92fc83] mx-2 rounded-full p-2'>
                  <img src={`${link.icon}`} className="w-[25px] h-[25px]"/>
                </a>
              ))}
            </div>

            <p className={`${styles.paragraph} text-[1em]`}>Handcrafted by yours truly ©{new Date().getFullYear()}</p>
            <p className={`${styles.paragraph} text-[0.75em]`}>Made with <a href='https://reactjs.org/' className='text-[1.1em] hover:text-white font-bold'>React JS</a> & <a href='https://tailwindcss.com' className='hover:text-white text-[1.1em] font-bold'>TailwindCSS</a></p>
          </div>
        ))}
      </div>
      
    </div>
  </section>
  
)


export default footer