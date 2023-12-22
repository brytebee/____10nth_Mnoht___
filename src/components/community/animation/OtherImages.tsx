import Image from 'next/image';
import React from 'react';
import Others from '../../../../public/svgs/all-other-images.svg';

const OtherImages = () => {
  return (
    <div className="absolute top-20">
      <div className="animate-com-hero-anim">
        <Image src={Others} alt="scholar" />
      </div>
    </div>
  );
};

export default OtherImages;
