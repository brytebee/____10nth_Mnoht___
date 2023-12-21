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
    <section>
      <section className="blog-card">
        <div className="image flex items-center justify-center">
          <Image src={Images[0]} alt="Blog photo" />
        </div>
        <div className="dets">
          <h6 className="hidden">{title}</h6>
          <div className="desc">
            <p className="text-left">{description}</p>
          </div>
        </div>
      </section>

      <div className="py-7">
        <button className="w-[134px] lg:w-[267px] py-[10px] px-[24px text-[#D97508] outline rounded-[10px] self-center">
          Read more
        </button>
      </div>
    </section>
  );
};

export default Blog;
