import React from 'react';

type Props = {
  more: boolean;
  show: boolean;
  desc: string;
  func: () => void;
};

function ReadMore({ more, desc, show, func }: Props) {
  return (
    <div>
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
    </div>
  );
}

export default ReadMore;
