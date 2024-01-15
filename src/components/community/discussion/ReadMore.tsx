import { usePathname } from 'next/navigation';
import React from 'react';

type Props = {
  more: boolean;
  show: boolean;
  desc: string;
  func: () => void;
};

function ReadMore({ more, desc, show, func }: Props) {
  const path = usePathname();
  const details = path.includes('/community/discussions/') && show;

  return (
    <div className="lg:text-left">
      <p
        className={`${
          more ? 'block' : 'overflow-hidden line-clamp-4'
        } text-gray-700`}
      >
        {desc}
      </p>
      {show && (
        <span
          onClick={func}
          className=" lg:hidden text-[#D97508] hover:underline mt-2"
        >
          {more ? 'Read less' : 'Read more'}
        </span>
      )}
      {details && (
        <span
          onClick={func}
          className="hidden lg:block text-[#D97508] hover:underline mt-2"
        >
          {more ? 'Read less' : 'Read more'}
        </span>
      )}
    </div>
  );
}

export default ReadMore;
