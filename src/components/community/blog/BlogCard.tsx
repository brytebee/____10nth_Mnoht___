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
  showRead: boolean;
};

const BlogCard = ({ id, image, title, description, showRead }: Props) => {
  return (
    <section className="lg:p-5 bg-white">
      <section className="blog-card">
        <div className="image flex items-center justify-center lg:bg-[#D9D9D9] lg:h-[292px]">
          <Image src={Images[0]} alt="Blog photo" />
        </div>
      </section>

      <div className="py-7 px-8 lg:px-2 lg:w-full">
        <div className="dets">
          <h6 className=" text-center text-[18px] leading-8 font-extrabold">
            {title}
          </h6>
          <div className="desc">
            <p className="text-left text-sm lg:text-[18px] leading-8">
              {description}
            </p>
          </div>
        </div>
        {showRead && (
          <div className="p-8">
            <Link href={`/blogs/${id}`}>
              <SecondaryButton
                position="center"
                positionPC="center"
                px="138"
                pxpc="159"
                text="Read more"
              />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default BlogCard;
