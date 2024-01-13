'use client';

import React, { useState } from 'react';
import { useSwipeable, SwipeEventData } from 'react-swipeable';
import { coursesCom } from '@/app/staticData/data';
import Card from './Card';
import Indicator from './Indicator';
import Move from './Move';

interface DivContent {
  component: React.FC<any>;
}

const divs: DivContent[] = coursesCom
  .sort((a, b) => b.student - a.student)
  .slice(0, 5)
  .map(({ image, rating, student, title }) => ({
    component: () => (
      <Card image={image} rating={rating} student={student} title={title} />
    ),
  }));

function SwipableCards() {
  const [currentDivIndex, setCurrentDivIndex] = useState<number>(0);

  const handlers = useSwipeable({
    onSwiped: (eventData: SwipeEventData) => {
      const direction = eventData.dir;
      setCurrentDivIndex((prevIndex) => {
        let newIndex = direction === 'Left' ? prevIndex + 1 : prevIndex - 1;

        if (newIndex < 0) {
          newIndex = divs.length - 1;
        } else if (newIndex >= divs.length) {
          newIndex = 0;
        }

        return Math.max(0, Math.min(newIndex, divs.length - 1));
      });
    },
  });

  return (
    <div className="p-10 relative overflow-hidden">
      {/* Na here I for dey render the components 😜 */}
      <Move divs={divs} handlers={handlers} currentDivIndex={currentDivIndex} />

      {/* Arrows dey sup for here 😜 */}
      <div className="absolute top-0 right-0 lg:flex lg:items-center lg:justify-end">
        <button
          onClick={() => setCurrentDivIndex(currentDivIndex - 1)}
          className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400"
          disabled={currentDivIndex === 0}
        >
          <div className="w-6 h-6 text-gray-500">{'<'}</div>
        </button>
        <button
          onClick={() => setCurrentDivIndex(currentDivIndex + 1)}
          className="ml-4 p-2 rounded-full bg-gray-200 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400"
          disabled={currentDivIndex === divs.length - 1}
        >
          <div className="w-6 h-6 text-gray-500">{'>'}</div>
        </button>
      </div>
      {/* Indicator dey sup for here 😜 */}
      <div className="lg:hidden">
        <Indicator
          divs={divs}
          currentDivIndex={currentDivIndex}
          setCurrentDivIndex={setCurrentDivIndex}
        />
      </div>
    </div>
  );
}

export default SwipableCards;
