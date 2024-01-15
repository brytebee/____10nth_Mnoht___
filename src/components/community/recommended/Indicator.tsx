import React from 'react';
import Image from 'next/image';
import OnIndicator from '../../../../public/svgs/recom-indicator-active.svg';
import OffIndicator from '../../../../public/svgs/recom-indicator-inactive.svg';

type Props = {
  divs: any;
  currentDivIndex: number;
  setCurrentDivIndex: (a: number) => void;
};

const Indicator = ({ divs, currentDivIndex, setCurrentDivIndex }: Props) => {
  return (
    <div className="lg:hidden absolute bottom-0 left-1/2 transform -translate-x-1/2">
      {divs.map((_: any, index: number) => (
        <button key={index} onClick={() => setCurrentDivIndex(index)}>
          {index === currentDivIndex ? (
            <Image className="mx-2" src={OnIndicator} alt="Active icon" />
          ) : (
            <Image className="mx-2" src={OffIndicator} alt="Inactive icon" />
          )}
        </button>
      ))}
    </div>
  );
};

export default Indicator;
