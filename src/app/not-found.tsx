'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import error from '../../public/svgs/error2.svg';
import errorArrow from '../../public/svgs/arrow_forward_error.svg';
import UnderConst from '../../public/svgs/under-const.svg';
import { courses } from './staticData/data';
import { usePathname } from 'next/navigation';

const NotFoundTabPage = () => {
  const path = usePathname();
  const appRoutes = [
    '/',
    '/courses',
    '/about',
    '/community',
    '/contact',
    '/services',
    '/terms-and-conditions',
    '/faqs',
    '/join',
  ];

  courses.forEach((course) =>
    appRoutes.push(`/courses/${course.name.replaceAll(' ', '_').toLowerCase()}`)
  );

  const routeExists = appRoutes.includes(path);

  return (
    <div className={routeExists ? 'lg:h-[70vh]' : 'lg:h-[50vh]'}>
      <main
        className={
          routeExists
            ? 'text-center lg:flex lg:flex-column items-center mt-2 md:mt-8 lg:mt-[8px]'
            : 'text-center lg:flex lg:flex-column items-center mt-2 md:mt-8 lg:mt-[100px]'
        }
      >
        <div className="text-center mx-auto w-full lg:flex-5 lg:flex-1">
          <Image
            src={routeExists ? UnderConst : error}
            width={routeExists ? 650.443 : 250.443}
            height={routeExists ? 350.443 : 320.22}
            alt="error"
            className="mx-auto"
          />
        </div>
        <p className="px-5 font-poppins text-[16px] font-medium not-italic md:text-[20px] lg:text-[30px] lg:flex-1">
          {routeExists
            ? 'Opps sorry page is under construction - Return to'
            : 'Opps sorry page not found - Return to'}
        </p>
        <Link href="/" className="no-underline lg:flex-2">
          <button
            type="button"
            className="text-center lg:flex lg:items-center m-[50px] lg:w-[220px] w-[171px] lg:gap-[10px] gap-[5px] lg:rounded-[25px] rounded-[15px] bg-[#D97508] lg:h-[60px] h-[50px] lg:px-[30px] px-[15px] font-poppins not-italic border-none"
          >
            <span className="text-center lg:text-[16px] md:text-[20px] font-medium">
              Homepage
            </span>
            <Image
              src={errorArrow}
              width={30}
              height={30}
              alt="arrow"
              className="inline w-[20px] h-[20px] md:w-[30px] md:h-[30px]"
            />
          </button>
        </Link>
      </main>
    </div>
  );
};

export default NotFoundTabPage;
