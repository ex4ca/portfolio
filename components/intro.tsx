"use client";

import React from 'react'
import Image from 'next/image';
import idImg from "@/public/id.jpg";
import { motion } from 'framer-motion';
import Link from 'next/link';
import { CiMail } from "react-icons/ci";
import { HiDownload } from 'react-icons/hi'
import { BsLinkedin } from 'react-icons/bs'
import { FaGithubSquare } from 'react-icons/fa';

export default function Intro() {
  return (
    <section className='mb-28 max-w-[50rem] text-center sm:mb-0'>
        <div className='flex items-center justify-center'>
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                type: 'tween',
                duration: 0.2,
              }}
            >
              <Image 
                src={idImg}
                alt='Photo of Erica'
                width='192'
                height='192' 
                quality='95' 
                priority={true}
                className='h-24 w-24 rounded-full object-cover border-[0.2rem] border-white shadow-xl'
              /> 
            </motion.div>
        </div>
        
        <motion.p className='mb-10 mt-4 px-4 text-2l font-medium !leading-[1.5] sm: text-4xl'
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
        >
          TODO: Hi, I'm Erica. This is my intro
        </motion.p>

        <motion.div 
          className='flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium'
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{delay: 0.1}}
        >
          <Link href='#contact'
            className='bg-zinc-900 text-white px-7 py-3 flex items-center gap-2 rounded-full'
          >
            Contact me <CiMail /> 
          </Link>
          <a className='bg-white px-7 py-3 flex items-center gap-2 rounded-full'>
            Download CV <HiDownload />
          </a>
          <a 
            className='bg-white p-4 text-gray-700 flex items-center gap-2 rounded-full'
            href='https://www.linkedin.com/in/erica-gurung-5608b3268/'
          >
            <BsLinkedin />
          </a>
          <a 
            className='bg-white p-4 text-gray-700 flex items-center gap-2 rounded-full text-[1.35rem]'
            href='https://www.linkedin.com/in/erica-gurung-5608b3268/'
          >
            <FaGithubSquare />
          </a>
        </motion.div>
    </section>
  )
}
