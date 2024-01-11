'use client';

import Image from 'next/image';
import React from 'react';
import Line from '../../../../public/svgs/line.svg';
import Like from '../../../../public/svgs/like.svg';
import Comment from '../../../../public/svgs/comment.svg';
import { usePathname } from 'next/navigation';
import Comments from './Comments';

type Props = {
  image: string | HTMLImageElement;
  title: string;
  username: string;
  description: string;
  likes: number;
  comments: number;
};

const Card = ({
  image,
  title,
  username,
  description,
  likes,
  comments,
}: Props) => {
  const path = usePathname();
  const onDiscuss = path.includes('/community/discussions');
  const smScreen = 'hidden lg:block';

  return (
    <section className="box-border shadow-lg border-2 m-6 p-3 bg-white rounded-[20px] text-center flex flex-col">
      <header className="flex flex-col items-center lg:flex lg:flex-row lg:w-full lg:justify-around">
        <Image className="w-12" src={image} alt={`${title} photo`} />
        <div className="flex flex-col-reverse lg:items-start">
          <h3 className="font-normal text-lg pb-4">{title}</h3>
          <Image src={Line} alt="line" />
          <p className="text-sm leading-7">{username}</p>
        </div>
      </header>
      <p className="text-sm leading-7">
        {description}{' '}
        {onDiscuss && (
          <span className="text-[#D97508] lg:hidden">...Read more</span>
        )}
      </p>
      <footer className="mt-auto lg:flex lg:w-full lg:justify-between">
        <div className="lg:flex justify-between hidden">
          <div className="box-border shadow-md rounded-md m-1 p-1 bg-white w-20">
            <div className="flex items-center">
              <Image src={Like} alt="likes" />
              <span className="ml-1 text-sm leading-7">+{likes}k</span>
            </div>
          </div>
          <div className="box-border shadow-md rounded-md m-1 p-1 bg-white w-20">
            <div className="flex items-center">
              <Image src={Comment} alt="likes" />
              <span className="ml-1 text-sm leading-7">+{comments}k</span>
            </div>
          </div>
        </div>

        <button
          className={`text-[#D97508] underline py-2 " type="button ${
            onDiscuss && smScreen
          }`}
        >
          View discussion
        </button>
        {onDiscuss && <Comments />}
      </footer>
    </section>
  );
};

export default Card;
