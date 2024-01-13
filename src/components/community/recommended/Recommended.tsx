import React from 'react';
import ArrowRight from '../../../../public/svgs/arrow-right2.svg';
import Image from 'next/image';
import Metrics from '../metrics/Metrics';
import Details from './Details';
import { metrics } from '@/app/staticData/data';
import SwipableCards from './Swipe';
import SwipableCardsPC from './SwipePC';

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
        <div className="lg:hidden">
          <SwipableCards />
        </div>
        <div className="hidden lg:block">
          <SwipableCardsPC />
        </div>
      </section>
      <Details />
      <section className="metrics hidden lg:block bg-[#E6C09CB2] mt-20 px-32">
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
