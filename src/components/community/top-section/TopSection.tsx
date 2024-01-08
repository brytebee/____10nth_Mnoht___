import React from 'react';
import CommGroup from '../../../../public/svgs/community-group.svg';
import DevsGroup from '../../../../public/svgs/devs.svg';
import Events from '../../../../public/svgs/events.svg';
import Stories from '../../../../public/svgs/stories.svg';
import Image from 'next/image';
import Animation from '../animation/Animation';

type Props = {};

const TopSection = (props: Props) => {
  return (
    <div className="p-4">
      <section className="flex flex-col-reverse lg:flex-row pb-8 text-center justify-around lg:py-32">
        <div className="lg:w-1/2 lg:flex lg:flex-col lg:justify-center lg:px-6">
          <div className="lg:text-left">
            <p className="text-[25px] lg:text-[45px] pb-2 font-bold leading-9 lg:leading-[60px]">
              We bring a wealth of skills and experience from a wide range of
              background
            </p>
            <div className="py-6">
              <button className="w-[134px] lg:text-[24px] lg:w-[267px] py-[10px] px-[24px] bg-[#D97508] text-white text-primary rounded-[10px]">
                Get Started
              </button>
            </div>
          </div>
        </div>
        <div className="pt-16 lg:pt-8">
          <Animation />
        </div>
      </section>
      <section className="lg:block hidden">
        <div className="flex flex-row text-center bg-com-about-us bg-cover bg-no-repeat w-full py-24">
          <div className="flex-1 flex justify-center">
            <Image src={CommGroup} alt="community" />
          </div>
          <div className="ss-right flex-1 text-left">
            <h2 className="font-bold text-3xl mt-10">About Our community</h2>
            <p className="text-xl pt-5 leading-[30px] pr-6">
              Welcome to the Techverse Community, where diverse experiences
              await, providing numerous opportunities for you to connect,
              interact, and collaborate with both fellow enthusiasts and
              seasoned technical experts.
            </p>
            <p className="pt-8 text-xl leading-[30px] pr-6">
              “A place where your technology journey is not merely an education
              – it's an exhilarating adventure!”
            </p>
            <div className="pt-[22px]">
              <button className="w-[134px] lg:w-[159px] py-[10px] px-[24px] justify-center text-center text-[#D97508] outline rounded-[10px]">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="lg:hidden">
        <div className="flex flex-col text-center bg-com-about-us bg-no-repeat w-full pt-12 pb-24">
          <h2 className="font-medium text-lg pb-4">About Our community</h2>
          <p className="text-sm leading-7">
            Welcome to the Techverse Community, where diverse experiences await,
            providing numerous opportunities for you to connect, interact, and
            collaborate with both fellow enthusiasts and seasoned technical
            experts.
          </p>
          <div className="py-8">
            <Image src={CommGroup} alt="community" />
          </div>
          <p className="text-sm">
            “A place where your technology journey is not merely an education –
            it's an exhilarating adventure!”
          </p>
          <div className="py-7">
            <button className="w-[134px] lg:w-[267px] py-[10px] px-[24px text-[#D97508] outline rounded-[10px] self-center">
              Learn More
            </button>
          </div>
        </div>
      </section>
      <section className="lg:pl-60 lg:pr-32">
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
        <section>
          <section className="text-sm lg:flex lg:pt-32">
            <div className="py-10 flex-1">
              <Image src={DevsGroup} alt="devs group" />
            </div>
            <div className="tds-right flex-1">
              <h4 className="font-semibold text-[22px] py-2">
                Hands on learning
              </h4>
              <p className="text-sm lg:text-[18px] leading-8">
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
              <p className="text-sm lg:text-[18px] leading-8">
                Elevate your tech prowess at Techverse events! Gain insights
                from experts, refine your resume and LinkedIn, and upskill for
                tech roles. With regular online events featuring industry
                leaders and senior developers, you can sign up for as many as
                you like. Stay tuned for our major annual conference and
                physical meetups across different cities – find the one closest
                to you! Techverse is here to guide your journey into the world
                of tech excellence.
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
              <h4 className="font-semibold text-[22px] py-2">
                Student Stories
              </h4>
              <p className="text-sm lg:text-[18px] leading-8">
                Thanks to the practical experience provided by Techverse, I
                could seamlessly translate my theoretical learning into
                real-life applications. When I sought job referrals, I had
                tangible evidence to showcase – my portfolio project developed
                during my time with Techverse. This not only reinforced my
                skills but also served as a compelling demonstration of the
                hands-on expertise I gained through the Techverse experience.
              </p>
            </div>
          </section>
        </section>
      </section>
    </div>
  );
};

export default TopSection;
