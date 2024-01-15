import Image from 'next/image';
import React from 'react';
import Line from '../../../../public/svgs/line.svg';
import { usePathname } from 'next/navigation';

type Props = {
  image: string | HTMLImageElement;
  title: string;
  username: string;
};

const Header = ({ image, title, username }: Props) => {
  const path = usePathname();
  const detailsPage = path.includes('/community/discussions/');

  return (
    <header className="flex flex-col items-center lg:flex lg:flex-row lg:w-full">
      <Image className="w-12" src={image} alt={`${title} photo`} />
      <div className="flex flex-col-reverse lg:items-start ml-5 lg:text-left">
        <h3 className="font-normal text-lg pb-4">
          {detailsPage ? title : title.slice(0, 25)}
          {title.length > 25 && !detailsPage ? '...' : ''}
        </h3>
        <Image src={Line} alt="line" />
        <p className="text-sm leading-7">{username}</p>
      </div>
    </header>
  );
};

export default Header;
