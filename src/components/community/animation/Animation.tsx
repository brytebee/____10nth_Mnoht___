import React from 'react';
import PcImg from '../../../../public/svgs/com-hero-central-img-pc.svg';
import OrbitingImages from './OrbitingImages';
import Others from '../../../../public/images/new-other.png';

const Animation = () => (
  <div>
    <OrbitingImages
      staticImageSrc={PcImg} 
      orbitingImageSrc={Others} 
    />
  </div>
);

export default Animation;
