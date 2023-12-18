import React from 'react';
import Line from '../../../../public/svgs/straight-line.svg';
import ArrowRight from '../../../../public/svgs/arrow-right.svg';
import Image from 'next/image';

type Props = {
  date: string;
  title: string;
  description: string;
  venue: string;
};

const Card = (props: Props) => {
  const { date, title, description, venue } = props;
  const day = date.split(' ')[0];
  const month = date.split(' ')[1];

  return (
    <section>
      <section className="date">
        <div className="date">{day}</div>
        <div className="month">{month}</div>
      </section>
      <section className="details">
        <h3>{title}</h3>
        <Image src={Line} alt="line" />
        <p>{description}</p>
        <div className="foot">
          <p>Venue: {venue}</p>
          <button type="button">
            View details <Image src={ArrowRight} alt="arrow right" />
          </button>
        </div>
      </section>
    </section>
  );
};

export default Card;
