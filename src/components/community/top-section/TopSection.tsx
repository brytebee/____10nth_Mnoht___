import React from 'react';
import Animation from '../animation/Animation';
import PrimaryButton from '@/components/utils/components/PrimaryButton';
import HowWeHelp from '../how-we-help/HowWeHelp';
import AboutCommunity from '../about-community/AboutCommunity';

const TopSection = () => {
  return (
    <div className="p-4">
      <section className="flex flex-col-reverse lg:flex-row pb-8 text-center justify-around lg:py-32">
        <div className="lg:w-1/2 lg:flex lg:flex-col lg:justify-center lg:px-6">
          <div className="lg:text-left">
            <p className="text-[25px] lg:text-[45px] pb-2 font-bold leading-9 lg:leading-[60px]">
              We bring a wealth of skills and experience from a wide range of
              background
            </p>
            <div className="py-6 lg:text-xl">
              <PrimaryButton
                position="center"
                positionPC="left"
                text="Get Started"
                px="136"
                pxpc="267"
              />
            </div>
          </div>
        </div>
        <div className="pt-16 lg:pt-8">
          <Animation />
        </div>
      </section>
      <AboutCommunity />
      <HowWeHelp />
    </div>
  );
};

export default TopSection;
