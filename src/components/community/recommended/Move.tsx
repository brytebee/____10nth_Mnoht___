import React from 'react';

type Props = {
  handlers: any;
  divs: any;
  currentDivIndex: number;
};

const Move = ({ handlers, divs, currentDivIndex }: Props) => {
  return (
    <div {...handlers} className="py-4">
      {/* Render the component from the array */}
      {divs[currentDivIndex].component()}
    </div>
  );
};

export default Move;
