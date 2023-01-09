import styles from './style'
import { Navbar, Hero, Projects, Footer } from './components'

const App = () => (
  <div className="bg-primary w-full overflow-hidden">
    
    <div className={`${styles.paddingX} ${styles.flexCenter} sticky top-0 z-50`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>
    
    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>

    <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Projects />
        <Footer />
      </div>
    </div>

  </div>
)

export default App