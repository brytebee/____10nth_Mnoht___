import React from 'react';
import About from '../../components/about/About';

interface Props {
  // Add props here
}

const page: React.FC<Props> = (props) => {
  return (
    <div>
      <About />
    </div>
  );
};

export default page;
