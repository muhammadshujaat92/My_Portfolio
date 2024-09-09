import Link from 'next/link';
import React from 'react'
import { FaGithub, FaLinkedinIn, FaInstagram, FaFacebookF } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-gray-100 border-gray-300 border-t-[1px] py-1 dark:bg-gray-800">
            <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
                <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="https://flowbite.com/" className="hover:underline">Portfolio</a>. All Rights Reserved.
                </span>
                <ul className="flex items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
                    <Link href="https://github.com/muhammadshujaat92" className="text-lg me-4 md:me-6"><FaGithub /></Link>
                    <Link href="https://www.linkedin.com/in/mshujaat3" className="text-lg me-4 md:me-6"><FaLinkedinIn /></Link>
                    <Link href="https://www.instagram.com/muhammadshujaat56" className="text-lg me-4 md:me-6"><FaInstagram /></Link>
                    <Link href="https://www.facebook.com/muhammad.shujaat.5243" className="text-lg"><FaFacebookF /></Link>
                </ul>
            </div>
        </footer>
    )
}

export default Footer
