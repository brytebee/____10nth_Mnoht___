'use client';

import React, { useState } from 'react';
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
  image,
  title,
  username,
  description,
  likes,
  comments,
  setShow,
}: Props) => {
  const [more, setMore] = useState(false);

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
      <Comments defaultState={true} likes={likes} commennts={comments} />
    </section>
  );
};

export default CardPcDetails;
