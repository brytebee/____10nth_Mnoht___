import React from 'react'
import Accordion from '@/components/Accordion/Accordion'
import CheveronDown from '../../../../public/svgs/chevron_down.svg'
import CheveronRight from '../../../../public/svgs/chevron_right.svg'
import Link from 'next/link'
import Image from 'next/image'

type Props = {
  courses: {
    name: string;
    description: string;
  }[];
}

export default function CoursesMobile({ courses }: Props) {
  return (
    <>
      <div className='lg:hidden md:hidden w-full flex flex-col gap-3'>
        {courses.map(({ name, description }, index) => (
          <Accordion title={name} key={index} icon={CheveronDown}>
            <p>{description}</p>
          </Accordion>
        ))}
        <Link href='/courses' className='flex items-center justify-end text-hero-header text-lg'>See more <Image src={CheveronRight} alt='See more icon' /> </Link>
      </div>
    </>
  )
}