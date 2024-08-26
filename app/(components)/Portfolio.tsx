import React from 'react'
import socialAppImg from '@/public/social_app_feed.png'
import keepNotesImg from '@/public/keep_notes1.png'
import wisemarketImg from '@/public/wise_market.png'
import todoAppImg from '@/public/todo-app.png'
import calculatorImg from '@/public/react-calculator.png'
import weatherAppImg from '@/public/weather-app.png'
import classRoomImg from '@/public/classroom.jpg'
import Card from './Card'

const Portfolio = () => {
    return (
        <main id='portfolio' className='w-full py-10 flex flex-col gap-10'>
            <div className='flex items-center flex-col text-center gap-4'>
                <h1 className='font-bold text-gray-600 text-3xl md:text-4xl'>My Portfolio</h1>
                <p className='font-semibold text-gray-500 sm:w-[20em]'>These are some of the work and projects. I have already carried it out.</p>
            </div>

            {/* <div className='flex flex-wrap justify-center gap-10 lg:grid grid-cols-3 lg:gap-5 xl:gap-10'>
                <div className='border-gray-400 border-[1px] hover:cursor-pointer'>
                    <Image src={socialAppImg} className='w-full md:w-[300px] lg:w-[400px]' alt={'socialAppImg'} />
                    <div className="w-full h-full relative left-0 right-0 bottom-[100%] flex items-center justify-center opacity-0 transition-opacity ease-in-out duration-[0.4s] bg-black hover:opacity-70">
                        <div className='absolute text-center text-white'>
                            <h1 className='text-xl md:text-2xl lg:text-3xl font-bold'>SocailSway</h1>
                            <a href='#' className='text-lg font-semibold'>View details</a>
                        </div>
                    </div>
                </div>
                <div className='border-gray-400 border-[1px] hover:cursor-pointer'>
                    <Image src={keepNotesImg} className='w-full md:w-[300px] lg:w-[400px]' alt={'keepNotesImg'} />
                    <div className="w-full h-full relative left-0 right-0 bottom-[100%] flex items-center justify-center opacity-0 transition-opacity ease-in-out duration-[0.4s] bg-black hover:opacity-70">
                        <div className='absolute text-center text-white'>
                            <h1 className='text-xl md:text-2xl lg:text-3xl font-bold'>Keep Notes</h1>
                            <a href='#' className='text-lg font-semibold'>View details</a>
                        </div>
                    </div>
                </div>
                <div className='border-gray-400 border-[1px] hover:cursor-pointer'>
                    <Image src={wisemarketImg} className='w-full md:w-[300px] lg:w-[400px]' alt={'wisemarketImg'} />
                    <div className="w-full h-full relative left-0 right-0 bottom-[100%] flex items-center justify-center opacity-0 transition-opacity ease-in-out duration-[0.4s] bg-black hover:opacity-70">
                        <div className='absolute text-center text-white'>
                            <h1 className='text-xl md:text-2xl lg:text-3xl font-bold'>Wisemarket</h1>
                            <a href='#' className='text-lg font-semibold'>View details</a>
                        </div>
                    </div>
                </div>
                <div className='border-gray-400 border-[1px] hover:cursor-pointer'>
                    <Image src={todoAppImg} className='w-full md:w-[300px] lg:w-[400px]' alt={'todoAppImg'} />
                    <div className="w-full h-full relative left-0 right-0 bottom-[100%] flex items-center justify-center opacity-0 transition-opacity ease-in-out duration-[0.4s] bg-black hover:opacity-70">
                        <div className='absolute text-center text-white'>
                            <h1 className='text-xl md:text-2xl lg:text-3xl font-bold'>ToDo App</h1>
                            <a href='#' className='text-lg font-semibold'>View details</a>
                        </div>
                    </div>
                </div>
                <div className='border-gray-400 border-[1px] hover:cursor-pointer'>
                    <Image src={calculatorImg} className='w-full md:w-[300px] lg:w-[400px]' alt={'calculatorImg'} />
                    <div className="w-full h-full relative left-0 right-0 bottom-[100%] flex items-center justify-center opacity-0 transition-opacity ease-in-out duration-[0.4s] bg-black hover:opacity-70">
                        <div className='absolute text-center text-white'>
                            <h1 className='text-xl md:text-2xl lg:text-3xl font-bold'>Calculator</h1>
                            <a href='#' className='text-lg font-semibold'>View details</a>
                        </div>
                    </div>
                </div>
                <div className='border-gray-400 border-[1px] hover:cursor-pointer'>
                    <Image src={weatherAppImg} className='w-full md:w-[300px] lg:w-[400px]' alt={'weatherAppImg'} />
                    <div className="w-full h-full relative left-0 right-0 bottom-[100%] flex items-center justify-center opacity-0 transition-opacity ease-in-out duration-[0.4s] bg-black hover:opacity-70">
                        <div className='absolute text-center text-white'>
                            <h1 className='text-xl md:text-2xl lg:text-3xl font-bold'>Wheather App</h1>
                            <a href='#' className='text-lg font-semibold'>View details</a>
                        </div>
                    </div>
                </div>
            </div> */}


            <div className='flex justify-center gap-10 md:grid grid-cols-2 lg:grid-cols-3 lg:flex items-center lg:justify-around flex-wrap xl:grid lg:gap-5 xl:gap-10 w-full'>
                <Card linkUrl={'https://github.com/muhammadshujaat92/MERN-Classroom'} imageUrl={classRoomImg} cardTitle={'MERN ClassRoom App'} cardDesc={'A simple JavScript calculator developed using React.js, offering users a convenient tool for performing basic arithmetic calculations with ease.'} />
                <Card linkUrl={'https://github.com/muhammadshujaat92/MERN_SocialApp'} imageUrl={socialAppImg} cardTitle={'SocialSway'} cardDesc={'SocialSway is a web application built with the MERN stack. It is fully responsive and designed to provide users with a seamless social media experience.'} />
                <Card linkUrl={'https://mern-keep-notes.vercel.app'} imageUrl={keepNotesImg} cardTitle={'Keep Notes'} cardDesc={'Full-stack web application built with the MERN stack, which allows you to easily create, edit, and delete notes, ensuring a seamless note-taking experience.'} />
                <Card linkUrl={'https://wisemarket-clone.vercel.app'} imageUrl={wisemarketImg} cardTitle={'WiseMarket'} cardDesc={'E-commerce web application cloned using Next.js and TypeScript, two leading technologies renowned for their robustness and scalability.'} />
                <Card linkUrl={'https://react-to-do-list-flame.vercel.app'} imageUrl={todoAppImg} cardTitle={'ToDo App'} cardDesc={'ToDo App is a user-friendly to-do application developed using React.js, featuring seamless integration with localStorage for efficient data storage.'} />
                <Card linkUrl={'https://weathersearchappjs.netlify.app'} imageUrl={weatherAppImg} cardTitle={'Weather App'} cardDesc={'Weather application developed using vanilla JavaScript, providing users with up-to-date weather forecasts fetched from an external API.'} />
            </div>


        </main>
    )
}

export default Portfolio