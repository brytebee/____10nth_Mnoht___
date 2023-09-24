'use client';

import React, { useState } from "react";
import Link from "next/link";
import HamburgerIcon from '../../../public/svgs/hamburger-menu.svg'
import Image from 'next/image'
import TechverseLogo from '../../../public/svgs/techverse-logo.svg'

type Props = {};

const NavBar = (props: Props) => {
  const [openNavbar, setOpenNavbar] = useState(false);
  const navMenus = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Our Community", path: "/community" },
    { name: "About", path: "/about" },
    { name: "Contact Us", path: "/contact" },
  ];
  return <nav className="w-full bg-white">
    <div className="justify-between px-2 mx-auto lg:max-w-7xl md:items-center md:flex md:px-0">
      <div>
        <div className="flex items-center justify-between py-3 md:py-4 md:block">
          <Link href="/" className="">
            <Image src={TechverseLogo} alt="Techverse Logo" className="w-[150px] h-[60px] md:w-[233px]"/>
          </Link>
          <div className="md:hidden">
            <button
              className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
              onClick={() => setOpenNavbar(!openNavbar)}
            >
              {openNavbar ? (
                <span className="text-body">X</span>
              ) : (
                <Image src={HamburgerIcon} alt="Hamburger Icon" />
              )}
            </button>
          </div>
        </div>
      </div>
      <div>
        <div
          className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${openNavbar ? "block" : "hidden"
            }`}
        >
          <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
            {navMenus.map(({ name, path }, index) => (
              <li key={index} className="text-body text-[16px]">
                <Link href={path}>{name}</Link>
              </li>
            ))}
            <button className="flex py-[10px] px-[24px] justify-center items-center bg-primary text-white rounded-[10px] md:hidden">Get Started</button>
          </ul>
        </div>
      </div>
      <button className='md:flex py-[10px] px-[24px] justify-center items-center bg-primary text-white rounded-[10px] hidden'>Get Started</button>
    </div>
  </nav>;
};

export default NavBar;
