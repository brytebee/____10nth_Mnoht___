import React from 'react';
import CommGroup from '../../../../public/svgs/community-group.svg';
import DevsGroup from '../../../../public/svgs/devs.svg';
import Events from '../../../../public/svgs/events.svg';
import Stories from '../../../../public/svgs/stories.svg';
import Image from 'next/image';

type Props = {};

const TopSection = (props: Props) => {
  return (
    <div className="p-4">
      <section className="flex flex-col-reverse lg:flex-col pb-8 text-center">
        <div className="ts-left">
          <p className="text-[25px] lg:text-[45px] pb-2 font-bold leading-9">
            We bring a wealth of skills and experience from a wide range of
            background
          </p>
          <div className="py-6">
            <button className="w-[134px] lg:w-[267px] py-[10px] px-[24px] bg-[#D97508] text-white text-primary rounded-[10px]">
              Get Started
            </button>
          </div>
        </div>
        <Image src={CommGroup} alt="rotating image" />
      </section>
      <section className="md:block hidden">
        <div className="flex flex-col-reverse text-center bg-com-about-us bg-cover w-full">
          <Image src={CommGroup} alt="community" />
          <div className="ss-right">
            <h2 className="font-medium text-lg">About Our community</h2>
            <p className="text-sm">
              Welcome to the Techverse Community, where diverse experiences
              await, providing numerous opportunities for you to connect,
              interact, and collaborate with both fellow enthusiasts and
              seasoned technical experts.
            </p>
            <button className="w-[134px] lg:w-[267px] py-[10px] px-[24px] justify-center text-center text-[#D97508] outline rounded-[10px]">
              Learn More
            </button>
          </div>
        </div>
      </section>
      <section className="md:hidden">
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
      <section className="text-center">
        <h4 className="font-medium text-lg pb-4">How we help our students</h4>
        <p className="text-sm leading-7">
          At Techverse Community, feel <br /> less alone in your learning,
          mutual support is the cornerstone of our shared learning journey.
          Here, we believe in fostering an environment that empowers every
          student to thrive. Through various community engagements, we provide
          you with abundant opportunities to enhance your expertise in the areas
          that align with your aspirations and career goals.
        </p>
      </section>
      <section className="text-sm">
        <div className="py-10">
          <Image src={DevsGroup} alt="devs group" />
        </div>
        <div className="tds-right">
          <h4 className="font-medium text-lg py-2">Hands on learning</h4>
          <p className="text-sm leading-7">
            At Techverse, we believe in the power of hands-on learning to shape
            proficient tech enthusiasts. Our teaching techniques prioritize
            practical, experiential engagement over passive instruction. Through
            hands-on learning, students actively apply theoretical knowledge to
            real-world scenarios, gaining valuable practical skills and
            problem-solving abilities
          </p>
        </div>
      </section>
      <section className="flex flex-col-reverse">
        <div className="fts-left">
          <h4 className="font-medium text-lg py-2">Events</h4>
          <p className="text-sm leading-7">
            Lorem ipsum dolor sit amet consectetur. Vulputate cum neque sagittis
            sed sed nunc. Vel scelerisque bibendum sed ipsum amet urna pretium
            ullamcorper. Elementum consequat non tempus aliquam. Adipiscing diam
            donec a scelerisque scelerisque mauris amet.
          </p>
        </div>
        <div className="py-10">
          <Image src={Events} alt="devs group" />
        </div>
      </section>
      <section>
        <div className="py-10">
          <Image src={Stories} alt="devs group" />
        </div>
        <div className="fts-left">
          <h4 className="font-medium text-lg py-2">Student Stories</h4>
          <p className="text-sm leading-7">
            Thanks to the practical experience provided by Techverse, I could
            seamlessly translate my theoretical learning into real-life
            applications. When I sought job referrals, I had tangible evidence
            to showcase – my portfolio project developed during my time with
            Techverse. This not only reinforced my skills but also served as a
            compelling demonstration of the hands-on expertise I gained through
            the Techverse experience.
          </p>
        </div>
      </section>
    </div>
  );
};

export default TopSection;