import React from 'react';
import Recommended from '../recommended/Recommended';
import Blog from '../blog/Blog';
import Avatar from '../../../../public/svgs/avatar.svg';

const blogs = [
  {
    image: Avatar,
    title: 'How to develop your learning skills',
    description:
      'Lorem ipsum dolor sit amet consectetur. Vulputate cum neque sagittis sed sed nunc. Vel scelerisque bibendum sed ipsum amet urna pretium ullamcorper. Elementum consequat non tempus aliquam. Adipiscing diam donec a scelerisque scelerisque mauris amet. Lorem ipsum dolor sit amet consectetur. Vulputate cum neque sagittis sed sed nunc. Vel scelerisque bibendum sed ipsum amet urna pretiu',
    user: {
      username: 'Jinsing lau',
      image: Avatar,
    },
  },
  {
    image: Avatar,
    title: 'How to develop your learning skills',
    description:
      'Lorem ipsum dolor sit amet consectetur. Vulputate cum neque sagittis sed sed nunc. Vel scelerisque bibendum sed ipsum amet urna pretium ullamcorper. Elementum consequat non tempus aliquam. Adipiscing diam donec a scelerisque scelerisque mauris amet. Lorem ipsum dolor sit amet consectetur. Vulputate cum neque sagittis sed sed nunc. Vel scelerisque bibendum sed ipsum amet urna pretiu',
    user: {
      username: 'Jinsing lau',
      image: Avatar,
    },
  },
  {
    image: Avatar,
    title: 'How to develop your learning skills',
    description:
      'Lorem ipsum dolor sit amet consectetur. Vulputate cum neque sagittis sed sed nunc. Vel scelerisque bibendum sed ipsum amet urna pretium ullamcorper. Elementum consequat non tempus aliquam. Adipiscing diam donec a scelerisque scelerisque mauris amet. Lorem ipsum dolor sit amet consectetur. Vulputate cum neque sagittis sed sed nunc. Vel scelerisque bibendum sed ipsum amet urna pretiu',
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
      <section className="blogs text-center lg:mb-32 bg-[#F6F6F6] lg:pt-[120px]">
        <h3 className="font-bold py-4 mb-8 lg:text-left lg:pl-36">
          <span className="lg:hidden text-[24px]">News Blog</span>
          <span className="hidden lg:block text-[35px]">
            Featured Articles/Blog
          </span>
        </h3>
        {blogs.map(({ title, user, image, description }) => (
          <div className="lg:mb-8">
            <Blog
              title={title}
              username={user?.username}
              image={image}
              description={description}
            />
          </div>
        ))}
      </section>
    </div>
  );
};

export default BottomSection;
