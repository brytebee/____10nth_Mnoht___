import Image from 'next/image';
import React from 'react';
import Line from '../../../../public/svgs/line.svg';

type Props = {
  image: string | HTMLImageElement;
  title: string;
  username: string;
};

const Header = ({ image, title, username }: Props) => {
  return (
    <header className="flex flex-col items-center lg:flex lg:flex-row lg:w-full">
      <Image className="w-12" src={image} alt={`${title} photo`} />
      <div className="flex flex-col-reverse lg:items-start ml-5">
        <h3 className="font-normal text-lg pb-4">{title}</h3>
        <Image src={Line} alt="line" />
        <p className="text-sm leading-7">{username}</p>
      </div>
    </header>
  );
};

export default Header;
