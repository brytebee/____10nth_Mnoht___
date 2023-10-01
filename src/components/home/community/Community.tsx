'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import AcademicIcon from '../../../../public/svgs/academic.svg';
import LeftQuote from '../../../../public/svgs/left-quote.svg';
import RightQuote from '../../../../public/svgs/right-quote.svg';
import TestimonialImg from '../../../../public/svgs/customer.svg';
import InstructorImg from '../../../../public/svgs/instructor.svg';
import ChevronRight from '../../../../public/svgs/chevron_right.svg';
import useMediaQuery from '@/hooks/useMediaQuery';
import WorkingMan from '../../../../public/svgs/office-worker.svg';
import { reviews } from '@/app/staticData/data';

type Props = {};

export default function OurCommunitySection({}: Props) {
  const isSmallMobile = useMediaQuery('(max-width: 320px)');
  const courseTitles = [
    'Product Management',
    'Computer Appreciation',
    'Mobile Development',
    'Digital Marketing',
    'UIUX Design',
    'Game Development',
    'Graphics Design',
    'Web Development',
    'Data Science',
  ];
  return (
    <section className="mt-10 w-full pb-20 md:mt-20 md:pb-32">
      <div className="flex flex-col gap-5 mb-10">
        <div
          className={`w-[320px] lg:w-[600px] lg:items-center md:w-[550px] mx-auto flex items-center gap-2 ${
            isSmallMobile && 'w-[95%]'
          }`}
        >
          <Image src={AcademicIcon} alt="academic icon" />
          <h2 className="text-center text-xl md:text-3xl font-bold text-body">
            Join Our Community of Students
          </h2>
          <Image src={AcademicIcon} alt="academic icon" />
        </div>
        <p
          className={`w-[347px] md:w-[700px] lg:w-[878px] mx-auto text-center font-light ${
            isSmallMobile && 'w-[95%]'
          }`}
        >
          Embarking on a learning journey with our online tech academy is an
          investment in your future. Empower yourself with the skills and
          knowledge needed to thrive in the ever-evolving tech industry. Join
          our community, learn from industry experts, and unlock your potential
          today. Get ready to shape the future of technology!
        </p>
      </div>
      {/* <MobileCarousel> */}
      <div className="flex gap-9">
        <div className="md:hidden bg-white px-7 pt-7 pb-6 w-72 mx-auto rounded-md border[1px solid #ECECEC] mb-10">
          <div className="mb-5">
            <div className="w-[200px] relative">
              <Image
                src={LeftQuote}
                alt="left quote"
                className="absolute -left-4 -top-1"
              />
              <Image
                src={RightQuote}
                alt="right quote"
                className="absolute -right-8 -top-1"
              />
              <p className="w-full font-normal text-base mx-auto">
                Lorem ipsum dolor sit amet consectetur. Ornare sed mattis nunc
                turpis enim. In justo molestie in a. Ac aliquam malesuada
                feugiat vitae pharetra.
              </p>
            </div>
          </div>
          <div className="flex gap-3 items-center">
            <Image src={TestimonialImg} alt="testimonial image" />
            <div className="flex flex-col gap-7 mb-7">
              <div>
                <h3 className="text-sm font-semibold">Alice stern</h3>
                <p className="text-[13px]">Student of social science unilag</p>
              </div>
            </div>
          </div>
          <Link href="#" className="font-semibold text-hero underline">
            Read full story
          </Link>
        </div>
      </div>
      {/* </MobileCarousel> */}
      <div
        className="hidden md:grid grid-cols-2 mt-9 lg:w-10/12 md:w-full mx-auto bg-inherit lg:pl-20 md:pl-10 pb-20 pt-16"
        style={{
          boxShadow: '0px 9px 100px 17px rgba(0, 0, 0, 0.10)',
          borderRadius: '13px',
        }}
      >
        {reviews.map((testimony, index) => (
          <div
            key={index}
            className={`relative lg:w-[340px] md:w-[300px] h-[150px] rounded-[21px] bg-testimonial lg:pt-11 md:pt-6 pl-10 pb-6 pr-3 ${
              (index === 0 || index === 2) && 'mt-20'
            } ${index === 0 && 'lg:ml-[80px] lg:mb-16 md:ml-5'} ${
              index === 1 && 'lg:ml-[60px] md:ml-4'
            } ${(index === 0 || index === 1) && 'gap-8'}`}
          >
            <Image
              src={TestimonialImg}
              alt="testimonial image"
              className="absolute -top-9 -left-6 md:w-[60px] md:h-[60px] lg:w-[84px] lg:h-[84px]"
            />
            <Image
              src={RightQuote}
              alt="right quote"
              className="absolute -top-2 right-4 w-[14px] h-[14px]"
            />
            <p className="font-light text-sm">{testimony}</p>
          </div>
        ))}
      </div>
      <div className="hidden md:flex lg:flex-row md:flex-col-reverse justify-between w-[90%] mx-auto my-16 bg-inherit">
        <div className="flex flex-col gap-5 flex-1">
          <h2 className="md:text-4xl lg:text-3xl text-body font-bold text-center">
            Our course catalogue
          </h2>
          <ul className="flex flex-col gap-4 pl-48">
            {courseTitles.map((title, index) => (
              <li key={index} className="flex items-center gap-2">
                <div className="w-[15px] h-[15px] bg-hero rounded-full" />
                <p className="font-semibold text-xl text-body">{title}</p>
              </li>
            ))}
          </ul>
          <Link
            href="/courses"
            className="pl-48 flex pt-2 font-semibold text-xl text-hero mb-7"
          >
            See all <Image src={ChevronRight} alt="chevron right" />
          </Link>
        </div>
        <Image
          src={WorkingMan}
          alt="man working in office"
          className="h-[600px] flex-1"
        />
      </div>
      <Link
        href="#"
        className="pl-4 md:hidden text-hero font-semibold flex items-center"
      >
        View more customer stories{' '}
        <Image src={ChevronRight} alt="icon" className="h-6 w-6" />
      </Link>

      <div className="mt-8 px-9 flex flex-col items-center gap-5 md:flex-row md:gap-16 lg:pl-32">
        <Image
          src={InstructorImg}
          alt="instructor image"
          className="md:w-[503px]"
        />
        <div className="flex flex-col gap-3 items-center md:items-start">
          <h3 className="text-center text-body text-xl font-bold md:text-3xl">
            Become an instructor
          </h3>
          <p className="w-[317px] md:w-[362px] font-light text-base mx-auto text-center md:text-left">
            Instructors from around the world teach millions of students on
            techverse, we provide the tools and skills to teach what you love.
          </p>
          <Link
            href="https://docs.google.com/forms/d/e/1FAIpQLScxmLpdM08APFELCOPZO_LBHldZuHrb5PNhNK6G7CXtVp3gag/viewform"
            className="mt-2 w-64 border-none bg-primary text-white py-3 px-6 text-center rounded-md text-lg"
          >
            Join our team
          </Link>
        </div>
      </div>
    </section>
  );
}
