import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaBootstrap, FaGitAlt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { DiMongodb } from "react-icons/di";
import { SiExpress, SiPostman, SiRedux, SiNextdotjs, SiTailwindcss } from "react-icons/si";
import { BiLogoTypescript } from "react-icons/bi";

const Techs = () => {
    return (
        <main id="techs" className='w-full py-10 flex flex-col gap-16'>
            <div className='flex items-center flex-col text-center gap-10'>
                <h1 className="font-bold text-gray-600 text-3xl md:text-4xl mb-3">Shujaat's Techs</h1>
                <div className="flex flex-col items-center gap-3 md:gap-4">
                    <div>
                        <p className="font-semibold text-md md:text-lg">Technologies</p>
                        <p className="text-gray-800 text-2xl md:text-3xl font-bold">I'm Learning</p>
                    </div>
                    <div className="flex items-center gap-4 flex-wrap">
                        <SiNextdotjs className="text-7xl" />
                        <BiLogoTypescript className="text-[#3178c6] text-8xl" />
                    </div>
                </div>
            </div>

            <div className='flex flex-col items-center text-center gap-7'>
                <div>
                    <p className="font-semibold text-md md:text-lg">Technologies</p>
                    <p className="text-gray-800 text-2xl md:text-3xl font-bold">Currently Developing</p>
                </div>
                <div className="flex items-center gap-4 flex-wrap justify-center">
                    <FaHtml5 className="text-[#fb4a0b] text-7xl" />
                    <FaCss3Alt className="text-[#2097f3] text-7xl" />
                    <IoLogoJavascript className="text-[#fee000] text-7xl" />
                    <FaBootstrap className="text-[#59287a] text-7xl" />
                    <DiMongodb className="text-[#049024] text-7xl" />
                    <SiExpress className=" text-7xl" />
                    <FaGitAlt className="text-[#f34f29] text-7xl" />
                    <SiTailwindcss className="text-[#38BDF8] text-7xl" />
                    <FaNodeJs className="text-[#3c873a] text-7xl" />
                    <FaReact className="text-[#03b0e5] text-7xl" />
                    <SiPostman className="text-[#ef5b25] text-7xl" />
                    <SiRedux className="text-[#764abc] text-7xl" />
                </div>
            </div>
        </main>
    )
}

export default Techs