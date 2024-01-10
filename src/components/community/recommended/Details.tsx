import React from 'react';
import PrimaryButton from '@/components/utils/components/PrimaryButton';
import Image from 'next/image';
import WEB from '../../../../public/svgs/web-development.svg';

const Details = () => {
  return (
    <section className="more-details lg:flex mb-2">
      <div className="video lg:flex-1 pr-16">
        <Image src={WEB} alt="photo" />
      </div>
      <div className="info p-4 bg-[#A63F0E] text-white lg:flex-1">
        <div className=" lg:flex lg:flex-col lg:text-left pt-12">
          <h3 className="font-bold text-[20px] lg:text-[25px] py-4 lg:pt-8 lg:w-[60%]">
            Web development masterclass, front and backend devs.
          </h3>
          <p className="lg:w-[75%]">
            Lorem ipsum dolor sit amet consectetur. Vulputate cum neque sagittis
            sed sed nunc. Vel scelerisque bibendum sed ipsum amet urna pretium
            ullamcorper. Elementum consequat non tempus aliquam. Adipiscing diam
            donec a scelerisque scelerisque mauris amet.
          </p>
          <PrimaryButton
            position="center"
            positionPC="left"
            px="139"
            pxpc="159"
            text="See more"
          />
        </div>
      </div>
    </section>
  );
};

export default Details;
