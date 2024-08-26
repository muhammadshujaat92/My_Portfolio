import React from 'react'
import Image from 'next/image'
import myImg from '@/public/115456815.jpg'
import { FaHtml5, FaCss3Alt, FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";

const About = () => {
  return (
    <main id='about' className='w-full py-10 flex flex-col gap-10'>
      <div className='flex items-center flex-col text-center'>
        <div className='border-8 rounded-full border-gray-500 w-fit'>
          <Image className='rounded-full w-auto' src={myImg} width={80} height={80} alt={'myImage'} />
        </div>
        <h1 className='font-bold text-gray-600 text-3xl md:text-4xl mb-3'>About Me</h1>
        <p className='font-semibold text-sm md:text-[16px] md:w-[47rem] mb-5'>My name is Muhammad Shujaat. I am a MERN stack developer with a passion of creating innovative web applications. I'm well-versed in the latest web technologies and frameworks, including React.js Next.js and Node.js. I am eager to take on new challenges and opportunities to learn new skills as a web developer.</p>
        <p className='text-xl md:text-2xl font-semibold md:w-[45rem]'>I am currently pursuing a Bachelor of Science degree in Computer Science from Iqra University.</p>
      </div>

      <div className='flex flex-col items-center text-center gap-[1rem]'>
        <h1 className='text-3xl md:text-4xl font-bold'>Major Skills</h1>
        <div className='flex gap-[2rem] justify-center flex-wrap'>
          <FaHtml5 className='text-[#fb4a0b] text-8xl' />
          <FaCss3Alt className='text-[#2097f3] text-8xl' />
          <IoLogoJavascript className='text-[#fee000] text-8xl' />
          <FaReact className='text-[#03b0e5] text-8xl' />
        </div>
      </div>
    </main>
  )
}

export default About