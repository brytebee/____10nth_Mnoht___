'use client';

import React from "react";
import Image from 'next/image'
import TechverseLogo from '../../../public/svgs/techverse-logo.svg'
import Links from "./Links";
import useMediaQuery from "@/hooks/useMediaQuery";

const Footer = () => {
  const isMobile = useMediaQuery("(min-width: 900px)");
  const footerHeaders = [
    {
      title: "Company", links: [
        { name: "About Us", path: "/about" },
        { name: "Our Services", path: "/courses" },
        { name: "Privacy Policy", path: "/privacy-policy" },
        { name: "Terms and Conditions", path: "/terms-and-conditions" }
      ]
    },
    {
      title: "Quick links", links: [
        { name: "Resources", path: "/resources" },
        { name: "Join Us", path: "/community" },
        { name: "FAQs", path: "/faqs" },

      ]
    },
    {
      title: "Contact Us", links: [
        { name: "Email", path: "mailto:techverseacademy23@gmail.com" },
        { name: "+2347066324306", path: "#" },
        { name: "WhatsApp", path: "https://wa.me/2347066324306" },
      ]
    },
  ]
  return (
    <footer className="pt-[32px] bg-body w-full md:pt-20 relative">
      <section className="px-5 md:flex justify-between md:pb-32 md:w-full md:mx-auto md:px-3 lg:px-4 lg:w-10/12 lg:mx-0 lg:ml-10">
        <section className="flex flex-col gap-10">
          <div className="relative">
            <Image src={TechverseLogo} alt="Techverse Logo" className="w-[150px] h-[60px] md:w-[233px]" />
            <p className="text-white text-[12px] leading-4 font-normal absolute top-14">where knowledge meets innovation</p>
          </div>

          <div className="flex flex-col gap-[3px] w-full rounded-md relative md:w-[280px] lg:w-[420px]">
            <h4 className="text-white text-[14px] leading-5 font-medium lg:hidden">Sign up for our newsletter</h4>
            <div>
              <input type="email" name="email" placeholder="Enter your email" className="w-full py-3 px-2 md:pl-1 lg:px-2 rounded-md" />
              <button type="button" className="bg-primary text-white text-sm w-[111px] md:w-[100px] py-3 px-3 md:px-1 lg:px-1 lg:w-[180px] rounded-md shadow-[0px 7px 52px 0px] absolute right-1 bottom-0.5">{isMobile ? 'Sign up for newsletter' : 'Sign up'}</button>
            </div>
          </div>
        </section>

        <section className="flex flex-col gap-8 py-8 md:flex-row md:gap-[30px] lg:gap-[80px]">
          {footerHeaders.map(({ title, links }, index) => (
            <Links key={index} data={links} heading={title} />
          ))}
        </section>
      </section>
      <section className="pb-[71px] border-t">
        <p className="mt-1.5 text-white text-xs px-5 md:px-3 lg:ml-10">{`© ${new Date().getFullYear()} TechVerse. All rights reserved.`}</p>
      </section>
    </footer>
  )
};

export default Footer;
