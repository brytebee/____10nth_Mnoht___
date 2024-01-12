import Image from 'next/image';
import React from 'react';
import SendMsg from '../../../../public/svgs/send-msg.svg';
import Like from '../../../../public/svgs/like.svg';

type Props = {
  likes: number;
  comments: number;
};

const Interact = ({ likes }: Props) => {
  const iconStyle =
    'flex justify-center bg-white border-[1px] shadow-md w-[42.98px] lg:w-[68px] px-2 p-1 rounded-2xl';
  return (
    <section className="flex justify-between py-6 lg:pt-16 lg:w-full">
      <div className={`likes ${iconStyle}`}>
        <Image src={Like} alt="like" />
        <span className="hidden lg:block text-[14px] pt-[2px]">{likes}</span>
      </div>
      <div className="comment mx-[8px]">
        <input
          className="bg-[#3333330D] rounded-[20px] px-2 py-2 font-light text-[12px] border-[1px]] w-[97%] lg:w-[24rem]"
          type="text"
          placeholder="write comment"
        />
      </div>
      <div className={`send ${iconStyle}`}>
        <Image src={SendMsg} alt="send" />
      </div>
    </section>
  );
};

export default Interact;
