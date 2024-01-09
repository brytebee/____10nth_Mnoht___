import React from 'react';
import UIUX from '../../../../public/svgs/uiux.svg';
import WEB from '../../../../public/svgs/web-development.svg';
import DATA from '../../../../public/svgs/data-science.svg';
import ArrowRight from '../../../../public/svgs/arrow-right2.svg';
import Card from './Card';
import Image from 'next/image';
import Metrics from '../metrics/Metrics';
import PrimaryButton from '@/components/utils/components/PrimaryButton';

const courses = [
  {
    image: UIUX,
    title: 'UI & UX DESIGN',
    rating: 5,
    student: 308,
  },
  {
    image: WEB,
    title: 'WEB DEVELOPMENT',
    rating: 5,
    student: 590,
  },
  {
    image: DATA,
    title: 'DATA SCIENCE',
    rating: 5,
    student: 207,
  },
];

const metrics = [
  {
    courses: 25,
    students: 30000,
    instructors: 50,
    certified: 185,
  },
];

const Recommended = () => {
  return (
    <div>
      <section className="bg-[#F2F2F2] p-4 mb-[72px]">
        <h3 className="text-[25px] lg:ml-36 lg:text-[45px] pb-2 font-bold leading-9">
          Top Recommended <br />
          Courses
        </h3>
        <div className="flex justify-end pr-4 mb-[-8px]">
          <button className="flex text-justify" type="button">
            <span>Swipe</span>
            <span className="mt-1">
              <Image src={ArrowRight} alt="arrow right" />
            </span>
          </button>
        </div>
        <section className="lg:flex lg:justify-center pb-10">
          {courses.map(({ title, image, rating, student }) => (
            <Card
              title={title}
              image={image}
              rating={rating}
              student={student}
            />
          ))}
        </section>
      </section>
      <section className="more-details lg:flex mb-2">
        <div className="video lg:flex-1 pr-16">
          <Image src={WEB} alt="photo" />
        </div>
        <div className="info p-4 bg-[#A63F0E] text-white lg:flex-1">
          <div className=" lg:flex lg:flex-col text-left pt-12">
            <h3 className="font-bold text-[20px] lg:text-[25px] py-4 lg:pt-8 lg:w-[60%]">
              Web development masterclass, front and backend devs.
            </h3>
            <p className="lg:w-[75%]">
              Lorem ipsum dolor sit amet consectetur. Vulputate cum neque
              sagittis sed sed nunc. Vel scelerisque bibendum sed ipsum amet
              urna pretium ullamcorper. Elementum consequat non tempus aliquam.
              Adipiscing diam donec a scelerisque scelerisque mauris amet.
            </p>
            <PrimaryButton
              position="left"
              px="139"
              pxpc="159"
              text="See more"
            />
          </div>
        </div>
      </section>
      <section className="metrics hidden lg:block bg-[#E6C09CB2] mt-20">
        {metrics.map(({ courses, students, instructors, certified }) => (
          <Metrics
            course={courses}
            student={students}
            instructor={instructors}
            certified={certified}
          />
        ))}
      </section>
    </div>
  );
};

export default Recommended;
