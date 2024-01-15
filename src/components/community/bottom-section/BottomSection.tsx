import React from 'react';
import Recommended from '../recommended/Recommended';
import Blog from '../blog/Blog';
import { blogs } from '@/app/staticData/data';
import PrimaryButton from '@/components/utils/components/PrimaryButton';
import Link from 'next/link';

const BottomSection = () => (
  <div>
    <Recommended />
    <section className="blogs text-center lg:mb-32 bg-[#F6F6F6] lg:pt-[120px]">
      <h3 className="font-bold py-4 mb-8 lg:text-left lg:pl-36">
        <span className="lg:hidden text-[24px]">News Blog</span>
        <span className="hidden lg:block text-[35px]">
          Featured Articles/Blog
        </span>
      </h3>
      {blogs.map(({ id, title, user, image, description }) => (
        <div className="lg:mb-8" key={id}>
          <Blog
            id={id}
            title={title}
            username={user?.username}
            image={image}
            description={description}
          />
        </div>
      ))}
      <div className="pt-2">
        <Link href="/blogs">
          <PrimaryButton
            position="center"
            positionPC="center"
            px="139"
            text="More blogs"
            pxpc="159"
          />
        </Link>
      </div>
    </section>
  </div>
);

export default BottomSection;
