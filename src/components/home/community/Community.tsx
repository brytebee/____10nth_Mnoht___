'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import AcademicIcon from '../../../../public/svgs/academic.svg'
import LeftQuote from "../../../../public/svgs/left-quote.svg"
import RightQuote from "../../../../public/svgs/right-quote.svg"
import TestimonialImg from '../../../../public/svgs/customer.svg'
import InstructorImg from '../../../../public/svgs/instructor.svg'
import ChevronRight from '../../../../public/svgs/chevron_right.svg'
import useMediaQuery from '@/hooks/useMediaQuery'

type Props = {}

export default function OurCommunitySection({ }: Props) {
  const isSmallMobile = useMediaQuery("(max-width: 320px)")
  return (
    <section className='mt-10 w-full pb-20'>
      <div className='flex flex-col gap-5 mb-10'>
        <div className={`w-[320px] mx-auto flex items-center gap-2 ${isSmallMobile && 'w-[95%]'}`}>
          <Image src={AcademicIcon} alt="academic icon" />
          <h2 className='text-center text-xl font-bold text-body'>Join Our Community of Students</h2>
          <Image src={AcademicIcon} alt="academic icon" />
        </div>
        <p className={`w-[347px] mx-auto text-center font-light ${isSmallMobile && 'w-[95%]'}`}>Embarking on a learning journey with our online tech academy is an investment in your future. Empower yourself with the skills and knowledge needed to thrive in the ever-evolving tech industry. Join our community, learn from industry experts, and unlock your potential today. Get ready to shape the future of technology!</p>
      </div>
      <div className='md:hidden bg-white px-7 pt-7 pb-6 w-72 mx-auto rounded-md broder[1px solid #ECECEC] mb-10'>
        <div className='mb-5'>
          <div className='w-[200px] relative'>
            <Image src={LeftQuote} alt="left quote" className='absolute -left-4 -top-1' />
            <Image src={RightQuote} alt="right quote" className='absolute -right-8 -top-1' />
            <p className='w-full font-normal text-base mx-auto'>Lorem ipsum dolor sit amet consectetur. Ornare sed mattis nunc turpis enim. In justo molestie in a. Ac aliquam malesuada feugiat vitae pharetra.</p>
          </div>
        </div>
        <div className='flex gap-3 items-center'>
          <Image src={TestimonialImg} alt="testimonial image" />
          <div className='flex flex-col gap-7 mb-7'>
            <div>
              <h3 className='text-sm font-semibold'>Alice stern</h3>
              <p className='text-[13px]'>Student of social science unilag</p>
            </div>
          </div>
        </div>
        <Link href="#" className='font-semibold text-hero underline'>Read full story</Link>
      </div>
      <Link href="#" className='pl-4 md:hidden text-hero font-semibold flex items-center'>View more customer stories <Image src={ChevronRight} alt='icon' className='h-6 w-6' /></Link>
      <div className='mt-8 px-9 flex flex-col items-center gap-5'>
        <Image src={InstructorImg} alt="instructor image" />
        <div className='flex flex-col gap-3 items-center'>
          <h3 className='text-center text-body text-xl font-bold'>Become an instructor</h3>
          <p className='w-[317px] font-light text-base mx-auto text-center'>Instructors from around the world teach millions of students on techverse, we provide the tools and skills to teach what you love.</p>
          <Link href="#" className='mt-2 w-64 border-none bg-hero text-white py-3 px-6 text-center rounded-md text-lg'>Join our team</Link>
        </div>
      </div>
    </section>
  )
}