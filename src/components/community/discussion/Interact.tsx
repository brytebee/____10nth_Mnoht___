import Image from 'next/image';
import React from 'react';
import SendMsg from '../../../../public/svgs/send-msg.svg';
import Like from '../../../../public/svgs/like.svg';

type Props = {};

const Interact = (props: Props) => {
  const iconShadow =
    'flex justify-center bg-white border-[1px] shadow-md w-[42.98px] px-2 p-1 rounded-2xl';
  return (
    <section className="flex justify-around py-6">
      <div className={`likes ${iconShadow}`}>
        <Image src={Like} alt="like" />
        {/* This is too gloggy, so it's hidden for now */}
        <span className="hidden text-sm">+23</span>
      </div>
      <div className="comment mx-[8px]">
        <input
          className="bg-[#3333330D] rounded-[20px] px-4 py-2 font-light text-[12px] border-[1px] w-[95%]"
          type="text"
          placeholder="write comment"
        />
      </div>
      <div className={`send ${iconShadow}`}>
        <Image src={SendMsg} alt="send" />
      </div>
    </section>
  );
};

export default Interact;
