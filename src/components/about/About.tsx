import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import line from '../../../public/svgs/about-line.svg';
import leftPolygon from '../../../public/svgs/left-polygon.svg';
import leftPolygon2 from '../../../public/svgs/left-polygon2.svg';
import choose from '../../../public/svgs/about-choose.svg';
import polygon1 from '../../../public/svgs/Polygon-1.svg';
import polygon2 from '../../../public/svgs/Polygon-2.svg';
import polygon4 from '../../../public/svgs/Polygon-4.svg';
import polygon12 from '../../../public/svgs/Polygon-12.svg';
import { team, team2, chooseUsData } from './aboutUsData';

interface Props {
  // Add props here
}

const About: React.FC<Props> = (props) => {
  return (
    <div>
      <div
        className="md:bg-about-bg bg-about-bg-mobile bg-cover w-full
md:h-[504px] h-[350px] flex flex-col justify-center items-center text-center md:mt-[-170px] mt-0"
      >
        <p
          className="text-white font-semibold md:text-[20px] text-[16px] w-[344px] md:w-[1052px]
md:h-[82px] h-[200px] font-serif 
"
        >
          At TechVerse, we are passionate about technology and education. We
          believe that the future belongs to those who can harness the power of
          technology to create, innovate, and solve complex problems. Our
          mission is to empower individuals with the knowledge and skills they
          need to thrive in the digital age.
        </p>
      </div>
      <div className="md:py-[100px] py-[50px] flex flex-col lg:flex-row md:gap-[150px] gap-[50px] bg-[#F2F2F2]">
        <ul className=" md:hidden ml-[90%] absolute">
          {' '}
          <Image
            src={polygon1}
            height={40}
            width={40}
            alt="polygon"
            className=" mt-[-70px]"
          />
          <Image
            src={polygon2}
            height={40}
            width={40}
            alt="polygon"
            className=" mt-[-100px]"
          />
        </ul>
        <ul className="hidden md:block">
          {' '}
          <Image
            src={leftPolygon}
            height={50}
            width={50}
            alt="polygon"
            className="absolute z-10 mt-[220px]"
          />
          <Image
            src={leftPolygon2}
            height={50}
            width={50}
            alt="polygon"
            className="absolute  mt-[160px]"
          />
        </ul>
        <ul className="flex flex-col md:gap-[20px] items-center gap-[10px]">
          <li
            className="text-[#333]
text-center
font-black
md:text-[40px] text-[20px]
leading-[120%] font-serif "
          >
            Our Vision
          </li>
          <li>
            <Image
              src={line}
              height={2}
              width={200}
              alt="line"
              className="w-[100px] md:w-[200px]"
            />
          </li>
        </ul>
        <ul className="pl-0 flex flex-col items-center justify-center">
          <li
            className="md:w-[753px] w-[358px] text-[#333]
font-normal text-center md:text-left
md:text-[22px] text-[18px]
leading-[32px] font-serif"
          >
            Our vision is to be a leading institution in technology education,
            known for producing industry-ready professionals and fostering a
            culture of continuous learning and innovation. Our dedicated team of
            experienced instructors and industry experts are committed to
            providing you with the highest quality education. They bring
            real-world experience and insights into the classroom.
            <br /> <br />
            Our curriculum is designed to keep pace with the rapidly evolving
            tech industry. We constantly update our courses to ensure that you
            are learning the most relevant and in-demand skills.
          </li>
        </ul>
      </div>
      <div className="flex flex-col items-center justify-center md:py-[50px] py-[10px] bg-[#F2F2F2]">
        <ul className="flex flex-col items-center gap-[5px]">
          <li
            className="text-[#333]
text-center
font-black
md:text-[30px] text-[20px]
leading-[120%] font-serif "
          >
            Why Choose Us?
          </li>
          <li>
            <Image
              src={line}
              height={2}
              width={250}
              alt="line"
              className="md:w-[250px] w-[125px]"
            />
          </li>
        </ul>
        <div className="flex md:flex-row flex-col-reverse md:gap-[100px] gap-[20px] my-[70px] mx-[50px]">
          <ul className="flex flex-col gap-[20px]">
            {chooseUsData.map((item) => (
              <li
                key={item.id}
                className="md:w-[550px] w-[320px] text-[#333] font-normal md:text-[22px] text-[18px] leading-[32px] font-serif "
              >
                <span className="font-extrabold">{item.bullet}</span>{item.text}
              </li>
            ))}
          </ul>
          <ul className="flex flex-col justify-center items-center md:items-start md:justify-start gap-[20px]">
            <li>
              <Image
                src={choose}
                height={333}
                width={499}
                alt="images"
                className="w-[312px]
h-[208px] md:w-[499px] md:h-[333px]
"
              />
            </li>
            <li
              className="md:w-[540px] w-[320px]
 text-[#333]
font-normal
md:text-[22px] text-[18px]
leading-[32px] font-serif "
            >
              <span className="font-extrabold">Hands-On Learning:</span> We
              believe that the best way to learn is by doing. That&apos;s why
              our programs emphasize practical, hands-on experience through
              projects, labs, and internships.
            </li>
          </ul>
        </div>
        <div className="flex md:flex-row flex-col md:gap-[700px] gap-[1200px] absolute md:static mt-[-80px]">
          <Image
            src={polygon4}
            height={80}
            width={80}
            alt="polygon"
            className="ml-[150px] md:ml-0 w-[40px] md:w-[80px] h-[40px] md:h-[80px] md:mt-[40px]"
          />
          <Image
            src={polygon12}
            height={150}
            width={150}
            alt="polygon"
            className="md:w-[150px] md:h-[150px] w-[75px] h-[75px]"
          />
        </div>
      </div>
      <div className="md:hidden flex bg-[#F2F2F2] py-[20px] flex-col">
        <ul className="md:hidden block">
          {' '}
          <Image
            src={leftPolygon}
            height={40}
            width={40}
            alt="polygon"
            className="absolute z-10 mt-[-130px]"
          />
          <Image
            src={leftPolygon2}
            height={40}
            width={40}
            alt="polygon"
            className="absolute  mt-[-80px]"
          />
        </ul>
      </div>
      <div className="flex md:my-[100px] my-[40px] flex-col justify-center items-center md:gap-[50px] gap-[20px]">
        <ul className="flex flex-col gap-[20px] justify-center items-center">
          <li
            className="text-[#333]
text-center
font-black
md:text-[30px] text-[20px]
leading-[120%] font-serif "
          >
            Meet Our Team
          </li>
          <li>
            <Image
              src={line}
              height={2}
              width={214}
              alt="line"
              className="md:w-[214px] w-[200px]"
            />
          </li>
          <li
            className="
 text-[#333]
font-normal
md:text-[22px] text-[18px]
leading-[32px] font-serif "
          >
            Meet our team of professionals
          </li>
        </ul>
        <ul className="flex flex-col md:flex-row md:gap-[100px] gap-[20px] items-center">
          {team.map((item) => (
            <li
              className="flex flex-col justify-center items-center"
              key={item.id}
            >
              <span>
                <Image
                  src={item.img}
                  height={100}
                  width={100}
                  alt="line"
                  className="md:h-[100px] h-[80px] md:w-[100px] w-[80px]"
                />
              </span>
              <span
                className="text-[#333]
text-center
font-medium
md:text-[18px] text-[16px]
leading-[32px]"
              >
                {item.name}
              </span>
              <span
                className="text-[#333]
text-center
font-semibold italic
md:text-[20px] text-[18px]
leading-[32px]"
              >
                {item.designation}
              </span>
              <span className="flex gap-[5px]">
                <Link href={item.instaLink} target="_blank">
                  <Image src={item.insta} height={20} width={20} alt="line" />
                </Link>
                <Link href={item.twitterLink} target="_blank">
                  <Image src={item.twitter} height={20} width={20} alt="line" />
                </Link>
                <Link href={item.linkedInLink} target="_blank">
                  <Image
                    src={item.linkedIn}
                    height={20}
                    width={20}
                    alt="line"
                  />
                </Link>
                <Link href={item.facebookLink} target="_blank">
                  <Image
                    src={item.facebook}
                    height={20}
                    width={20}
                    alt="line"
                  />
                </Link>
              </span>
            </li>
          ))}
        </ul>
        <ul className="flex flex-col md:flex-row md:gap-[100px] gap-[20px] items-center pl-0">
          {team2.map((item) => (
            <li
              key={item.id}
              className="flex flex-col justify-center items-center"
            >
              <span>
                <Image
                  src={item.img}
                  height={100}
                  width={100}
                  alt="line"
                  className="md:h-[100px] h-[80px] md:w-[100px] w-[80px] rounded-full"
                />
              </span>
              <span
                className="text-[#333]
text-center
font-medium
md:text-[18px] text-[16px]
leading-[32px]"
              >
                {item.name}
              </span>
              <span
                className="text-[#333]
text-center
font-semibold italic
md:text-[20px] text-[18px]
leading-[32px]"
              >
                {item.designation}
              </span>
              <span className="flex gap-[5px]">
                <Link href={item.instaLink} target="_blank">
                  <Image src={item.insta} height={20} width={20} alt="line" />
                </Link>
                <Link href={item.twitterLink} target="_blank">
                  <Image src={item.twitter} height={20} width={20} alt="line" />
                </Link>
                <Image src={item.linkedIn} height={20} width={20} alt="line" />{' '}
                <Link href={item.facebookLink} target="_blank">
                  <Image
                    src={item.facebook}
                    height={20}
                    width={20}
                    alt="line"
                  />
                </Link>
              </span>
            </li>
          ))}
        </ul>
        <ul className="hidden md:flex flex-col items-center justify-center">
          <li
            className="w-[620px] text-[#333]
text-center
font-normal
text-[18px]
leading-[32px]
"
          >
            “At TechVerse, audacity is our shared trait. We are a united group
            of bold pioneers unafraid to challenge norms. Continually pushing
            boundaries and defying limits, we aspire to achieve the
            extraordinary. Our team is a dynamic mix of diverse talents and
            backgrounds, working together seamlessly to innovate and make a
            meaningful impact on the world.”
          </li>
        </ul>
      </div>
      <div className="flex flex-col justify-center items-center gap-[30px] bg-[#F2F2F2] md:p-[100px] p-[30px] pb-[100px]">
        <ul className="flex flex-col justify-center items-center md:gap-[50px] gap-[30px]">
          <li
            className="md:w-[1019px] w-[348px]
text-[#333]
font-normal
text-[22px]
text-center
leading-[32px] font-serif"
          >
            Whether you are a recent high school graduate looking to start your
            tech career or a working professional seeking to upskill, Techverse
            is here to help you achieve your goals. Explore our programs,
            connect with our admissions team, and embark on a journey of
            learning and growth with us.
          </li>
          <li>
            <Link
              href="https://docs.google.com/forms/d/e/1FAIpQLScxmLpdM08APFELCOPZO_LBHldZuHrb5PNhNK6G7CXtVp3gag/viewform"
              target="_blank"
            >
              <button
                className="hidden md:flex text-[#FFF]
font-serif
text-[18px]
font-bold
leading-[32px] rounded-[10px]
bg-[#D97508] flex
w-[218px]
py-[10px] px-[24px]
justify-center
items-center
gap-[4px] border-0"
              >
                Join Us
              </button>
            </Link>
          </li>
          <li
            className="text-[#333]
font-semibold
md:text-[22px] text-[20px]
text-center
leading-[32px] font-serif"
          >
            Join us at TechVerse, where the future is yours to create. Your tech
            journey starts here.
          </li>
          <li className="md:hidden flex">
            <Link
              href="https://docs.google.com/forms/d/e/1FAIpQLScxmLpdM08APFELCOPZO_LBHldZuHrb5PNhNK6G7CXtVp3gag/viewform"
              target="_blank"
            >
              <button
                className="text-[#FFF]
font-serif
text-[18px]
font-normal
leading-[120%]
              rounded-[10px]
bg-[#D97508] flex
w-[157px]
py-[12px] px-[25px]
justify-center
items-center
gap-[4px]"
              >
                Enroll now
              </button>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default About;
