import styles from './style'
import { Navbar, Hero, Projects, Footer } from './components'

const App = () => (
  <div className="bg-primary w-full overflow-hidden">
    <div className='fixed top-0 w-full h-[100px] z-10 bg-primary '></div>

    <div className={`${styles.paddingX} ${styles.flexCenter} fixed w-full z-10 top-0`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>
    
    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>

    <div className={`bg-primary ${styles.paddingX} ${styles.flexStart} `}>
      <div className={`${styles.boxWidth}`}>
        <Projects />
      </div>
    </div>

    <div className={`bg-primary ${styles.flexStart} `}>
      <div className={`w-full`}>
        <Footer />
      </div>
    </div>

  </div>
)

export default App