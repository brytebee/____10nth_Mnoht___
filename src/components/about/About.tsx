import React from 'react';
import Image from 'next/image';
import line from '../../../public/svgs/about-line.svg';
import leftPolygon from '../../../public/svgs/left-polygon.svg';
import leftPolygon2 from '../../../public/svgs/left-polygon2.svg';

interface Props {
  // Add props here
}

const About: React.FC<Props> = (props) => {
  return (
    <div>
      <div
        className="bg-about-bg bg-cover w-full
h-[504px] flex flex-col justify-center items-center text-center mt-[-170px]"
      >
        <p
          className="text-white font-semibold text-[20px] w-[1052px]
h-[82px]
"
        >
          At Techverse, we are passionate about technology and education. We
          believe that the future belongs to those who can harness the power of
          technology to create, innovate, and solve complex problems. Our
          mission is to empower individuals with the knowledge and skills they
          need to thrive in the digital age.
        </p>
      </div>
      <div className="my-[100px] flex gap-[150px]">
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
        <ul className="flex flex-col gap-[20px] items-center">
          <li
            className="text-[#333]
text-center
font-black
text-[40px]
leading-[120%]"
          >
            Our Vision
          </li>
          <li>
            <Image src={line} height={2} width={200} alt="line" />
          </li>
        </ul>
        <ul className="pl-0">
          <li
            className="w-[753px] text-[#333]
font-normal
text-[22px]
leading-[32px]"
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
    </div>
  );
};

export default About;
