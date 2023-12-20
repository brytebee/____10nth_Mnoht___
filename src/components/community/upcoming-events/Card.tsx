import React from 'react';
import Line from '../../../../public/svgs/straight-line.svg';
import ArrowRight from '../../../../public/svgs/arrow-right.svg';
// import Calendar from '../../../../public/svgs/calendar.svg';
import Image from 'next/image';
import Calendar from '../calendar/Calendar';

type Props = {
  date: string;
  title: string;
  description: string;
  venue: string;
  color: string;
  time: string;
};

const Card = ({ date, time, title, description, venue, color }: Props) => {
  const day = date.split(' ')[0];
  const month = date.split(' ')[1];

  return (
    <section className="box-border shadow-lg m-2 px-4 py-6 bg-white rounded-[20px] text-center flex flex-col items-center">
      <section className="date">
        <div className="date">
          <span>
            <Calendar color={color} day={day} />
          </span>
        </div>
        <div className="month">{month}</div>
      </section>
      <section className="time md:hidden">
        <p>Time</p>
        <span>{time}</span>
      </section>
      <section className="details hidden md:block">
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
