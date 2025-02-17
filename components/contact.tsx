"use client";

import React from 'react'
import SectionHeading from './sectionHeading'
import { FaPaperPlane } from 'react-icons/fa'
import { motion } from 'framer-motion'
import { useSectionInView } from '@/lib/hooks';

export default function Contact() {
  const { ref } = useSectionInView("Contact");

  return (
    <motion.section 
    id='contact' 
    ref={ref}
    className='mb-20 sm:mb-28 w-[min(100%,38rem)] text-center'
    initial={{
      opacity: 0
    }}
    whileInView={{
      opacity: 1
    }}
    transition={{
      duration: 1
    }}
    viewport={{
      once: true
    }}
    >
      <SectionHeading>Contact me</SectionHeading>

      <p className='text-gray-700 -mt-6'>Please contact me directly at <a
        className='underline'
        href='mailto:eriguru04@gmail.com'  
      >eriguru04@gmail.com</a> or through this form.</p>

      <form className='mt-10 flex flex-col'>
        <input 
          className='h-14 rounded-lg borderBlack px-4' 
          type='email' 
          placeholder='Your email'
        />
        <textarea 
          className='h-52 my-3 rounded-lg borderBlack p-4'
          placeholder='Your message'
        />
        <button 
        className='flex items-center justify-center gap-2 h-[3rem] w-[8rem] bg-gray-900 text-white rounded-full outline-none transition-all focus:scale-105 hover:scale-105 hover:bg-gray-950 active:scale-105' 
        type='submit'
        >
          Submit <FaPaperPlane className='text-xs opacity-70' />
        </button>
      </form>


    </motion.section>
  )
}
