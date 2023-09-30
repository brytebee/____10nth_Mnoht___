import Link from "next/link";
import React from "react";
import { courses } from "../staticData/data";

type Props = {};

const page = (props: Props) => {
  return (
    <div>
      <h1>Digital Skills</h1>
      <ul>
        {courses.map((skill, i) => (
          <li key={i}>
            <Link href={`/course/${i + 1}`}>
              <p className="bg-white text-black">{skill.name}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default page;
