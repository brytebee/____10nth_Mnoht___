import Image from 'next/image';
import React from 'react';

type Props = {
  image: string | HTMLImageElement;
  name: string;
  desc: string;
};

const ComCard = ({ image, name, desc }: Props) => (
  <section className="my-3">
    <div className="flex">
      <Image className="w-[30px] self-start" src={image} alt="commenter" />
      <div className="text-left bg-[#3333330D] rounded-xl p-3">
        <h4 className="text-[14px] left-8 font-semibold">{name}</h4>
        <p className="text-[14px] leading-[20px]">{desc}</p>
      </div>
    </div>
    <p className="text-[14px] leading-[20px] text-right">Reply comment</p>
  </section>
);

export default ComCard;
