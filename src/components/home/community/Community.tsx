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
import leftPolygon from '../../../../public/svgs/left-polygon.svg';
import leftPolygon2 from '../../../../public/svgs/left-polygon2.svg';
import polygon4 from '../../../../public/svgs/Polygon-4.svg';
import polygon5 from '../../../../public/svgs/Polygon-5.svg';
import leftPolygon5 from '../../../../public/images/polygon5.png';
import leftPolygon4 from '../../../../public/svgs/left-polygon4.svg';
import leftPolygon8 from '../../../../public/svgs/left-polygon8.svg';
import leftPolygon12 from '../../../../public/svgs/left-polygon12.svg';
import polygon3 from '../../../../public/svgs/polygon3.svg';
import polygon10 from '../../../../public/svgs/polygon10.svg';
import polygon12 from '../../../../public/svgs/Polygon-12.svg';
import useMediaQuery from '@/hooks/useMediaQuery';
import WorkingMan from '../../../../public/svgs/office-worker.svg';
import { reviews } from '@/app/staticData/data';
import MobileCarousel from './MobileCarousel';

type Props = {};

export default function OurCommunitySection({ }: Props) {
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
    <section className="mt-10 w-full pb-20 md:mt-20 md:pb-32 bg-hero-pattern  bg-left-top">
      <div className="flex flex-col gap-5 mb-10">
        <ul className="hidden md:block">
          {' '}
          <Image
            src={leftPolygon}
            height={50}
            width={50}
            alt="polygon"
            className="absolute z-10 mt-[-140px]"
          />
          <Image
            src={leftPolygon2}
            height={50}
            width={50}
            alt="polygon"
            className="absolute  mt-[-80px]"
          />
        </ul>
        <div
          className={`w-[320px] lg:w-[600px] lg:items-center md:w-[550px] mx-auto flex items-center gap-2 ${isSmallMobile && 'w-[95%]'
            }`}
        >
          <Image src={AcademicIcon} alt="academic icon" />
          <h2 className="text-center text-xl md:text-3xl font-bold text-body">
            Join Our Community of Students
          </h2>
          <Image src={AcademicIcon} alt="academic icon" />
        </div>
        <p
          className={`w-[347px] md:w-[700px] lg:w-[878px] mx-auto text-center font-light ${isSmallMobile && 'w-[95%]'
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
        {reviews.slice(0, 1).map(({ comment, image, name, course }, index) => (
          <div className="md:hidden bg-white px-3 pt-7 pb-6 w-72 mx-auto rounded-md border[1px solid #ECECEC] mb-10" key={index}>
            <div className="mb-5">
              <div className="w-[230px] relative">
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
                  {comment}
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <Image src={image} alt="testimonial image" className='rounded-md object-cover' />
              <div className="flex flex-col gap-7 mb-7">
                <div>
                  <h3 className="text-sm font-semibold">{name}</h3>
                  <p className="text-sm">{`Student of ${course}`}</p>
                </div>
              </div>
            </div>
            <Link href="#" className="font-semibold text-hero underline">
              Read full story
            </Link>
          </div>
        ))}
      </div>
      {/* </MobileCarousel> */}
      <div
        className="hidden md:grid grid-cols-2 mt-9 lg:w-10/12 md:w-full mx-auto bg-inherit lg:pl-20 md:pl-10 pb-20 pt-16"
        style={{
          boxShadow: '0px 9px 100px 17px rgba(0, 0, 0, 0.10)',
          borderRadius: '13px',
        }}
      >
        {reviews.map(({ comment, image }, index) => (
          <div
            key={index}
            className={`relative lg:w-[340px] md:w-[300px] h-[150px] rounded-[21px] bg-testimonial lg:pt-11 md:pt-6 pl-10 pb-6 pr-3 z-10 ${(index === 0 || index === 2) && 'mt-20'
              } ${index === 0 && 'lg:ml-[80px] lg:mb-16 md:ml-5'} ${index === 1 && 'lg:ml-[60px] md:ml-4'
              } ${(index === 0 || index === 1) && 'gap-8'}`}
          >
            <Image
              src={image}
              alt="testimonial image"
              className="absolute -top-9 -left-6 md:w-[60px] md:h-[60px] lg:w-[84px] lg:h-[84px] rounded-full object-cover"
              width={60}
              height={60}
            />
            <Image
              src={RightQuote}
              alt="right quote"
              className="absolute -top-2 right-4 w-[14px] h-[14px]"
            />
            <p className="font-light text-sm">{comment}</p>
          </div>
        ))}

        <Image
          src={polygon5}
          height={100}
          width={100}
          alt="polygon"
          className="absolute lg:ml-[700px] md:ml-[200px] mt-[440px] hidden md:block "
        />
        <Image
          src={polygon12}
          height={150}
          width={150}
          alt="polygon"
          className="absolute lg:ml-[200px] md:ml[140px] hidden md:block lg:mt-[480px] md:mt-[-100px] md:h-[120px] md:w-[120px] lg:h-[150px] lg:w-[150px]"
        />
      </div>
      <div className="hidden md:flex lg:flex-row md:flex-col-reverse justify-between w-[90%] mx-auto my-16 bg-inherit">
        <div className="flex flex-col gap-5 flex-1">
          <h2 className="md:text-4xl lg:text-3xl text-body font-bold text-center">
            Our course catalogue
          </h2>
          <ul className="flex flex-col gap-4 pl-48">
            <Image
              src={polygon3}
              height={50}
              width={50}
              alt="polygon"
              className="absolute lg:ml-[-60px] md:ml-[-80px] md:mt-[200px] hidden md:block "
            />
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
          src={leftPolygon5}
          height={100}
          width={100}
          alt="polygon"
          className="absolute lg:ml-[700px] md:ml-[50px] md:mt-[-50px] lg:mt-[200px] hidden md:block "
        />
        <Image
          src={WorkingMan}
          alt="man working in office"
          className="h-[600px] flex-1"
        />
        <Image
          src={polygon4}
          height={80}
          width={80}
          alt="polygon"
          className="absolute lg:ml-[1050px] md:ml-[450px] md:mt-[500px] hidden md:block "
        />

        <Image
          src={leftPolygon8}
          height={100}
          width={100}
          alt="polygon"
          className="absolute lg:ml-[1180px] md:ml-[700px] md:mt-[-10px] lg:mt-[100px] hidden md:block "
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
        <Image
          src={polygon10}
          height={80}
          width={80}
          alt="polygon"
          className="absolute lg:ml-[450px] md:ml-[250px] md:mt-[350px] lg:mt-[450px] hidden md:block "
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
          <Image
            src={leftPolygon12}
            height={100}
            width={100}
            alt="polygon"
            className="absolute lg:ml-[550px] md:ml-[270px] md:mt-[200px] hidden md:block "
          />
        </div>
      </div>
    </section>
  );
}
