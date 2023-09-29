import React from "react";
import Image from "next/image";
import line from "../../../public/svgs/Line-7.svg";
import polygon1 from "../../../public/svgs/Polygon-1.svg";
import polygon2 from "../../../public/svgs/Polygon-2.svg";
import polygon4 from "../../../public/svgs/Polygon-4.svg";
import polygon5 from "../../../public/svgs/Polygon-5.svg";
import polygon12 from "../../../public/svgs/Polygon-12.svg";
import Carousel from "./coursesCourasel/CoursesCourasel";

interface Props {
  // Add props here
}

const Courses: React.FC<Props> = (props) => {
  return (
    <div className="bg-[#F2F2F2] md: px-16 py-1">
      <Carousel />
      <div className="w-[100%] md:my-6 h-[300px] border-b-4">
        <div className="flex justify-between">
          <ul className="p-0 flex flex-col gap-[20px] ">
            <li className="md:w-[476px] font-serif md:text-[35px] font-normal leading-[120%]">
              Learning paths designed for you
            </li>
            <li>
              <Image src={line} width={468.615} height={2} alt="line" />
            </li>
            <li className="text-[#A63F0E] font-Poppins md:text-[20px] font-normal leading-[120%]">
              All the best courses, ready when you are
            </li>
          </ul>
          <ul> <Image
          src={polygon1}
          height={50}
          width={50}
          alt="polygon"
          className="absolute md:ml-[12px] mt-[-20px]"
          
        />
        <Image
          src={polygon2}
          height={50}
          width={50}
          alt="polygon"
          className="absolute md:ml-[12px] mt-[20px]"
        /></ul>
        </div>
        <ul className="border-b-2 border-[rgba(230, 192, 156, 0.50)] w-[100%] flex justify-center">
          <li
            className="mb-[-25px] w-[248px]
h-[60px] bg-[#F2F2F2] border-[rgba(230, 192, 156, 0.50)
] border-b-2 md:rounded-[30px] flex justify-center items-center md:text-[25px] font-serif font-semibold
"
          >
            Our Courses
          </li>
        </ul>
       
        <Image src={polygon4} height={80} width={80} alt="polygon" />
        <Image src={polygon5} height={100} width={100} alt="polygon" />
        <Image src={polygon12} height={150} width={150} alt="polygon" />
      </div>
    </div>
  );
};

export default Courses;
