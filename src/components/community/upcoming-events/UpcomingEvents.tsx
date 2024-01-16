import Image from 'next/image';
import React from 'react';
import ECard from '../upcoming-events/Card';
import LP from '../../../../public/svgs/left-polygon.svg';
import LP2 from '../../../../public/svgs/left-polygon2.svg';

const UpcomingEvents = () => {
  const events = [
    {
      date: '13 April',
      title: 'Embracing technology and its help to mankind',
      description:
        'Lorem ipsum dolor sit amet consectetur. Vulputate cum neque sagittis sed ',
      venue: 'Zoom platform',
      color: 'd97508',
      time: '8:15pm',
    },
    {
      date: '27 May',
      title: 'Embracing technology and its help to mankind',
      description:
        'Lorem ipsum dolor sit amet consectetur. Vulputate cum neque sagittis sed ',
      venue: 'Zoom platform',
      color: '333333',
      time: '8:15pm',
    },
    {
      date: '31 Jan',
      title: 'Embracing technology and its help to mankind',
      description:
        'Lorem ipsum dolor sit amet consectetur. Vulputate cum neque sagittis sed ',
      venue: 'Zoom platform',
      color: 'ff3b30',
      time: '8:15pm',
    },
    {
      date: '18 April',
      title: 'Embracing technology and its help to mankind',
      description:
        'Lorem ipsum dolor sit amet consectetur. Vulputate cum neque sagittis sed ',
      venue: 'Zoom platform',
      color: 'ffd426',
      time: '8:15pm',
    },
  ];

  return (
    <section className="upcoming-events bg-[#F2F2F2] text-center">
      <section className="text-center p-4">
        <h3 className="font-semibold text-xl pb-4">Upcoming Events</h3>
        <p className="text-[14px] leading-[30px] lg:mx-80">
          Get ready for an unparalleled tech experience at the Techverse Tech
          Expo 2024! Dive into cutting-edge innovations, hands-on workshops, and
          insightful discussions. Don&apos;t miss the chance to connect with
          industry leaders and shape the future of technology. Join us for a day
          of inspiration and exploration! <br />{' '}
          <strong>#TechverseExpo2024</strong> ✨🚀
        </p>
      </section>
      <section className="hidden lg:block relative">
        <Image className="absolute -top-32" src={LP} alt="left polygon" />
        <Image className="absolute -top-16" src={LP2} alt="left polygon" />
      </section>
      <section className="upcoming px-8 pt-6 lg:py-28 lg:bg-upcoming-event bg-no-repeat lg:bg-cover">
        <section className="grid grid-cols-2 gap-2 lg:mx-14">
          {events.map(({ date, time, title, description, venue, color }) => (
            <ECard
              key={title}
              date={date}
              title={title}
              description={description}
              venue={venue}
              color={color}
              time={time}
            />
          ))}
        </section>
      </section>
      <div className="py-10">
        <button className="w-[159px] py-[10px] px-[24px] text-[#D97508] outline hover:bg-[#D97508] hover:text-white text-primary rounded-[10px]">
          See more
        </button>
      </div>
    </section>
  );
};

export default UpcomingEvents;
