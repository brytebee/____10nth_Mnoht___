import React from 'react'
import SeoImg from '../../../../public/svgs/seo.svg'
import CodeImg from '../../../../public/svgs/code-course.svg'
import Link from 'next/link'
import CheveronRight from '../../../../public/svgs/chevron_right.svg'
import Image from 'next/image'

type Props = {
}

const CourseWithBar = ({ title, description, index }: { title: string, description: string, index: number }) => (
  <div className='flex gap-5 md:w-full lg:w-[500px]'>
    <div className={`w-4 px-0.5 bg-secondary ${index === 0 ? "md:h-[150px] lg:h-[100px]" : ''}`} />
    <div>
      <h3 className='text-2xl font-bold'>{title}</h3>
      <p className='text-base font-light'>{description}</p>
    </div>
  </div>
)

export default function CoursesLargeScreens({ }: Props) {
  const courses = [
    {
      name: 'Web Development',
      description: 'Learn the fundamentals of HTML, CSS, JavaScript, and more. Build responsive websites and web applications that captivate users and meet industry standards.'
    },

    {
      name: 'Product Management',
      description: 'Our Product Management course is designed to equip you with the skills needed to become an effective product manager. You\'ll learn how to identify market opportunities, conduct user research, define product strategies, and oversee the entire product lifecycle.'
    },
    {
      name: 'UIUX Design',
      description: 'Our UI/UX Design course is your gateway to creating captivating user experiences. In this course, you\'ll dive into the principles of user-centered design, information architecture, interaction design, and visual aesthetics, and lots more.'
    }
  ]
  return (
    <div className='hidden md:grid md:grid-cols-2 md:gap-8 lg:gap-24 md:mb-12 w-full'>
      {courses.map(({ name, description }, index) => (
        <CourseWithBar key={index} title={name} description={description} index={index} />
      ))}

      <div className='flex gap-5 md:w-full lg:w-[500px]'>
        <div className='flex gap-9'>
          <Image src={CodeImg} alt='Code image' />
          <Image src={SeoImg} alt='SEO image' />
        </div>
        <Link href='/courses' className='flex items-center text-hero-header text-lg align-baseline pl-20 md:text-xs lg:text-base'>Explore more <Image src={CheveronRight} alt='See more icon' /> </Link>
      </div>
    </div>
  )
}