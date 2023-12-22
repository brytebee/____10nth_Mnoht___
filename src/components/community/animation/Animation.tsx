import React from 'react';
import CentralImage from './CentralImage';
import OtherImages from './OtherImages';

const Animation = () => {
  return (
    <div className="hidden lg:block">
      <CentralImage />
      <OtherImages />
    </div>
  );
};

export default Animation;
