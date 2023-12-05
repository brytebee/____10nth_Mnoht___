'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import HamburgerIcon from '../../../public/svgs/hamburger-menu.svg';
import Image from 'next/image';
import TechverseLogo from '../../../public/svgs/techverse-logo.svg';
import { usePathname } from 'next/navigation';

const NavBar = () => {
  const [openNavbar, setOpenNavbar] = useState(false);
  const pathname = usePathname();
  const navMenus = [
    { name: 'Home', path: '/' },
    { name: 'Courses', path: '/courses' },
    { name: 'Our Community', path: '/community' },
    { name: 'About', path: '/about' },
    { name: 'Contact Us', path: '/contact' },
  ];

  return (
    <nav className="bg-inherit w-full relative fixed lg:mb-[84px] mb-[50px]">
      <div className={` ${pathname === '/about' ? 'bg-transparent' : 'bg-[#fff]'} flex items-center justify-between mx-auto py-3 px-2 md:px-1 lg:mx-0 lg:px-8 ${pathname === '/about' ? 'relative' : 'fixed'}   z-10 w-full top-0 `}>
        <Link href="/" className="flex items-center">
          <Image
            src={TechverseLogo}
            alt="Techverse Logo"
            className="w-[150px] md:w-[200px] lg:w-[233px]"
          />
        </Link>
        <div className="md:hidden">
          <button
            className="p-2 text-gray-700 rounded-md outline-none"
            onClick={() => setOpenNavbar(!openNavbar)}
          >
            {openNavbar ? (
              <span className="text-primary text-lg">X</span>
            ) : (
              <Image src={HamburgerIcon} alt="Hamburger Icon" />
            )}
          </button>
        </div>
        <div
          className={`w-full md:block md:w-auto ${
            openNavbar
              ? 'w-full flex flex-col gap-3 z-20 pb-7 bg-primary absolute top-16 right-0 md:relative'
              : 'hidden'
          }`}
        >
          <ul className="items-center justify-center space-y-4 p-4 md:pl-0 md:flex md:space-x-3 lg:space-x-8 md:space-y-0">
            {navMenus.map(({ name, path }, index) => (
              <li key={index}>
                <Link
                  href={path}
                  className={`block py-2 pl-3 pr-4 rounded ${
                    pathname === path
                      ? 'md:text-primary text-[18px] font-semibold leading-6 text-black'
                      : `text-white ${pathname === '/about' ? 'md:text-white':'md:text-body'} md:text-sm lg:text-lg`
                  } hover:bg-gray-100 hover:text-primary md:hover:bg-transparent md:p-0`}
                  aria-current={pathname === path ? 'page' : undefined}
                  onClick={() => setOpenNavbar(false)}
                >
                  {name}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            target="_blank"
            className="ml-5 w-[150px] py-[10px] px-[24px] justify-center items-center bg-white text-primary rounded-[10px] md:hidden"
            href="https://docs.google.com/forms/d/e/1FAIpQLSeJBFggDSCgE35rA19W1gjqddo8jlXprs6002C_1L3lYqPDzw/viewform"
          >
            Get Started
          </Link>
        </div>
        <Link
          target="_blank"
          className="md:flex py-[10px] px-[24px] md:px-[20px] justify-center items-center bg-primary text-white rounded-[10px] hidden"
          href="https://docs.google.com/forms/d/e/1FAIpQLSeJBFggDSCgE35rA19W1gjqddo8jlXprs6002C_1L3lYqPDzw/viewform"
        >
          Get Started
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
