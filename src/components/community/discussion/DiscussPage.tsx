import React from 'react';
import { Discuss } from '@/app/staticData/data';
import Card from '@/components/community/discussion/Card';

const DiscussPage = () => (
  <section className="text-center lg:px-12 py-5">
    <h2 className="text-left pl-[28px] lg:pl-16 text-[1.6rem] lg:text-[2.2rem] font-bold leading-9 lg:leading-[41px] lg:w-4/12">
      Top Stories From Our Students
    </h2>
    <section className="lg:grid lg:grid-cols-3 lg:gap-2 lg:mx-8">
      {Discuss.map(
        ({ id, image, username, title, description, likes, comments }) => (
          <div key={id}>
            <Card
              id={id}
              image={image}
              username={username}
              title={title}
              description={description}
              likes={likes}
              comments={comments}
              setShow={false}
              showEngage={false}
              showAvailable={true}
            />
          </div>
        )
      )}
    </section>
  </section>
);

export default DiscussPage;
