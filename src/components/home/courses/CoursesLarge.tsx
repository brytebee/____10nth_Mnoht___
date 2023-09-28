import React from 'react'
import SeoImg from '../../../../public/svgs/seo.svg'
import CodeImg from '../../../../public/svgs/code-course.svg'
import Link from 'next/link'
import CheveronRight from '../../../../public/svgs/chevron_right.svg'
import Image from 'next/image'

type Props = {}

export default function CoursesLargeScreens({}: Props) {
  return (
    <div className='hidden md:flex lg:justify-between flex-wrap gap-24 md:mb-12 w-full '>
        <div className='flex gap-5 md:w-full lg:w-[436px]'>
          <div className='w-4 lg:px-0.5 h-[100px] md:h-full bg-secondary' />
          <div>
            <h3 className='text-2xl font-bold'>Web Development</h3>
            <p className='text-base font-light'>Learn the fundamentals of HTML, CSS, JavaScript, and more. Build responsive websites and web applications that captivate users and meet industry standards.</p>
          </div>
        </div>

        <div className='flex gap-5 md:w-full lg:w-[558px]'>
          <div className='w-4 px-0.5 h-full bg-secondary' />
          <div>
            <h3 className='text-2xl font-bold'>Product Management</h3>
            <p className='text-base font-light'>Our Product Management course is designed to equip you with the skills needed to become an effective product manager. You'll learn how to identify market opportunities, conduct user research, define product strategies, and oversee the entire product lifecycle.</p>
          </div>
        </div>

        <div className='flex gap-5 md:w-full lg:w-[436px]'>
          <div className='w-4 px-0.5 h-full bg-secondary' />
          <div>
            <h3 className='text-2xl font-bold'>UIUX Design</h3>
            <p className='text-base font-light'>Our UI/UX Design course is your gateway to creating captivating user experiences. In this course, you'll dive into the principles of user-centered design, information architecture, interaction design, and visual aesthetics, and lots more.</p>
          </div>
        </div>

        <div className='flex gap-5 md:w-full lg:w-[500px]'>
          <div className='flex gap-9'>
            <Image src={CodeImg} alt='Code image' />
           <Image src={SeoImg} alt='SEO image' />
          </div>
          <Link href='/courses' className='flex items-center text-hero-header text-lg align-baseline pl-20'>Explore more <Image src={CheveronRight} alt='See more icon' /> </Link>
        </div>
      </div>
  )
}