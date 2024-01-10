import Image from 'next/image';
import React from 'react';
import SendMsg from '../../../../public/svgs/send-msg.svg';
import Like from '../../../../public/svgs/like.svg';

type Props = {};

const Interact = (props: Props) => {
  return (
    <section className="flex justify-around px-8 py-6">
      <div className="likes flex justify-center">
        <Image src={Like} alt="like" />
      </div>
      <div className="comment">
        <input
          className="bg-[#3333330D] rounded-[20px] px-4 py-1 font-light text-[12px]"
          type="text"
          placeholder="write comment"
        />
      </div>
      <div className="send flex justify-center">
        <Image src={SendMsg} alt="send" />
      </div>
    </section>
  );
};

export default Interact;
