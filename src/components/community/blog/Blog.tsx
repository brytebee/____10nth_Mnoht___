import Images from '@/app/staticData';
import Image from 'next/image';
import React from 'react';

type Props = {
  image: string;
  title: string;
  description: string;
  username: string;
};

const Blog = ({ image, title, description }: Props) => {
  return (
    <div>
      <h3>Featured Articles/Blog</h3>
      <section className="blog-card">
        <div className="image">
          <Image src={image} alt="Blog photo" />
        </div>
        <div className="dets">
          <h6>{title}</h6>
          <div className="desc">
            <p>{description}</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
