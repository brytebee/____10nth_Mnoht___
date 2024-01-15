import React from 'react';
import FilledStar from '../../../../public/svgs/star-filled.svg';
import OutlinedStar from '../../../../public/svgs/star-outlined.svg';
import Image from 'next/image';

type Props = {
  rating: number;
};

const RatingStars = ({ rating }: Props) => {
  const maxRepeat = 5;

  return (
    <section className="flex">
      {Array.from({ length: rating }).map((_, index) => (
        <Image key={index} src={FilledStar} alt="filled star" />
      ))}
      {Array.from({ length: maxRepeat - rating }).map((_, index) => (
        <Image key={index + 5} src={OutlinedStar} alt="Outlined star" />
      ))}
    </section>
  );
};

export default RatingStars;
