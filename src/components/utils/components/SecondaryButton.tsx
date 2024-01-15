import React from 'react';

type Props = {
  position: string;
  positionPC: string;
  px: string;
  text: string;
  pxpc: string;
};

const SecondaryButton = ({ position, px, text, pxpc, positionPC }: Props) => {
  return (
    <div className={`text-${position} lg:text-${positionPC}`}>
      <button
        className={`w-[${px}px] lg:w-[${pxpc}px] py-[10px] px-[24px] bg-white hover:bg-[#D97508] hover:text-white outline text-[#D97508] text-primary rounded-[10px]`}
      >
        {text}
      </button>
    </div>
  );
};

export default SecondaryButton;
