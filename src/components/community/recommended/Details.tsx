import React from 'react';
import PrimaryButton from '@/components/utils/components/PrimaryButton';
import Image from 'next/image';
import WEB from '../../../../public/svgs/web-development.svg';
import { CourseCom } from '@/app/staticData/data';

type Props = {
  course: CourseCom;
};

const Details = ({ course }: Props) => {
  const { image, rating, student, title } = course;
  return (
    <section className="more-details lg:flex mb-2">
      <div className="video lg:flex-1 pr-16 w-32 h-32">
        <Image className=" w-3/5" src={image} alt="photo" />
      </div>
      <div className="info p-4 bg-[#A63F0E] text-white lg:flex-1">
        <div className=" lg:flex lg:flex-col lg:text-left pt-6">
          <h3 className="font-bold text-[20px] lg:text-[25px] py-4 lg:pt-8 lg:w-[60%]">
            {title}
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
