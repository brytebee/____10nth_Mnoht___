'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import Back from '../../../public/svgs/back-icon.svg';
import BackDesk from '../../../public/svgs/back-icon-desk.svg';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

import { courses } from '@/app/staticData/data';
import Link from 'next/link';

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

  const { image, name, description, eligibility, learnings, conclusion } =
    filterCourse?.[0];

  return (
    <div className="bg-[#F2F2F2]">
      <div className="tablet&_desktop_only md:block hidden">
        <div className="pt-[36px] pl-[26px] lg:pl-[50px]">
          <button
            onClick={handleClick}
            className="w-[180px] md:w-[80px] lg:w-[180px] py-[8px] pl-[8px] justify-center text-center bg-[#D97508] text-white text-primary text-md rounded-[10px]"
          >
            <Image
              className="inline md:ml-[-20px] ml-[-32px] text-white"
              width={34}
              height={34}
              src={BackDesk}
              alt="go back"
            />
            <span className="hidden lg:inline">Back to course</span>
          </button>
        </div>
        <div className="flex flex-col items-center pt-[48px] pb-[60px] my-8">
          <hr className="my-[-24px] w-full text-[rgba(230, 192, 156, 0.50)]" />
          <div className="border-[3px] bg-white border-[rgba(230, 192, 156, 0.50)]-500 rounded-[28px] w-[220px] py-2 mx-6 text-center text-lg font-medium">
            Course Overview
          </div>
        </div>
        <div className="bg-[#D97508] text-white text-center p-3">
          <h1 className="text-xl font-bold">{name.toUpperCase()}</h1>
        </div>
      </div>
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

        <div>
          <div className="flex justify-center items-center">
            <Image width={280} height={280} src={image} alt={`${name} image`} />
          </div>
          <h1 className="text-xl pt-[30px] font-bold md:hidden">
            {name.toUpperCase()}
          </h1>
          <p className="leading-7 pt-[10px]">{description}</p>
          <h3 className="pt-[28px] text-lg font-semibold">
            Program Eligibility
          </h3>
          <p className="leading-7 pt-[10px]">{eligibility}</p>
          <h3 className="pt-[28px] text-lg font-semibold">
            What you&apos;ll learn
          </h3>
          <p className="leading-7 pt-[10px]">{learnings.intro}</p>
          <ul className="pt-[18px] list-disc list-inside pl-1">
            {learnings.listings.split('. ').map((list) => (
              <li className="leading-7 pt-[2px] font-semibold" key={list}>
                {list}
              </li>
            ))}
          </ul>
          <p className="pt-[20px] leading-7">{conclusion}</p>
        </div>

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
