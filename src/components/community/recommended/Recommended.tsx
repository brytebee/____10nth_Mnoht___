import React from 'react';
import UIUX from '../../../../public/svgs/uiux.svg';
import WEB from '../../../../public/svgs/web-development.svg';
import DATA from '../../../../public/svgs/data-science.svg';
import Card from './Card';
import Image from 'next/image';
import Metrics from '../metrics/Metrics';

const courses = [
  {
    image: UIUX,
    title: 'UI & UX DESIGN',
    rating: 4,
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
    rating: 3,
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
      <section>
        <h3>Top Recommended Courses</h3>
        {courses.map(({ title, image, rating, student }) => (
          <Card title={title} image={image} rating={rating} student={student} />
        ))}
      </section>
      <section className="more-details">
        <div className="video">
          <Image src={WEB} alt="photo" />
        </div>
        <div className="info">
          <h3>Web development masterclass, front and backend devs.</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur. Vulputate cum neque sagittis
            sed sed nunc. Vel scelerisque bibendum sed ipsum amet urna pretium
            ullamcorper. Elementum consequat non tempus aliquam. Adipiscing diam
            donec a scelerisque scelerisque mauris amet.
          </p>
          <button type="button">Learn more</button>
        </div>
      </section>
      <section className="metrics">
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
