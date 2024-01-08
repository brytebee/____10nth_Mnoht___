import React from 'react';
import Card from '../discussion/Card';
import Avatar from '../../../../public/svgs/avatar.svg';
import ECard from '../upcoming-events/Card';

const MidSection = () => {
  const cardDets = [
    {
      image: Avatar,
      title: 'Overcoming academic fears',
      username: 'Jinsing lau',
      description:
        'Lorem ipsum dolor sit amet consectetur. Vulputate cum neque sagittis sed sed nunc. Vel scelerisque bibendum sed ipsum amet urna pretium ullamcorper. Elementum consequat non ',
      likes: 356,
      comments: 101,
    },
    {
      image: Avatar,
      title: 'Overcoming academic fears',
      username: 'Jinsing lau',
      description:
        'Lorem ipsum dolor sit amet consectetur. Vulputate cum neque sagittis sed sed nunc. Vel scelerisque bibendum sed ipsum amet urna pretium ullamcorper. Elementum consequat non ',
      likes: 356,
      comments: 101,
    },
    {
      image: Avatar,
      title: 'Overcoming academic fears',
      username: 'Jinsing lau',
      description:
        'Lorem ipsum dolor sit amet consectetur. Vulputate cum neque sagittis sed sed nunc. Vel scelerisque bibendum sed ipsum amet urna pretium ullamcorper. Elementum consequat non ',
      likes: 356,
      comments: 101,
    },
  ];

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
    <div>
      <section className="fst-section bg-[#A63F0E] py-14 text-center">
        <div className="text-white">
          <h3 className="font-medium text-lg">Whats on your mind?</h3>
          <p className="text-sm leading-7 lg:hidden">
            Share your thoughts with the community
          </p>
          <p className="text-sm leading-7 hidden lg:block">
            You have something thats bothering you or a question to ask? <br />
            Share with us! The community is always there to help.
          </p>
        </div>
        <div className="what-on-your-mind py-4">
          <input
            type="text"
            className="w-[80%] lg:w-[35%] p-5 rounded-3xl text-center text-sm"
            placeholder="write your story"
            minLength={20}
            maxLength={500}
          />
        </div>
      </section>
      <div className="bg-[#F2F2F2] text-center">
        <section className="scd-section py-14 text-center">
          <h3 className="font-semibold text-xl pb-2">Active discussions</h3>
          <p className="px-14">
            Read about others stories and share your thoughts
          </p>
        </section>
        <section className="text-center">
          <section className="lg:flex">
            {cardDets.map(
              ({ image, username, title, description, likes, comments }) => (
                <Card
                  image={image}
                  username={username}
                  title={title}
                  description={description}
                  likes={likes}
                  comments={comments}
                />
              )
            )}
          </section>
          <div className="pt-4 pb-14">
            <button className="w-[134px] lg:w-[267px] py-[10px] px-[24px text-[#D97508] outline rounded-[10px] self-center">
              View more
            </button>
          </div>
        </section>
        <section className="text-center p-4">
          <h3 className="font-semibold text-xl pb-4">Upcoming Events</h3>
          <p className="text-sm leading-7">
            Lorem ipsum dolor sit amet consectetur. Vulputate cum neque sagittis
            sed sed nunc. Vel scelerisque bibendum sed ipsum amet urna pretium
            ullamcorper. Elementum consequat non
          </p>
        </section>
        <section className="upcoming grid grid-cols-2 gap-2 px-8 pt-6">
          {events.map(({ date, time, title, description, venue, color }) => (
            <ECard
              date={date}
              title={title}
              description={description}
              venue={venue}
              color={color}
              time={time}
            />
          ))}
        </section>
        <div className="py-10">
          <button className="w-[134px] lg:w-[267px] py-[10px] px-[24px] bg-[#D97508] text-white text-primary rounded-[10px]">
            See more
          </button>
        </div>
      </div>
    </div>
  );
};

export default MidSection;
