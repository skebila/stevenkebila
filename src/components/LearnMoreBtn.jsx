import React from 'react'
import {arrowRight} from '../assets'

const LearnMoreBtn = ({ styles }) => {
  return (
    <button type="button" className={`flex items-center py-4 pr-6 font-poppins font-medium text-[0.85em] text-[#303798] outline-none ${styles}`}>
      Learn more <img src={arrowRight} className='w-[25px] h-[25px] ml-2'/>
    </button>
  )
}

export default LearnMoreBtn