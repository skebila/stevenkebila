import styles from "../style"
import { logoIcon } from "../assets"
import { footerLinks } from "../constants"

const footer = () => (

  <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
    <div className={`${styles.flexCenter} md:flex-row flex-col mb-8 w-full`}>
      <div>
        <img
          src={logoIcon}
        />
      </div>
    </div>
  </section>
  
)


export default footer