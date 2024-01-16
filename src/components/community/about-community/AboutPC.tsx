import React from 'react';
import CommGroup from '../../../../public/svgs/community-group.svg';
import Image from 'next/image';
import SecondaryButton from '@/components/utils/components/SecondaryButton';

const AboutPC = () => (
  <section className="lg:block hidden">
    <div className="text-center bg-com-about-us bg-cover bg-no-repeat py-24">
      <div className="flex flex-row">
        <div className="flex-1 flex justify-center">
          <Image src={CommGroup} alt="community" />
        </div>
        <div className="ss-right flex-1 text-left">
          <h2 className="font-bold text-3xl mt-10">About Our community</h2>
          <p className="text-xl pt-5 leading-[30px] pr-6">
            Welcome to the Techverse Community, where diverse experiences await,
            providing numerous opportunities for you to connect, interact, and
            collaborate with both fellow enthusiasts and seasoned technical
            experts.
          </p>
          <p className="pt-8 text-xl leading-[30px] pr-6">
            “A place where your technology journey is not merely an education –
            it&apos;s an exhilarating adventure!”
          </p>
          <div className="pt-[22px]">
            <SecondaryButton
              position="center"
              positionPC="left"
              px="138"
              pxpc="159"
              text="Learn More"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default AboutPC;
