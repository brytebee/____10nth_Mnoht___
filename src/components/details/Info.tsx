import { Course } from '@/app/staticData/data';
import Image from 'next/image';
import React from 'react';

type Props = {
  info: Course;
};

const Info = ({ info }: Props) => {
  const { image, name, description, eligibility, learnings, conclusion } = info;

  return (
    <div>
      <div className="flex justify-center items-center">
        <Image width={280} height={280} src={image} alt={`${name} image`} />
      </div>
      <h1 className="text-xl pt-[30px] font-bold md:hidden">
        {name.toUpperCase()}
      </h1>
      <p className="leading-7 pt-[10px]">{description}</p>
      <h3 className="pt-[28px] text-lg font-semibold">Program Eligibility</h3>
      <p className="leading-7 pt-[10px]">{eligibility}</p>
      <h3 className="pt-[28px] text-lg font-semibold">
        What you&apos;ll learn
      </h3>
      <p className="leading-7 pt-[10px]">{learnings.intro}</p>
      <ul className="pt-[18px] list-disc list-inside pl-1">
        {learnings.listings.split('. ').map((list) => (
          <li className="leading-7 pt-[2px] font-semibold" key={list}>
            {list}
          </li>
        ))}
      </ul>
      <p className="pt-[20px] leading-7">{conclusion}</p>
    </div>
  );
};

export default Info;
