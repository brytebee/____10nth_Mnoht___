import Link from "next/link";
import React from "react";

type Props = {};

const skills = [
  { id: 1, name: "Social Media Marketing" },
  { id: 2, name: "Android Development" },
  { id: 3, name: "Full Stack Developer" },
];

const page = (props: Props) => {
  return (
    <div>
      <h1>Digital Skills</h1>
      <ul>
        {skills.map((skill) => (
          <li key={skill.id}>
            <Link href={`/course/${skill.id}`}>
              <p className="bg-white text-black">{skill.name}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default page;
