import React from 'react';
import UIUX from '../../../../public/svgs/uiux.svg';
import WEB from '../../../../public/svgs/web-development.svg';
import DATA from '../../../../public/svgs/data-science.svg';
import ArrowRight from '../../../../public/svgs/arrow-right2.svg';
import Card from './Card';
import Image from 'next/image';
import Metrics from '../metrics/Metrics';

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
      <section className="bg-[#F2F2F2] p-4">
        <h3 className="text-[25px] lg:text-[45px] pb-2 font-bold leading-9">
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
        {courses.map(({ title, image, rating, student }) => (
          <Card title={title} image={image} rating={rating} student={student} />
        ))}
      </section>
      <section className="more-details">
        <div className="video">
          <Image src={WEB} alt="photo" />
        </div>
        <div className="info p-4 bg-[#A63F0E] text-white">
          <h3 className="font-bold text-[20px] py-4">
            Web development masterclass, front and backend devs.
          </h3>
          <p>
            Lorem ipsum dolor sit amet consectetur. Vulputate cum neque sagittis
            sed sed nunc. Vel scelerisque bibendum sed ipsum amet urna pretium
            ullamcorper. Elementum consequat non tempus aliquam. Adipiscing diam
            donec a scelerisque scelerisque mauris amet.
          </p>
          <div className="py-8 text-center">
            <button className="w-[134px] lg:w-[267px] py-[10px] px-[24px] bg-[#D97508] text-white text-primary rounded-[10px]">
              See more
            </button>
          </div>
        </div>
      </section>
      {/* Can't find this section anymore */}
      <section className="metrics hidden md:hidden lg:hidden">
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
