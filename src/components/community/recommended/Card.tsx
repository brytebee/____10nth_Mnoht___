import Image from 'next/image';
import React from 'react';

type Props = {
  image: string;
  title: string;
  rating: number;
  student: number;
};

const Card = (props: Props) => {
  const { title, rating, image, student } = props;
  return (
    <div>
      <section className="image">
        <Image src={image} alt="course" />
      </section>
      <section className="info">
        <h3>{title}</h3>
        <span>{rating}</span>
      </section>
      <section className="review">
        <a href="">Reviews</a>
        <span>Students enrolled</span>
        {student}+
      </section>
    </div>
  );
};

export default Card;
