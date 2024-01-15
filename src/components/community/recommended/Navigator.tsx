import Image from 'next/image';
import React from 'react';
import ArrowForward from '../../../../public/svgs/arrow-forward.svg';
import ArrowBackward from '../../../../public/svgs/arrow-backward.svg';

type Props = {
  divs: any;
  currentDivIndex: number;
  setCurrentDivIndex: (a: number) => void;
};

const Navigator = ({ divs, currentDivIndex, setCurrentDivIndex }: Props) => {
  return (
    <div className="text-right pr-[10.5%] my-4">
      <button
        onClick={() => setCurrentDivIndex(currentDivIndex - 1)}
        className="px-2 bg-white rounded-md border-amber-600 hover:bg-[#D9D9D9] active:bg-[#A63F0E] border-[1px]"
        disabled={currentDivIndex === 0}
      >
        <Image src={ArrowBackward} alt="arrow forward" />
      </button>
      <button
        onClick={() => setCurrentDivIndex(currentDivIndex + 1)}
        className="ml-4 px-2 bg-amber-600 rounded-md border-amber-600 active:bg-[#D9D9D9] hover:bg-[#E6C09C40] border-[1px]"
        disabled={currentDivIndex === divs.length - 1}
      >
        <Image src={ArrowForward} alt="arrow forward" />
      </button>
    </div>
  );
};

export default Navigator;
