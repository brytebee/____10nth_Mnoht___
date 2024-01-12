'use client';

import React from 'react';
import Card from './Card';
import { Discuss } from '@/app/staticData/data';
import { usePathname } from 'next/navigation';
import CardPcDetails from './CardPcDetails';

type Props = {};

const DiscussDetails = () => {
  const path = usePathname();
  const splitPath = path.split('/');
  const pageId = splitPath?.[splitPath.length - 1];

  const discussion = Discuss.filter((dis) => dis.id === pageId);
  const { id, comments, description, image, likes, title, username } =
    discussion[0];

  return (
    <div className="flex flex-col lg:flex-row">
      <div className="lg:hidden current lg:w-[60%]">
        <Card
          id={id}
          comments={comments}
          description={description}
          image={image}
          likes={likes}
          title={title}
          username={username}
        />
      </div>
      <div className="hidden lg:block current lg:w-[60%]">
        <CardPcDetails
          id={id}
          comments={comments}
          description={description}
          image={image}
          likes={likes}
          title={title}
          username={username}
        />
      </div>
      {/* This could be hidden on mobile screen, hear out the team on this. */}
      <div className="others overflow-y-auto max-h-[400px] lg:max-h-[900px] lg:w-[40%] lg:block">
        <h4 className="py-4 lg:mt-6 mx-6 px-4 border-2 font-semibold rounded-xl">
          Most Frequently Read
        </h4>
        {Discuss.sort((a, b) => b.views - a.views).map(
          ({ id, comments, description, image, likes, title, username }) => (
            <div key={id}>
              <Card
                id={id}
                comments={comments}
                description={description}
                image={image}
                likes={likes}
                title={title}
                username={username}
              />
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default DiscussDetails;
