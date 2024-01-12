'use client';

import React, { useState } from 'react';
import { usePathname } from 'next/navigation';
import Comments from './Comments';
import ReadMore from './ReadMore';
import Header from './Header';

type Props = {
  id: string;
  image: string | HTMLImageElement;
  title: string;
  username: string;
  description: string;
  likes: number;
  comments: number;
  setShow: boolean;
};

const CardPcDetails = ({
  id,
  image,
  title,
  username,
  description,
  likes,
  comments,
  setShow,
}: Props) => {
  const path = usePathname();
  const onDiscuss = path.includes('/community/discussions');
  const [more, setMore] = useState(false);
  const show = description.length > 111 && onDiscuss;

  const toggleDescription = () => {
    setMore(!more);
  };

  return (
    <section className="box-border shadow-lg border-2 m-6 p-3 bg-white rounded-[20px] text-center flex flex-col lg:py-10 lg:px-20">
      <Header image={image} title={title} username={username} />
      <ReadMore
        desc={description}
        more={more}
        show={setShow}
        func={toggleDescription}
      />

      <div className="">
        <Comments defaultState={true} likes={likes} commennts={comments} />
      </div>
    </section>
  );
};

export default CardPcDetails;
