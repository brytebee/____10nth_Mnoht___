import React from 'react';
import { blogs } from '@/app/staticData/data';
import BlogCard from './BlogCard';

const BlogPage = () => (
  <section className="text-center lg:px-24 py-5">
    <h2 className="text-left pl-8 mb-8 lg:mb-0 lg:pl-2 lg:text-[1.1rem] font-semibold leading-9 lg:leading-[41px] lg:w-4/12">
      Featured/Articles/Blog/News
    </h2>
    <section className="lg:grid lg:grid-cols-3 lg:gap-2">
      {blogs.map(({ id, image, title, description, user }) => (
        <div key={id}>
          <BlogCard
            id={id}
            image={image}
            username={user.username}
            title={title}
            description={description}
            showRead={true}
          />
        </div>
      ))}
    </section>
  </section>
);

export default BlogPage;
