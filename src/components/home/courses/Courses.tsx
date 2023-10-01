import React from 'react';
import CoursesMobile from './CoursesMobile';
import CoursesLargeScreens from './CoursesLarge';
import Link from 'next/link';

type Props = {};

export default function Courses({}: Props) {
  const courses = [
    {
      name: 'Web Development',
      description:
        'Learn how to build websites and web applications using HTML, CSS, JavaScript, React, and more.',
    },
    {
      name: 'Product Management',
      description:
        'Learn how to build websites and web applications using HTML, CSS, JavaScript, React, and more.',
    },
    {
      name: 'UI/UX Design',
      description:
        'Learn how to build websites and web applications using HTML, CSS, JavaScript, React, and more.',
    },
    {
      name: 'Digital Marketing',
      description:
        'Learn how to build websites and web applications using HTML, CSS, JavaScript, React, and more.',
    },
    {
      name: 'Graphics Design',
      description:
        'Learn how to build websites and web applications using HTML, CSS, JavaScript, React, and more.',
    },
  ];
  return (
    <section className="w-full bg-mobile-bg-color mt-10 pb-10 px-4 flex flex-col gap-6 lg:bg-mobile-bg md:bg-mobile-bg lg:pt-12 md:pt-11 md:px-8 lg:px-32">
      <div className="flex flex-col gap-4 lg:gap-5 lg:items-center lg:justify-center md:items-center md:mb-20">
        <h3 className="text-body text-2xl font-black lg:text-3xl">
          Our Popular Courses
        </h3>
        <p className="text-base w-full md:w-11/12 lg:w-[902px] lg:text-base text-justify md:text-center font-light">
          Our curriculum is designed by industry experts who are at the
          forefront of technological advancements. From programming languages
          like Python and JavaScript to emerging fields like artificial
          intelligence and blockchain, our courses cover a wide range of
          in-demand topics.
        </p>
      </div>
      <CoursesLargeScreens />
      <CoursesMobile courses={courses} />
      <div className="px-6 py-9 border border-secondary rounded md:border-none md:px-0 md:border">
        <div className="flex flex-col gap-9 items-center justify-center">
          <h4 className="text-body text-lg lg:text-3xl md:text-2xl font-semibold w-[275px] md:text-center lg:w-[911px] md:w-[700px]">
            Start as a newbie and become a pro in 6 months and start applying
            for that dream job
          </h4>
          <Link
            target="_blank"
            className="text-none"
            href="https://docs.google.com/forms/d/e/1FAIpQLSeJBFggDSCgE35rA19W1gjqddo8jlXprs6002C_1L3lYqPDzw/viewform"
          >
            <button
              type="button"
              className="border-none py-3 px-6 text-white bg-primary rounded-[10px] md:w-[235px]"
            >
              Enroll now
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
