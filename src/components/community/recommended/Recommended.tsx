import React from 'react';
import ArrowRight from '../../../../public/svgs/arrow-right2.svg';
import Card from './Card';
import Image from 'next/image';
import Metrics from '../metrics/Metrics';
import Details from './Details';
import { coursesCom as courses } from '@/app/staticData/data';
import { metrics } from '@/app/staticData/data';

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
