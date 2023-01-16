import { useState } from 'react'
import Resume from './Resume'
import { navLinks } from '../constants'
import { logo, menu, close } from '../assets'
import styles from '../style'

const Navbar = () => {
  const [toggle, setToggle] = useState(false)
  const [showMyResume, setShowMyResume] = useState(false)
  const handleOnClose = () => setShowMyResume(false)

  return (
    //NavBar Start
    <nav className='w-full border-b border-[#5757574f] flex py-6 justify-between items-center navbar'>
      <a href="#home"><img src={logo} alt="steven kebila" className='w-[120px] h-[50px] flex-initial'/></a>

      <ul className='list-none sm:flex hidden justify-center items-center flex-1'>
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[16px] ${index === navLinks.length - 1 ? 'mr-0' : 'mr-10'} text-white`}
          >
            <a href={`#${nav.id}`}>
              {nav.title}
            </a>
          </li>
        ))}
      </ul>

      {/*Resume button*/}
      <button onClick={() => setShowMyResume(true)} className={`${styles.unfilledButton} sm:flex hidden`}>Resume</button>
      <Resume onClose={handleOnClose} visible={showMyResume} />
      
      <div className='sm:hidden flex flex-1 justify-end items-center'>
        <img
          src={toggle ? close : menu} 
          alt='menu'
          className='w-[28px] h-[28px] object-contain'
          onClick={() => setToggle((prev) => !prev)}
        />

        <div
          className={`${toggle ? 'flex' : 'hidden'} p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar` }  
        >
          <ul className='list-none flex flex-col justify-end items-center flex-1'>
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-normal cursor-pointer text-[16px] ${index === length - 1 ? 'mr-0' : 'mb-4'} text-white`}
              >
                <a href={`#${nav.id}`}>
                  {nav.title}
                </a>
              </li>
            ))}

            {/*Resume button mobile*/}
            <button onClick={() => (setShowMyResume(true), setToggle(false))} className={`${styles.unfilledButton}`}>Resume</button> 

          </ul>
        </div>
      </div>

    </nav>
  )
}

export default Navbar