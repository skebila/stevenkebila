import { useState } from 'react'

import { navLinks, navButtons } from '../constants'
import { logo, menu, close } from '../assets'

const Navbar = () => {
  const [toggle, setToggle] = useState(false)

  return (
    <nav className='w-full flex py-6 justify-between items-center navbar'>
      <img src={logo} alt="steven kebila" className='w-[120px] h-[50px] flex-initial'/>

      <ul className='list-none sm:flex hidden justify-center items-center flex-1'>
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[16px] ${index === length - 1 ? 'mr-0' : 'mr-10'} text-white`}
          >
            <a href={`#${nav.id}`}>
              {nav.title}
            </a>
          </li>
        ))}
      </ul>

      <ul className='list-none sm:flex hidden justify-end items-center flex-initial'>
        {navButtons.map((navBtn, index) => (
          <li
            key={navBtn.id}
            className={`${index === 0 ? 'bg-transparent border border-[#1042A3] hover:bg-[#1042A3] ' : 'ml-2 bg-[#1042A3]'} font-poppins cursor-pointer text-[16px] font-normal py-2 px-4 rounded-full inline-flex items-center text-white `}
          >
            <a href={`#${navBtn.id}`}>
              <button>{navBtn.title}</button>
            </a>
          </li>
        ))}
      </ul>
      
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

            {navButtons.map((navBtn, index) => (
          <li
            key={navBtn.id}
            className={`${index === 0 ? 'bg-transparent border border-[#1042A3] ' : 'mt-2 bg-[#1042A3]'} font-poppins cursor-pointer text-[14px] font-normal py-2 px-4 rounded-full inline-flex items-center text-white`}
          >
            <a href={`#${navBtn.id}`}>
              <button>{navBtn.title}</button>
            </a>
          </li>
        ))}
          </ul>
        </div>
      </div>

    </nav>
  )
}

export default Navbar