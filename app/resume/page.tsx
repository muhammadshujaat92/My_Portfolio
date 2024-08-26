import React from 'react'
import resumeImg from '@/public/shujaat_resume.png'
import Image from 'next/image'
import { Metadata } from 'next';
export const metadata: Metadata = {
    title: "Shujaat-resume"
};
const page = () => {
    return (
        <main className='flex justify-center items-center h-screen'>
            <Image src={resumeImg} className='border-black border-[1px]' width={400} height={400} alt={'resume'} />
        </main>
    )
}

export default page