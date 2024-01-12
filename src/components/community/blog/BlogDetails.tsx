'use client';

import React from 'react';
import { blogs } from '@/app/staticData/data';
import { usePathname } from 'next/navigation';
import BlogCard from './BlogCard';

const BlogDetails = () => {
  const path = usePathname();
  const splitPath = path.split('/');
  const pageId = splitPath?.[splitPath.length - 1];

  const blog = blogs.filter((dis) => dis.id === pageId);
  const others = blogs.filter((dis) => dis.id !== pageId);
  const { id, image, title, description, user } = blog[0];

  return (
    <div className="flex flex-col lg:flex-row lg:px-20 pt-10">
      <div className="current lg:w-[60%]">
        <BlogCard
          id={id}
          image={image}
          username={user.username}
          title={title}
          description={description}
          showRead={false}
          showFullDesc={true}
        />
      </div>
      {/* This could be hidden on mobile screen, hear out the team on this. */}
      <div className="others overflow-y-auto max-h-[400px] lg:max-h-[900px] lg:w-[40%] lg:block">
        <h4 className="py-4 mx-6 px-4 border-2 font-semibold rounded-xl">
          Most Frequently Read
        </h4>
        {others
          .sort((a, b) => b.views - a.views)
          .map(({ id, image, title, description, user }) => (
            <div key={id} className="pt-10">
              <BlogCard
                id={id}
                image={image}
                username={user.username}
                title={title}
                description={description}
                showRead={true}
                showFullDesc={false}
              />
            </div>
          ))}
      </div>
    </div>
  );
};

export default BlogDetails;
