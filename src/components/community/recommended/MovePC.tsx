import React from 'react';

type Props = {
  handlers: any;
  divs: any;
  currentDivIndex: number;
};

const MovePC = ({ handlers, divs, currentDivIndex }: Props) => {
  // There's a bug in this slice that makes the user click twice to move
  let sliced = [];
  if (currentDivIndex <= 0) {
    sliced = divs.slice(0, Math.min(3, divs.length));
  } else {
    sliced = divs.slice(
      Math.max(0, currentDivIndex - 1),
      Math.min(currentDivIndex + 2, divs.length)
    );
  }

  return (
    <div
      {...handlers}
      className="relative grid grid-cols-1 md:grid-cols-3 gap-4"
    >
      {sliced.map((divContent: any, index: number) => (
        <div key={index} className="relative">
          {divContent.component({
            image: divContent.image,
            rating: divContent.rating,
            student: divContent.student,
            title: divContent.title,
          })}
        </div>
      ))}
    </div>
  );
};

export default MovePC;
