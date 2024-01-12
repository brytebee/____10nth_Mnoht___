import Images from '@/app/staticData';
import SecondaryButton from '@/components/utils/components/SecondaryButton';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

type Props = {
  id: string;
  image: string | HTMLImageElement;
  title: string;
  description: string;
  username: string;
};

const Blog = ({ id, image, title, description }: Props) => (
  <section className="lg:flex lg:px-28 lg:py-8 bg-white">
    <section className="blog-card">
      <div className="image flex items-center justify-center lg:w-[307px] lg:bg-[#D9D9D9] lg:h-[292px]">
        <Image src={Images[0]} alt="Blog photo" />
      </div>
    </section>

    <div className="py-7 px-8 lg:w-full">
      <div className="dets text-left">
        <h6 className="lg:block text-[25px] leading-8 font-extrabold">
          {title}
        </h6>
        <div className="desc">
          <p className="text-left text-sm lg:text-[18px] leading-8">
            {description}
          </p>
        </div>
      </div>
      <div className="p-8 lg:p-0 lg:text-right">
        <Link href={`/blogs/${id}`}>
          <SecondaryButton
            position="center"
            positionPC="right"
            px="138"
            pxpc="159"
            text="Read more"
          />
        </Link>
      </div>
    </div>
  </section>
);

export default Blog;
