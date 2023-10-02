'use client';
import React from 'react';
import Image from 'next/image';
import useMediaQuery from '../../hooks/useMediaQuery';
import { courses } from '@/app/staticData/data';
import hline from '../../../public/svgs/underline.svg';
import Link from 'next/link';

const CourseCard = () => {
  const isMobile = useMediaQuery('(max-width: 768px)');
  return (
    <div>
      {courses.map(({ image, name, description }, i: number) => (
        <div
          key={i}
          className="mb-[20px] p-[30px] md:w-[100%]
            md:h-[344px] bg-[#fff] rounded-[10px]
            md:flex md:flex-col lg:flex lg:flex-row lg:gap-[70px] md:mb-[30px] lg:px-[60px] md:py-[1px] items-center lg:items-center m-auto z-50 md:items-start box-border"
        >
          <ul className="p-0">
            <li>
              <Image
                src={image}
                height={300}
                width={300}
                alt="img"
                className="w-[140px] h-[140px] lg:w-[300px] lg:h-[300px]"
              />
            </li>
          </ul>
          <ul className="p-0 flex flex-col lg:gap-[10px]">
            <li className="text-[18px] mt-[15px] lg:w-[476px] font-serif lg:text-[35px] md:text-[25px] font-normal leading-[120%] box-border">
              {name}
            </li>
            <li>
              <Image
                src={hline}
                width={468.615}
                height={2}
                alt="img"
                className="hidden lg:block "
              />
            </li>
            <li className="text-[14px] w-[100%] md:w-[450px] lg:w-[574px] md:h-[80px] md:text-[16px] font-sans font-normal leading-5 mt-[20px]">
              {description}
            </li>
          </ul>
          <ul className="p-0">
            <li>
              <Link
                href={`/courses/${name.replaceAll(' ', '-').toLowerCase()}`}
              >
                <button
                  type="button"
                  className="md:w-[135px] md:h-[40px] md:rounded-[10px]  py-[10px] md:border md:border-[#A63F0E] text-[#A63F0E] font-sans font-normal leading-[120%] mt-[10px] border-0 ml-[170px] md:ml-[480px] lg:ml-0 md:ml-0"
                >
                  {isMobile ? 'Read more' : ' View course'}
                </button>
              </Link>
            </li>
          </ul>
        </div>
      ))}
    </div>
  );
};

export default CourseCard;
