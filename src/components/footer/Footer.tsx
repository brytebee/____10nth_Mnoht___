import React from "react";
import Image from 'next/image'
import Link from "next/link";
import TechverseLogo from '../../../public/svgs/techverse-logo.svg'
import Links from "./Links";

type Props = {};

const Footer = (props: Props) => {
  const footerHeaders = [
    {
      title: "Company", links: [
        { name: "About Us", path: "/about" },
        { name: "Our Services", path: "/services" },
        { name: "Privacy Policy", path: "/privacy-policy" },
        { name: "Terms and Conditions", path: "/terms-and-conditions" }
      ]
    },
    {
      title: "Quick links", links: [
        { name: "Resources", path: "/resources" },
        { name: "Join Us", path: "/join" },
        { name: "FAQs", path: "/faqs" },

      ]
    },
    {
      title: "Contact Us", links: [
        { name: "Email", path: "#" },
        { name: "Phone", path: "#" },
        { name: "WhatsApp", path: "#" },
      ]
    },
  ]
  return (
    <footer className="pt-[32px] bg-body w-full">
      <section className="px-5">
        <section className="flex flex-col gap-10">
          <div className="relative">
            <Image src={TechverseLogo} alt="Techverse Logo" className="w-[150px] h-[60px] md:w-[233px]" />
            <p className="text-white text-[12px] leading-4 font-normal absolute top-12">where knowledge meets innovation</p>
          </div>

          <div className="flex flex-col gap-[3px] w-full rounded-md relative">
            <h4 className="text-white text-[14px] leading-5 font-medium">Sign up for our newsletter</h4>
            <div>
              <input type="text" name="" placeholder="Enter your email" className="w-full py-3 px-4 rounded-md" />
              <button type="button" className="bg-primary text-white text-sm w-[111px] py-3 px-5 rounded-md shadow-[0px 7px 52px 0px] absolute right-1 bottom-0.5">Sign up</button>
            </div>
          </div>
        </section>

        <section className="flex flex-col gap-8 py-8">
          {footerHeaders.map(({ title, links }, index) => (
            <Links key={index} data={links} heading={title} />
          ))}
        </section>
      </section>
      <section className="pb-[71px] border-t">
        <p className="mt-1.5 text-white text-xs px-5">{`© ${new Date().getFullYear()} TechVerse. All rights reserved.`}</p>
      </section>
    </footer>
  )
};

export default Footer;
