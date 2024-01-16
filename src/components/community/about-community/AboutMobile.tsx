import React from 'react';
import CommGroup from '../../../../public/svgs/community-group.svg';
import Image from 'next/image';
import SecondaryButton from '@/components/utils/components/SecondaryButton';

const AboutMobile = () => (
  <section className="lg:hidden">
    <div className="flex flex-col text-center bg-com-about-us bg-cover bg-no-repeat px-4 py-8 mb-12">
      <h2 className="font-medium text-lg pb-4">About Our community</h2>
      <p className="text-sm leading-7">
        Welcome to the Techverse Community, where diverse experiences await,
        providing numerous opportunities for you to connect, interact, and
        collaborate with both fellow enthusiasts and seasoned technical experts.
      </p>
      <div className="py-8">
        <Image src={CommGroup} alt="community" />
      </div>
      <p className="text-sm">
        “A place where your technology journey is not merely an education –
        it&apos;s an exhilarating adventure!”
      </p>
      <div className="py-5">
        <SecondaryButton
          position="center"
          positionPC="right"
          px="138"
          pxpc="159"
          text="Read more"
        />
      </div>
    </div>
  </section>
);

export default AboutMobile;
