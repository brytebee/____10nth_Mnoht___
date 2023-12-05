import React from 'react';

interface Props {
  // Add props here
}

const About: React.FC<Props> = (props) => {
  return (
    <div>
      <div
        className="bg-about-bg bg-cover w-full
h-[504px]"
      >
        this is about us
      </div>
    </div>
  );
};

export default About;
