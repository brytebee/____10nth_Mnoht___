import React from 'react';
import Recommended from '../recommended/Recommended';
import Blog from '../blog/Blog';
import Avatar from '../../../../public/svgs/avatar.svg';

const blogs = [
  {
    image: Avatar,
    title: 'How to develop your learning skills',
    description:
      'Lorem ipsum dolor sit amet consectetur. Vulputate cum neque sagittis sed sed nunc. Vel scelerisque bibendum sed ipsum amet urna pretium ullamcorper. Elementum consequat non tempus aliquam. Adipiscing diam donec a scelerisque scelerisque mauris amet.',
    user: {
      username: 'Jinsing lau',
      image: Avatar,
    },
  },
  {
    image: Avatar,
    title: 'How to develop your learning skills',
    description:
      'Lorem ipsum dolor sit amet consectetur. Vulputate cum neque sagittis sed sed nunc. Vel scelerisque bibendum sed ipsum amet urna pretium ullamcorper. Elementum consequat non tempus aliquam. Adipiscing diam donec a scelerisque scelerisque mauris amet.',
    user: {
      username: 'Jinsing lau',
      image: Avatar,
    },
  },
  {
    image: Avatar,
    title: 'How to develop your learning skills',
    description:
      'Lorem ipsum dolor sit amet consectetur. Vulputate cum neque sagittis sed sed nunc. Vel scelerisque bibendum sed ipsum amet urna pretium ullamcorper. Elementum consequat non tempus aliquam. Adipiscing diam donec a scelerisque scelerisque mauris amet.',
    user: {
      username: 'Jinsing lau',
      image: Avatar,
    },
  },
];

const BottomSection = () => {
  return (
    <div>
      <Recommended />
      <section className="blogs p-4 text-center">
        <h3 className="font-bold text-[24px] py-4 mb-8">News Blog</h3>
        {blogs.map(({ title, user, image, description }) => (
          <Blog
            title={title}
            username={user?.username}
            image={image}
            description={description}
          />
        ))}
      </section>
    </div>
  );
};

export default BottomSection;
