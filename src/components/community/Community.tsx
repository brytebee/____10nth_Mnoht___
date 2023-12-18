import React from 'react';
import TopSection from './top-section/TopSection';
import MidSection from './mid-section/MidSection';
import BottomSection from './bottom-section/BottomSection';

type Props = {};

const Community = (props: Props) => {
  return (
    <div>
      <TopSection />
      <MidSection />
      <BottomSection />
      <div className="foot-note">
        <p>
          Lorem ipsum dolor sit amet consectetur. Vulputate cum neque sagittis
          sed sed nunc. Vel scelerisque bibendum sed ipsum amet urna pretium
          ullamcorper. Elementum consequat non tempus aliquam. Adipiscing diam
          donec a scelerisque scelerisque mauris amet.
        </p>
      </div>
    </div>
  );
};

export default Community;
