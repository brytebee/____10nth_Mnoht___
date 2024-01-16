import React from 'react';
import Card from '../discussion/Card';
import { Discuss } from '@/app/staticData/data';
import Link from 'next/link';

const ActiveDiscussions = () => (
  <div className="active-discussions bg-[#F2F2F2] text-center">
    <section className="scd-section py-14 text-center">
      <h3 className="font-semibold text-xl pb-2">Active discussions</h3>
      <p className="px-14">Read about others stories and share your thoughts</p>
    </section>
    <section className="text-center lg:px-16">
      <section className="lg:flex">
        {Discuss.slice(0, 3).map(
          ({ id, image, username, title, description, likes, comments }) => (
            <Card
              key={id}
              id={id}
              image={image}
              username={username}
              title={title}
              description={description}
              likes={likes}
              comments={comments}
              setShow={false}
              showAvailable={true}
              showEngage={false}
            />
          )
        )}
      </section>
      <div className="pt-4 pb-14">
        <Link className="text-none" href="/community/discussions">
          <button className="w-[134px] lg:w-[159px] py-[10px] px-[24px text-[#D97508] hover:bg-[#D97508] hover:text-white outline rounded-[10px] self-center">
            View more
          </button>
        </Link>
      </div>
    </section>
  </div>
);

export default ActiveDiscussions;
