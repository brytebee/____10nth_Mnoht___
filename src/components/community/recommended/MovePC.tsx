import React from 'react';

type Props = {
  handlers: any;
  divs: any;
  currentDivIndex: number;
  setCurrentDivIndex: (a: number) => void;
};

const MovePC = ({
  handlers,
  divs,
  currentDivIndex,
  setCurrentDivIndex,
}: Props) => {
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
      className="grid grid-cols-1 md:grid-cols-3 gap-4 mx-32 mb-28"
    >
      {sliced.map((divContent: any, index: number) => (
        <div
          key={index}
          className={`flex justify-center ${
            index === currentDivIndex ? 'border-l-2 border-amber-600' : ''
          }`}
          onClick={() => setCurrentDivIndex(currentDivIndex)}
        >
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
