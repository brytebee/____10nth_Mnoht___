import React from 'react';
import ArrowRight from '../../../../public/svgs/arrow-right2.svg';
import Image from 'next/image';
import Metrics from '../metrics/Metrics';
import { metrics } from '@/app/staticData/data';
import CircularSwip from './CircularSwip';
import LinearScroll from './LinearScroll';

const Recommended = () => {
  return (
    <div>
      <section className="bg-[#F2F2F2] p-4 lg:p-0 mb-[72px]">
        <h3 className="text-[25px] lg:ml-36 lg:text-[45px] pb-2 font-bold leading-[46px] pt-28 font-serif">
          Top Recommended <br />
          Courses
        </h3>
        <div className="flex justify-end pr-4 mb-[-8px] lg:hidden">
          <button className="flex text-justify" type="button">
            <span>Swipe</span>
            <span className="mt-1">
              <Image src={ArrowRight} alt="arrow right" />
            </span>
          </button>
        </div>
        <div className="lg:hidden">
          <CircularSwip />
        </div>
        <div className="hidden lg:block mt-8 mb-16">
          <LinearScroll />
        </div>
      </section>
      <section className="metrics hidden lg:block bg-[#E6C09CB2] mt-20 px-32">
        {metrics.map(({ courses, students, instructors, certified }) => (
          <Metrics
            key={courses}
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
