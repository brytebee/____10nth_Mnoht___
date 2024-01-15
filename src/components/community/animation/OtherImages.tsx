import Image from 'next/image';
import React from 'react';
import Others from '../../../../public/svgs/all-other-images.svg';

const OtherImages = () => (
  <div className="absolute top-8 -right-12 animate-com-hero-anim">
    <Image src={Others} alt="scholar" />
  </div>
);

export default OtherImages;
