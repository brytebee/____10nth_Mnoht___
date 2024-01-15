'use client';

import React, { useState } from 'react';
import { useSwipeable, SwipeEventData } from 'react-swipeable';
import { coursesCom } from '@/app/staticData/data';
import Card from './Card';
import Indicator from './Indicator';
import Move from './Move';
import Details from './Details';

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

function CircularSwip() {
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
    <div>
      <div className="relative overflow-hidden mb-16">
        {/* Na here I for dey render the components 😜 */}
        <Move
          divs={divs}
          handlers={handlers}
          currentDivIndex={currentDivIndex}
        />
        {/* Indicator dey sup for here 😜 */}
        <Indicator
          divs={divs}
          currentDivIndex={currentDivIndex}
          setCurrentDivIndex={setCurrentDivIndex}
        />
      </div>
      <Details course={coursesCom[currentDivIndex]} />
    </div>
  );
}

export default CircularSwip;
