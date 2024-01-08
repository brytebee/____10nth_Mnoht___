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
    <>
      <section className="lg:hidden">
        <section className="box-border shadow-lg m-2 px-4 lg:pl-0 py-6 bg-white rounded-[20px] text-center flex flex-col items-center">
          <section className="date">
            <div className="date">
              <span>
                <Calendar color={color} day={day} />
              </span>
            </div>
            <div className="month">{month}</div>
          </section>
          <section className="time lg:hidden">
            <p>Time</p>
            <span>{time}</span>
          </section>
          <section className="details hidden lg:block">
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
      </section>
      <section className="hidden lg:block">
        <section className="box-border shadow-lg m-3 bg-amber-950 text-center flex items-center flex-row rounded-2xl">
          <section className="date text-white w-[141px]">
            <div className="pc-day hidden lg:block text-[55px]">{day}</div>
            <div className="month text-[25px] -mt-5">{month}</div>
          </section>

          <section className="bg-white w-full py-8 pr-8 rounded-r-2xl">
            <section className="time lg:hidden">
              <p>Time</p>
              <span>{time}</span>
            </section>
            <section className="details hidden lg:block ml-10 text-left">
              <h3 className="font-bold">{title}</h3>
              <Image className="-ml-3" src={Line} alt="line" />
              <p className="text-[14px] leading-5 w-[95%]">{description}</p>
              <div className="foot flex w-[80%] justify-between pt-2">
                <p className="text-[14px]">Venue: {venue}</p>
                <button
                  className="text-[14px] text-[#D97508] hover:underline"
                  type="button"
                >
                  View details{' '}
                  <Image
                    className="inline"
                    src={ArrowRight}
                    alt="arrow right"
                  />
                </button>
              </div>
            </section>
          </section>
        </section>
      </section>
    </>
  );
};

export default Card;
