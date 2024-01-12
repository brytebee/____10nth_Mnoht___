'use client';

import React, { useState } from 'react';
import { usePathname } from 'next/navigation';
import Comments from './Comments';
import ReadMore from './ReadMore';
import Header from './Header';
import Engage from './Engage';
import Link from 'next/link';

type Props = {
  id: string;
  image: string | HTMLImageElement;
  title: string;
  username: string;
  description: string;
  likes: number;
  comments: number;
};

const Card = ({
  id,
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
  const [more, setMore] = useState(false);
  const show = description.length > 111 && onDiscuss;

  const toggleDescription = () => {
    setMore(!more);
  };

  return (
    <section className="box-border shadow-lg border-[1px] border-[#D97508] m-6 p-3 bg-white rounded-[20px] text-center flex flex-col">
      <Header image={image} title={title} username={username} />
      <ReadMore
        desc={description}
        more={more}
        show={show}
        func={toggleDescription}
      />
      <footer className="mt-auto lg:flex lg:w-full lg:justify-between">
        <Engage likes={likes} comments={comments} />

        <Link href={`/community/discussions/${id}`}>
          <button
            className={`text-[#D97508] underline py-2 " type="button ${
              onDiscuss && smScreen
            }`}
          >
            View discussion
          </button>
        </Link>
        {onDiscuss && (
          <div className="lg:hidden">
            <Comments defaultState={false} likes={likes} commennts={comments} />
          </div>
        )}
      </footer>
    </section>
  );
};

export default Card;
