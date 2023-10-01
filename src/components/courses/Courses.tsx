import React from 'react';
import Image from 'next/image';
import line from '../../../public/svgs/underline.svg';
import polygon1 from '../../../public/svgs/Polygon-1.svg';
import polygon2 from '../../../public/svgs/Polygon-2.svg';
import polygon4 from '../../../public/svgs/Polygon-4.svg';
import polygon5 from '../../../public/svgs/Polygon-5.svg';
import polygon12 from '../../../public/svgs/Polygon-12.svg';
import Carousel from './coursesCourasel/CoursesCourasel';
import CourseCard from './CourseCard';
import Link from 'next/link';

interface Props {
  // Add props here
}

const Courses: React.FC<Props> = (props) => {
  return (
    <div className=" px-[20px] bg-[#F2F2F2] md:px-16 py-1 lg:px[16px]">
      <div className="static z-30">
        <Carousel />
      </div>
      <div className="w-[100%] md:mt-6 mb-[70px] lg:h-[350px] ">
        <div className="flex justify-between">
          <ul
            className="m-auto md:m-0 px-[23px] md:px-4 py-[31px] flex flex-col gap-[5px] lg:gap-[20px] w-[358px]
h-[173px] bg-[#A63F0E1A] md:bg-[#F2F2F2]  
"
          >
            <li className="md:w-[476px] font-serif md:text-[35px] font-normal leading-[120%] text-[25px]">
              Learning paths designed for you
            </li>
            <li>
              <Image
                src={line}
                width={468.615}
                height={2}
                alt="line"
                className="hidden md:block"
              />
            </li>
            <li className="text-[#333] text-[16px] md:text-[#A63F0E] font-Poppins md:text-[20px] font-normal leading-[120%]">
              All the best courses, ready when you are
            </li>
          </ul>
          <ul className="hidden md:block">
            {' '}
            <Image
              src={polygon1}
              height={50}
              width={50}
              alt="polygon"
              className="absolute md:ml-[12px] mt-[-20px]"
            />
            <Image
              src={polygon2}
              height={50}
              width={50}
              alt="polygon"
              className="absolute md:ml-[12px] mt-[20px]"
            />
          </ul>
        </div>
        <ul className="md:border-b-2 md:border-[rgba(230, 192, 156, 0.50)] w-[100%] flex justify-center md:my-[40px]">
          <li
            className="w-[131px] h-[34px] mt-[-18px] md:mt-[10px] md:mb-[-30px] md:w-[248px]
            md:h-[60px] bg-[#F2F2F2] border-[rgba(230, 192, 156, 0.50)
            ] border rounded-[30px] flex justify-center items-center md:text-[25px] text-[16px] font-serif font-semibold
"
          >
            Our Courses
          </li>
        </ul>

        <Image
          src={polygon4}
          height={80}
          width={80}
          alt="polygon"
          className="absolute lg:ml-[900px] md:ml-[450px] md:mt-[-40px] hidden md:block "
        />
        <Image
          src={polygon5}
          height={100}
          width={100}
          alt="polygon"
          className="absolute lg:ml-[600px] md:ml-[200px] mt-[-340px] hidden md:block "
        />
        <Image
          src={polygon12}
          height={150}
          width={150}
          alt="polygon"
          className="absolute lg:ml-[200px] md:ml[140px] hidden md:block lg:mt-[-70px] md:mt-[-100px] md:h-[120px] md:w-[120px] lg:h-[150px] lg:w-[150px]"
        />
      </div>
      <div className="mb-[100px] md:mb-0">
        <CourseCard />
      </div>
      <div className="flex items-center justify-center md:m-[70px]">
        <Link
          target="_blank"
          className="text-none"
          href="https://docs.google.com/forms/d/e/1FAIpQLSeJBFggDSCgE35rA19W1gjqddo8jlXprs6002C_1L3lYqPDzw/viewform"
        >
          <button
            type="button"
            className="md:w-[235px] md:h-[48px] rounded-[10px] bg-[#D97508] py-[12px] px-[25px] text-[#fff] font-sans font-normal leading-[120%] text-[20px] hidden md:block"
          >
            Enroll now
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Courses;
