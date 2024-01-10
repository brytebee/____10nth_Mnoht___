'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import Back from '../../../public/svgs/back-icon.svg';
import BackDesk from '../../../public/svgs/back-icon-desk.svg';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

import { courses } from '@/app/staticData/data';
import Link from 'next/link';
import DesktopOnly from './DesktopOnly';
import Info from './Info';

const Details = () => {
  const router = useRouter();
  const path = usePathname();

  if (!path) {
    return <div className="text-success font-extrabold">Loading...</div>;
  }

  const splitPath = path.split('/');
  const courseName = splitPath?.[splitPath.length - 1];

  const handleClick = () => {
    router.back();
  };

  const filterCourse = courses?.filter(
    (course) => course?.name?.replaceAll(' ', '-').toLowerCase() === courseName
  );

  const { name } = filterCourse?.[0];

  return (
    <div className="bg-[#F2F2F2]">
      <DesktopOnly handleClick={handleClick} name={name} />
      <div className="text-left px-[26px] lg:px-[50px] pb-[62px] md:pt-[75px] pt-[20px]">
        <button className="md:hidden" onClick={handleClick}>
          <Image
            className="ml-[-9px]"
            width={42}
            height={42}
            src={Back}
            alt="go back"
          />
        </button>
        <Info info={filterCourse?.[0]} />
        <div className="text-center pt-[52px]">
          <Link
            target="_blank"
            className="text-none"
            href="https://docs.google.com/forms/d/e/1FAIpQLSeJBFggDSCgE35rA19W1gjqddo8jlXprs6002C_1L3lYqPDzw/viewform"
          >
            <button className="w-[150px] py-[10px] px-[24px] justify-center text-center bg-[#D97508] text-white text-primary text-lg rounded-[10px]">
              Enroll now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Details;
