import Image from 'next/image';
import React from 'react';
import Like from '../../../../public/svgs/like.svg';
import Comment from '../../../../public/svgs/comment.svg';

type Props = {
  likes: number;
  comments: number;
};

const Engage = ({ likes, comments }: Props) => {
  return (
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
  );
};

export default Engage;
