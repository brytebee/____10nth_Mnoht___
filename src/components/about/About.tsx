import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import line from '../../../public/svgs/about-line.svg';
import leftPolygon from '../../../public/svgs/left-polygon.svg';
import leftPolygon2 from '../../../public/svgs/left-polygon2.svg';
import choose from '../../../public/svgs/about-choose.svg';
import polygon1 from '../../../public/svgs/Polygon-1.svg';
import polygon2 from '../../../public/svgs/Polygon-2.svg';
import Bright from '../../../public/svgs/Bright.svg';
import ab from '../../../public/svgs/ab.svg';
import anny from '../../../public/svgs/anny.svg';
import polygon4 from '../../../public/svgs/Polygon-4.svg';
import polygon12 from '../../../public/svgs/Polygon-12.svg';
import insta from '../../../public/svgs/instagram.svg';
import twitter from '../../../public/svgs/twitter.svg';
import linkedIn from '../../../public/svgs/linkedin.svg';
import facebook from '../../../public/svgs/facebook.svg';

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
          At Techverse, we are passionate about technology and education. We
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
            <li
              className="md:w-[500px] w-[320px]
 text-[#333]
font-normal
md:text-[22px] text-[18px]
leading-[32px] font-serif "
            >
              <span className="font-extrabold">Small Class Sizes:</span> We keep
              our class sizes small to ensure that you receive personalized
              attention and support from your instructors
            </li>
            <li
              className="md:w-[540px] w-[320px]
 text-[#333]
font-normal
md:text-[22px] text-[18px]
leading-[32px] font-serif "
            >
              <span className="font-extrabold">
                Strong Industry Connections:
              </span>{' '}
              We have established partnerships with leading tech companies and
              organizations to provide you with networking opportunities, job
              placement assistance, and real-world projects.
            </li>
            <li
              className="md:w-[540px] w-[320px]
 text-[#333]
font-normal
md:text-[22px] text-[18px]
leading-[32px] font-serif "
            >
              <span className="font-extrabold">Diverse Community:</span> We
              welcome students from all backgrounds, fostering a diverse and
              inclusive learning environment that encourages collaboration and
              innovation
            </li>
            <li
              className="md:w-[550px] w-[320px]
 text-[#333]
font-normal
md:text-[22px] text-[18px]
leading-[32px] font-serif "
            >
              <span className="font-extrabold">Career Support:</span> Our career
              services team is dedicated to helping you achieve your
              professional goals. From resume building to interview preparation,
              we are here to support your career journey.
            </li>
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
        <div className="md:hidden flex flex-col justify-center items-center mt-[-50px]">
          <ul className="flex flex-col justify-center items-center gap-[20px]">
            <li className="flex flex-col justify-center items-center gap-[10px]">
              <span
                className="text-[#333]
text-center
font-black
md:text-[40px] text-[20px]
leading-[120%] font-serif "
              >
                Our Programs
              </span>
              <span>
                {' '}
                <Image
                  src={line}
                  height={2}
                  width={250}
                  alt="line"
                  className="md:w-[250px] w-[125px]"
                />
              </span>
            </li>
            <li
              className="w-[248px]
 text-[#333]
font-semibold
text-[18px]
text-center
leading-[32px] font-serif "
            >
              At Techverse, we offer a wide range of programs in areas like
            </li>
            <li
              className="w-[228px]
 text-[#333]
font-bold
text-[18px]
text-center
leading-[32px] font-serif "
            >
              Web Development Computer Appreciation Graphic Design Data Science
              and Analytics UI UX Design Product Management Digital Marketing
              and <span className="text-[#A63F0E]">more!</span>
            </li>
            <li>
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
      <div className="hidden md:flex my-[100px] flex-col justify-center items-center gap-[50px]">
        <ul className="flex flex-col gap-[20px] justify-center items-center">
          <li
            className="text-[#333]
text-center
font-black
text-[30px]
leading-[120%] font-serif "
          >
            Meet our team
          </li>
          <li>
            <Image src={line} height={2} width={214} alt="line" />
          </li>
          <li
            className="
 text-[#333]
font-normal
text-[22px]
leading-[32px] font-serif "
          >
            At Techverse, we offer a wide range of programs in areas such as:
          </li>
        </ul>
        <ul className="flex gap-[100px] items-center">
          <li className="flex flex-col justify-center items-center">
            <span>
              <Image src={Bright} height={100} width={100} alt="line" />
            </span>
            <span
              className="text-[#333]
text-center
font-medium
text-[18px]
leading-[32px]"
            >
              Bright Atsighi
            </span>
            <span
              className="text-[#333]
text-center
font-semibold italic
text-[20px]
leading-[32px]"
            >
              Senior full-stack developer
            </span>
            <span className="flex gap-[5px]">
              <Link href="https://www.instagram.com/bryte_bee/" target="_blank">
                <Image src={insta} height={20} width={20} alt="line" />
              </Link>
              <Link
                href="https://twitter.com/brytebee?t=1v6gVd9yOPNOhXvwHbKLSA&s=09"
                target="_blank"
              >
                <Image src={twitter} height={20} width={20} alt="line" />
              </Link>
              <Link href="https://www.linkedin.com/in/brytebee" target="_blank">
                <Image src={linkedIn} height={20} width={20} alt="line" />
              </Link>
              <Link
                href="https://www.facebook.com/brytebee?mibextid=ZbWKwL"
                target="_blank"
              >
                <Image src={facebook} height={20} width={20} alt="line" />
              </Link>
            </span>
          </li>
          <li className="flex flex-col justify-center items-center">
            <span>
              <Image src={ab} height={100} width={100} alt="line" />
            </span>
            <span
              className="text-[#333]
text-center
font-medium
text-[18px]
leading-[32px]"
            >
              Success whyte
            </span>
            <span
              className="text-[#333]
text-center
font-semibold italic
text-[20px]
leading-[32px]"
            >
              UI/UX designer
            </span>
            <span className="flex gap-[5px]">
              <Image src={insta} height={20} width={20} alt="line" />{' '}
              <Image src={twitter} height={20} width={20} alt="line" />{' '}
              <Image src={linkedIn} height={20} width={20} alt="line" />{' '}
              <Image src={facebook} height={20} width={20} alt="line" />
            </span>
          </li>
          <li className="flex flex-col justify-center items-center">
            <span>
              <Image src={anny} height={100} width={100} alt="line" />
            </span>
            <span
              className="text-[#333]
text-center
font-medium
text-[18px]
leading-[32px]"
            >
              Anny Udo
            </span>
            <span
              className="text-[#333]
text-center
font-semibold italic
text-[20px]
leading-[32px]"
            >
              Senior full-stack developer
            </span>
            <span className="flex gap-[5px]">
              <Link href="https://www.instagram.com/udoanny/" target="_blank">
                <Image src={insta} height={20} width={20} alt="line" />
              </Link>
              <Link
                href="https://twitter.com/Annyudo8?t=1v6gVd9yOPNOhXvwHbKLSA&s=09"
                target="_blank"
              >
                <Image src={twitter} height={20} width={20} alt="line" />
              </Link>
              <Link
                href="https://www.linkedin.com/in/aniekan-udo"
                target="_blank"
              >
                <Image src={linkedIn} height={20} width={20} alt="line" />
              </Link>
              <Link
                href="https://www.facebook.com/aniekan.udo1?mibextid=ZbWKwL"
                target="_blank"
              >
                <Image src={facebook} height={20} width={20} alt="line" />
              </Link>
            </span>
          </li>
        </ul>
        <ul className="flex gap-[100px] items-center pl-0">
          <li className="flex flex-col justify-center items-center">
            <span>
              <Image src={Bright} height={100} width={100} alt="line" />
            </span>
            <span
              className="text-[#333]
text-center
font-medium
text-[18px]
leading-[32px]"
            >
              Ola Ishola
            </span>
            <span
              className="text-[#333]
text-center
font-semibold italic
text-[20px]
leading-[32px]"
            >
              Senior full-stack developer
            </span>
            <span className="flex gap-[5px]">
              <Image src={insta} height={20} width={20} alt="line" />{' '}
              <Image src={twitter} height={20} width={20} alt="line" />{' '}
              <Image src={linkedIn} height={20} width={20} alt="line" />{' '}
              <Image src={facebook} height={20} width={20} alt="line" />
            </span>
          </li>
          <li className="flex flex-col justify-center items-center">
            <span>
              <Image src={Bright} height={100} width={100} alt="line" />
            </span>
            <span
              className="text-[#333]
text-center
font-medium
text-[18px]
leading-[32px]"
            >
              Oke Oluwasegun
            </span>
            <span
              className="text-[#333]
text-center
font-semibold italic
text-[20px]
leading-[32px]"
            >
              Product Manager
            </span>
            <span className="flex gap-[5px]">
              <Image src={insta} height={20} width={20} alt="line" />{' '}
              <Image src={twitter} height={20} width={20} alt="line" />{' '}
              <Image src={linkedIn} height={20} width={20} alt="line" />{' '}
              <Image src={facebook} height={20} width={20} alt="line" />
            </span>
          </li>
        </ul>
        <ul className="flex flex-col items-center justify-center">
          <li
            className="w-[612px] text-[#333]
text-center
font-normal
text-[18px]
leading-[32px]
"
          >
            “Lorem ipsum dolor sit amet consectetur. Vulputate cum neque
            sagittis sed sed nunc. Vel scelerisque bibendum sed ipsum amet urna
            pretium ullamcorper. Elementum consequat non tempus aliquam.
            Adipiscing diam donec a scelerisque scelerisque mauris amet.”
          </li>
        </ul>
      </div>
      <div className="flex flex-col justify-center items-center gap-[30px] bg-[#F2F2F2] md:p-[100px] p-[30px]">
        <ul className="flex flex-col justify-center items-center md:gap-[50px] gap-[10px]">
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
            Join us at Techverse, where the future is yours to create. Your tech
            journey starts here.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default About;
