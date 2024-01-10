import React from 'react';
import Card from '../discussion/Card';
import { Discuss } from '@/app/staticData/data';

const ActiveDiscussions = () => {
  return (
    <div className="active-discussions bg-[#F2F2F2] text-center">
      <section className="scd-section py-14 text-center">
        <h3 className="font-semibold text-xl pb-2">Active discussions</h3>
        <p className="px-14">
          Read about others stories and share your thoughts
        </p>
      </section>
      <section className="text-center px-16">
        <section className="lg:flex">
          {Discuss.map(
            ({ image, username, title, description, likes, comments }) => (
              <Card
                image={image}
                username={username}
                title={title}
                description={description}
                likes={likes}
                comments={comments}
              />
            )
          )}
        </section>
        <div className="pt-4 pb-14">
          <button className="w-[134px] lg:w-[159px] py-[10px] px-[24px text-[#D97508] hover:bg-[#D97508] hover:text-white outline rounded-[10px] self-center">
            View more
          </button>
        </div>
      </section>
    </div>
  );
};

export default ActiveDiscussions;
