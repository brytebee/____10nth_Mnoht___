import React from 'react';

type Props = {
  position: string;
  px: string;
  text: string;
  pxpc: string;
};

const PrimaryButton = ({ position, px, text, pxpc }: Props) => {
  return (
    <div className={`py-8 text-${position} lg:text-left`}>
      <button
        className={`w-[${px}px] lg:w-[${pxpc}px] py-[10px] px-[24px] bg-white hover:bg-[#D97508] hover:text-white text-[#D97508] text-primary rounded-[10px]`}
      >
        {text}
      </button>
    </div>
  );
};

export default PrimaryButton;
