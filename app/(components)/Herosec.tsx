import { FaGithub, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import headerImg from '@/public/Programmer-rafiki.png'
import Image from "next/image";

const Herosec = () => {
  return (
    <main id="home" className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-0 items-center w-full">
      <div className="md:hidden flex items-center justify-center">
        <Image src={headerImg} alt="headerImg" width={400} height={400} />
      </div>
      <div className="flex flex-col gap-[5rem]">
        <div>
          <p className="font-semibold text-gray-500 text-sm md:text-lg mb-1">Hello World!</p>
          <h1 className="text-blue-700 font-extrabold text-4xl lg:text-5xl mb-2"><span className="text-gray-600">I'm</span> Muhammad Shujaat</h1>
          <p className="font-semibold text-gray-500 lg:text-2xl mb-8">MERN Stack Web Developer</p>
          <a href="https://github.com/muhammadshujaat92" target="_blank" className="font-bold bg-blue-700 text-white rounded-lg py-2 px-4 md:px-7 md:text-lg">View My Projects</a>
        </div>
        <div className="hidden md:flex">
          <a aria-hidden href="https://github.com/mshujaat10" target="_blank" className="text-3xl text-gray-700"><FaGithub /></a>
          <a aria-hidden href="https://www.linkedin.com/in/mshujaat3" target="_blank" className="text-3xl text-gray-700 mx-4"><FaLinkedinIn /></a>
          <a aria-hidden href="https://www.instagram.com/muhammadshujaat56/" target="_blank" className="text-3xl text-gray-700"><FaInstagram /></a>
        </div>
      </div>
      <div className="hidden md:flex items-center justify-end">
        <Image src={headerImg} alt="headerImg" width={500} height={500} />
      </div>
    </main>
  )
}

export default Herosec
