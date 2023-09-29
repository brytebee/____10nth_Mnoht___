import React from 'react';
import Image from 'next/image';
// import CourseData from './CourseData';

interface CourseDataItems {
  image: string;
  line: string;
  header: string;
  desc: string;
  id:any;
}

interface Props {
  
  items: CourseDataItems[];
}

const CourseCard: React.FC<Props> = ({ items }) => {
  return (
    <div>
      {items.map((item: any) => (
        <div
          key={item.id}
          className="md:w-[1296px]
md:h-[344px] bg-[#fff] md:rounded-[10px]
md:flex  md:gap-[70px] md:mb-[30px] md:px-[60px] md:py-[20px] items-center"
        >
          <ul className="p-0">
            <li>
              <Image src={item.img} height={300} width={300} alt="img" />
            </li>
          </ul>
          <ul className="p-0 flex flex-col gap-[10px]">
            <li className="md:w-[476px] font-serif md:text-[35px] font-normal leading-[120%]">
              {item.header}
            </li>
            <li>
              <Image
                src={item.underline}
                width={468.615}
                height={2}
                alt="img"
              />
            </li>
            <li className="md:w-[574px] md:h-[80px] md:text-[16px] font-sans font-normal leading-[120%]">
              {item.desc}
            </li>
          </ul>
          <ul className="p-0">
            <li>
              <button
                type="button"
                className="md:w-[135px] md:h-[40px] md:rounded-[10px] px-[24px] py-[10px] border border-[#A63F0E] text-[#A63F0E] font-sans font-normal leading-[120%]"
              >
                View course
              </button>
            </li>
          </ul>
        </div>
      ))}
    </div>
  );
};

export default CourseCard;
