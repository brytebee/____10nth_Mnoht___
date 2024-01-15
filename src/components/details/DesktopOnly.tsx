import Image from 'next/image';
import React from 'react';
import BackDesk from '../../../public/svgs/back-icon-desk.svg';

type Props = {
  handleClick: () => void;
  name: string;
};

const DesktopOnly = ({ handleClick, name }: Props) => {
  return (
    <div className="tablet&_desktop_only md:block hidden">
      <div className="pt-[36px] pl-[26px] lg:pl-[50px]">
        <button
          onClick={handleClick}
          className="w-[180px] md:w-[80px] lg:w-[180px] py-[8px] pl-[8px] justify-center text-center bg-[#D97508] text-white text-primary text-md rounded-[10px]"
        >
          <Image
            className="inline md:ml-[-20px] ml-[-32px] text-white"
            width={34}
            height={34}
            src={BackDesk}
            alt="go back"
          />
          <span className="hidden lg:inline">Back to course</span>
        </button>
      </div>
      <div className="flex flex-col items-center pt-[48px] pb-[60px] my-8">
        <hr className="my-[-24px] w-full text-[rgba(230, 192, 156, 0.50)]" />
        <div className="border-[3px] bg-white border-[rgba(230, 192, 156, 0.50)]-500 rounded-[28px] w-[220px] py-2 mx-6 text-center text-lg font-medium">
          Course Overview
        </div>
      </div>
      <div className="bg-[#D97508] text-white text-center p-3">
        <h1 className="text-xl font-bold">{name.toUpperCase()}</h1>
      </div>
    </div>
  );
};

export default DesktopOnly;
