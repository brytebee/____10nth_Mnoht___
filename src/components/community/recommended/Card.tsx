import Image from 'next/image';
import React from 'react';
import RatingStars from './RatingStars';

type Props = {
  image: string;
  title: string;
  rating: number;
  student: number;
};

const Card = ({ title, rating, image, student }: Props) => {
  return (
    <section className="box-border m-4 h-[314px] shadow-lg bg-white text-center flex flex-col justify-center items-center bg-recom-cross-bg bg-cover bg-no-repeat">
      <section className="image">
        <Image src={image} width={200} height={200} alt="course" />
      </section>
      <section className="w-full px-6 pt-4">
        <section className="info flex justify-between">
          <h3 className="font-medium text-[18px]">{title}</h3>
          <RatingStars rating={rating} />
        </section>
        <section className="review flex justify-between pt-2">
          <a className="underline font-medium" href="">
            Reviews
          </a>
          <span className="font-thin">Students enrolled</span>
          <span className="font-medium">{student}+</span>
        </section>
      </section>
    </section>
  );
};

export default Card;
