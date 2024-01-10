import React from 'react'
import CommGroup from '../../../../public/svgs/community-group.svg';
import Image from 'next/image';
import SecondaryButton from '@/components/utils/components/SecondaryButton';

const AboutCommunity = () => {
  return (
    <div>
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
    </div>
  );
}

export default AboutCommunity