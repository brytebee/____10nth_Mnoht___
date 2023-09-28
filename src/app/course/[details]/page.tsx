"use client";

import React from "react";
import { useRouter } from "next/navigation";
import Back from "../../../../public/svgs/back-icon.svg";
import Image from "next/image";
import UIUX from "../../../../public/svgs/uiux.svg";

interface Course {
  image: String | StaticImport;
  name: String;
  description: String;
  eligibility: String;
  learnings: {
    intro: String;
    listings: String;
  };
  conclusion: String;
}

const page = () => {
  const router = useRouter();
  // Fetch the course details based on the id

  // const courseDetails = fetchCourseDetailsById(id);
  const courses: Course[] = [
    {
      image: UIUX,
      name: "UIUX DESIGN",
      description:
        "This course is designed for individuals who aspire to enter the creative and design industry as designers. It is tailored for those who wish to develop and present their creative ideas for software and computerized devices, addressing real-life interface design challenges in a simple and innovative manner. The course also focuses on acquiring practical expertise in industry-standard software such as Figma and Adobe XD, enabling participants to match the skills of other professionals in the field.",
      eligibility:
        "The course caters not only to beginners but also to experienced individuals seeking to enhance their skills and workflow.",
      learnings: {
        intro:
          "This course will provide a comprehensive understanding of design through a step-by-step approach, offering well-structured and simplified lessons that emphasize clarity and precision. It is enriched with a wide range of resources, materials, examples, and projects to support your learning journey. some of the topics we will cover are listed below",
        listings:
          "Introduction to UI/UX design ,User research ,Information architecture ,Introduction to figma interface ,Wireframing ,Prototyping ,Usability testing ,User interface design ,Ui design effects",
      },
      conclusion:
        "The aim of this course is to help you become more professional. It acknowledges that this journey requires perseverance and steadfastness, but with dedication, you will succeed. By enrolling in this course, you will not only gain valuable knowledge and skills but also receive resources that will continue to support your growth even beyond the course",
    },
  ];

  const handleClick = () => {
    router.back();
  };

  return (
    <div className="text-left px-[26px] pb-[62px]">
      <button className="p-0" onClick={handleClick}>
        <Image
          className="p-0"
          width={38}
          height={38}
          src={Back}
          alt="go back"
        />
      </button>
      {courses &&
        courses.map(
          ({
            image,
            name,
            description,
            eligibility,
            learnings,
            conclusion,
          }) => (
            <div>
              <div className="flex justify-center items-center">
                <Image
                  width={280}
                  height={280}
                  src={image}
                  alt={`${name} image`}
                />
              </div>
              <h1 className="text-xl pt-[30px] font-bold">
                {name.toUpperCase()}
              </h1>
              <p className="leading-7 pt-[10px]">{description}</p>
              <h3 className="pt-[28px] text-lg font-semibold">
                Program Eligibility
              </h3>
              <p className="leading-7 pt-[10px]">{eligibility}</p>
              <h3 className="pt-[28px] text-lg font-semibold">
                What you’ll learn
              </h3>
              <p className="leading-7 pt-[10px]">{learnings.intro}</p>
              <ul className="pt-[18px] list-disc list-inside pl-1">
                {learnings.listings.split(",").map((list) => (
                  <li className="leading-7 pt-[2px] font-semibold" key={list}>
                    {list}
                  </li>
                ))}
              </ul>
              <p className="pt-[20px] leading-7">{conclusion}</p>
            </div>
          )
        )}
      <div className="text-center pt-[52px]">
        <button className="w-[150px] py-[10px] px-[24px] justify-center text-center bg-[#D97508] text-white text-primary text-lg rounded-[10px]">
          Enroll now
        </button>
      </div>
    </div>
  );
};

export default page;
