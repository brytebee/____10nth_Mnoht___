import React from 'react'
import Image from 'next/image'
import HeroImage from '../../../public/svgs/hero-img.svg'
import DesktopHeroBg from '../../../public/svgs/grouped-hero-bg.svg'

type Props = {}

export default function Hero({ }: Props) {
  return (
    <main className='w-full'>
      <section className='flex flex-col gap-[38px] md:hidden lg:hidden'>
        <div className='bg-hero flex items-center justify-center w-full h-[233px]'>
          <div className='w-[230px] h-[230px] align-baseline rounded-full mt-16 bg-mobile-bg'>
            <Image src={HeroImage} alt='hero image' className='w-[296px] h-[197px] object-cover' />
          </div>
        </div>
        <div className='flex flex-col gap-6 pl-3'>
          <h1 className='text-hero-header w-[296px] text-3xl font-semibold'>Online Tech Classes From The Best Instructors</h1>
          <div className='flex flex-col gap-2'>
            <h2 className='text-primary text-xl font-semibold'>Introduction</h2>
            <p className='w-full text-[15px] font-normal'>Welcome to <strong>TechVerse</strong> Academy, your gateway to unlocking the world of cutting-edge technology! Whether you're a curious beginner or an aspiring tech enthusiast, our online platform offers an unparalleled learning experience tailored to your needs.</p>
            <button type="button" className='border-none w-[140px] flex justify-center items-center px-[15px] py-3 rounded-[10px] text-white text-lg bg-primary mx-auto mt-4 mb-8'>Enroll now</button>
          </div>
        </div>
      </section>
      <section className='hidden md:flex lg:flex relative lg:w-full'>
        <Image src={DesktopHeroBg} alt='Desktop Hero bg' className='object-cover w-full h-full' />
        <div className='absolute lg:top-[120px] md:top-6 md:left-4 lg:left-12'>
          <div className='flex flex-col lg:gap-4 md:gap-2'>
            <h1 className='text-white md:text-2xl lg:text-4xl font-semibold md:w-[20rem] lg:w-[29rem]'>Online Tech Classes From The Best Instructors</h1>
            <div className='flex flex-col lg:gap-2 md:gap-1 md:pl-4 lg:pl-8'>
              <h2 className='text-primary text-xl font-semibold'>Introduction</h2>
              <p className='lg:w-[650px] md:w-[350px] lg:text-lg md:text-xs md:text-justify lg:text-left font-normal text-white'>Welcome to TechVerse Academy, your gateway to unlocking the world of cutting-edge technology! Whether you're a curious beginner or an aspiring tech enthusiast, our online platform offers an unparalleled learning experience tailored to your needs.</p>
              <div className='lg:mt-8 md:mt-2 flex gap-5'>
                <button type="button" className='border-none py-3 px-6 text-primary bg-white rounded-[10px]'>Enroll as student</button>
                <button type="button" className='py-3 px-6 text-white rounded-[10px] border'>Join our team</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}