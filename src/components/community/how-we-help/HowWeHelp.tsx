import React from 'react';
import DevsGroup from '../../../../public/svgs/devs.svg';
import Events from '../../../../public/svgs/events.svg';
import Stories from '../../../../public/svgs/stories.svg';
import Image from 'next/image';

const HowWeHelp = () => {
  return (
    <section className="p-6 lx:p-0 lg:pl-60 lg:pr-32 lg:mb-24">
      <section className="text-center lg:text-left">
        <h4 className="font-medium lg:font-bold text-lg lg:text-2xl lg:pt-32 pb-4">
          How we help our students
        </h4>
        <p className="text-sm lg:text-[18px] leading-8">
          At Techverse Community, feel less alone in your learning, mutual
          support is the cornerstone of our shared learning journey. Here, we
          believe in fostering an environment that empowers every student to
          thrive. Through various community engagements, we provide you with
          abundant opportunities to enhance your expertise in the areas that
          align with your aspirations and career goals.
        </p>
      </section>
      <section className="lg:bg-how-we-help bg-cover bg-no-repeat">
        <section className="text-sm lg:flex lg:pt-32">
          <div className="py-10 flex-1">
            <Image src={DevsGroup} alt="devs group" />
          </div>
          <div className="tds-right flex-1">
            <h4 className="font-semibold text-[22px] py-2">
              Hands on learning
            </h4>
            <p className="text-sm lg:text-[18px] leading-8 lg:w-[460px]">
              At Techverse, we believe in the power of hands-on learning to
              shape proficient tech enthusiasts. Our teaching techniques
              prioritize practical, experiential engagement over passive
              instruction. Through hands-on learning, students actively apply
              theoretical knowledge to real-world scenarios, gaining valuable
              practical skills and problem-solving abilities.
            </p>
          </div>
        </section>
        <section className="flex flex-col-reverse lg:flex-row lg:pt-32">
          <div className="fts-left flex-1">
            <h4 className="font-semibold text-[22px] py-2">Events</h4>
            <p className="text-sm lg:text-[18px] leading-8 lg:w-[460px]">
              Elevate your tech prowess at Techverse events! Gain insights from
              experts, refine your resume and LinkedIn, and upskill for tech
              roles. With regular online events featuring industry leaders and
              senior developers, you can sign up for as many as you like. Stay
              tuned for our major annual conference and physical meetups across
              different cities – find the one closest to you! Techverse is here
              to guide your journey into the world of tech excellence.
            </p>
          </div>
          <div className="py-10 flex-1">
            <Image src={Events} alt="devs group" />
          </div>
        </section>
        <section className="lg:flex lg:pt-32">
          <div className="py-10 flex-1">
            <Image src={Stories} alt="devs group" />
          </div>
          <div className="fts-left flex-1">
            <h4 className="font-semibold text-[22px] py-2">Student Stories</h4>
            <p className="text-sm lg:text-[18px] leading-8 lg:w-[460px]">
              Thanks to the practical experience provided by Techverse, I could
              seamlessly translate my theoretical learning into real-life
              applications. When I sought job referrals, I had tangible evidence
              to showcase – my portfolio project developed during my time with
              Techverse. This not only reinforced my skills but also served as a
              compelling demonstration of the hands-on expertise I gained
              through the Techverse experience.
            </p>
          </div>
        </section>
      </section>
    </section>
  );
};

export default HowWeHelp;
