import React from 'react';

type Props = {
  position: string;
  positionPC: string;
  px: string;
  text: string;
  pxpc: string;
};

const PrimaryButton = ({ position, px, pxpc, text, positionPC }: Props) => {
  return (
    <div className={`py-8 text-${position} lg:text-${positionPC}`}>
      <button
        className={`w-[${px}px] lg:w-[${pxpc}px] py-[10px] px-[24px] bg-[#D97508] hover:bg-white hover:text-[#D97508] hover:outline text-white text-primary rounded-[10px]`}
      >
        {text}
      </button>
    </div>
  );
};

export default PrimaryButton;
