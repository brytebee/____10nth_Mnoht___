import React from 'react';
import PcImg from '../../../../public/svgs/com-hero-central-img-pc.svg';
import MbImg from '../../../../public/svgs/com-hero-central-img-mb.svg';
import Image from 'next/image';

const CentralImage = () => (
  <>
    <div className="relative top-4 md:top-36 lg:-top-6">
      <div className="hidden lg:block px-34">
        <Image src={PcImg} alt="group study pc cental" />
      </div>
      <div className="lg:hidden px-24">
        <Image src={MbImg} alt="group study mb cental" />
      </div>
    </div>
  </>
);

export default CentralImage;
