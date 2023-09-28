"use client";

import React from "react";
import { useRouter } from "next/navigation";
import Back from "../../../../public/svgs/back-icon.svg";
import Image from "next/image";

interface Course {
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
    <div>
      <button onClick={handleClick}>
        <Image width={38} height={38} src={Back} alt="go back" />
      </button>
      {courses &&
        courses.map(
          ({ name, description, eligibility, learnings, conclusion }) => (
            <>
              <h1>{name.toUpperCase()}</h1>
              <p>{description}</p>
              <h3>Program Eligibility</h3>
              <p>{eligibility}</p>
              <h3>What you’ll learn</h3>
              <p>{learnings.intro}</p>
              <ul className="list">
                {learnings.listings.split(",").map((list) => (
                  <li key={list}>{list}</li>
                ))}
              </ul>
              <p>{conclusion}</p>
            </>
          )
        )}
      <button>Enroll now</button>
    </div>
  );
};

export default page;
