import React from 'react'
import Link from 'next/link'
import CheveronDown from '../../../public/svgs/chevron_down.svg'
import CheveronRight from '../../../public/svgs/chevron_right.svg'
import Image from 'next/image'
import Accordion from '../Accordion/Accordion'

type Props = {}

export default function Courses({ }: Props) {
  const courses = [
    { name: 'Web Development', description: 'Learn how to build websites and web applications using HTML, CSS, JavaScript, React, and more.' },
    { name: 'Product Management', description: 'Learn how to build websites and web applications using HTML, CSS, JavaScript, React, and more.' },
    { name: 'UI/UX Design', description: 'Learn how to build websites and web applications using HTML, CSS, JavaScript, React, and more.' },
    { name: 'Digital Marketing', description: 'Learn how to build websites and web applications using HTML, CSS, JavaScript, React, and more.' },
    { name: 'Graphics Design', description: 'Learn how to build websites and web applications using HTML, CSS, JavaScript, React, and more.' },
  ]
  return (
    <section className='w-full bg-mobile-bg-color mt-10 pb-10 px-4 flex flex-col gap-6'>
      <div className='flex flex-col gap-4'>
        <h3 className='text-body text-2xl font-black'>Our Popular Courses</h3>
        <p className='text-base font-normal w-full'>Our curriculum is designed by industry experts who are at the forefront of technological advancements. From programming languages like Python and JavaScript to emerging fields like artificial intelligence and blockchain, our courses cover a wide range of in-demand topics.</p>
      </div>
          <div className='lg:hidden md:hidden w-full flex flex-col gap-3'>
            {courses.map(({ name, description }, index) => (
              <Accordion title={name} key={index} icon={CheveronDown}>
                <p>{description}</p>
              </Accordion>
            ))}
            <Link href='/courses' className='flex items-center justify-end text-hero-header text-lg'>See more <Image src={CheveronRight} alt='See more icon' /> </Link>
          </div>
          <div className='px-6 py-9 border border-secondary rounded'>
            <div className='flex flex-col gap-9 items-center justify-center'>
              <h4 className='text-body text-lg font-semibold w-[275px]'>Start as a newbie and become a pro in 6 months and start applying for that dream job</h4>
              <button type="button" className='border-none py-3 px-6 text-white bg-primary rounded-[10px]'>Enroll now</button>
            </div>
          </div>
    </section>
  )
}