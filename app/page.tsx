"use client"
import Navbar from "./(components)/Navbar";
import Section from "./(components)/Section";
import Herosec from "./(components)/Herosec";
import About from "./(components)/About";
import Portfolio from "./(components)/Portfolio";
import Techs from "./(components)/Techs";
import Contact from "./(components)/Contact";
import Script from "next/script";
import Footer from "./(components)/Footer";
import React, { useEffect, useState } from 'react'

export default function Home() {
  const [header, setHeader] = useState(false);
  const scrollHeader = () => {
    const halfPageHeight = window.innerHeight / 2;
    
    if (window.scrollY >= halfPageHeight) {
      setHeader(true);
    } else {
      setHeader(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollHeader)
    return (() => {
      window.addEventListener("scroll", scrollHeader)
    })
  }, [])
  return (
    <>
      <Section className={header ? 'xl:px-32 fixed top-0 w-full bg-white z-10 py-3 shadow-sm' : "absolute top-0 xl:px-32 w-full bg-white py-4 md:py-8"}>
        <Navbar />
      </Section>
      <Script src="https://third-party-script.js"></Script>
      {/* <header className="flex flex-col md:gap-20 gap-10"> */}
      {/* <Section className={'xl:px-32'}>
          <Navbar />
        </Section> */}
      <Section className={"xl:px-32 h-[90vh] md:h-[70vh] pt-[5rem] lg:h-[80vh] xl:h-screen flex items-center"}>
        <Herosec />
      </Section>
      {/* </header> */}
      <Section className={'bg-gray-200 flex justify-center lg:px-32'}>
        <About />
      </Section>
      <Section className={'flex justify-center'}>
        <Portfolio />
      </Section>
      <Section className={'bg-gray-200 mt-10 flex justify-center w-full box-border'}>
        <Techs />
      </Section>
      <Section className={'py-10'}>
        <Contact />
      </Section>
      <Footer />
    </>
  );
}
