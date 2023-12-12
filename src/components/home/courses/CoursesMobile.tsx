import React from 'react';
import Accordion from '@/components/Accordion/Accordion';
import CheveronDown from '../../../../public/svgs/chevron_down.svg';
import CheveronRight from '../../../../public/svgs/chevron_right.svg';
import Link from 'next/link';
import Image from 'next/image';
import { Course } from '@/app/staticData/data';

type Props = {
  courses: Course[];
};

export default function CoursesMobile({ courses }: Props) {
  return (
    <>
      <div className="lg:hidden md:hidden w-full flex flex-col gap-3">
        {courses.slice(0, 7).map(({ name, learnings }, index) => (
          <Accordion title={name} key={index} icon={CheveronDown}>
            <p>{learnings.intro}</p>
            <h6 className="my-4 text-xl font-bold">What You&apos;ll Learn</h6>
            {learnings.listings.split('. ').map((list) => (
              <li className="leading-7 pt-[2px] font-semibold" key={list}>
                {list}
              </li>
            ))}
            <Link
              href={`/courses/${name.replaceAll(' ', '-').toLowerCase()}`}
              className="flex py-[10px] text-[#A63F0E] font-sans font-normal leading-[120%] mt-[10px]"
            >
              <button className="" type="button">
                Read more
              </button>
            </Link>
          </Accordion>
        ))}
        <Link
          href="/courses"
          className="flex items-center justify-end text-hero-header text-lg"
        >
          See more <Image src={CheveronRight} alt="See more icon" />{' '}
        </Link>
      </div>
    </>
  );
}
