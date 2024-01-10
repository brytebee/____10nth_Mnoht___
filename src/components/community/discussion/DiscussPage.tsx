import React from 'react';
import { Discuss } from '@/app/staticData/data';
import Card from '@/components/community/discussion/Card';

const DiscussPage = () => {
  return (
    <section className="text-center lg:px-12 py-20">
      <h2 className="text-[35px] font-bold leading-[41px]">
        Top Stories From Our Students
      </h2>
      <section className="lg:grid lg:grid-cols-3 lg:gap-2 lg:mx-8">
        {Discuss.map(
          ({ image, username, title, description, likes, comments }) => (
            <>
              <Card
                image={image}
                username={username}
                title={title}
                description={description}
                likes={likes}
                comments={comments}
              />
            </>
          )
        )}
      </section>
    </section>
  );
};

export default DiscussPage;
