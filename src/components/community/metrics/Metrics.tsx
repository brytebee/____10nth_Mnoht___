import React from 'react';

type Props = {
  course: number;
  student: number;
  instructor: number;
  certified: number;
};

const Metrics = ({ course, student, instructor, certified }: Props) => {
  return (
    <div className="flex justify-around py-[146px]">
      <div className="course text-center flex flex-col">
        <span className="text-2xl font-bold">Courses</span>
        <span className="text-3xl font-black pt-4">{course}+</span>
      </div>
      <div className="student text-center flex flex-col">
        <span className="text-2xl font-bold">Students enrolled</span>
        <span className="text-3xl font-black pt-4">{student}+</span>
      </div>
      <div className="instructor text-center flex flex-col">
        <span className="text-2xl font-bold">Instructors</span>
        <span className="text-3xl font-black pt-4">{instructor}+</span>
      </div>
      <div className="certified text-center flex flex-col">
        <span className="text-2xl font-bold">Certified students</span>
        <span className="text-3xl font-black pt-4">{certified}+</span>
      </div>
    </div>
  );
};

export default Metrics;
