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
  ];

  const events = [
    {
      date: '14 April',
      title: 'Embracing technology and its help to mankind',
      description:
        'Lorem ipsum dolor sit amet consectetur. Vulputate cum neque sagittis sed ',
      venue: 'Zoom platform',
    },
    {
      date: '24 Jan',
      title: 'Embracing technology and its help to mankind',
      description:
        'Lorem ipsum dolor sit amet consectetur. Vulputate cum neque sagittis sed ',
      venue: 'Zoom platform',
    },
  ];

  return (
    <div>
      <section className="fst-section bg-[A63F0E]-500">
        <h3>Whats on your mind?</h3>
        <p>
          You have something thats bothering you or a question to ask? Share
          with us the community is always there to help
        </p>
        <input
          type="text"
          placeholder="write your story"
          minLength={20}
          maxLength={500}
        />
      </section>
      <section className="scd-section">
        <h3>Active discussions</h3>
        <p>Read about others stories and share your thoughts</p>
      </section>
      <section className="cards">
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
      <section>
        <h3>Upcoming Events</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur. Vulputate cum neque sagittis
          sed sed nunc. Vel scelerisque bibendum sed ipsum amet urna pretium
          ullamcorper. Elementum consequat non
        </p>
      </section>
      <section className="upcoming">
        {events.map(({ date, title, description, venue }) => (
          <ECard
            date={date}
            title={title}
            description={description}
            venue={venue}
          />
        ))}
      </section>
    </div>
  );
};

export default MidSection;
