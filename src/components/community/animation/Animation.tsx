import React from 'react';
import PcImg from '../../../../public/svgs/com-hero-central-img-pc.svg';
import OrbitingImages from './OrbitingImages';
import Others from '../../../../public/images/new-other.png';
import MobOrbit from './MobOrbit';

const Animation = () => (
  <>
    <div className="hidden lg:block">
      <OrbitingImages staticImageSrc={PcImg} orbitingImageSrc={Others} />
    </div>
    <div className="lg:hidden">
      <MobOrbit staticImageSrc={PcImg} orbitingImageSrc={Others} />
    </div>
  </>
);

export default Animation;
